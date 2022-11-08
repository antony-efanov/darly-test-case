import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useEffect } from "react";
import { addUser, getUsers } from "../../store/users/thunk";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { Form } from "../../components/Form";

const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { users } = useAppSelector((state) => state.users);

  const Row = ({ style, index }: any) => {
    const user = users[index];
    return (
      <div className="row" style={style}>
        <div className="row__item id">{user.id}</div>
        <div className="row__item">{user.name}</div>
        <div className="row__item">{user.email}</div>
        <div className="row__item">{user.username}</div>
        <div className="row__item">{user.password}</div>
        <div className="row__item">{user.keyword}</div>
      </div>
    );
  };

  return (
    <>
      <div className="table">
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={users.length}
              itemSize={35}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
      <Form />
    </>
  );
};

export default Main;
