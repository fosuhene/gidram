/**
 * Created by plug on 27/11/2016.
 */
var app = angular.module('myApp', ['ngRoute','angularUtils.directives.dirPagination','datatables']).run(function($rootScope) {

    $rootScope.systemUser = "";
    $rootScope.accountName = "";
    $rootScope.logoFilepath = "https://www.cloud.myasanka.com/content/dashboard/images/avatar.png";


});

app.config(function ($routeProvider) {
    $routeProvider

    .when('/:userId', {
        templateUrl: 'views/dash.html',
        controller: 'DashboardCtrl'
    })

    .when('/entries/:userId', {
        templateUrl: 'views/entries.html',
        controller: 'ViewStaticInfoCtrl'
    })
    .when('/new-entry/:userId', {
        templateUrl: 'views/new-entry.html',
        controller: 'NewEntryCtrl'
    })
    .when('/edit-entry/:userId/:contentId', {
        templateUrl: 'views/edit-entry.html',
        controller: 'EditEntryCtrl'
    })
    .when('/videos/:userId', {
        templateUrl: 'views/videos.html',
        controller: 'ViewVideosCtrl'
    })
    .when('/new-video/:userId', {
        templateUrl: 'views/new-video.html',
        controller: 'NewVideoCtrl'
    })

    .when('/games/:userId', {
        templateUrl: 'views/games.html',
        controller: 'ViewGamesCtrl'
    })
    .when('/new-game/:userId', {
        templateUrl: 'views/new-game.html',
        controller: 'NewGameCtrl'
    })

    .when('/quizzes/:userId', {
        templateUrl: 'views/quizzes.html',
        controller: 'ViewQuizzesCtrl'
    })
    .when('/new-quiz/:userId', {
        templateUrl: 'views/new-quiz.html',
        controller: 'NewQuizCtrl'
    })
    .when('/add-questions/:userId/:quizId', {
        templateUrl: 'views/add-questions.html',
        controller: 'AddQuestionsCtrl'
    })
    .when('/surveys/:userId', {
        templateUrl: 'views/surveys.html',
        controller: 'ViewSurveysCtrl'
    })
    .when('/new-survey/:userId', {
        templateUrl: 'views/new-survey.html',
        controller: 'NewSurveyCtrl'
    })
    .when('/profile/:userId', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
    })
    .when('/settings/:userId', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
    })
    .when('/stats/:userId/:deviceId', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl'
    })

    .otherwise({
        redirectTo: '/:userId'
    })
});



app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});


app.controller('AppController', function($scope, $rootScope, $http) {
    $scope.$on('SHOW_LOADER', function () {$scope.loading=true;});
    $scope.$on('HIDE_LOADER', function () {$scope.loading=false});

    $scope.showLoaderWithMsg = function ($msg) {
        $scope.loaderMsg = $msg;
        $scope.$emit('SHOW_LOADER');
    }

    $scope.hideLoader = function () {
        $scope.$emit('HIDE_LOADER');
    }

    $http.get("https://www.cloud.myasanka.com/content/api/fetchGeneralProfileInfo")
        .success(function(response) {
            //console.log(response);
            var profileData = response['data'];
            $rootScope.systemUser = profileData.manager;
            $rootScope.accountName = profileData.account_name;
            $rootScope.logoFilepath = profileData.logo;
            $rootScope.deviceArray = response['devices'];
        })
        .error(function(response) {
            showAlert('Oops!','Operation failed. Please try again.',280,140);
        });

    $scope.updateUserLabels = function ($systemUser, $accountName, $logo) {
        $rootScope.systemUser = $systemUser;
        $rootScope.accountName = $accountName;
        $rootScope.logoFilepath = $logo;
    }


});

