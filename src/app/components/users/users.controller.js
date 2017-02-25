(function () {
  'use strict';

  angular
    .module('dashboard-exercise')
    .controller('UsersController', usersController);

  /* @ngInject */
  function usersController($scope) {

    var self = this;
    var USER_TYPE = 'Business Customer';
    var users = [
      {
        id: '#11111111',
        name: 'Alexander Leichter',
        senderName: 'Alexander Leichter',
        email: 'alexander@getbyrd.com',
        type: USER_TYPE
      },
      {
        id: '#22222222',
        name: 'Sebastian Mach',
        senderName: 'Sebastian Mach',
        email: 'sebastian@getbyrd.com',
        type: USER_TYPE
      },
      {
        id: '#33333333',
        name: 'Petra Dobrocka',
        senderName: 'Petra Dobrocka',
        email: 'petra@getbyrd.com',
        type: USER_TYPE
      },
      {
        id: '#44444444',
        name: 'Christoph Krofitsch',
        senderName: 'Christoph Krofitsch',
        email: 'christoph@getbyrd.com',
        type: USER_TYPE
      },
      {
        id: '#55555555',
        name: 'Michael Innerhofer',
        senderName: 'Michael Innerhofer',
        email: 'michael@getbyrd.com',
        type: USER_TYPE
      }
    ];

    self.searchUser = searchUser;

    function updateCheckboxes() {
      var btSelectAll = $('input[name=btSelectAll]');
      btSelectAll.prop('id', 'selectAll');
      $('<label for="selectAll"></label>').insertAfter(btSelectAll);

      $('input[name=btSelectItem]').each(function (index) {
        var checkboxId = 'user-' + index;
        $(this).prop('id', checkboxId);
        $('<label for="' + checkboxId + '"></label>').insertAfter(this);
      });
    }

    function searchUser() {
      var searchRegex = new RegExp(self.filter, 'i');
      $('#users-tbl').bootstrapTable('load', {
        data: users.filter(function (user) {
          return user.id.search(searchRegex) >= 0 ||
            user.name.search(searchRegex) >= 0 ||
            user.senderName.search(searchRegex) >= 0 ||
            user.email.search(searchRegex) >= 0 ||
            user.type.search(searchRegex) >= 0;
        })
      });

      updateCheckboxes();
    }

    $('#users-tbl').bootstrapTable({
      data: users
    });

    updateCheckboxes();
  }

})();
