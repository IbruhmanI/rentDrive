import React from 'react'
import InvestorsTitle from './InvestorsTitle'
import InvestorsSlider from './InvestorsSlider'
import InvestorsFaq from './InvestorsFaq'
import InvestorsInfo from './InvestorsInfo'
import InvestorsGain from './InvestorsGain'
import InvestorsForm from './InvestorsForm'

const Investors = () => {
  return (
    <>
      <InvestorsTitle/>
      <InvestorsSlider/>
      <InvestorsForm/>
      <InvestorsGain/>
      <InvestorsFaq/>
      <InvestorsInfo/>
    </>
  )
}

export default Investors
