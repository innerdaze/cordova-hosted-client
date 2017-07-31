/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License") you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
      this.bindEvents()
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready')

        const targetUrl = "http://192.168.16.129:5000/"
        app.isServerReachable(targetUrl, function(error, success) {
          if (error) {
            console.error(error)
            return
          }

          app.loadContents(targetUrl, success)
        })
    },
    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id)
        var listeningElement = parentElement.querySelector('.listening')
        var receivedElement = parentElement.querySelector('.received')

        listeningElement.setAttribute('style', 'display:none;')
        receivedElement.setAttribute('style', 'display:block;')

        console.log('Received Event: ' + id)
    },
    loadContents: function(targetUrl, serverIsReachable) {

      // If device is online and server in reachable
      // we should clear the cache to get potential updates
      if (
        navigator && navigator.connection.type !== Connection.NONE &&
        serverIsReachable
      ) {
        app.clearCache()
      }

      const bkpLink = document.getElementById("bkpLink")
      bkpLink.setAttribute("href", targetUrl)
      bkpLink.text = targetUrl

      // Here, we redirect to the web site.
      window.location.replace(targetUrl)
      // navigator.app.loadUrl(targetUrl)
    },
    clearCache: function() {
      var success = function(status) {
        // alert('Message: ' + status)
      }
      var error = function(status) {
        alert('Error: ' + status)
      }
      window.CacheClear(success, error)
    },
    isServerReachable: function(address, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', address + '?' + Math.random());
      xhr.onload = function() {
        if (xhr.status === 200) {
          callback(null, true)
        }
        else {
          callback(null, false)
        }
      };
      xhr.onerror = function() {
        callback(null, false)
      }
      xhr.send();
    }
}

app.initialize()
