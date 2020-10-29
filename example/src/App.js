import React from 'react'

import { ExampleComponent, LabelAndValue, TextField } from 'reactjs-element-ojnd'
import 'reactjs-element-ojnd/dist/index.css'

const App = () => {
  return <div>
    <ExampleComponent text="Created React Library Example 😄" />
    <TextField
      name="version_int"
      label={"Version"}
      defaultValue={""}
      // innerRef={register}
      // showError={renderShowError}
      type="number"
    />
    <LabelAndValue
      label="Thao TEST"
      value=":)"
    // className="_3YNCd"
    />
  </div>
}

export default App
