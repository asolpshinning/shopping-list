package postgres

import (
	"context"
	"database/sql"
	"errors"

	pg "github.com/upper/db/v4"
	"github.com/upper/db/v4/adapter/postgresql"

	"github.com/asolpshinning/shopping-list/backend/clients/db"
	"github.com/asolpshinning/shopping-list/backend/config"
)

func init() {
	db.Register(config.DB, NewClient)
}

type client struct {
	client *pg.Session
}

var opts = map[string]string{
	"Host":     config.DB_HOST,
	"User":     config.DB_USER,
	"Password": config.DB_PASSWORD,
	"Database": config.DB,
}

type ContextKey string

var database ContextKey = "db"
var ctx = context.WithValue(context.Background(), database, "pg")

func NewClientSession() (pg.Session, error) {
	var Settings = postgresql.ConnectionURL{
		Database: opts["Database"],
		Host:     opts["Host"],
		User:     opts["User"],
		Password: opts["Password"],
	}
	if opts["Host"] == "" {
		log(ctx).Errorf("postgres connection 'Host' not provided")
		return nil, errors.New("postgres connection 'Host' not provided")
	}
	if opts["User"] == "" {
		log(ctx).Errorf("postgres connection 'User' not provided")
		return nil, errors.New("postgres connection 'User' not provided")
	}
	if opts["Password"] == "" {
		log(ctx).Errorf("postgres connection 'Password' not provided")
		return nil, errors.New("postgres connection 'Password' not provided")
	}
	if opts["Database"] == "" {
		log(ctx).Errorf("postgres connection 'Database' not provided")
		return nil, errors.New("postgres connection 'Database' not provided")
	}
	log(ctx).Infof("Connecting to postgres database: %v", opts["Database"])

	sess, err := pg.Open("postgresql", Settings)
	if err != nil {
		log(ctx).Errorf("Failed to connect to database: %v", err)
		return nil, errors.New("failed to connect to database")
	}
	return sess, nil
}

func NewClient(opts map[string]string) (db.Datastore, error) {
	sess, err := NewClientSession()
	if err != nil {
		return nil, err
	}
	defer sess.Close()
	log(ctx).Infof("Connected to the database")
	return &client{client: &sess}, nil
}

// This function queries postgres database and returns the result
func QueryPgDB(sqlCommand string, args ...interface{}) (*sql.Rows, error) {
	sess, err := NewClientSession()
	if err != nil {
		log(ctx).Errorf("problem starting db session3: %v", err)
		return nil, err
	}
	defer sess.Close()
	stmt, err := sess.SQL().Prepare(sqlCommand)
	if err != nil {
		log(ctx).Errorf("issue preparing pg query: %v", err)
		return nil, err
	}
	defer stmt.Close()
	result, err := stmt.Query(args...)
	if err != nil {
		log(ctx).Errorf("issue executing pg query: %v", err)
		return nil, err
	}
	return result, nil
}

// This function executes a command (INSERT, UPDATE, DELETE etc..) on postgres database
func ExecPgDBCommand(sqlCommand string, args ...interface{}) error {
	sess, err := NewClientSession()
	if err != nil {
		log(ctx).Errorf("problem starting db session3: %v", err)
		return err
	}
	defer sess.Close()
	stmt, err := sess.SQL().Prepare(sqlCommand)
	if err != nil {
		log(ctx).Errorf("issue preparing pg command: %v", err)
		return err
	}
	defer stmt.Close()
	res, err := stmt.Exec(args...)
	if err != nil {
		log(ctx).Errorf("issue executing pg command: %v", err)
		return err
	}
	_, err = res.RowsAffected()
	if err != nil {
		return err
	}
	return nil
}
