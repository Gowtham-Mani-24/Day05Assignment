const resume = {
    "basicDetails":{
        "name":"Gowtham",
        "email":"gowtham@gmail.com",
        "phone":123456789,
        "location":"Coimbatore"
    },
    "work":{
        "companyName":"GAVS",
        "position":"Jr Developer",
        "startDate":"06-09-2021",
        "endDate":"",
        "location":"Chennai"
    },
    "education":{
        "degree":"MCA",
        "college":"KCT",
        "yearOfPassing":2017
    },
    "skills":{
        "language":"javascript",
        "level":"intermediate"
    }
}

//iterate using for in loop
for (const key in resume){
    if(key == "work"){
    console.log(resume[key]);
    }
  }

  //iterate through for of loop
  for (const [key, value] of Object.entries(resume)) {
    if (key === "work") {
      console.log(value); 
    }
  }

  // iterate through for each loop
  Object.entries(resume.work).forEach(([key,value]) => {
    console.log(`${key}: ${value}`);
  });

  //iterate through for loop

  const details = Object.entries(resume.work);

  for(var i=0;i<details.length;i++){
    const [key, value] = details[i];
    console.log(`${key}: ${value}`);
  }

  