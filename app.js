var app = angular.module("minhaApp", []);

/* Declarando um controller para nossa aplicação */
app.controller("meuController", meuController);

/* Criando a função que será executada pelo controller */
function meuController($scope, $http) {
    $scope.timeDetalhes;


    $scope.getTimes = function () {
        $http.get("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Brazilian%20Serie%20A")
            .success(function (dados) {
                $scope.times = dados.teams;
                console.log($scope.times);

            });





    };
    $scope.lookupTime = function (codTime) {
        $http.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=" + codTime)
            .success(function (dados) {
                $scope.timeDetalhes = dados.teams[0];
                console.log($scope.timeDetalhes);
            });
        $http.get("https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=" + codTime)
            .success(function (dados) {
                $scope.calendario = dados.results;
                console.log($scope.calendario);
            });
    };

    $scope.pesquisaTime = function (nomeTime) {
        $http.get("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + nomeTime + "&s=Soccer")
            .success(function (dados) {
                $scope.pesquisa = dados.teams;

            })
    };

    $scope.carregarDados = function () {
        $scope.getTimes();
        $scope.lookupTime(134281);



    };
}