import { FormEvent, useState } from 'react'

interface FormDataInterFace {
  username: string
  password: string
}

const initialFormData: FormDataInterFace = {
  username: '',
  password: '',
}

const LoginForm = () => {
  const [formData, setFormData] = useState<FormDataInterFace>(initialFormData)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(formData)
  }

  const handlerInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue })
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input type="text" className="form-control" name="username" placeholder="Username..." onChange={(e) => handlerInputChange('username', e.target.value)} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" name="password" placeholder="Password..." onChange={(e) => handlerInputChange('password', e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm