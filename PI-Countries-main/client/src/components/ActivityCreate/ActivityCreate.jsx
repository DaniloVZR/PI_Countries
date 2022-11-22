import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postActivities, getActivities } from "../../redux/actions";
import { WINTER, SUMMER, AUTUM, SPRING } from "../../const/Const";
import NavBar from "../NavBar/NavBar.jsx";
import "./ActivityCreate.css";

function validate (input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'You must fill this field above';
  } else if (!input.duration) {
    errors.duration = 'You must fill this field';
  } else if (!input.difficulty) {
    errors.difficulty = 'You must choose the difficulty';
  } else if (!input.season) {
    errors.difficulty = 'You must choose the season';
  } else if (!input.countryId === []) {
    errors.countryId = 'You must select a country'
  }
  return errors;
}

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    duration: '',
    difficulty: '',
    season: '',
    countryId: [],
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value
      })
    );
  };

  function handleDelete(i) {
    setInput({
      ...input,
      countryId: input.countryId.filter((el => el !== i))
    })
  };

  function handleSelect(e) {
    setInput({ 
      ...input,
      countryId: [...input.countryId, e.target.value]
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name === '' || input.duration === '' || input.difficulty === '' || input.season === '' || input.countryId.length === 0)
    return alert('You must complete the fields');
    dispatch(postActivities(input));
    alert('Activity Created');
    setInput({
      name: '',
      duration: '',
      difficulty: '',
      season: '',
      countryId: []
    })
    history.push('/home')
  };

  return (
    <div className="Activity__Container">
      <div>
        <NavBar/>
      </div>

      <div className='Activity__Box'>        
        <form className="Activity__Form" onSubmit={handleSubmit}>
          <h3 className="Form__Title">Crea una Actividad</h3>
          <div className="Form__Input">
            <label className="LabelActivity">Activity</label>
            <input
              className="Form__Field"
              type='text'
              placeholder="Write an activity"
              value={input.name}
              name='name'
              onChange={handleChange}
              />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
          <div className="Form__Input">
            <label> Duration </label>
            <input
              className="Form__Field"
              type='text'
              value={input.duration}
              name='duration'
              placeholder="Write an activity"
              onChange={handleChange}
            />
          </div>
          {errors.duration && <p className="error">{errors.duration}</p>}
          <div className="Form__Input">
            <label> Difficulty </label>
            <input
              className="Form__Range"
              type='range'
              name='difficulty'
              min='1'
              max='5'
              value={input.difficulty}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.difficulty && <p className="error">{errors.difficulty}</p>}
          <div className="Form__Input">
            <select
              className="Form__Select"
              name="season"
              value={input.season}
              onChange={(e) => handleChange(e)}
            >
              <option className="op" disabled selected>Season</option>
              <option className="op" value={WINTER}>Winter</option>
              <option className="op" value={SUMMER}>Summer</option>
              <option className="op" value={AUTUM}>Autum</option>
              <option className="op" value={SPRING}>Spring</option>
            </select>
            {errors.season && <p className="error">{errors.season}</p>}
          </div>
          {errors.countryId && <p className="error">{errors.countryId}</p>}

          <div className="Form__Input">
            <select className="Form__Select" onChange={(e) => handleSelect(e)}>
              <option className="op"> Countries </option>
                {countries.map((v) => (
                  <option className="op" value={v.id}>{v.name}</option>
                ))}
            </select>
          </div>

          <div className="textArea">
            {input.countryId.map((country) => (
              <div className="countrieAndButton">
                <input className="btnDelete" type='button' value='X' onClick={() => handleDelete(country)}/>
                <p className="pOfCountry">{country}</p>
              </div>
            ))}
          </div>
          <div>
            <button className="Form__Button" type='submit'>Create Activity</button>
          </div>
        </form>
      </div>
    </div>
  )
}