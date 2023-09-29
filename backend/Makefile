GO = golang:1.20 go
LNXOS = alpine:3.7
BINARY = ./bin/service
MAIN = ./main.go
DB_NET = db-net
DOCKER = docker run --rm -v $(shell pwd):/svc -w /svc
OS ?=

## display help message
.PHONY: help
help:
	@echo ''
	@echo 'Management Commands for Shopping List Go Service:'
	@echo
	@echo 'Usage:'
	@echo '  ## Develop / Test Commands ##'
	@echo '  clean              Run clean up.'
	@echo '  fmt                Run code formatter.'
	@echo '  check              Run static code analysis (lint).'
	@echo '  test               Run tests.'
	@echo '  deps               Run all dependencies that are needed.'
	@echo '  generate-api       Generating API layer Boilerplate Code'
	@echo ''

## Clean up
.PHONY: clean
clean:
	@echo '==> Cleaning...'
	${DOCKER} ${LNXOS} rm -f coverage.out report.json function.zip
	${DOCKER} ${LNXOS} rm -Rf vendor
	${DOCKER} ${LNXOS} rm -f ${BINARY}

## Install all dependencies that are needed
.PHONY: deps
deps:
	@echo '==> Getting Dependencies...'
	${DOCKER} ${GO} mod tidy
	${DOCKER} ${GO} mod download

## Run test cases
.PHONY: test
test:
	@echo '==> Testing...'
	${DOCKER} --network ${DB_NET} ${GO} test -covermode=atomic -count=1 ./... -coverprofile coverage.out
	${DOCKER} --network ${DB_NET} ${GO} test -covermode=atomic -count=1 ./... -json
	${DOCKER} --network ${DB_NET} ${GO} tool cover -func=coverage.out

## Run code formatter
.PHONY: fmt
fmt:
	@echo '==> Code formatting...'
	${DOCKER} cytopia/goimports:latest-release-0.2 -l -w .

## Run static code analysis (lint)
.PHONY: check
check: fmt
	@echo '==> Code check...'
	${DOCKER} golangci/golangci-lint:v1.27.0 golangci-lint run -v -c .golangci.yml
	@$(MAKE) check-api

.PHONY: check-api
check-api:


## generate api
.PHONY: generate-api
generate-api:
	@echo "==> Generate API(s)"
	@if [ -d api/handlers ]; then \
  		echo "==> handlers directory exist" ; \
	else \
	  	echo "==> creating handlers directory" ; \
  		${DOCKER} ${LNXOS} mkdir api/handlers ; \
	fi
	${DOCKER} openapitools/openapi-generator-cli generate \
		-i api.yaml \
		-g go-server \
		-t templates \
		--additional-properties=featureCORS=true \
		-o api/gen
	${DOCKER} ${LNXOS} rm -rf api/gen/api api/gen/.openapi-generator
	-${DOCKER} ${LNXOS} mv api/gen/go/*_service.go api/handlers
	${DOCKER} ${LNXOS} mv api/gen/go/* api/gen
	${DOCKER} ${LNXOS} rm -rf api/gen/go
	@${MAKE} import-package-update
	@${MAKE} fmt

## update imports and package names
.PHONY: import-package-update
import-package-update:
	@echo "==> updating imports and package names"
	@for f in $(shell ls api/handlers); do \
  		if ! grep -q "$${f}" api/gen/.openapi-generator-ignore; then \
			${DOCKER} ${LNXOS} sed -i 's/package openapi/package handlers/' api/handlers/$${f} ; \
			${DOCKER} ${LNXOS} echo 'go/'$${f} >> api/gen/.openapi-generator-ignore ; \
			${DOCKER} ${LNXOS} sed -i 's/package openapi/package handlers/' api/handlers/$${f} ; \
			${DOCKER} ${LNXOS} sed -i 's~import (~import (. "github.com/asolpshinning/shopping-list/backend/api/gen"~' api/handlers/$${f} ; \
		fi \
	done

# PostgreSQL container settings
PG_CONTAINER_NAME := test-db
PG_IMAGE := postgres:latest
PG_PORT := 5432
PG_USER := testuser
PG_PASSWORD := testpassword
PG_DB := testdb
INIT_PG_SCRIPT_PATH := ./clients/db/pg/init.sql

# New targets for PostgreSQL (testDB) Docker container
db-up:
	docker run --name $(PG_CONTAINER_NAME) \
		-e POSTGRES_USER=$(PG_USER) \
		-e POSTGRES_PASSWORD=$(PG_PASSWORD) \
		-e POSTGRES_DB=$(PG_DB) \
		-p $(PG_PORT):$(PG_PORT) \
		-v $(INIT_PG_SCRIPT_PATH):/docker-entrypoint-initdb.d/init.sql \
		-d $(PG_IMAGE)

db-down:
	docker stop $(PG_CONTAINER_NAME)
	docker rm $(PG_CONTAINER_NAME)

db-logs:
	docker logs -f $(PG_CONTAINER_NAME)

db-query:
	@read -p "Enter SQL query: " query; \
	docker exec -it $(PG_CONTAINER_NAME) psql -U $(PG_USER) -d $(PG_DB) -c "$$query"

.PHONY: db-up db-down db-logs db-query
