// Dashboard.jsx
import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  // Dados fictícios de desempenho de alunos
  const studentData = [
    { nome: 'João', nota: 90 },
    { nome: 'Maria', nota: 85 },
    { nome: 'Pedro', nota: 78 },
    { nome: 'Ana', nota: 95 },
    { nome: 'Carlos', nota: 88 },
    // Adicione mais alunos conforme necessário
  ];

  // Extrair nomes e notas para criação do gráfico
  const studentNames = studentData.map((student) => student.nome);
  const studentGrades = studentData.map((student) => student.nota);

  // Dados para o gráfico de barras
  const chartData = {
    labels: studentNames,
    datasets: [
      {
        label: 'Desempenho dos Alunos',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: studentGrades,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard da Turma</h1>
      <div className="chart-container">
        <div className="chart">
          {/* Usando o elemento canvas para o gráfico */}
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
      </div>
      <div className="student-list">
        {studentData.map((student, index) => (
          <div key={index} className="student-card">
            <h2 className="student-name">{student.nome}</h2>
            <p className="student-grade">Nota: {student.nota}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
