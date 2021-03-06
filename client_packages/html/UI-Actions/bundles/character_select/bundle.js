(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var newCharacterHtml = `
    <div class="card animated fadeIn" id="FadeInJS" style="min-height: 270px;">
        <div class="card-body elegant-color-dark p-0">
            <button type="button" class="btn-createCharacter btn elegant-color text-white btn-block waves-effect waves-light" style="min-height: 270px">
                <i class="fas fa-user fa-5x mb-3"></i>
                <br><span class="h6 lead">Create<br>Character</span>
            </button>
        </div>
    </div>`;

var lockedCharacterHtml = `
    <div class="card animated fadeIn" id="FadeInJS" style="min-height: 270px;">
        <div class="card-body elegant-color-dark p-0">
            <button type="button" class="btn-lockedChar btn elegant-color text-white btn-block disabled" style="min-height: 270px">
                <i class="fas fa-user-lock fa-5x mb-3"></i>
                <br><span class="h6 lead">Character<br>Locked</span>
            </button>
        </div>
    </div>`;

    
$('body').on('click', '.btn-createCharacter', function () {
    mp.trigger('characterselection:createcharacter');
});

$("body").on('click', ".btn-SelectChar", function () {
    var index = $(this).attr('value');
    mp.trigger('characterselection:characterselected', index);
});

var x = 0;
var classNames = [".firstcharacter", ".secondcharacter", ".thirdcharacter"];

function LoadCharacter(characterDetails, extracharacter)
{ 
    if(x <= 1)
    {   
        if(characterDetails != null)
        {
            $(`${classNames[x]}`).append(`           
                <div class="card animated fadeIn" id="FadeInJS" style="min-height: 270px;">
                    <div class="card-header elegant-color" style="border-bottom: solid 4px #337ab7;">
                        <h6 class="card-title text-white lead mb-1">${characterDetails.FirstName} ${characterDetails.LastName}</h6>
                        <h6 class="grey-text text-monospace mb-0">${characterDetails.Faction}</h6>
                    </div>
                    <div class="card-body elegant-color-dark p-1 text-monospace">

                        <div class="d-flex mb-1 grey-text">
                        <div class="mr-auto p-2">Experience</div>
                        <div class="p-2">${characterDetails.Experience}</div>
                        </div>
                        <div class="d-flex mb-1 grey-text">
                        <div class="mr-auto p-2">Health</div>
                        <div class="p-2">${characterDetails.Health}</div>
                        </div>
                        <div class="d-flex mb-1 grey-text">
                        <div class="mr-auto p-2">Money</div>
                        <div class="p-2">${characterDetails.Money}</div>
                        </div>
                        
                    </div>
                    <div class="card-footer elegant-color p-0">
                        <!-- Card Footer -->
                        <button type="button" class="btn-SelectChar btn unique-color text-white m-0 btn-block waves-effect waves-light" value="${x}" ">
                            <i class="fas fa-hand-pointer mr-1"></i>Select
                        </button>
                    </div>
                </div>
            `);
        }
        else
        {
            $(`${classNames[x]}`).append(newCharacterHtml);
        }
    }
    else
    {
        if(characterDetails != null & extracharacter == true)
        {
            $(`${classNames[x]}`).append(`           
                <div class="card animated fadeIn" id="FadeInJS" style="min-height: 270px;">
                    <div class="card-header elegant-color" style="border-bottom: solid 4px #337ab7;">
                        <h6 class="card-title text-white lead mb-1">${characterDetails.FirstName} ${characterDetails.LastName}</h6>
                        <h6 class="grey-text text-monospace mb-0">${characterDetails.Faction}</h6>
                    </div>
                    <div class="card-body elegant-color-dark p-1 text-monospace">

                        <div class="d-flex mb-1 grey-text">
                        <div class="mr-auto p-2">Experience</div>
                        <div class="p-2">${characterDetails.Experience}</div>
                        </div>
                        <div class="d-flex mb-1 grey-text">
                        <div class="mr-auto p-2">Health</div>
                        <div class="p-2">${characterDetails.Health}</div>
                        </div>
                        <div class="d-flex mb-1 grey-text">
                        <div class="mr-auto p-2">Money</div>
                        <div class="p-2">${characterDetails.Money}</div>
                        </div>
                        
                    </div>
                    <div class="card-footer elegant-color p-0">
                        <!-- Card Footer -->
                        <button type="button" class="btn-SelectChar btn unique-color text-white m-0 btn-block waves-effect waves-light" value="${x}" ">
                            <i class="fas fa-hand-pointer mr-1"></i>Select
                        </button>
                    </div>
                </div>
            `);
        }
        else if (characterDetails == null && extracharacter == true)
        {
            $(`${classNames[x]}`).append(newCharacterHtml);
        }
        else if (characterDetails == null && extracharacter == false)
        {
            $(`${classNames[x]}`).append(lockedCharacterHtml);
        }
    }
    x++;
}

module.exports = {LoadCharacter: LoadCharacter};




},{}]},{},[1])(1)
});
