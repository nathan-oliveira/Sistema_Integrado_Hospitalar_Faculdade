const URL_API = "http://localhost:3333"

export function POST_LOGIN(formData) {
  return {
    url: `${URL_API}/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
  }
}

export function POST_USER(formData) {
  return {
    url: `${URL_API}/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
  }
}

export function GET_PROFILE(token) {
  return {
    url: `${URL_API}/profile`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  }
}

export function GET_USERS(token) {
  return {
    url: `${URL_API}/users`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  }
}

export function GET_ALLUSERS(id, token) {
  return {
    url: `${URL_API}/usersAll/${id}`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  }
}

export function PATCH_PASSWORD(token, formData) {
  return {
    url: `${URL_API}/password`,
    options: {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
  }
}

export function VALIDAR_TOKEN(token) {
  return {
    url: `${URL_API}/validateToken`,
    options: {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export function GET_DOCTORS(token) {
  return {
    url: `${URL_API}/historicomedico`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  }
}

export function GET_VACCINES(token) {
  return {
    url: `${URL_API}/historicovacina`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  }
}

export function GET_PHYSICS(token) {
  return {
    url: `${URL_API}/condicoesfisicas`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  }
}
