import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <Box mt="5px" mb="15px">
        <input
          name="filter"
          type="text"
          onChange={e => {
            dispatch(setFilter(e.target.value));
          }}
        />
      </Box>
    </>
  );
};
