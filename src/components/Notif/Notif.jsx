import React, { useState } from 'react'
import { Toast, Button  } from 'react-bootstrap'
export default function ToastComponent() {
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
          <strong className="mr-auto">Carrito de compras</strong>
        </Toast.Header>
        <Toast.Body>Rollers Powerslide Metropolis 80mm.</Toast.Body>
        <Toast.Body>Rollers Seba FRX1 110mm.</Toast.Body>
        <Toast.Body>Rollers Powerslide Hardcore 90mm.</Toast.Body>
      </Toast>
      <Button  onClick={() => setToast(true)}>Cart</Button >
    </div>
  )
}