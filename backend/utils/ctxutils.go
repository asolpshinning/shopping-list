package utils

import (
	"context"

	"github.com/go-openapi/strfmt"
)

type ctxKeyType int

const (
	principalKey ctxKeyType = iota
	tokenKey
	requestIDKey
)

// WithPrincipal adds the provided principal to the context and returns the updated context
func WithPrincipal(ctx context.Context, principal string) context.Context {
	return context.WithValue(ctx, principalKey, principal)
}

// Principal retrieves the principal from the current context and returns the value
func Principal(ctx context.Context) string {
	if v := ctx.Value(principalKey); v != nil {
		return v.(string)
	}
	return ""
}

// WithToken adds the provided token to the context and returns the updated context
func WithToken(ctx context.Context, token string) context.Context {
	return context.WithValue(ctx, tokenKey, token)
}

// Token retrieves the token from the current context and returns the value
func Token(ctx context.Context) string {
	if v := ctx.Value(tokenKey); v != nil {
		return v.(string)
	}
	return ""
}

// WithRequestID adds the provided request ID to the context and returns the updated context
func WithRequestID(ctx context.Context, requestID strfmt.UUID) context.Context {
	return context.WithValue(ctx, requestIDKey, requestID)
}

// RequestID retrieves the request ID from the current context and returns the value
func RequestID(ctx context.Context) strfmt.UUID {
	if v := ctx.Value(requestIDKey); v != nil {
		return v.(strfmt.UUID)
	}
	return strfmt.UUID("")
}
