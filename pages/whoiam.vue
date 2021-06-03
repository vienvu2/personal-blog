<template>
  <div class="resume">
    <div class="cover" ></div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 info" >
          <div class="avatar">
          <img src="avatar.jpg">
        </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h5 style="padding: 0 20px">Hi, I'm Vien Vu,<span> a developer and UI/UX designer for 4 year, I can work with a team or alone. I willing for new language and new challenge</span></h5>
          <br>
          <br>
          <h4>My education</h4>
          <hr>
          <div>
            <p>
              <strong>Computer engineering Engineers</strong>
            </p>
            
            <p style="font-size: 13px">University of technology HCM<br> <span style="font-size: 11px">(Oct-2010 - May-2015)</span></p>
          </div>
          <div>
            <p>
              <strong>Degree Advanced designer</strong>
            </p>
            
            <p style="font-size: 13px"  >University of science HCM<br> <span style="font-size: 11px">(Oct-2015 - Apr-2016)</span></p>
          </div>
          <br>
          <br>
          <h4>My skills</h4>
          <hr>
          <label>Html / css</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="95" :max="100" class="mb-1" />
          <label>Angularjs / Angular</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="90" :max="100" class="mb-1" />
          <label>React / React native</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="85" :max="100" class="mb-1" />
          <label>Vue</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="70" :max="100" class="mb-1" />
          <label>Flutter</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="50" :max="100" class="mb-1" />
          <label>Photoshop / Ai</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="60" :max="100" class="mb-1" />
          <label>Google service</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="80" :max="100" class="mb-1" />
           <label>PHP</label>
          <b-progress style="height: 7px" variant="info" :striped="true" :value="80" :max="100" class="mb-1" />
          <br>
          <br>
          <h4>My passions</h4>
          <hr>
          <div class="passion">
          <img v-b-tooltip.hover title="Programming" src="/code.png" />
          <img v-b-tooltip.hover title="Travel" src="/travel.png" />
          <img v-b-tooltip.hover title="Books" src="/book.png" />
          <img v-b-tooltip.hover title="Motorbike travel" src="/phuot.png" />
          <img v-b-tooltip.hover title="Films" src="/film.png" />
          </div>
          <br>
          <br>
          
        </div>
        <div class="col-md-8">
          <br>
          <br>
          <h4 class="exp-title">WORK EXPERIENCE</h4>
          <br>
          <div class="timeline">
            <div class="item">
              <p class="date">Apr-2019 - Present</p>
              <div class="content">
              <h6><strong>Systum Inc.</strong></h6>
              <p><i>Frontend developer (Full time)</i></p>
              <br>
              <br>
              <br>
              </div>
            </div>
            <div class="item">
              <p class="date">Apr-2018 - Apr-2019 (1 year)</p>
              <div class="content">
              <h6><strong>GNT Việt Nam</strong></h6>
              <p><i>Frontend developer (Full time)</i></p>
               <p>- Make frontend for website (learn about Angular v6, graphql ... )</p>
              <ul>
                <li>Make template for module web application</li>
                <li>Make module employee, project, in|out, room booking, </li>
            </ul>
             <p>- Make cms core (learn about Angular v6, graphql, firebase ... )</p>
              <ul>
                <li>Build cms core and apply for other website</li>
                <li>Make components: table, modal, dynamic-form, auth</li>
                <li>Apply firebase to backend for small landing page</li>
            </ul>
              <br>
              <br>
              <br>
              </div>
            </div>
            <div class="item">
              <p class="date">Apr-2017 - Apr-2018 (1 year)</p>
              <div class="content">
              <h6><strong>Habiro Company</strong></h6>
              <p><i>Frontend developer (Full time)</i></p>
              <p>- Make frontend for website (learn about angularjs, reactjs, 3th js library)</p>
              <ul>
                <li>Make template for module web application</li>
                <li>Make module calendar. Edit, create, delete calendar. Sync calendar with device</li>
                <li>Make module project.Manage work, edit, create, delete work,project (Folow Jira)</li>
            </ul>
            <p>- Make frontend for android and ios app  (learn react-native, javascript, Android-Studio, Xcode)</p>
              <ul>
                <li> Build React-native app</li>
                <li> HR app (manage holiday-day, request holiday) </li>
                <li> Channel app (Chat 1vs1 and group chat, manage feeds, manage todo)</li>
            </ul>
              </div>
              <br>
              <br>
              <br>
            </div>
             <div class="item">
              <p class="date">Apr-2015 - Apr-2017 (2 years)</p>
              <div class="content">
              <h6><strong>Antking Company</strong></h6>
              <p><i>Fullsatck developer (Full time)</i></p>
              <p>- Design Website and mobile app (learn Ps, Ai, design web and mobile)</p>
              <p>- Develop the Web Application (learn PHP, javascript, HTML, CSS ... )</p>
              <p>- Create API for mobile app (Learn PHP, json, XML ... )</p>
              <p>- Create design and technical solutions.</p>
              <p>- Communicate directly to client for requirements.</p>
              <p>- Design website, emoji, paper for company</p>
              <br>
              <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <br>
  <br>
  <br>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      skills: [{ id: "html", title: "Html", img: "" }]
    };
  },
  created(){
      // document.title = 'Viên Vũ | Whoiam' ;

  }
};
</script>
<style scoped lang="scss">
.passion{
  text-align: center;
  img{
    width: 30px;
    display: inline-block;
    margin: 10px;
  }
}
label{
  font-size: 13px;
      margin: 0;
    margin-top: 10px;
}
.timeline {
  .item {
    padding-left: 40px;
    
    position: relative;
    .content{
      padding-left: 15px;
    }
    .date{
      background: #f7c5d1;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-size: 13px;
      font-weight: 500;
      padding: 5px 15px;
      position: relative;
      &:before{
        content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-right: 10px #f7c5d1 solid;
    border-top: 10px transparent solid;
    border-bottom: 10px transparent solid;
    left: -10px;
      }
    }
    &:before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background: #c93659;
      position: absolute;
      left: 17px;
      top: 11px;
    }
    &:after {
      content: "";
      width: 2px;
      background: #c93659;
      position: absolute;
      height: 100%;
      left: 21px;
      top: 16px;
    }
    &:last-child {
      &:after {
        width: 0;
      }
    }
  }
}
.info {
  background: #c93659;
  color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.cover {
  background: url('/bg.jpg');
  min-height: 401px;
  background-size: cover;
  background-position: center;
}
h5 {
  // color: #ca3a5c;
  font-weight: bold;
  text-align: justify;
  span {
    font-weight: normal;
    // color: #555;
  }
}
.exp-title {
  font-weight: bold;
  // color: #ca3a5c;
}

.avatar {
    display: inline-block;
    width: 170px;
    height: 170px;
    transform: rotate(45deg);
    overflow: hidden;

    border-top: 3px solid #ca3a5c;
    border-right: 3px solid #ca3a5c;
    border-radius: 5px;
    margin-top: 25px;
    transition: all linear 0.3s;
        position: absolute;
    top: -84px;
    margin: 0 auto;
    display: block;
        left: calc(50% - 85px);
    &:after {
      content: "";
      background: white;
      // border: 3px solid #ca3a5c;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 4px;
      left: 4px;
      z-index: -1;
    }
    img {
         width: 153%;
    transform: rotate(-45deg);
    margin-top: -44px;
    margin-left: -27px;
    }
  }
</style>

