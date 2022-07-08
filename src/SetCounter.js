import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './action';

export const SetCounter = () => {
  // const count = useSelector((state) => state.value);
  const { count } = useSelector((state) => {
    return { count: state.value };
  });
  // console.log(count);
  const dispatch = useDispatch();

  const renderCounter = useRef({ count: 0 });
  console.log('ref', renderCounter.current.count++);
  console.log('render');

  // useEffect(() => {
  //   console.log('effect');
  //   setCount(storeCount);
  // }, [storeCount]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => {
            // setCount(e.target.value);
            dispatch(set(e.target.value));
          }}
        />
        <input type="submit" />

        <button onClick={() => dispatch({ type: 1, payload: 'nothing' })} />
        <button onClick={() => dispatch({ type: 1, payload: 'something' })} />
      </form>
    </section>
  );
};
