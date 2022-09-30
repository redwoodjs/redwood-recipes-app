import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCategoryById, UpdateCategoryInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormCategory = NonNullable<EditCategoryById['category']>

interface CategoryFormProps {
  category?: EditCategoryById['category']
  onSave: (data: UpdateCategoryInput, id?: FormCategory['id']) => void
  error: RWGqlError
  loading: boolean
}

const CategoryForm = (props: CategoryFormProps) => {
  const onSubmit = (data: FormCategory) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.category?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCategory> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.category?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>
        
          <TextField
            name="imageUrl"
            defaultValue={props.category?.imageUrl}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="imageUrl" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CategoryForm
