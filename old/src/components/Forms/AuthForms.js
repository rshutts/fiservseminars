import React from 'react'

export function AuthForm({ children, title, error }) {
  return (
    <div className="container-login100 login-form">
      <div className="login-wrap wrap-login100 card shadow p-3 mb-5 bg-white rounded mr-opacity">
        <form className="card-body auth-forms100 auth-form">
          <div className="login-header">
            <h2>{title}</h2>
          </div>
          {error && (
            <p className="text-danger">
              {error.message ? error.message : error}
            </p>
          )}
          <div className="form-body">
            {children}
          </div>
        </form>
      </div>
    </div>
  )
}

export function Email({ handleUpdate, email, autoComplete }) {
  return (
      <div className="form-group">
        <div className="icons">
          <i class="far fa-envelope" style={{ fontSize: '1.75em' }} />
        </div>
        <input
          onChange={handleUpdate}
          name="email"
          type="email"
          value={email}
          className="form-control"
          autoComplete={autoComplete}
          id="enterEmailAddress"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
    </div>
    
  )
}

export function Password({ handleUpdate, password, autoComplete }) {
  return (
    <div className="form-group">
      <div className="icons">
        <i class="fas fa-lock" style={{ fontSize: '1.75em' }} />
      </div>
      <input
        onChange={handleUpdate}
        autoComplete={autoComplete}
        name="password"
        value={password}
        type="password"
        className="form-control"
        placeholder="Password"
        id="enterPassword"
      />
    </div>
  )
}

export function ConfirmationCode({ handleUpdate, auth_code, autoComplete }) {
  return (
    <div className="form-group">
      <label htmlFor="enterCode">Confirmation Code</label>
      <input
        onChange={handleUpdate}
        autoComplete={autoComplete}
        name="auth_code"
        value={auth_code}
        type="text"
        className="form-control"
        placeholder="######"
        id="enterCode"
      />
    </div>
  )
}
