import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// components
import Nav from './components/Nav'
import Student from './components/Student'
import PageNav from './components/PageNav'
import AddStudent from './components/AddStudent'
import Toolbar from './components/Toolbar'
import EditStudent from './components/EditStudent';
import Loading from './components/Loading';

const url = "https://dm20.now.sh/students"

class App extends Component {

  constructor() {
    super()
    this.state = {
      students: [],
      index: 0,
      new: false,
      edit: false,
      inputs: []
    }
  }

  componentDidMount() {
    axios.get(url)
    .then(res => this.setState({ students: res.data }))
  }

  nextPage = () => {
    let { index } = this.state;

    if (index === this.state.students.length - 1)
      return

    index += 1;
    this.setState({ index })
  }

  previousPage = () => {
    let { index } = this.state;

    if (!index)
      return

    index -= 1;
    this.setState({ index })
  }

  delete = () => {
    if (this.state.students.length === 1)
      return

    axios.delete(url +`/${this.state.index}`)
    .then(res => {
      const { index } = this.state
      this.setState({ students: res.data, index: index >= res.data.length ? index - 1 : index })
    })
    .catch(err => console.log(`An error occured while deleting index=${this.state.index}`, err))
  }

  createNew = () => this.setState({ new: true })

  edit = () => this.setState({ edit: true, inputs: this.buildInput() })

  cancel = () => {
    this.setState({ new: false, edit: false })
  }

  updateInput = (index, val) => {
    let { inputs } = this.state;
    if (index >= inputs.length) {
      inputs.splice(index, 0, val)
    }
    else {
      inputs[index] = val;
    }

    this.setState({ inputs })
  }

  submit = () => {
    if (this.state.new) {
      const student = {
        name: this.getStudentInfo(0),
        from: this.getStudentInfo(1),
        funFact: this.getStudentInfo(2),
        cityOrCountry: this.getStudentInfo(3),
        indoorsOrOutdoors: this.getStudentInfo(4),
        travel: this.getStudentInfo(5),
        food: this.getStudentInfo(6),
        dogOrCat: this.getStudentInfo(7),
      }
      
      axios.post(url, student)
      .then(res => this.setState({ students: res.data, new: false, inputs: [] }))
      .catch(err => console.log(`An error occured while adding student=${student}`, err))
    }
    else if (this.state.edit) {
      const { students } = this.state
      const student = students[this.state.index]
      // assign new values
      student.name = this.getStudentInfo(0)
      student.from = this.getStudentInfo(1)
      student.funFact = this.getStudentInfo(2)
      student.cityOrCountry = this.getStudentInfo(3)
      student.indoorsOrOutdoors = this.getStudentInfo(4)
      student.travel = this.getStudentInfo(5)
      student.food = this.getStudentInfo(6)
      student.dogOrCat = this.getStudentInfo(7)

      axios.put(url +`/${this.state.index}`, student)
      .then(res => this.setState({ edit: false, inputs: [], students: [...this.state.students, res.data] }))
      .catch(err => console.log(`An error occured while editing student=${student}`, err))
    }
  }

  getStudentInfo = index => (index >= this.state.inputs.length || index < 0) ? null : this.state.inputs[index]

  buildInput = () => {
    const {students} = this.state
    const student = students[this.state.index]
    let inputs = [...new Array(8)]
    inputs[0] = student.name
    inputs[1] = student.from
    inputs[2] = student.funFact
    inputs[3] = student.cityOrCountry
    inputs[4] = student.indoorsOrOutdoors
    inputs[5] = student.travel
    inputs[6] = student.food
    inputs[7] = student.dogOrCat

    return inputs
  }

  render() {
    return (
      <>
        <Nav />

        {
          this.state.new ? 
            <AddStudent 
              updateInput={this.updateInput}
            />
          : this.state.edit ?
            <EditStudent 
              updateInput={this.updateInput}
              student={this.state.students[this.state.index]}
              buildInput={this.buildInput}
              inputs={this.state.inputs}
            />
          : this.state.students.length > 0 ?
            <Student 
            student={this.state.students[this.state.index]}
            currentPage={this.state.index + 1}
            totalPages={this.state.students.length}
            />
          :
            <Loading />
        }

        {
          !this.state.new && !this.state.edit ? 
            <PageNav 
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            delete={this.delete}
            createNew={this.createNew}
            edit={this.edit}
            />
          :
            <Toolbar
              cancel={this.cancel}
              submit={this.submit}
            />
        }
      </>
    );
  }
}

export default App;
