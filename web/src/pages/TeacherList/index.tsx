import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {

  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {

    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    // console.log({ subject, week_day, time});
    // console.log(response.data);

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers" onSubmit={searchTeachers} >
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value); }}
            options={[
              { value: 'Node.js', label: 'Node.js' },
              { value: 'React.js', label: 'React.js' },
              { value: 'Next.js', label: 'Next.js' },
              { value: 'HTML', label: 'HTML' },
              { value: 'CSS', label: 'CSS' },
              { value: 'Javascript', label: 'Javascript' },
              { value: 'PHP', label: 'PHP' },
              { value: 'Banco de dados', label: 'Banco de dados' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da Semana"
            value={week_day}
            onChange={e => { setWeekDay(e.target.value); }}
            options={[
              { value: '0', label: 'Segunda-feira' },
              { value: '1', label: 'Terça-feira' },
              { value: '2', label: 'Quarta-feira' },
              { value: '3', label: 'Quinta-feira' },
              { value: '4', label: 'Sexta-feira' },
              { value: '5', label: 'Sábado' },
              { value: '6', label: 'Domingo' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => { setTime(e.target.value); }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;