import React from 'react'
import "./test.less"
import "./test2.css"
import buyImg from "@/assets/img/empty.png"
import someImg from "@/assets/img/pic_noData.png"

export default class Home extends React.Component {
  render(){
    return (
      <div className="test test2">
      <p>hello world</p>
    <img src={buyImg} alt="qq" />

    <img src={someImg} alt="222" />
    </div>
  )
  }
}