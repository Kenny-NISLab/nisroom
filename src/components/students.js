import Student from "./student";

export default function Students({ data, windowSize }) {
  const studentsHsize = windowSize.height - (windowSize.headerHeight + windowSize.footerHeight);
  const studentsStyle = { height: studentsHsize + "px" };
  const studentHsize = windowSize.isSp ? 4 : 6;
  const studentHeight = studentsHsize / Math.ceil(data.length / studentHsize);

  const students = data.map((student) => <Student key={student.name} data={student} height={studentHeight} hostname={windowSize.hostname} />);

  return (
    <div style={studentsStyle}>
      <div className="grid grid-cols-4 md:grid-cols-6">{students}</div>
    </div>
  );
}
