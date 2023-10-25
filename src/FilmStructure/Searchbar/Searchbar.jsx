import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Searchbar.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ChangeMediaType } from "../../redux/slices/MediaType";
import { useDispatch, useSelector } from "react-redux";
const Searchbar = () => {
  const dispatch = useDispatch();

  const MediaTypeGlobalState = useSelector(
    (globalState) => globalState.MediaTypeReducer.MediaType
  );
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const burgerIcon = <FontAwesomeIcon icon={faFilter} />;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(ChangeMediaType(event.target.value));
  };
  return (
    <>
      <div>MediaTypeGlobalState is : {MediaTypeGlobalState}</div>

      <div style={{ backgroundColor: "white" }} className="p-3">
        <div className="container">
          <div className="row align-items-center  justify-content-between ">
            <div className="col-md-6">
              <span className="me-2">{searchIcon}</span>
              <span>Find Movies TV Shows Documentaries And More ...</span>
            </div>
            <div className=" d-flex align-items-center col-md-6 burgerHolder">
              <span className="burger">{burgerIcon}</span>

              <Box className="box" sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Media Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={MediaTypeGlobalState}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="ALL">ALL</MenuItem>
                    <MenuItem value="Movie">Movie</MenuItem>
                    <MenuItem value="TV">TV</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Searchbar;
