import { FormStyle,GlobalButtonStyle, GlobalSelectStyle } from "../styled-components/layout.styled.component"

const FormTask = ({ handleSubmit, questTask, setQuestTask }) => {
  return (
    <div className="formContainer">
      <FormStyle action="" onSubmit={handleSubmit}>
        <input type="text"
          value={questTask}
          onChange={(e) => setQuestTask(e.target.value)}
        />
        <GlobalButtonStyle type="submit">Send</GlobalButtonStyle>
        <GlobalSelectStyle name="type_input" id="type_input">
          <option value="M">MainQuest</option>
          <option value="S">SideQuest</option>
        </GlobalSelectStyle>
      </FormStyle>
    </div>
  )
}

export default FormTask