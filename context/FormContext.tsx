import { createContext, useContext, useState } from 'react';

type FormDataState = {
  firstName?: string,
  middleName?: string,
  lastName?: string,
  referralCode?: string,
  email?: string,
  phone?: string,
  password?: string,
  confirmPassword?: string,
  country?: string,
  stateOfOrigin?: string,
  stateOfResidence?: string,
  address?: string
}

type ContextValue = [FormDataState, (data: object) => void]

const FormContext = createContext<ContextValue>([{}, () => {}]);

export default function FormContextProvider({ children }:{children: React.ReactNode}) {
  const [formData, setFormData] = useState<FormDataState>({
    firstName: '', middleName: '', lastName: '', referralCode: '',
    email: '', phone: '', password: '', confirmPassword: '',
    country: '', stateOfOrigin: '', stateOfResidence: '', address: ''
  });

  const updateFormData = (data: object) => {
    setFormData({...formData, ...data})
  }

  return (
    <FormContext.Provider value={[formData, updateFormData]}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext);