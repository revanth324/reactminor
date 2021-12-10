import React from 'react';
import mp4 from "./image/mp4.jpg"
import mp5 from "./image/mp5.jpg"
const Products=()=>{
    return(
    <>
    <h1> Courses</h1>
    <div class="container-fluid">
<div class="row">
<h1 class="col text-warning text-center "> B.TECH </h1>

</div>
<div class="row">
<div class="col-md-6">
<h3 class= "text-primary text-left"> MECHANICAL</h3>
</div>
</div>
<div class="row">
<div class="col-md-6">
<img src={mp4} alt='mec' width='300px'/>
</div>
<div class="col-md-6">
<p class="text-muted text-justify" > The department of mechanical engineering functions with the prime goal of imparting sound and proper mix of theory and practical courses in the fundamentals and recent technological developments of mechanical engineering and allied disciplines to the students so that the students, on completion of the course, get good opportunities in industries and higher education.
The other objectives of the department are: promotion of research and development activities, providing consultancy services to the Industries and Conducting continuing education programs.The department has highly qualified and experienced faculty members .The department regularly organizes technical workshops for the faculty members to expose them to emerging areas.The department has the state of the art facilities for various laboratories, classrooms to support e-learning.
</p>
</div>
</div>
<hr color="blue" width="600" height="20"/>
<div class="row">
<div class="col-md-6">
<h3 class= "text-primary text-left">Computer Science</h3>
</div>
</div>
<div class="row">
<div class="col-md-6">
<img src={mp5} alt='logo' width='300px'/>
</div>
<div class="col-md-6">
<p class="text-muted text-justify" > The Department of Computer Science and Engineering (CSE) was established in the year 2004 with the aim of providing inclusive technology education to students from all over India and the world and thereby creating responsible citizens who would contribute to the betterment of their families, society and nation.
The vision of CSE department is to emerge as a world class technology department through education, innovation and collaborative research.The department has progressed with a vision and a strong commitment to developing competent programmers with uncompromising standard of excellence in the training, both class room sessions and hands on sessions, given to students.
The department has well equipped computing laboratories and a rich repository of software covering a wide spectrum of applications.</p>
</div>
</div>
</div>

    </>)
}
export default Products;