//////////////////////////////////////////////////////////////////////
//
//     Tracking JS
//      - Communication with LMS
//      - Responsible for Bookmarking
//
//////////////////////////////////////////////////////////////////////

import * as APIWrapper from './APIWrapper';
import * as SCOFunctions from './SCOFunctions';

var TRACKING = "SCORM";
var SCORM = "1.2";
var setScore = -1;
//var mtmOpened = false;
var cookieName;
var courseData = {};

export function SetCookieName(c){
  cookieName = c;
}

export function SetBookmark(c, p) {
  if(TRACKING === "SCORM") {
    if(APIWrapper.getAPIHandle() == null) {
      return;
    }

    if(SCORM==="2004") {
      APIWrapper.doLMSSetValue("cmi.location", c+"_"+p);

    } else if(SCORM==="1.2") {
      APIWrapper.doLMSSetValue("cmi.core.lesson_location", c+"_"+p);
    }

    APIWrapper.doLMSCommit();

  } else if(TRACKING==="COOKIES") {
    setCookie(cookieName+"bm",c+"_"+p);
  }
}

export function GetBookmark() {
  if(TRACKING==="SCORM") {
    if(APIWrapper.getAPIHandle() == null){return;}

    if(SCORM==="2004") {
      return APIWrapper.doLMSGetValue("cmi.location");

    } else if(SCORM==="1.2") {
      return APIWrapper.doLMSGetValue("cmi.core.lesson_location");
    }

  } else if(TRACKING==="COOKIES") {
    return GetCookie(cookieName + "bm");
  }
}

export function CreatePathmarks() {
  var s = "";

  for(var i = 0; i < courseData.chapters.length; i++) {
    var active=0;
    if(courseData.chapters[i].isActive === "true") {
      active=1;
    }

    s = s + active + "]" + courseData.chapters[i].titleIndex + "}";

    for(var j = 0; j < courseData.chapters[i].pages.length; j++) {
      if(j ===  courseData.chapters[i].pages.length-1) {
        s = s + courseData.chapters[i].pages[j].locks.toString();
      } else {
        s = s + courseData.chapters[i].pages[j].locks.toString()+";";
      }
    }

    if(i < courseData.chapters.length-1) {
      s = s+":";
    }
  }

  if(TRACKING==="SCORM") {
    if(APIWrapper.getAPIHandle() == null){return;}
    APIWrapper.doLMSSetValue("cmi.suspend_data",s);
    APIWrapper.doLMSCommit();

  } else if(TRACKING==="COOKIES") {
    setCookie(cookieName+"pm",s);
  }

  var isComplete = true;
  var noActive = true;

  for(let i = 1; i < courseData.chapters.length; i++) {
    for(let j = 0; j < courseData.chapters[i].pages.length; j++) {
      if(courseData.chapters[i].isActive === "true") {
        noActive = false;
      }

      if(courseData.chapters[i].pages[j].locks.toString().indexOf("0") !== -1 && courseData.chapters[i].isActive === "true") {
        isComplete=false;
        break;
      }

    }
  }

  if((courseData.COMPLETION_METHOD === "page_view" && isComplete && !noActive) || courseData.COMPLETION_METHOD === "immediate")	{
    SetComplete();
  }

}

export function GetPathmark() {
  if(TRACKING==="SCORM") {
    if(APIWrapper.getAPIHandle() == null) {return;}

    return APIWrapper.doLMSGetValue("cmi.suspend_data");

  } else if(TRACKING==="COOKIES") {
    return GetCookie(cookieName+"pm");
  }

  return "";
}

export function SetComplete() {
  console.log("Course Completed");
  if(TRACKING==="SCORM") {
    if(APIWrapper.getAPIHandle()==null){return;}

    if(SCORM==="1.2") {
      APIWrapper.doLMSSetValue( "cmi.core.lesson_status", "passed" );

    } else if(SCORM==="2004") {
      APIWrapper.doLMSSetValue( "cmi.completion_status", "completed" );
      APIWrapper.doLMSSetValue( "cmi.success_status", "passed" );
      if(setScore!==-1) {
        APIWrapper.doLMSSetValue( "cmi.score.raw", setScore );
        APIWrapper.doLMSSetValue( "cmi.score.scaled", setScore/100 );
      }
    }
    APIWrapper.doLMSCommit();
  }
}

