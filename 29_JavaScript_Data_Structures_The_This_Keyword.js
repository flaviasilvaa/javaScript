let classroom = {
    numOfStudents: 0,
    schoolHours: false,
    playtime: false,
    
    openSchool: function() {
        this.schoolHours = true;
        this.numOfStudents = 20;
    },
     breakTime: function() {
         if(this.schoolHours){
         this.playtime = true;
         }   
         
     }
};
classroom.openSchool();
console.log(classroom.numOfStudents);
classroom.breakTime();
console.log(classroom.playTime);
