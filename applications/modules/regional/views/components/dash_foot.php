 <!--right side widget start-->
          <?php $this->load->view('components/dash_sidebar'); ?>

                </div>
            </div>
            <!--main content end-->

            <!--footer start-->
            <div id="footer" class="ui-footer" style=" ">
                2018 &copy; St. James Catholic Church.
                 <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
            </div>
            <!--footer end-->



        </div>




<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script> -->
<script src="<?php echo base_url(); ?>/assets/dashboard/assets/js/moment.min.js"></script>
<script>
    !function() {

  var today = moment();

  function Calendar(selector, events) {
    this.el = document.querySelector(selector);
    this.events = events;
    this.current = moment().date(1);
    this.draw();
    var current = document.querySelector('.today');
    if(current) {
      var self = this;
      window.setTimeout(function() {
        self.openDay(current);
      }, 500);
    }
  }

  Calendar.prototype.draw = function() {
    //Create Header
    this.drawHeader();

    //Draw Month
    this.drawMonth();

    this.drawLegend();
  }

  Calendar.prototype.drawHeader = function() {
    var self = this;
    if(!this.header) {
      //Create the header elements
      this.header = createElement('div', 'header');
      this.header.className = 'header';

      this.title = createElement('h1');

      var right = createElement('div', 'right');
      right.addEventListener('click', function() { self.nextMonth(); });

      var left = createElement('div', 'left');
      left.addEventListener('click', function() { self.prevMonth(); });

      //Append the Elements
      this.header.appendChild(this.title);
      this.header.appendChild(right);
      this.header.appendChild(left);
      this.el.appendChild(this.header);
    }

    this.title.innerHTML = this.current.format('MMMM YYYY');
  }

  Calendar.prototype.drawMonth = function() {
    var self = this;

    this.events.forEach(function(ev) {
     ev.date = self.current.clone().date(Math.random() * (29 - 1) + 1);
    });


    if(this.month) {
      this.oldMonth = this.month;
      this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
      this.oldMonth.addEventListener('webkitAnimationEnd', function() {
        self.oldMonth.parentNode.removeChild(self.oldMonth);
        self.month = createElement('div', 'month');
        self.backFill();
        self.currentMonth();
        self.fowardFill();
        self.el.appendChild(self.month);
        window.setTimeout(function() {
          self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
        }, 16);
      });
    } else {
        this.month = createElement('div', 'month');
        this.el.appendChild(this.month);
        this.backFill();
        this.currentMonth();
        this.fowardFill();
        this.month.className = 'month new';
    }
  }

  Calendar.prototype.backFill = function() {
    var clone = this.current.clone();
    var dayOfWeek = clone.day();

    if(!dayOfWeek) { return; }

    clone.subtract('days', dayOfWeek+1);

    for(var i = dayOfWeek; i > 0 ; i--) {
      this.drawDay(clone.add('days', 1));
    }
  }

  Calendar.prototype.fowardFill = function() {
    var clone = this.current.clone().add('months', 1).subtract('days', 1);
    var dayOfWeek = clone.day();

    if(dayOfWeek === 6) { return; }

    for(var i = dayOfWeek; i < 6 ; i++) {
      this.drawDay(clone.add('days', 1));
    }
  }

  Calendar.prototype.currentMonth = function() {
    var clone = this.current.clone();

    while(clone.month() === this.current.month()) {
      this.drawDay(clone);
      clone.add('days', 1);
    }
  }

  Calendar.prototype.getWeek = function(day) {
    if(!this.week || day.day() === 0) {
      this.week = createElement('div', 'week');
      this.month.appendChild(this.week);
    }
  }

  Calendar.prototype.drawDay = function(day) {
    var self = this;
    this.getWeek(day);

    //Outer Day
    var outer = createElement('div', this.getDayClass(day));
    outer.addEventListener('click', function() {
      self.openDay(this);
    });

    //Day Name
    var name = createElement('div', 'day-name', day.format('ddd'));

    //Day Number
    var number = createElement('div', 'day-number', day.format('DD'));


    //Events
    var events = createElement('div', 'day-events');
    this.drawEvents(day, events);

    outer.appendChild(name);
    outer.appendChild(number);
    outer.appendChild(events);
    this.week.appendChild(outer);
  }

  Calendar.prototype.drawEvents = function(day, element) {
    if(day.month() === this.current.month()) {
      var todaysEvents = this.events.reduce(function(memo, ev) {
        if(ev.date.isSame(day, 'day')) {
          memo.push(ev);
        }
        return memo;
      }, []);

      todaysEvents.forEach(function(ev) {
        var evSpan = createElement('span', ev.color);
        element.appendChild(evSpan);
      });
    }
  }

  Calendar.prototype.getDayClass = function(day) {
    classes = ['day'];
    if(day.month() !== this.current.month()) {
      classes.push('other');
    } else if (today.isSame(day, 'day')) {
      classes.push('today');
    }
    return classes.join(' ');
  }

  Calendar.prototype.openDay = function(el) {
    var details, arrow;
    var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
    var day = this.current.clone().date(dayNumber);

    var currentOpened = document.querySelector('.details');

    //Check to see if there is an open detais box on the current row
    if(currentOpened && currentOpened.parentNode === el.parentNode) {
      details = currentOpened;
      arrow = document.querySelector('.arrow');
    } else {
      //Close the open events on differnt week row
      //currentOpened && currentOpened.parentNode.removeChild(currentOpened);
      if(currentOpened) {
        currentOpened.addEventListener('webkitAnimationEnd', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener('oanimationend', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener('msAnimationEnd', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener('animationend', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.className = 'details out';
      }

      //Create the Details Container
      details = createElement('div', 'details in');

      //Create the arrow
      var arrow = createElement('div', 'arrow');

      //Create the event wrapper

      details.appendChild(arrow);
      el.parentNode.appendChild(details);
    }

    var todaysEvents = this.events.reduce(function(memo, ev) {
      if(ev.date.isSame(day, 'day')) {
        memo.push(ev);
      }
      return memo;
    }, []);

    this.renderEvents(todaysEvents, details);

    arrow.style.left = el.offsetLeft - el.parentNode.offsetLeft + 27 + 'px';
  }

  Calendar.prototype.renderEvents = function(events, ele) {
    //Remove any events in the current details element
    var currentWrapper = ele.querySelector('.events');
    var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));

    events.forEach(function(ev) {
      var div = createElement('div', 'event');
      var square = createElement('div', 'event-category ' + ev.color);
      var span = createElement('span', '', ev.eventName);

      div.appendChild(square);
      div.appendChild(span);
      wrapper.appendChild(div);
    });

    if(!events.length) {
      var div = createElement('div', 'event empty');
      var span = createElement('span', '', 'Mass Celebration');

      div.appendChild(span);
      wrapper.appendChild(div);
    }

    if(currentWrapper) {
      currentWrapper.className = 'events out';
      currentWrapper.addEventListener('webkitAnimationEnd', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener('oanimationend', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener('msAnimationEnd', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener('animationend', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
    } else {
      ele.appendChild(wrapper);
    }
  }

  Calendar.prototype.drawLegend = function() {
    var legend = createElement('div', 'legend');
    var calendars = this.events.map(function(e) {
      return e.calendar + '|' + e.color;
    }).reduce(function(memo, e) {
      if(memo.indexOf(e) === -1) {
        memo.push(e);
      }
      return memo;
    }, []).forEach(function(e) {
      var parts = e.split('|');
      var entry = createElement('span', 'entry ' +  parts[1], parts[0]);
      legend.appendChild(entry);
    });
    this.el.appendChild(legend);
  }

  Calendar.prototype.nextMonth = function() {
    this.current.add('months', 1);
    this.next = true;
    this.draw();
  }

  Calendar.prototype.prevMonth = function() {
    this.current.subtract('months', 1);
    this.next = false;
    this.draw();
  }

  window.Calendar = Calendar;

  function createElement(tagName, className, innerText) {
    var ele = document.createElement(tagName);
    if(className) {
      ele.className = className;
    }
    if(innerText) {
      ele.innderText = ele.textContent = innerText;
    }
    return ele;
  }
}();

!function() {
  var data = [
    { eventName: 'Lunch Meeting w/ Mark', calendar: 'Work', color: 'orange' },
    { eventName: 'Interview - Jr. Web Developer', calendar: 'Work', color: 'orange' },
    { eventName: 'Demo New App to the Board', calendar: 'Work', color: 'orange' },
    { eventName: 'Dinner w/ Marketing', calendar: 'Work', color: 'orange' },

    { eventName: 'Game vs Portalnd', calendar: 'Sports', color: 'blue' },
    { eventName: 'Game vs Houston', calendar: 'Sports', color: 'blue' },
    { eventName: 'Game vs Denver', calendar: 'Sports', color: 'blue' },
    { eventName: 'Game vs San Degio', calendar: 'Sports', color: 'blue' },

    { eventName: 'School Play', calendar: 'Kids', color: 'yellow' },
    { eventName: 'Parent/Teacher Conference', calendar: 'Kids', color: 'yellow' },
    { eventName: 'Pick up from Soccer Practice', calendar: 'Kids', color: 'yellow' },
    { eventName: 'Ice Cream Night', calendar: 'Kids', color: 'yellow' },

    { eventName: 'Free Tamale Night', calendar: 'Other', color: 'green' },
    { eventName: 'Bowling Team', calendar: 'Other', color: 'green' },
    { eventName: 'Teach Kids to Code', calendar: 'Other', color: 'green' },
    { eventName: 'Startup Weekend', calendar: 'Other', color: 'green' }
  ];



  function addDate(ev) {

  }

  var calendar = new Calendar('#calendar', data);

}();

</script>


 <script>
      $(document).ready(function() {
        // Create two variables with names of months and days of the week in the array
        var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        // Create an object newDate()
        var newDate = new Date();
        // Retrieve the current date from the Date object
        newDate.setDate(newDate.getDate());
        // At the output of the day, date, month and year
        $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

        setInterval( function() {
            // Create an object newDate () and extract the second of the current time
            var seconds = new Date().getSeconds();
            // Add a leading zero to the value of seconds
            $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
            },1000);

        setInterval( function() {
            // Create an object newDate () and extract the minutes of the current time
            var minutes = new Date().getMinutes();
            // Add a leading zero to the minutes
            $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
            },1000);

        setInterval( function() {
            // Create an object newDate () and extract the clock from the current time
            var hours = new Date().getHours();
            // Add a leading zero to the value of hours
            $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
            }, 1000);

        });

     </script>


    <script src="<?php echo base_url(); ?>/assets/js/highcharts.js"></script>
    <script src="<?php echo base_url(); ?>/assets/js/series-label.js"></script>
    <script src="<?php echo base_url(); ?>/assets/js/exporting.js"></script>
    <script src="<?php echo base_url(); ?>/assets/js/export-data.js"></script>



<script type="text/javascript" >

    Highcharts.chart('container', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Parishioner Details'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [

                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        }]
    });
        </script>



        <script type="text/javascript">

            Highcharts.chart('chartdraw', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Parishioner Total Number'
                },
                subtitle: {
                    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
                },
                xAxis: {
                    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population (millions)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                }, {
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                }, {
                    name: 'Year 2000',
                    data: [814, 841, 3714, 727, 31]
                }, {
                    name: 'Year 2016',
                    data: [1216, 1001, 4436, 738, 40]
                }]
            });
        </script>



    <script type="text/javascript" src=" https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src=  "https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src=" https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src=" https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript" src=" https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src=" https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>



  <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>

        <!-- inject:js -->
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/jquery/dist/jquery.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/jquery.nicescroll/dist/jquery.nicescroll.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/autosize/dist/autosize.min.js"></script>
        <!-- endinject -->

        <!--highcharts-->
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/highcharts/highcharts.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/highcharts/modules/exporting.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/assets/js/init-highcharts.js"></script>

        <!--sparkline-->
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/bower-jquery-sparkline/dist/jquery.sparkline.retina.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/assets/js/init-sparkline.js"></script>

        <!-- Rickshaw Chart Depencencies -->
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/rickshaw/vendor/d3.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/rickshaw/vendor/d3.layout.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/bower_components/rickshaw/rickshaw.min.js"></script>
        <script src="<?php echo base_url(); ?>/assets/dashboard/assets/js/init-rickshaw.js"></script>

       <script src=" https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
        <script src=" https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js"></script>
        <script  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="  https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
        <script src=" https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
        <!-- Common Script   -->
        <script src="<?php echo base_url(); ?>/assets/dashboard/dist/js/main.js"></script>


        <script>
            $("#save").click(function(){
            alert("Please select image to upload and continue to fill the form . Thank you.");
        });
        </script>

    </body>


</html>
