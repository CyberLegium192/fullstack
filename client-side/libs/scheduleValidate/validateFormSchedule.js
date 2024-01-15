import {postScheduleEvent, postScheduleMember, updateScheduleEvent, updateScheduleMember} from "../schedule.js"



// POST DATA VALIDATION FORM
export const postValidate = (values) => {
  let isValid = true;
  if(!values.setlist){
    alert("setlist blum di tambahkan")
    isValid = false
    return
  } else if (!values.title){
    alert('title tidak boleh kosong')
    isValid = false
    return
  } else if(!values.date){
    alert("date tidak boleh kosong")
    isValid = false
    return
  } else if(!values.time){
    alert("time tidak boleh kosong")
    isValid = false
    return
  } else if(!values.link){
    alert("link tidak boleh kosong")
    isValid = false
    return
  }
  
  // VALIDATE IF SETLIST IS'N EVENT 
  if(values.setlist !== 'event.jpg'){
    // MEMBER PERFORM VALIDATE
    if (!values.memberPerform) {
      alert('isi member perform');
      return;
  }
    const member = values.memberPerform;
    member.forEach((val, i) => {
      if (val.member == '') {
        alert('input tidak boleh kosong', i);
        isValid = false;
        return; 
      }
  });
  }
  
  
  if (isValid) {
    const confirmSubmit = confirm('lanjut untuk post?')
    if(confirmSubmit){
      if(values.setlist == "event.jpg"){
        postScheduleEvent(values)
       .then(resp => {
         setTimeout(function () { location.href = '/schedule' }, 700);
         return
        })
      } else{
        postScheduleMember(values)
        .then(resp => {
          setTimeout(function () { location.href = '/schedule' }, 700);
        })
      }
    }
  }
}

// UPDATE DATA VALIDATION FORM
export const updateValidate = (id ,values) => {
  let isValid = true;
  if(!values.setlist){
    alert("setlist blum di tambahkan")
    isValid = false
    return
  } else if (!values.title){
    alert('title tidak boleh kosong')
    isValid = false
    return
  } else if(!values.date){
    alert("date tidak boleh kosong")
    isValid = false
    return
  } else if(!values.time){
    alert("time tidak boleh kosong")
    isValid = false
    return
  } else if(!values.link){
    alert("link tidak boleh kosong")
    isValid = false
    return
  }
  
  // VALIDATE IF SETLIST IS'N EVENT 
  if(values.setlist !== 'event.jpg'){
    // MEMBER PERFORM VALIDATE
    if (!values.memberPerform) {
      alert('isi member perform');
      return;
  }
    const member = values.memberPerform;
    member.forEach((val, i) => {
      if (val.member == '') {
        alert('input tidak boleh kosong', i);
        isValid = false;
        return; 
      }
  });
  } 
  
  
  if (isValid) {
    const confirmSubmit = confirm('lanjut untuk ?')
    if(confirmSubmit){
      if(values.setlist == "event.jpg"){
        updateScheduleEvent(id, values)
       .then(resp => {
         setTimeout(function () { location.href = '/schedule' }, 700);
         return
        })
      } else{
        updateScheduleMember(id, values)
        .then(resp => {
          setTimeout(function () { location.href = '/schedule' }, 700);
        })
      }
    }
  }
}

