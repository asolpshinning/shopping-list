package postgres

import (
	"context"

	"github.com/sirupsen/logrus"

	logger "github.com/asolpshinning/shopping-list/backend/log"
)

func log(ctx context.Context) logrus.FieldLogger {
	return logger.Logger(ctx).WithField("package", "clients.db.pg")
}
