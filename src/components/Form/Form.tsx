import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Inputs } from "./types";
import { useAppDispatch } from "../../hooks/useRedux";
import { addUser } from "../../store/users/thunk";

const schema = yup.object().shape({
  name: yup.string().required().min(3).max(25),
  email: yup.string().required().email().min(3).max(25).lowercase(),
  username: yup.string().required().min(3).max(14),
  password: yup.string().required().min(5).max(15),
  keyword: yup.string().required().min(3).max(8),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    dispatch(addUser(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__title">Add user</div>

        <div className="form__wrapper">
          <div className="form__inputErr">
            {" "}
            <input
              placeholder="Name"
              className="form__field"
              {...register("name")}
            />
            <div className="form__error">
              {errors?.name && <p>{errors?.name?.message || "Error"}</p>}
            </div>
          </div>

          <div className="form__inputErr">
            <input
              placeholder="E-mail"
              className="form__field"
              {...register("email")}
            />
            <div className="form__error">
              {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
            </div>
          </div>
        </div>

        <div className="form__wrapper">
          <div className="form__inputErr">
            <input
              placeholder="Username"
              className="form__field"
              {...register("username")}
            />
            <div className="form__error">
              {errors?.username && (
                <p>{errors?.username?.message || "Error"}</p>
              )}
            </div>
          </div>
          <div className="form__inputErr">
            <input
              placeholder="Password"
              type={"password"}
              className="form__field"
              {...register("password")}
            />
            <div className="form__error">
              {errors?.password && (
                <p>{errors?.password?.message || "Error"}</p>
              )}
            </div>
          </div>
        </div>

        <input
          placeholder="Keyword"
          className="form__field"
          {...register("keyword")}
        />
        <div className="form__error">
          {errors?.keyword && <p>{errors?.keyword?.message || "Error"}</p>}
        </div>

        <input className="form__submitBtn" value={"Send"} type="submit" />
      </form>
    </>
  );
};

export default Form;
