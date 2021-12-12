import { Button, Container, Grid, TextField } from "@material-ui/core"
import { BaseSyntheticEvent, VFC } from "react"
import { Controller, useForm } from "react-hook-form"

interface Props {
  text: string
  doEcho: (value: string) => unknown
}

export const EchoPresenter: VFC<Props> = props => {
  const textBoxName = "textBox"
  const { control, handleSubmit } = useForm({ defaultValues: { [textBoxName]: "" } })
  const onSubmit = handleSubmit(e => {
    const value = e[textBoxName] || ''
    props.doEcho(value);
  });

  return (
    <Container>
      <Grid container>
        <form onSubmit={onSubmit}>
          <Controller
            control={control}
            name={textBoxName}
            render={({ field }) => (
              <TextField
                {...field}
                label="テキスト"
                fullWidth
                margin="normal"
                placeholder="テキストを入力してください"
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Grid>
      <Grid>
        <div>Echo Reslt: {props.text}</div>
      </Grid>
    </Container>
  )
}
