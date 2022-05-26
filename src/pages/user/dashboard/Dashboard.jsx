import React, {useEffect, useState} from 'react';

import DashboardComponent from "./Dashboard.component";
import {getAllAcademicTermsApi, setCurrentAcademicTermApi} from "services/enrollment";

const Dashboard = () => {
  const [academicTerms, setAcademicTerms] = useState([])
  const [academicTerm, setAcademicTerm] = useState('')

  const setCurrentAcademicTerm = async (id) => {
    await setCurrentAcademicTermApi(id)

    alert('Academic term is set successfully.')
    setAcademicTerm(id)
  }

  const retrieveAcademicTerms = async (): void => {
    const result = await getAllAcademicTermsApi();
    setAcademicTerms(result.academic_terms);
    setAcademicTerm(result.current_academic_term)
  }

  useEffect(() => {
    retrieveAcademicTerms()
  }, [])

  return <DashboardComponent
    setCurrentAcademicTerm={setCurrentAcademicTerm}
    academicTerms={academicTerms}
    academicTerm={academicTerm} />;
}

export default Dashboard;