export function SendScore(percent,REQUIRED_PERCENT) {
  if(percent >= REQUIRED_PERCENT) {
    //openLock(currentChapter,currentPage,1)
  }

  if(TRACKING==="SCORM") {
    if(APIWrapper.getAPIHandle() == null){ return; }

    if(SCORM==="1.2") {
      APIWrapper.doLMSSetValue( "cmi.core.score.raw", percent );
      if(percent>=REQUIRED_PERCENT) {
        APIWrapper.doLMSSetValue( "cmi.core.lesson_status", "passed" );
      }

    } else if(SCORM==="2004") {
      APIWrapper.doLMSSetValue( "cmi.score.raw", percent );
      APIWrapper.doLMSSetValue( "cmi.score.scaled", percent/100 );
      setScore=percent;
      if(percent >= REQUIRED_PERCENT && courseData.COMPLETION_METHOD === "assessment") {
        APIWrapper.doLMSSetValue( "cmi.completion_status", "completed" );
        APIWrapper.doLMSSetValue( "cmi.success_status", "passed" );
      }
    }
    APIWrapper.doLMSCommit();
  }
}

export function setInteraction(id,correctResponse,learnerResponse,result,description,type) {
  if(TRACKING==="SCORM" && SCORM==="2004") {
    APIWrapper.doLMSSetValue("cmi.interactions."+id+".id",id);
    APIWrapper.doLMSSetValue("cmi.interactions."+id+".type",type);
    APIWrapper.doLMSSetValue("cmi.interactions."+id+".timestamp",ISODateString(new Date()));
    APIWrapper.doLMSSetValue("cmi.interactions."+id+".correct_responses.0.pattern",correctResponse);
    APIWrapper.doLMSSetValue("cmi.interactions."+id+".learner_response",learnerResponse);
    APIWrapper.doLMSSetValue("cmi.interactions."+id+".result",result);
    if(description.length>250)
      description=description.substr(0,249);
    APIWrapper.doLMSSetValue("cmi.interactions."+id+".description",description);
    APIWrapper.doLMSCommit();
  }
}

export function ISODateString(d) {
  function pad(n){return n<10 ? '0'+n : n}
  return d.getUTCFullYear()+'-'
    + pad(d.getUTCMonth()+1)+'-'
    + pad(d.getUTCDate())+'T'
    + pad(d.getUTCHours())+':'
    + pad(d.getUTCMinutes())+':'
    + pad(d.getUTCSeconds())
}

export function StartLMS() {
  try {
    if(APIWrapper.getAPIHandle() == null) {
      TRACKING = "COOKIES";
      return;
    }

    APIWrapper.doLMSInitialize();
    SCOFunctions.startTimer();

    if(SCORM==="2004") {
      var status = APIWrapper.doLMSGetValue( "cmi.completion_status" );
      if (status !== "incomplete" && status!=="completed") {
        APIWrapper.doLMSSetValue( "cmi.completion_status", "incomplete" );
        APIWrapper.doLMSSetValue( "cmi.success_status", "unknown" );
        APIWrapper.doLMSSetValue( "cmi.location", "" );
        APIWrapper.doLMSSetValue( "cmi.suspend_data","" );
      }

      APIWrapper.doLMSSetValue("cmi.exit","suspend");
      APIWrapper.doLMSCommit();

    } else if(SCORM==="1.2") {
      let status = APIWrapper.doLMSGetValue( "cmi.core.lesson_status" );
      if (status === "not attempted") {
        APIWrapper.doLMSSetValue( "cmi.core.lesson_status", "incomplete" );
        APIWrapper.doLMSSetValue( "cmi.core.lesson_location", "" );
        APIWrapper.doLMSSetValue( "cmi.suspend_data","" );
        APIWrapper.doLMSSetValue("cmi.core.exit","suspend");
        APIWrapper.doLMSCommit();
      }
    }
  } catch(e){TRACKING="COOKIES"}
}

export function QuitLMS() {
  if(TRACKING==="SCORM") {
    if(SCORM==="2004") {
      APIWrapper.doLMSSetValue("cmi.exit","suspend");

    } else if(SCORM==="1.2") {
      APIWrapper.doLMSSetValue("cmi.core.exit","suspend");
    }

    SCOFunctions.computeTime();
    APIWrapper.doLMSFinish();
  }
}

export function GetCookie(cookieName) {
  var search = cookieName + "="
  if (document.cookie.length > 0) {
    var offset = document.cookie.indexOf(search)

    if (offset !== -1) {
      offset += search.length;
      var end = document.cookie.indexOf(";", offset);

      if (end === -1) {
        end = document.cookie.length;
      }

      var cookieValue = unescape(document.cookie.substring(offset, end))

      return cookieValue
    }
    else { return ""; }
  }
}

export function setCookie(cookieName, cookieValue, cookieLife) {
  var expirationDate = new Date();

  if(cookieLife == null || cookieLife !== -1) {
    cookieLife = 365*86400000;
    expirationDate.setTime(expirationDate.getTime() + cookieLife);
    document.cookie = escape(cookieName) + "=" + escape(cookieValue) + ";expires=" + expirationDate.toGMTString() + ";path=/";

  } else {
    document.cookie = escape(cookieName) + "=" + escape(cookieValue) + ";path=/";
  }
}
