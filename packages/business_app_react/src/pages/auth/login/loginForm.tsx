import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SimpleButton from "../../../components/ui/Buttons/SimpleButton";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../../redux/slices/userSlice/userSlice";
import { TextField } from "@mui/material";

interface FormData {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().required().min(8).max(32),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmitHandler = (data: FormData) => {
    console.log({ data });
    dispatch(
      loggedIn({ email: data.username, firstName: "Chetan", lastName: "Koranga" })
    );
    reset();
  };

  return (
    <div className="flex justify-center bg-slate-300">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>Lets sign you in.</h2>
        <br />
        <div>
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, ...rest } }) => (
              <TextField
                {...rest}
                error={!!errors.username}
                helperText={errors.username?.message}
                id="username"
                placeholder="Username"
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                label="Username"
                variant="outlined"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, ...rest } }) => (
              <TextField
                {...rest}
                error={!!errors.password}
                helperText={errors.password?.message}
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                label="Password"
                variant="outlined"
              />
            )}
          />
        </div>
        <SimpleButton>Login</SimpleButton>
      </form>
    </div>
  );
};

export default Login;