app.controller('DashboardCtrl', function($scope, $rootScope, $http, $routeParams) {

    $scope.userId = $routeParams.userId;
    var loadList = function () {
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchAll/"+$routeParams.userId)
            .success(function(response) {
                //console.log(response);
                $scope.listArray = response['data'];
                $scope.activeCount = response['activeCount'];
                $scope.inactiveCount = response['inactiveCount'];
                $scope.allCount = response['allCount'];
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
                //alert(response);
            });
    }

    loadList();

    var filterList = function (state) {
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/filter/"+$routeParams.userId+"/"+state)
            .success(function(response) {
                //console.log(response);
                $scope.listArray = response['data'];
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
                //alert(response);
            });
    }

    $scope.reloadList = function() {
        loadList();
    }

    $scope.changeList = function(state) {
        filterList(state);
    }



    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }


    //Delete Method
    $scope.deleteContent = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this content? This action is irreversible.',
            title        : w2utils.lang('Delete Content'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {

        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteContent/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

    //Status Update
    $scope.markActive = function(theId) {

        w2confirm({
            msg          : 'This content will be marked active.',
            title        : w2utils.lang('Mark Active'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'OK',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doUpdateStatus(theId,1); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //Status Update
    $scope.markInactive = function(theId) {

        w2confirm({
            msg          : 'This content will be marked inactive.',
            title        : w2utils.lang('Mark Inactive'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'OK',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doUpdateStatus(theId,0); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doUpdateStatus = function(theId,state) {

        $scope.showLoaderWithMsg('Updating...');
        $http.get("https://www.cloud.myasanka.com/content/api/contentStatus/"+theId+"/"+state)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

});

app.directive('fileInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('change', function () {
                $parse(attrs.fileInput)
                .assign(scope, element[0].files)
                scope.$apply()
            })
        }
    }
}]);

//DIALOGS ALERTS & GENERICS
function showAlert(title,msg,theWidth,theHeight) {
    w2popup.open({
        title: title,
        body: '<div class="w2ui-centered">' + msg + '</div>',
        buttons: '<button class="w2ui-btn" onclick="w2popup.close();">OK</button>',
        width: theWidth,
        height: theHeight,
        overflow: 'hidden',
        color: '#333',
        speed: '0.3',
        opacity: '0.8',
        modal: true,
        showClose: true,
        showMax: false,

    });
}



//STATIC INFO CONTROLLERS
app.controller('ViewStaticInfoCtrl', function($scope, $rootScope, $http, $routeParams) {

    var loadList = function () {
        $scope.userId = $routeParams.userId;
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchStaticInfo/"+$routeParams.userId)
            .success(function(response) {
                //console.log(response);
                $scope.staticContentArray = response['data'];
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }

    loadList();

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    //Activate Method
    $scope.activateItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to activate this item?',
            title        : w2utils.lang('Activate Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Activate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doActivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doActivate = function(theId) {

        $scope.showLoaderWithMsg('Activating...');
        $http.get("https://www.cloud.myasanka.com/content/api/activateFile/"+theId)
        .success(function(response) {
            //console.log(response);
            loadList();
        })
        .error(function(response) {
            $scope.hideLoader();
            showAlert('Oops!','Operation failed. Please try again.',280,140);
        });


    }

    //Deactivate Method
    $scope.deactivateItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to deactivate this item?',
            title        : w2utils.lang('Deactivate Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Deactivate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDeactivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doDeactivate = function(theId) {

        $scope.showLoaderWithMsg('Deactivating...');
        $http.get("https://www.cloud.myasanka.com/content/api/deactivateFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }


    //Delete Method
    $scope.deleteItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this item? This action is irreversible.',
            title        : w2utils.lang('Delete Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {

        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

});

app.controller('NewEntryCtrl', function($scope, $http, $location, $routeParams) {

    var loadList = function () {
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchSettingsCategories/"+$routeParams.userId)
            .success(function(response) {
                //console.log(response);
                $scope.catArray = response['catData'];
                $scope.subCat1Array = response['subCat1Data'];
                $scope.subCat2Array = response['subCat2Data'];
                $scope.theUserId = $routeParams.userId;
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }

    loadList();

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

});

app.controller('EditEntryCtrl', function($scope, $http, $location, $routeParams) {

    var loadList = function () {
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchSettingsCategories/"+$routeParams.userId)
            .success(function(response) {
                //console.log(response);
                $scope.catArray = response['catData'];
                $scope.subCat1Array = response['subCat1Data'];
                $scope.subCat2Array = response['subCat2Data'];
                $scope.theUserId = $routeParams.userId;
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


        $http.get("https://www.cloud.myasanka.com/content/api/fetchContent/"+$routeParams.contentId)
            .success(function(response) {
                //console.log(response);
                $scope.attachmentArray = response['attachments'];
                $scope.title = response['title'];
                $scope.body = response['body'];
                $scope.cat1 = response['cat1'];
                $scope.cat2 = response['cat2'];
                $scope.cat3 = response['cat3'];
                $scope.theUserId = $routeParams.userId;
                $scope.theContentId = $routeParams.contentId;
                $scope.mainCat = $scope.cat1;
                $scope.subCat1 = $scope.cat2 == "" ? "Subcategory 1" : $scope.cat2;
                $scope.subCat2 = $scope.cat3 == "" ? "Subcategory 2" : $scope.cat3;

                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }

    loadList();

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

});

//VIDEOS CONTROLLERS
app.controller('ViewVideosCtrl', function($scope, $http, $routeParams) {

    var loadList = function () {
        $scope.userId = $routeParams.userId;
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchVideos/" + $routeParams.userId)
            .success(function (response) {
                //console.log(response);
                $scope.videosArray = response['data'];
                $scope.hideLoader();
            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);

                //alert(response);
            });
    }

    loadList()

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    //Activate Method
    $scope.activateItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to activate this item?',
            title        : w2utils.lang('Activate Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Activate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doActivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doActivate = function(theId) {

        $scope.showLoaderWithMsg('Activating...');
        $http.get("https://www.cloud.myasanka.com/content/api/activateFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

    //Deactivate Method
    $scope.deactivateItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to deactivate this item?',
            title        : w2utils.lang('Deactivate Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Deactivate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDeactivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doDeactivate = function(theId) {

        $scope.showLoaderWithMsg('Deactivating...');
        $http.get("https://www.cloud.myasanka.com/content/api/deactivateFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }


    //Delete Method
    $scope.deleteItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this item? This action is irreversible.',
            title        : w2utils.lang('Delete Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {

        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

});

app.controller('NewVideoCtrl', function($scope, $http, $location, $routeParams) {

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

    //the file format list
    $scope.fileFormatOptions = [
        { name: 'MP4', value: 'MP4' },
        { name: 'AVI', value: 'AVI' },
        { name: 'MOV', value: 'MOV' },
        { name: 'WMV', value: 'WMV' }
    ];

    //submit button
    $scope.addVideo = function () {


        if($scope.theTitle.length > 0) {

            if($scope.files == undefined) {
                showAlert('Missing Input','Please select a file to upload.',280,140);
            } else {
                var theFiles = $scope.files;
                var l = theFiles.length;
                var namesArr = [];
                var fileFormats = ['mp4','avi','mov','wmv','mp3'];
                for (var i = 0; i < l; i++) {
                    namesArr.push(theFiles[i].name);
                }
                var fileName = namesArr[0];
                var fileExt = fileName.substr(fileName.lastIndexOf('.')+1);
                if(fileFormats.indexOf(fileExt) == -1) {
                    showAlert('Invalid File Format','The file you selected is not in the supported format for upload.',300,180);
                } else {

                    $scope.showLoaderWithMsg('Uploading video...')
                    var fd = new FormData()
                    angular.forEach($scope.files, function (file) {
                        fd.append('theFile',file)
                    })
                    fd.append('userId', $scope.userId);
                    fd.append('type', 'videos');
                    $http.post('https://www.cloud.myasanka.com/content/api/upload.php', fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                        .success(function(response) {
                            var data = {userId:$scope.userId, theTitle:$scope.theTitle, theDescription:$scope.theDescription, fileFormat:fileExt.toUpperCase(), filename:response['filename']};
                            //console.log(response);
                            if(response['responseCode'] == 1) {
                                $scope.doAddVideo(data);
                            } else {
                                $scope.hideLoader();
                                showAlert('Oops!',response['message'],280,140);
                            }

                        })
                        .error(function(response) {
                            $scope.hideLoader();
                            showAlert('Oops!','Operation failed. Please try again.',280,140);
                        });

                }

            }

        } else {
            showAlert('Missing Input','Please enter title.',280,140);
        }
    }

    //doAddVideo
    $scope.doAddVideo = function(data){
        $scope.showLoaderWithMsg('Saving data...')
        var payLoad = JSON.stringify(data);
        $http.post("https://www.cloud.myasanka.com/content/api/addVideo", payLoad).
        success(function(response) {
            //console.log(response);
            if(response['responseCode'] == 1) {
                $location.path('/videos/'+$scope.userId);
            } else {
                $scope.hideLoader();
                alert(response['message']);
            }

        })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }

});


//GAMES CONTROLLERS
app.controller('ViewGamesCtrl', function($scope, $http, $routeParams) {

    var loadList = function () {
        $scope.userId = $routeParams.userId;
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchGames/" + $routeParams.userId)
            .success(function (response) {
                //console.log(response);
                $scope.videosArray = response['data'];
                $scope.hideLoader();
            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                //alert(response);
            });
    }

    loadList()

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    //Activate Method
    $scope.activateItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to activate this item?',
            title        : w2utils.lang('Activate Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Activate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doActivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doActivate = function(theId) {

        $scope.showLoaderWithMsg('Activating...');
        $http.get("https://www.cloud.myasanka.com/content/api/activateFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

    //Deactivate Method
    $scope.deactivateItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to deactivate this item?',
            title        : w2utils.lang('Deactivate Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Deactivate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDeactivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doDeactivate = function(theId) {

        $scope.showLoaderWithMsg('Deactivating...');
        $http.get("https://www.cloud.myasanka.com/content/api/deactivateFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }


    //Delete Method
    $scope.deleteItem = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this item? This action is irreversible.',
            title        : w2utils.lang('Delete Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {

        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteFile/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

});

app.controller('NewGameCtrl', function($scope, $http, $location, $routeParams) {

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

    //the file format list
    $scope.fileFormatOptions = [
        { name: 'ZIP', value: 'ZIP' }
    ];

    //submit button
    $scope.addGame = function () {

        if($scope.theTitle.length > 0) {

            if($scope.files == undefined) {
                showAlert('Missing Input','Please select a file to upload.',280,140);
            } else {
                var theFiles = $scope.files;
                var l = theFiles.length;
                var namesArr = [];
                var fileFormats = ['zip'];
                for (var i = 0; i < l; i++) {
                    namesArr.push(theFiles[i].name);
                }
                var fileName = namesArr[0];
                var fileExt = fileName.substr(fileName.lastIndexOf('.')+1);
                if(fileFormats.indexOf(fileExt) == -1) {
                    showAlert('Invalid File Format','The file you selected is not in the supported format for upload.',300,180);
                } else {

                    $scope.showLoaderWithMsg('Uploading game...')
                    var fd = new FormData()
                    angular.forEach($scope.files, function (file) {
                        fd.append('theFile',file)
                    })
                    fd.append('userId', $scope.userId);
                    fd.append('type', 'games');
                    $http.post('https://www.cloud.myasanka.com/content/api/upload.php', fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                    .success(function(response) {
                        var data = {userId:$scope.userId, theTitle:$scope.theTitle, theDescription:$scope.theDescription, fileFormat:fileExt.toUpperCase(), filename:response['filename']};
                        //console.log(response);
                        if(response['responseCode'] == 1) {
                            $scope.doAddGame(data);
                        } else {
                            $scope.hideLoader();
                            showAlert('Oops!',response['message'],280,140);
                        }

                    })
                    .error(function(response) {
                        $scope.hideLoader();
                        showAlert('Oops!','Operation failed. Please try again.',280,140);
                    });

                }

            }

        } else {
            showAlert('Missing Input','Please enter title.',280,140);
        }
    }

    //doAddGame
    $scope.doAddGame = function(data){
        $scope.showLoaderWithMsg('Saving data...')
        var payLoad = JSON.stringify(data);
        $http.post("https://www.cloud.myasanka.com/content/api/addGame", payLoad).
        success(function(response) {
            //console.log(response);
            if(response['responseCode'] == 1) {
                $location.path('/games/'+$scope.userId);
            } else {
                $scope.hideLoader();
                alert(response['message']);
            }

        })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }

});


//QUIZZES CONTROLLERS
app.controller('ViewQuizzesCtrl', function($scope, $http, $routeParams) {

    var loadList = function () {
        $scope.userId = $routeParams.userId;
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchQuizzes/" + $routeParams.userId)
            .success(function (response) {
                //console.log(response);
                $scope.quizArray = response['data'];
                $scope.hideLoader();
            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                //alert(response);
            });
    }

    loadList()

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    //Activate Method
    $scope.activateQuiz = function(theId) {

        w2confirm({
            msg          : 'Do you want to activate this quiz?',
            title        : w2utils.lang('Activate Quiz'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Activate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doActivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doActivate = function(theId) {

        $scope.showLoaderWithMsg('Activating...');
        $http.get("https://www.cloud.myasanka.com/content/api/activateQuiz/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

    //Deactivate Method
    $scope.deactivateQuiz = function(theId) {

        w2confirm({
            msg          : 'Do you want to deactivate this quiz?',
            title        : w2utils.lang('Deactivate Quiz'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Deactivate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDeactivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doDeactivate = function(theId) {

        $scope.showLoaderWithMsg('Deactivating...');
        $http.get("https://www.cloud.myasanka.com/content/api/deactivateQuiz/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }


    //Delete Method
    $scope.deleteQuiz = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this quiz? This action is irreversible.',
            title        : w2utils.lang('Delete Quiz'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {

        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteQuiz/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

});

app.controller('NewQuizCtrl', function($scope, $http, $location, $routeParams) {

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

    $http.get("https://www.cloud.myasanka.com/content/api/fetchSettingsClasses/"+$routeParams.userId)
        .success(function(response) {
            $scope.classOptions = response['data'];
            $scope.hideLoader();
        })
        .error(function(response) {
            $scope.hideLoader();
            showAlert('Oops!','Operation failed. Please try again.',280,140);
        });


    //submit button
    $scope.addQuiz = function () {

        if($scope.theTitle.length > 0) {

            $scope.showLoaderWithMsg('Please wait...');
            var data = {'userId': $scope.userId, 'theTitle': $scope.theTitle, 'theDescription': $scope.theDescription, 'theClass': $scope.theClass};
            var payLoad = JSON.stringify(data);
            $http.post("https://www.cloud.myasanka.com/content/api/addQuiz", payLoad).
            success(function(response) {
                //console.log(response);
                if(response['responseCode'] == 1) {
                    $location.path('/add-questions/'+$scope.userId+'/'+response.quizId);
                } else {
                    $scope.hideLoader();
                    alert(response['message']);
                }

            })
                .error(function(response) {
                    $scope.hideLoader();
                    showAlert('Oops!','Operation failed. Please try again.',280,140);
                });

        } else {
            showAlert('Missing Input','Please enter title.',280,140);
        }
    }


});

app.controller('AddQuestionsCtrl', function($scope, $http, $location, $routeParams, $compile) {

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

    $http.get("https://www.cloud.myasanka.com/content/api/fetchQuizInfo/" + $routeParams.quizId)
    .success(function (response) {
        //console.log(response);
        $scope.quizInfo = response['data'][0];
        $scope.hideLoader();
    })
    .error(function (response) {
        $scope.hideLoader();
        showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
        //alert(response);
    });

    //the answer list
    $scope.answerIdOptions = [
        { name: 'Select Answer', value: '-' }
    ];

    var loadList = function () {
        $scope.userId = $routeParams.userId;
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchQuestions/" + $routeParams.userId + "/" + $routeParams.quizId)
            .success(function (response) {
                //console.log(response);
                $scope.questionsArray = response['data'];
                $scope.totalQuestions = $scope.questionsArray.length;
                $scope.hideLoader();
            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                //alert(response);
            });

    }

    $scope.addNewQuestion = function() {
        $scope.resetForm();
        $scope.modalTitle = "New Question";
        $scope.modalBtnTitle = "Save";
        $scope.saveType = "New";
        $('#editPicImg').hide();
        $('#addQuestionModal').modal('show');
    }

    //add question methods
    var optionTFId = 0;
    var optionsIdArray = [];
    $('#answerDiv').hide();
    loadList();

    $scope.addOptionTF = function() {
        optionTFId += 1;
        var newOptionTF = '<div id="optionTFDivx'+optionTFId+'" style="margin-bottom: 10px;"><input style="width: 206px;outline: none;" id="optionTFx'+optionTFId+'" type="text" placeholder="Answer option" class="tf" />&nbsp;<a href="javascript:" ng-click="removeOptionTFWithId(\'x'+optionTFId+'\')"><img src="images/del_btn.png" /></a></div>';
        $('#optionTFContainer').append($compile(newOptionTF)($scope));

        optionsIdArray.push('x'+optionTFId);
        if(optionsIdArray.length > 0) {
            $('#answerDiv').show();
        } else {
            $('#answerDiv').hide();
        }

        $scope.answerIdOptions = [{ name: 'Select Answer', value: '-' }];
        for(var i = 0; i < optionsIdArray.length; i++) {
            var val = i + 1;
            var entry = { name: 'Option ' + val, value: val };
            $scope.answerIdOptions.push(entry);

        }

    }

     $scope.removeOptionTFWithId = function(theId) {
        $('#optionTFDiv'+theId).remove();
        var theIndex = optionsIdArray.indexOf(theId);
        if (theIndex > -1) {
            optionsIdArray.splice(theIndex,1);
        }
        if(optionsIdArray.length <= 0) {
            $('#answerDiv').hide();
        }

         $scope.answerIdOptions = [{ name: 'Select Answer', value: '-' }];
         for(var i = 0; i < optionsIdArray.length; i++) {
             var val = i + 1;
             var entry = { name: 'Option ' + val, value: val };
             $scope.answerIdOptions.push(entry);

         }
         $scope.answerId = $scope.answerIdOptions[0].value;

    }

    //submit button
    $scope.saveQuestion = function () {
        var theQuestion = $('#theQuestion').val();
        if(theQuestion <= 0) {
            showAlert('Missing Input', 'Please enter the question.', 280, 140);
        } else if(optionsIdArray.length < 2) {
            showAlert('Missing Input', 'Please add at least two answer options.', 280, 140);
        } else if($scope.answerId == '-') {
            showAlert('Missing Input', 'Please specify the correct answer.', 280, 140);
        } else {

            if($scope.files == undefined) {
                $('#addQuestionModal').modal('hide');
                var optionsArray = [];
                for(i in optionsIdArray) {
                    var index = parseInt(i) + 1;
                    var j = optionsIdArray[i];
                    var theAnswer = $('#optionTF'+j).val();
                    if(theAnswer.length > 0) {
                        var newOptionObj = {'ind':index, 'option':theAnswer};
                        optionsArray.push(newOptionObj);
                    }

                }

                if($scope.saveType == "New") {
                    var data = {userId:$scope.userId, quizId:$routeParams.quizId, theQuestion:$scope.question, answer:$scope.answerId, options:optionsArray, filename:'None'};
                    $scope.doAddQuestion(data);
                } else {
                    var data = {questId:$scope.questionId, theQuestion:$scope.question, answer:$scope.answerId, options:optionsArray, filename:$scope.editQuestPicUrl};
                    $scope.doUpdateQuestion(data);
                }


            } else {

                var theFiles = $scope.files;
                var l = theFiles.length;
                var namesArr = [];
                var fileFormats = ['jpg','png','jpeg','gif'];
                for (var i = 0; i < l; i++) {
                    namesArr.push(theFiles[i].name);
                }
                var fileName = namesArr[0];
                var fileExt = fileName.substr(fileName.lastIndexOf('.')+1);
                if(fileFormats.indexOf(fileExt) == -1) {
                    showAlert('Invalid File Format','The file you selected is not an image file (jpg, png, jpeg, gif).',300,180);
                } else {
                    $('#addQuestionModal').modal('hide');
                    $scope.showLoaderWithMsg('Uploading image...')
                    var fd = new FormData()
                    angular.forEach($scope.files, function (file) {
                        fd.append('theFile',file)
                    })
                    fd.append('userId', $scope.userId);
                    fd.append('type', 'quiz');
                    $http.post('https://www.cloud.myasanka.com/content/api/upload.php', fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                    .success(function(response) {
                        var optionsArray = [];
                        for(i in optionsIdArray) {
                            var index = parseInt(i) + 1;
                            var j = optionsIdArray[i];
                            var theAnswer = $('#optionTF'+j).val();
                            if(theAnswer.length > 0) {
                                var newOptionObj = {'ind':index, 'option':theAnswer};
                                optionsArray.push(newOptionObj);
                            }

                        }

                        //console.log(response);

                        if(response['responseCode'] == 1) {
                            if($scope.saveType == "New") {
                                var data = {userId:$scope.userId, quizId:$routeParams.quizId, theQuestion:$scope.question, answer:$scope.answerId, options:optionsArray, filename:response['filename']};
                                $scope.doAddQuestion(data);
                            } else {
                                var data = {questId:$scope.questionId, theQuestion:$scope.question, answer:$scope.answerId, options:optionsArray, filename:response['filename']};
                                $scope.doUpdateQuestion(data);
                            }

                        } else {
                            $scope.hideLoader();
                            showAlert('Oops!',response['message'],280,140);
                        }

                    })
                    .error(function(response) {
                        $scope.hideLoader();
                        showAlert('Oops!','Operation failed. Please try again.',280,140);
                    });

                }
            }
        }
    }

    $scope.doAddQuestion = function(data) {
        $scope.showLoaderWithMsg('Please wait...');
        var payLoad = JSON.stringify(data);
        $http.post("https://www.cloud.myasanka.com/content/api/addQuestion", payLoad).success(function (response) {
            //console.log(response);
            if (response['responseCode'] == 1) {
                $scope.hideLoader();
                $scope.resetForm();
                loadList();

            } else {
                $scope.hideLoader();
                alert(response['message']);
            }

        })
        .error(function (response) {
            $scope.hideLoader();
            showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
        });
    }

    $scope.doUpdateQuestion = function(data) {
        $scope.showLoaderWithMsg('Please wait...');
        var payLoad = JSON.stringify(data);
        $http.post("https://www.cloud.myasanka.com/content/api/updateQuestion", payLoad).success(function (response) {
            //console.log(response);
            if (response['responseCode'] == 1) {
                $scope.hideLoader();
                $scope.resetForm();
                loadList();

            } else {
                $scope.hideLoader();
                alert(response['message']);
            }

        })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
            });
    }

    $scope.resetForm = function () {
        $('#theQuestion').val('');
        $('#optionTFContainer').text('');
        $('#questionFile').val('');
        $scope.files = undefined;
        $scope.answerIdOptions = [{ name: 'Select Answer', value: '-' }];
        $scope.answerId = $scope.answerIdOptions[0].value;
        optionTFId = 0;
        optionsIdArray = [];
        $('#answerDiv').hide();



    }

    //Delete Method
    $scope.deleteQuestion = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this question? This action is irreversible.',
            title        : w2utils.lang('Delete Question'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {
        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteQuestion/"+theId+"/"+$scope.userId+"/"+$routeParams.quizId)
            .success(function(response) {
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

    //Edit Question Method
    $scope.editQuestion = function(questObj) {

        $('#addQuestionModal').modal('show');
        $scope.modalTitle = "Edit Question";
        $scope.modalBtnTitle = "Save Changes";
        $scope.saveType = "Edit";
        $scope.question = questObj.question;
        $scope.editQuestPicUrl = questObj.filename;
        $scope.questionId = questObj.id;
        $("#theQuestion").val(questObj.question);
        if (questObj.filename == "None") {
            $('#editPicImg').hide();
        } else {
            $('#editPicImg').show();
        }

        //answer options
        optionTFId = 0;
        optionsIdArray = [];
        $('#optionTFContainer').text('');

        for(var i = 0; i < questObj.options.length; i++) {
            optionTFId = optionTFId + 1;
            var theAnsOpt = questObj.options[i]['option'];
            var newOptionTF = '<div id="optionTFDivx'+optionTFId+'" style="margin-bottom: 10px;"><input value="'+theAnsOpt+'" style="width: 206px;outline: none;" id="optionTFx'+optionTFId+'" type="text" placeholder="Answer option" class="tf" />&nbsp;<a href="javascript:" ng-click="removeOptionTFWithId(\'x'+optionTFId+'\')"><img src="images/del_btn.png" /></a></div>';
            $('#optionTFContainer').append($compile(newOptionTF)($scope));

            optionsIdArray.push('x'+optionTFId);
            if(optionsIdArray.length > 0) {
                $('#answerDiv').show();
            } else {
                $('#answerDiv').hide();
            }



        }

        $scope.answerIdOptions = [{ name: 'Select Answer', value: '-' }];
        for(var i = 0; i < optionsIdArray.length; i++) {
            var val = i + 1;
            var entry = { name: 'Option ' + val, value: val };
            $scope.answerIdOptions.push(entry);
        }


    }

});



//SURVEY CONTROLLERS
app.controller('ViewSurveysCtrl', function($scope, $http, $routeParams) {

    var loadList = function () {
        $scope.userId = $routeParams.userId;
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchSurveys/" + $routeParams.userId)
            .success(function (response) {
                //console.log(response);
                $scope.quizArray = response['data'];
                $scope.hideLoader();
            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                //alert(response);
            });
    }

    loadList()

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    //Activate Method
    $scope.activateQuiz = function(theId) {

        w2confirm({
            msg          : 'Do you want to activate this survey?',
            title        : w2utils.lang('Activate Survey'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Activate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doActivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doActivate = function(theId) {

        $scope.showLoaderWithMsg('Activating...');
        $http.get("https://www.cloud.myasanka.com/content/api/activateSurvey/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

    //Deactivate Method
    $scope.deactivateQuiz = function(theId) {

        w2confirm({
            msg          : 'Do you want to deactivate this survey?',
            title        : w2utils.lang('Deactivate Survey'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Deactivate',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDeactivate(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doActivate
    $scope.doDeactivate = function(theId) {

        $scope.showLoaderWithMsg('Deactivating...');
        $http.get("https://www.cloud.myasanka.com/content/api/deactivateSurvey/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }


    //Delete Method
    $scope.deleteQuiz = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this survey? This action is irreversible.',
            title        : w2utils.lang('Delete Survey'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {

        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteSurvey/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

});

app.controller('NewSurveyCtrl', function($scope, $http, $location, $routeParams) {

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }


    $http.get("https://www.cloud.myasanka.com/content/api/fetchSettingsClasses/"+$routeParams.userId)
        .success(function(response) {
            $scope.classOptions = response['data'];
            $scope.hideLoader();
        })
        .error(function(response) {
            $scope.hideLoader();
            showAlert('Oops!','Operation failed. Please try again.',280,140);
        });

    //submit button
    $scope.addSurvey = function () {

        if($scope.theTitle.length > 0) {

            $scope.showLoaderWithMsg('Please wait...');
            var data = {'userId': $scope.userId, 'theTitle': $scope.theTitle, 'theDescription': $scope.theDescription, 'theClass': $scope.theClass};
            var payLoad = JSON.stringify(data);
            $http.post("https://www.cloud.myasanka.com/content/api/addSurvey", payLoad).
            success(function(response) {
                //console.log(response);
                if(response['responseCode'] == 1) {
                    $location.path('/add-survey-questions/'+$scope.userId+'/'+response.quizId);
                } else {
                    $scope.hideLoader();
                    alert(response['message']);
                }

            })
                .error(function(response) {
                    $scope.hideLoader();
                    showAlert('Oops!','Operation failed. Please try again.',280,140);
                });

        } else {
            showAlert('Missing Input','Please enter title.',280,140);
        }
    }


});

app.controller('AddSurveyQuestionsCtrl', function($scope, $http, $location, $routeParams, $compile) {

    $scope.userId = $routeParams.userId;
    $scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

    $http.get("https://www.cloud.myasanka.com/content/api/fetchSurveyInfo/" + $routeParams.quizId)
        .success(function (response) {
            //console.log(response);
            $scope.surveyInfo = response['data'][0];
            $scope.hideLoader();
        })
        .error(function (response) {
            $scope.hideLoader();
            showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
            //alert(response);
        });


    var loadList = function () {
        $scope.userId = $routeParams.userId;
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchSurveyQuestions/" + $routeParams.userId + "/" + $routeParams.quizId)
            .success(function (response) {
                //console.log(response);
                $scope.questionsArray = response['data'];
                $scope.totalQuestions = $scope.questionsArray.length;
                $scope.hideLoader();
            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                //alert(response);
            });

    }

    $scope.addNewQuestion = function() {
        $scope.resetForm();
        $scope.modalTitle = "New Question";
        $scope.modalBtnTitle = "Save";
        $scope.saveType = "New";
        $('#addQuestionModal').modal('show');
    }

    //add question methods
    var optionTFId = 0;
    var optionsIdArray = [];
    $('#answerDiv').hide();
    loadList();

    $scope.addOptionTF = function() {
        optionTFId += 1;
        var newOptionTF = '<div id="optionTFDivx'+optionTFId+'" style="margin-bottom: 10px;"><input style="width: 206px;outline: none;" id="optionTFx'+optionTFId+'" type="text" placeholder="Response option" class="tf" />&nbsp;<a href="javascript:" ng-click="removeOptionTFWithId(\'x'+optionTFId+'\')"><img src="images/del_btn.png" /></a></div>';
        $('#optionTFContainer').append($compile(newOptionTF)($scope));

        optionsIdArray.push('x'+optionTFId);
        if(optionsIdArray.length > 0) {
            $('#answerDiv').show();
        } else {
            $('#answerDiv').hide();
        }

    }

    $scope.removeOptionTFWithId = function(theId) {
        $('#optionTFDiv'+theId).remove();
        var theIndex = optionsIdArray.indexOf(theId);
        if (theIndex > -1) {
            optionsIdArray.splice(theIndex,1);
        }
        if(optionsIdArray.length <= 0) {
            $('#answerDiv').hide();
        }
    }

    //submit button
    $scope.saveQuestion = function () {
        var theQuestion = $('#theQuestion').val();
        if(theQuestion <= 0) {
            showAlert('Missing Input', 'Please enter the question.', 280, 140);
        } else if(optionsIdArray.length < 2) {
            showAlert('Missing Input', 'Please add at least two response options.', 280, 140);
        } else {

            $('#addQuestionModal').modal('hide');
            var optionsArray = [];
            for(i in optionsIdArray) {
                var index = parseInt(i) + 1;
                var j = optionsIdArray[i];
                var theAnswer = $('#optionTF'+j).val();
                if(theAnswer.length > 0) {
                    var newOptionObj = {'ind':index, 'option':theAnswer};
                    optionsArray.push(newOptionObj);
                }

            }

            if($scope.saveType == "New") {
                var data = {userId:$scope.userId, quizId:$routeParams.quizId, theQuestion:$scope.question, options:optionsArray};
                $scope.doAddQuestion(data);
            } else {
                var data = {questId:$scope.questionId, theQuestion:$scope.question, options:optionsArray};
                $scope.doUpdateQuestion(data);
            }

        }
    }

    $scope.doAddQuestion = function(data) {
        $scope.showLoaderWithMsg('Please wait...');
        var payLoad = JSON.stringify(data);
        $http.post("https://www.cloud.myasanka.com/content/api/addSurveyQuestion", payLoad).success(function (response) {
            //console.log(response);
            if (response['responseCode'] == 1) {
                $scope.hideLoader();
                $scope.resetForm();
                loadList();

            } else {
                $scope.hideLoader();
                alert(response['message']);
            }

        })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
            });
    }

    $scope.doUpdateQuestion = function(data) {
        $scope.showLoaderWithMsg('Please wait...');
        var payLoad = JSON.stringify(data);
        $http.post("https://www.cloud.myasanka.com/content/api/updateSurveyQuestion", payLoad).success(function (response) {
            //console.log(response);
            if (response['responseCode'] == 1) {
                $scope.hideLoader();
                $scope.resetForm();
                loadList();

            } else {
                $scope.hideLoader();
                alert(response['message']);
            }

        })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
            });
    }

    $scope.resetForm = function () {
        $('#theQuestion').val('');
        $('#optionTFContainer').text('');
        optionTFId = 0;
        optionsIdArray = [];
        $('#answerDiv').hide();
    }

    //Delete Method
    $scope.deleteQuestion = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this question? This action is irreversible.',
            title        : w2utils.lang('Delete Question'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

    //doDelete
    $scope.doDelete = function(theId) {
        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteSurveyQuestion/"+theId+"/"+$scope.userId+"/"+$routeParams.quizId)
            .success(function(response) {
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }

    //Edit Question Method
    $scope.editQuestion = function(questObj) {

        $('#addQuestionModal').modal('show');
        $scope.modalTitle = "Edit Question";
        $scope.modalBtnTitle = "Save Changes";
        $scope.saveType = "Edit";
        $scope.question = questObj.question;
        $scope.questionId = questObj.id;
        $("#theQuestion").val(questObj.question);

        //answer options
        optionTFId = 0;
        optionsIdArray = [];
        $('#optionTFContainer').text('');

        for(var i = 0; i < questObj.options.length; i++) {
            optionTFId = optionTFId + 1;
            var theAnsOpt = questObj.options[i]['option'];
            var newOptionTF = '<div id="optionTFDivx'+optionTFId+'" style="margin-bottom: 10px;"><input value="'+theAnsOpt+'" style="width: 206px;outline: none;" id="optionTFx'+optionTFId+'" type="text" placeholder="Answer option" class="tf" />&nbsp;<a href="javascript:" ng-click="removeOptionTFWithId(\'x'+optionTFId+'\')"><img src="images/del_btn.png" /></a></div>';
            $('#optionTFContainer').append($compile(newOptionTF)($scope));

            optionsIdArray.push('x'+optionTFId);
            if(optionsIdArray.length > 0) {
                $('#answerDiv').show();
            } else {
                $('#answerDiv').hide();
            }
        }




    }

});

//PROFILE CONTROLLERS
app.controller('ProfileCtrl', function($scope, $http, $routeParams) {

    $scope.currentPass = "";
    $scope.newPass = "";
    $scope.confirmPass = "";

    var loadList = function () {
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchProfileInfo/"+$routeParams.userId)
            .success(function(response) {
                var profileData = response['data'];
                $scope.profName = profileData.account_name;
                $scope.profAddress = profileData.address;
                $scope.profCity = profileData.city;
                $scope.profCountry = profileData.country;
                $scope.profEmail = profileData.email;
                $scope.profPhone = profileData.phone;
                $scope.profManager = profileData.manager;
                $scope.logoFilepath = profileData.logo;
                $scope.updateUserLabels(profileData.manager, profileData.account_name, profileData.logo);
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });

        $http.get("https://www.cloud.myasanka.com/content/api/fetchDeviceList/"+$routeParams.userId)
            .success(function(response) {
                //console.log(response);
                $scope.deviceListArray = response['data'];
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }

    loadList();

    $scope.updateInfo = function() {
        if($scope.profName == "" || $scope.profAddress == "" || $scope.profCity == "" || $scope.profCountry == "" || $scope.profPhone == "" || $scope.profManager == "") {
            showAlert('Missing Input', 'One or more fields may be empty.', 280, 140);
        } else {
            $scope.showLoaderWithMsg('Updating data...');
            var data = {userId:$routeParams.userId, accountName:$scope.profName, address:$scope.profAddress, city:$scope.profCity, country:$scope.profCountry, phone:$scope.profPhone, manager:$scope.profManager};
            var payLoad = JSON.stringify(data);
            $http.post("https://www.cloud.myasanka.com/content/api/updateProfile", payLoad).success(function (response) {
                //console.log(response);
                if (response['responseCode'] == 1) {
                    $scope.hideLoader();
                    loadList();
                    showAlert('Success', response['message'], 280, 140);
                } else {
                    $scope.hideLoader();
                    showAlert('Oops!', response['message'], 280, 140);
                }

            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
            });
        }

    }

    $scope.updatePassword = function() {
        if($scope.currentPass == "" || $scope.newPass == "" || $scope.confirmPass == "") {
            showAlert('Missing Input', 'One or more password fields may be empty.', 280, 140);
        } else {
            if($scope.newPass != $scope.confirmPass) {
                showAlert('Password Mismatch', 'Your passwords do not match.', 280, 140);
            } else {
                $scope.showLoaderWithMsg('Updating password...');
                var data = {userId:$routeParams.userId, currentPass:$scope.currentPass, newPass:$scope.newPass};
                var payLoad = JSON.stringify(data);
                $http.post("https://www.cloud.myasanka.com/content/api/updateUserPassword", payLoad).success(function (response) {
                    //console.log(response);
                    if (response['responseCode'] == 1) {
                        $scope.hideLoader();
                        $scope.currentPass = "";
                        $scope.newPass = "";
                        $scope.confirmPass = "";
                        showAlert('Success', response['message'], 280, 140);
                    } else {
                        $scope.hideLoader();
                        showAlert('Oops!', response['message'], 280, 140);
                    }

                })
                    .error(function (response) {
                        $scope.hideLoader();
                        showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                    });
            }

        }

    }


    $scope.openPhotoEditor = function () {
        $('#cropModal').modal('show');
    }

    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type:mimeString});
    }

    $scope.updatePhoto = function (data) {
        ////console.log(data);
        $('#cropModal').modal('hide');
        var blob = dataURItoBlob(data);

        $scope.showLoaderWithMsg('Updating logo...')
        var fd = new FormData()
        fd.append('theFile', blob);
        fd.append('userId', $scope.userId);
        fd.append('type', 'logo');
        $http.post('https://www.cloud.myasanka.com/content/api/uploadProfile.php', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function (response) {
                var filePath = 'https://www.cloud.myasanka.com/'+ response['filename'];
                var data = {userId: $scope.userId, filename: filePath};
                //console.log(response);
                if (response['responseCode'] == 1) {
                    $scope.updatePhotoInfo(data);
                } else {
                    $scope.hideLoader();
                    showAlert('Oops!', response['message'], 280, 140);
                }

            })
            .error(function (response) {
                $scope.hideLoader();
                showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
            });

    }


    $scope.userId = $routeParams.userId;
    /*$scope.filesChanged = function (element) {
        $scope.files = element.files
        $scope.$apply();
    }

    $scope.updateLogo = function (theFile) {
        //console.log(theFile.files)
        if(theFile.files.length == 0) {
            showAlert('Missing Input','Please select a file to upload.',280,140);
        } else {
            var fileFormats = ['jpg', 'gif', 'png', 'jpeg'];
            var fileName = theFile.files[0].name.toLowerCase();
            var fileExt = fileName.substr(fileName.lastIndexOf('.')+1);
            if (fileFormats.indexOf(fileExt) == -1) {
                showAlert('Invalid File Format', 'The file you selected is not an image file format.', 300, 180);
            } else {

                $scope.showLoaderWithMsg('Updating logo...')
                var fd = new FormData()
                fd.append('theFile', theFile.files[0]);
                fd.append('userId', $scope.userId);
                fd.append('type', 'logo');
                $http.post('https://www.cloud.myasanka.com/content/api/upload.php', fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                    .success(function (response) {
                        var filePath = 'https://www.cloud.myasanka.com/'+ response['filename'];
                        var data = {userId: $scope.userId, filename: filePath};
                        //console.log(response);
                        if (response['responseCode'] == 1) {
                            $scope.updatePhotoInfo(data);
                        } else {
                            $scope.hideLoader();
                            showAlert('Oops!', response['message'], 280, 140);
                        }

                    })
                    .error(function (response) {
                        $scope.hideLoader();
                        showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                    });

            }
        }
    }*/

    //updatePhotoInfo
    $scope.updatePhotoInfo = function(data){
        $scope.showLoaderWithMsg('Saving data...')
        var payLoad = JSON.stringify(data);
        $http.post("https://www.cloud.myasanka.com/content/api/updatePhotoInfo", payLoad).
        success(function(response) {
            //console.log(response);
            if(response['responseCode'] == 1) {

                $scope.logoFilepath = response['filepath'];
                loadList();
                $scope.hideLoader();
                //console.log(response);

            } else {
                $scope.hideLoader();
                showAlert('Oops!',response['message'],280,140);
            }

        })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }


});






//SETTINGS CONTROLLERS
app.controller('SettingsCtrl', function($scope, $http, $routeParams) {

    var category = 0;

    var loadList = function () {
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/fetchSettingsCategories/"+$routeParams.userId)
            .success(function(response) {
                //console.log(response);
                $scope.catArray = response['catData'];
                $scope.subCat1Array = response['subCat1Data'];
                $scope.subCat2Array = response['subCat2Data'];
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });
    }

    loadList();

    $scope.openAddModal = function(cat) {
        category = cat;
        if(cat == 1) {
            $scope.addModalTitle = "New Category";
        } else if(cat == 2) {
            $scope.addModalTitle = "New Subcategory 1";
        } else {
            $scope.addModalTitle = "New Subcategory 2";
        }
        $('#addModal').modal('show');

    }

    $scope.addData = function() {
        if($scope.addTitle == undefined) {
            showAlert('Title Required', 'Please enter a title for your entry.', 280, 140);
        } else {
            $('#addModal').modal('hide');
            $scope.showLoaderWithMsg('Adding data...');
            var data = {userId:$routeParams.userId, title:$scope.addTitle, cat:category};
            var payLoad = JSON.stringify(data);
            $http.post("https://www.cloud.myasanka.com/content/api/addCategory", payLoad).success(function (response) {
                //console.log(response);
                if (response['responseCode'] == 1) {
                    $scope.addTitle = "";
                    $scope.hideLoader();
                    loadList();
                } else {
                    $scope.hideLoader();
                    showAlert('Oops!', response['message'], 280, 140);
                }

            })
                .error(function (response) {
                    $scope.hideLoader();
                    showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                });
        }

    }

    //Edit Class Method
    $scope.openEditModal = function(theObj) {
        $scope.editCatId = theObj.id;
        $scope.editTitle = theObj.name;
        if(theObj.type == 1) {
            $scope.editModalTitle = "Edit Category";
        } else if(theObj.type == 2) {
            $scope.editModalTitle = "Edit Subcategory 1";
        } else {
            $scope.editModalTitle = "Edit Subcategory 2";
        }

        $('#editModal').modal('show');


    }


    $scope.updateData = function() {
        if($scope.editTitle == "") {
            showAlert('Title Required', 'Please enter a title for your entry.', 280, 140);
        } else {
            $('#editModal').modal('hide');
            $scope.showLoaderWithMsg('Updating data...');
            var data = {userId:$routeParams.userId, title:$scope.editTitle, theId:$scope.editCatId};
            var payLoad = JSON.stringify(data);
            $http.post("https://www.cloud.myasanka.com/content/api/updateCategory", payLoad).success(function (response) {
                //console.log(response);
                if (response['responseCode'] == 1) {
                    $scope.editedTitle = "";
                    $scope.hideLoader();
                    loadList();
                } else {
                    $scope.hideLoader();
                    showAlert('Oops!', response['message'], 280, 140);
                }

            })
                .error(function (response) {
                    $scope.hideLoader();
                    showAlert('Oops!', 'Operation failed. Please try again.', 280, 140);
                });
        }

    }

    //Delete Method
    $scope.deleteCategory = function(theId) {

        w2confirm({
            msg          : 'Do you want to delete this item? This action is irreversible.',
            title        : w2utils.lang('Delete Item'),
            width        : 280,       // width of the dialog
            height       : 140,       // height of the dialog
            yes_text     : 'Delete',     // text for yes button
            yes_class    : '',        // class for yes button
            yes_style    : '',        // style for yes button
            yes_callBack : function () { $scope.doDelete(theId); },      // callBack for yes button
            no_text      : 'Cancel',      // text for no button
            no_class     : '',        // class for no button
            no_style     : '',        // style for no button
            no_callBack  : null,      // callBack for no button
            callBack     : null       // common callBack
        });
    }

//doDelete
    $scope.doDelete = function(theId) {

        $scope.showLoaderWithMsg('Deleting...');
        $http.get("https://www.cloud.myasanka.com/content/api/deleteCategory/"+theId)
            .success(function(response) {
                //console.log(response);
                loadList();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
            });


    }


});

//STATS CONTROLLERS
app.controller('StatsCtrl', function($scope, $rootScope, $http, $routeParams) {

    $scope.userId = $routeParams.userId;
    var loadList = function () {
        $scope.showLoaderWithMsg('Loading data...');
        $http.get("https://www.cloud.myasanka.com/content/api/stats/fetchAll/"+$routeParams.userId+"/"+$routeParams.deviceId)
            .success(function(response) {
                //console.log(response);
                $scope.deviceName = response['data']['deviceName'];
                $scope.deviceLocation = response['data']['deviceLocation'];
                $scope.deviceUsers = response['data']['deviceUsers'];
                $scope.userActivities = response['data']['userActivities'];
                $scope.usageStats = response['data']['usageStats'];
                setupUploadChart(response['data']['uploadFrequency']);

                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
                //alert(response);
            });
    }

    loadList();

    var setupUploadChart = function (chartData) {

        new Morris.Bar({
            element: 'sync-chart',
            resize: true,
            data: chartData,
            xkey: 'date',
            ykeys: ['count'],
            labels: ['Activities'],
            barColors: ['#00c6c4'],
            hideHover: 'auto'
        });
    }


    $scope.openStatsDetail = function(section, grade) {
        $('#usersTable').show();
        $('#userActivityTable').hide();
        $('#loaderDiv').hide();
        $scope.statTitle = grade + ": " + section;
        $scope.section = section;
        $scope.showLoaderWithMsg('Please wait...');
        $http.get("https://www.cloud.myasanka.com/content/api/stats/class/"+$routeParams.userId+"/"+$routeParams.deviceId+"/"+section+"/"+grade)
            .success(function(response) {
                //console.log(response);
                $scope.userAccessArray = response['data'];
                $('#statsModal').modal('show');
                $scope.hideLoader();
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
                //alert(response);
            });
    }

    $scope.viewUserActivity = function(username) {
        $('#usersTable').hide();
        $('#userActivityTable').hide();
        $('#loaderDiv').show();
        $http.get("https://www.cloud.myasanka.com/content/api/stats/user/"+$routeParams.userId+"/"+$routeParams.deviceId+"/"+username+"/"+$scope.section)
            .success(function(response) {
                //console.log(response);
                $('#backBtn').show();
                $('#closeBtn').hide();
                $('#userActivityTable').show();
                $('#loaderDiv').hide();
                $scope.userActivityArray = response['data'];
            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
                //alert(response);
            });
    }


    $scope.goBack = function () {
        $('#backBtn').hide();
        $('#closeBtn').show();
        $('#usersTable').show();
        $('#userActivityTable').hide();
        $('#loaderDiv').hide();
    }


    $scope.viewAllUserActivity = function(username) {
        $scope.showLoaderWithMsg('Please wait...');
        $scope.statTitle = username+"'s Usage Stats";
        $http.get("https://www.cloud.myasanka.com/content/api/stats/user/"+$routeParams.userId+"/"+$routeParams.deviceId+"/"+username)
            .success(function(response) {
                $scope.userActivityArray = response['data'];
                $('#backBtn').hide();
                $('#closeBtn').show();
                $('#userActivityTable').show();
                $('#usersTable').hide();
                $scope.hideLoader();
                $('#statsModal').modal('show');

            })
            .error(function(response) {
                $scope.hideLoader();
                showAlert('Oops!','Operation failed. Please try again.',280,140);
                //alert(response);
            });
    }

});






