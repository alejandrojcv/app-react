import React, { useState } from 'react'
import { Toast, Button  } from 'react-bootstrap'
export default function ToastComponent(props) {
  const { label } = props;
  const [showToast, setToast] = useState(false)
  return (
    <div>
      <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={2200}
      >
        <Toast.Header>
          <strong className="mr-auto">Detalle de producto</strong>
        </Toast.Header>
        <Toast.Body>{label}</Toast.Body>
      </Toast>
      <Button  onClick={() => setToast(true)}>Detail</Button >
    </div>
  )
}


