import React, { Component } from 'react';
import './App.css';
import students from './students'
import Nav from './components/Nav'
import Student from './components/Student'
import PageNav from './components/PageNav'
import AddStudent from './components/AddStudent'
import Toolbar from './components/Toolbar'
import EditStudent from './components/EditStudent';

class App extends Component {

  constructor() {
    super()
    this.state = {
      index: 0,
      new: false,
      edit: false,
      inputs: []
    }
  }

  nextPage = () => {
    let { index } = this.state;

    if (index === students.length - 1)
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
    if (students.length === 1)
      return

    let { index } = this.state;
    students.splice(this.state.index, 1)

    if (index >= students.length)
      index = students.length - 1;

    this.setState({ index })
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

      students.push(student)
      this.setState({ new: false, inputs: [] })
    }
    else if (this.state.edit) {
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

      this.setState({ edit: false, inputs: [] })
    }
  }

  getStudentInfo = index => (index >= this.state.inputs.length || index < 0) ? null : this.state.inputs[index]

  buildInput = () => {
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
              student={students[this.state.index]}
              buildInput={this.buildInput}
              inputs={this.state.inputs}
            />
          :
            <Student 
            student={students[this.state.index]}
            currentPage={this.state.index + 1}
            totalPages={students.length}
            />
            
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
