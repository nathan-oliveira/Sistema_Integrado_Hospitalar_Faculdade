import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.title = `${props.title} | Sistema Hospitalar v1`
    document.querySelector("meta[name='description']").setAttribute('content', props.description || 'Sistema Integrador Hospitalar')
  }, [props])

  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export default Head;