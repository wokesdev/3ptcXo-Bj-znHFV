/*! chatbro - v1.0.1 - 2022-11-19 */ function Emojione(a) {
    this.emojioneList = {
        ":grin:": { unicode: ["1f601"], isCanonical: !0 },
        ":joy:": { unicode: ["1f602"], isCanonical: !0 },
        ":smiley:": { unicode: ["1f603"], isCanonical: !0 },
        ":smile:": { unicode: ["1f604"], isCanonical: !0 },
        ":sweat_smile:": { unicode: ["1f605"], isCanonical: !0 },
        ":laughing:": { unicode: ["1f606"], isCanonical: !0 },
        ":slightly_frowning_face:": { unicode: ["1f641"], isCanonical: !1 },
        ":slight_smile:": { unicode: ["1f642"], isCanonical: !0 },
        ":satisfied:": { unicode: ["1f606"], isCanonical: !1 },
        ":grinning:": { unicode: ["1f600"], isCanonical: !0 },
        ":innocent:": { unicode: ["1f607"], isCanonical: !0 },
        ":smiling_imp:": { unicode: ["1f608"], isCanonical: !0 },
        ":sunglasses:": { unicode: ["1f60e"], isCanonical: !0 },
        ":neutral_face:": { unicode: ["1f610"], isCanonical: !0 },
        ":expressionless:": { unicode: ["1f611"], isCanonical: !0 },
        ":confused:": { unicode: ["1f615"], isCanonical: !0 },
        ":kissing:": { unicode: ["1f617"], isCanonical: !0 },
        ":kissing_smiling_eyes:": { unicode: ["1f619"], isCanonical: !0 },
        ":stuck_out_tongue:": { unicode: ["1f61b"], isCanonical: !0 },
        ":worried:": { unicode: ["1f61f"], isCanonical: !0 },
        ":frowning:": { unicode: ["1f626"], isCanonical: !0 },
        ":anguished:": { unicode: ["1f627"], isCanonical: !0 },
        ":grimacing:": { unicode: ["1f62c"], isCanonical: !0 },
        ":open_mouth:": { unicode: ["1f62e"], isCanonical: !0 },
        ":hushed:": { unicode: ["1f62f"], isCanonical: !0 },
        ":sleeping:": { unicode: ["1f634"], isCanonical: !0 },
        ":no_mouth:": { unicode: ["1f636"], isCanonical: !0 },
        ":wink:": { unicode: ["1f609"], isCanonical: !0 },
        ":blush:": { unicode: ["1f60a"], isCanonical: !0 },
        ":yum:": { unicode: ["1f60b"], isCanonical: !0 },
        ":relieved:": { unicode: ["1f60c"], isCanonical: !0 },
        ":heart_eyes:": { unicode: ["1f60d"], isCanonical: !0 },
        ":smirk:": { unicode: ["1f60f"], isCanonical: !0 },
        ":unamused:": { unicode: ["1f612"], isCanonical: !0 },
        ":sweat:": { unicode: ["1f613"], isCanonical: !0 },
        ":pensive:": { unicode: ["1f614"], isCanonical: !0 },
        ":confounded:": { unicode: ["1f616"], isCanonical: !0 },
        ":kissing_heart:": { unicode: ["1f618"], isCanonical: !0 },
        ":kissing_closed_eyes:": { unicode: ["1f61a"], isCanonical: !0 },
        ":stuck_out_tongue_winking_eye:": { unicode: ["1f61c"], isCanonical: !0 },
        ":stuck_out_tongue_closed_eyes:": { unicode: ["1f61d"], isCanonical: !0 },
        ":disappointed:": { unicode: ["1f61e"], isCanonical: !0 },
        ":angry:": { unicode: ["1f620"], isCanonical: !0 },
        ":rage:": { unicode: ["1f621"], isCanonical: !0 },
        ":cry:": { unicode: ["1f622"], isCanonical: !0 },
        ":persevere:": { unicode: ["1f623"], isCanonical: !0 },
        ":triumph:": { unicode: ["1f624"], isCanonical: !0 },
        ":disappointed_relieved:": { unicode: ["1f625"], isCanonical: !0 },
        ":fearful:": { unicode: ["1f628"], isCanonical: !0 },
        ":weary:": { unicode: ["1f629"], isCanonical: !0 },
        ":sleepy:": { unicode: ["1f62a"], isCanonical: !0 },
        ":tired_face:": { unicode: ["1f62b"], isCanonical: !0 },
        ":sob:": { unicode: ["1f62d"], isCanonical: !0 },
        ":cold_sweat:": { unicode: ["1f630"], isCanonical: !0 },
        ":scream:": { unicode: ["1f631"], isCanonical: !0 },
        ":astonished:": { unicode: ["1f632"], isCanonical: !0 },
        ":flushed:": { unicode: ["1f633"], isCanonical: !0 },
        ":dizzy_face:": { unicode: ["1f635"], isCanonical: !0 },
        ":mask:": { unicode: ["1f637"], isCanonical: !0 },
        ":smile_cat:": { unicode: ["1f638"], isCanonical: !0 },
        ":joy_cat:": { unicode: ["1f639"], isCanonical: !0 },
        ":smiley_cat:": { unicode: ["1f63a"], isCanonical: !0 },
        ":bookmark_tabs:": { unicode: ["1f4d1"], isCanonical: !0 },
        ":heart_eyes_cat:": { unicode: ["1f63b"], isCanonical: !0 },
        ":smirk_cat:": { unicode: ["1f63c"], isCanonical: !0 },
        ":kissing_cat:": { unicode: ["1f63d"], isCanonical: !0 },
        ":pouting_cat:": { unicode: ["1f63e"], isCanonical: !0 },
        ":straight_ruler:": { unicode: ["1f4cf"], isCanonical: !0 },
        ":crying_cat_face:": { unicode: ["1f63f"], isCanonical: !0 },
        ":scream_cat:": { unicode: ["1f640"], isCanonical: !0 },
        ":no_good:": { unicode: ["1f645"], isCanonical: !0 },
        ":ok_woman:": { unicode: ["1f646"], isCanonical: !0 },
        ":bow:": { unicode: ["1f647"], isCanonical: !0 },
        ":see_no_evil:": { unicode: ["1f648"], isCanonical: !0 },
        ":hear_no_evil:": { unicode: ["1f649"], isCanonical: !0 },
        ":speak_no_evil:": { unicode: ["1f64a"], isCanonical: !0 },
        ":raising_hand:": { unicode: ["1f64b"], isCanonical: !0 },
        ":raised_hands:": { unicode: ["1f64c"], isCanonical: !0 },
        ":person_frowning:": { unicode: ["1f64d"], isCanonical: !0 },
        ":person_with_pouting_face:": { unicode: ["1f64e"], isCanonical: !0 },
        ":pray:": { unicode: ["1f64f"], isCanonical: !0 },
        ":rocket:": { unicode: ["1f680"], isCanonical: !0 },
        ":railway_car:": { unicode: ["1f683"], isCanonical: !0 },
        ":bullettrain_side:": { unicode: ["1f684"], isCanonical: !0 },
        ":bullettrain_front:": { unicode: ["1f685"], isCanonical: !0 },
        ":metro:": { unicode: ["1f687"], isCanonical: !0 },
        ":station:": { unicode: ["1f689"], isCanonical: !0 },
        ":bus:": { unicode: ["1f68c"], isCanonical: !0 },
        ":busstop:": { unicode: ["1f68f"], isCanonical: !0 },
        ":ambulance:": { unicode: ["1f691"], isCanonical: !0 },
        ":fire_engine:": { unicode: ["1f692"], isCanonical: !0 },
        ":police_car:": { unicode: ["1f693"], isCanonical: !0 },
        ":taxi:": { unicode: ["1f695"], isCanonical: !0 },
        ":red_car:": { unicode: ["1f697"], isCanonical: !0 },
        ":blue_car:": { unicode: ["1f699"], isCanonical: !0 },
        ":truck:": { unicode: ["1f69a"], isCanonical: !0 },
        ":ship:": { unicode: ["1f6a2"], isCanonical: !0 },
        ":speedboat:": { unicode: ["1f6a4"], isCanonical: !0 },
        ":traffic_light:": { unicode: ["1f6a5"], isCanonical: !0 },
        ":construction:": { unicode: ["1f6a7"], isCanonical: !0 },
        ":rotating_light:": { unicode: ["1f6a8"], isCanonical: !0 },
        ":triangular_flag_on_post:": { unicode: ["1f6a9"], isCanonical: !0 },
        ":door:": { unicode: ["1f6aa"], isCanonical: !0 },
        ":no_entry_sign:": { unicode: ["1f6ab"], isCanonical: !0 },
        ":smoking:": { unicode: ["1f6ac"], isCanonical: !0 },
        ":no_smoking:": { unicode: ["1f6ad"], isCanonical: !0 },
        ":bike:": { unicode: ["1f6b2"], isCanonical: !0 },
        ":walking:": { unicode: ["1f6b6"], isCanonical: !0 },
        ":mens:": { unicode: ["1f6b9"], isCanonical: !0 },
        ":womens:": { unicode: ["1f6ba"], isCanonical: !0 },
        ":restroom:": { unicode: ["1f6bb"], isCanonical: !0 },
        ":baby_symbol:": { unicode: ["1f6bc"], isCanonical: !0 },
        ":toilet:": { unicode: ["1f6bd"], isCanonical: !0 },
        ":wc:": { unicode: ["1f6be"], isCanonical: !0 },
        ":bath:": { unicode: ["1f6c0"], isCanonical: !0 },
        ":metal:": { unicode: ["1f918"], isCanonical: !0 },
        ":sign_of_the_horns:": { unicode: ["1f918"], isCanonical: !1 },
        ":kiss_ww:": { unicode: ["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469", "1f469-2764-1f48b-1f469"], isCanonical: !0 },
        ":pushpin:": { unicode: ["1f4cc"], isCanonical: !0 },
        ":couplekiss_ww:": { unicode: ["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469", "1f469-2764-1f48b-1f469"], isCanonical: !1 },
        ":kiss_mm:": { unicode: ["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468", "1f468-2764-1f48b-1f468"], isCanonical: !0 },
        ":couplekiss_mm:": { unicode: ["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468", "1f468-2764-1f48b-1f468"], isCanonical: !1 },
        ":family_mmbb:": { unicode: ["1f468-200d-1f468-200d-1f466-200d-1f466", "1f468-1f468-1f466-1f466"], isCanonical: !0 },
        ":family_mmgb:": { unicode: ["1f468-200d-1f468-200d-1f467-200d-1f466", "1f468-1f468-1f467-1f466"], isCanonical: !0 },
        ":family_mmgg:": { unicode: ["1f468-200d-1f468-200d-1f467-200d-1f467", "1f468-1f468-1f467-1f467"], isCanonical: !0 },
        ":family_mwbb:": { unicode: ["1f468-200d-1f469-200d-1f466-200d-1f466", "1f468-1f469-1f466-1f466"], isCanonical: !0 },
        ":family_mwgb:": { unicode: ["1f468-200d-1f469-200d-1f467-200d-1f466", "1f468-1f469-1f467-1f466"], isCanonical: !0 },
        ":family_mwgg:": { unicode: ["1f468-200d-1f469-200d-1f467-200d-1f467", "1f468-1f469-1f467-1f467"], isCanonical: !0 },
        ":family_wwbb:": { unicode: ["1f469-200d-1f469-200d-1f466-200d-1f466", "1f469-1f469-1f466-1f466"], isCanonical: !0 },
        ":family_wwgb:": { unicode: ["1f469-200d-1f469-200d-1f467-200d-1f466", "1f469-1f469-1f467-1f466"], isCanonical: !0 },
        ":family_wwgg:": { unicode: ["1f469-200d-1f469-200d-1f467-200d-1f467", "1f469-1f469-1f467-1f467"], isCanonical: !0 },
        ":couple_ww:": { unicode: ["1f469-200d-2764-fe0f-200d-1f469", "1f469-2764-1f469"], isCanonical: !0 },
        ":couple_with_heart_ww:": { unicode: ["1f469-200d-2764-fe0f-200d-1f469", "1f469-2764-1f469"], isCanonical: !1 },
        ":couple_mm:": { unicode: ["1f468-200d-2764-fe0f-200d-1f468", "1f468-2764-1f468"], isCanonical: !0 },
        ":couple_with_heart_mm:": { unicode: ["1f468-200d-2764-fe0f-200d-1f468", "1f468-2764-1f468"], isCanonical: !1 },
        ":family_mmb:": { unicode: ["1f468-200d-1f468-200d-1f466", "1f468-1f468-1f466"], isCanonical: !0 },
        ":family_mmg:": { unicode: ["1f468-200d-1f468-200d-1f467", "1f468-1f468-1f467"], isCanonical: !0 },
        ":family_mwg:": { unicode: ["1f468-200d-1f469-200d-1f467", "1f468-1f469-1f467"], isCanonical: !0 },
        ":family_wwb:": { unicode: ["1f469-200d-1f469-200d-1f466", "1f469-1f469-1f466"], isCanonical: !0 },
        ":chart_with_upwards_trend:": { unicode: ["1f4c8"], isCanonical: !0 },
        ":chart_with_downwards_trend:": { unicode: ["1f4c9"], isCanonical: !0 },
        ":family_wwg:": { unicode: ["1f469-200d-1f469-200d-1f467", "1f469-1f469-1f467"], isCanonical: !0 },
        ":eye_in_speech_bubble:": { unicode: ["1f441-200d-1f5e8", "1f441-1f5e8"], isCanonical: !0 },
        ":hash:": { unicode: ["0023-fe0f-20e3", "0023-20e3"], isCanonical: !0 },
        ":zero:": { unicode: ["0030-fe0f-20e3", "0030-20e3"], isCanonical: !0 },
        ":triangular_ruler:": { unicode: ["1f4d0"], isCanonical: !0 },
        ":one:": { unicode: ["0031-fe0f-20e3", "0031-20e3"], isCanonical: !0 },
        ":two:": { unicode: ["0032-fe0f-20e3", "0032-20e3"], isCanonical: !0 },
        ":three:": { unicode: ["0033-fe0f-20e3", "0033-20e3"], isCanonical: !0 },
        ":four:": { unicode: ["0034-fe0f-20e3", "0034-20e3"], isCanonical: !0 },
        ":five:": { unicode: ["0035-fe0f-20e3", "0035-20e3"], isCanonical: !0 },
        ":six:": { unicode: ["0036-fe0f-20e3", "0036-20e3"], isCanonical: !0 },
        ":seven:": { unicode: ["0037-fe0f-20e3", "0037-20e3"], isCanonical: !0 },
        ":paperclip:": { unicode: ["1f4ce"], isCanonical: !0 },
        ":eight:": { unicode: ["0038-fe0f-20e3", "0038-20e3"], isCanonical: !0 },
        ":clipboard:": { unicode: ["1f4cb"], isCanonical: !0 },
        ":nine:": { unicode: ["0039-fe0f-20e3", "0039-20e3"], isCanonical: !0 },
        ":asterisk:": { unicode: ["002a-fe0f-20e3", "002a-20e3"], isCanonical: !0 },
        ":bar_chart:": { unicode: ["1f4ca"], isCanonical: !0 },
        ":keycap_asterisk:": { unicode: ["002a-fe0f-20e3", "002a-20e3"], isCanonical: !1 },
        ":metal_tone5:": { unicode: ["1f918-1f3ff"], isCanonical: !0 },
        ":sign_of_the_horns_tone5:": { unicode: ["1f918-1f3ff"], isCanonical: !1 },
        ":metal_tone4:": { unicode: ["1f918-1f3fe"], isCanonical: !0 },
        ":sign_of_the_horns_tone4:": { unicode: ["1f918-1f3fe"], isCanonical: !1 },
        ":metal_tone3:": { unicode: ["1f918-1f3fd"], isCanonical: !0 },
        ":sign_of_the_horns_tone3:": { unicode: ["1f918-1f3fd"], isCanonical: !1 },
        ":metal_tone2:": { unicode: ["1f918-1f3fc"], isCanonical: !0 },
        ":sign_of_the_horns_tone2:": { unicode: ["1f918-1f3fc"], isCanonical: !1 },
        ":metal_tone1:": { unicode: ["1f918-1f3fb"], isCanonical: !0 },
        ":sign_of_the_horns_tone1:": { unicode: ["1f918-1f3fb"], isCanonical: !1 },
        ":bath_tone5:": { unicode: ["1f6c0-1f3ff"], isCanonical: !0 },
        ":bath_tone4:": { unicode: ["1f6c0-1f3fe"], isCanonical: !0 },
        ":bath_tone3:": { unicode: ["1f6c0-1f3fd"], isCanonical: !0 },
        ":bath_tone2:": { unicode: ["1f6c0-1f3fc"], isCanonical: !0 },
        ":bath_tone1:": { unicode: ["1f6c0-1f3fb"], isCanonical: !0 },
        ":walking_tone5:": { unicode: ["1f6b6-1f3ff"], isCanonical: !0 },
        ":walking_tone4:": { unicode: ["1f6b6-1f3fe"], isCanonical: !0 },
        ":walking_tone3:": { unicode: ["1f6b6-1f3fd"], isCanonical: !0 },
        ":walking_tone2:": { unicode: ["1f6b6-1f3fc"], isCanonical: !0 },
        ":walking_tone1:": { unicode: ["1f6b6-1f3fb"], isCanonical: !0 },
        ":mountain_bicyclist_tone5:": { unicode: ["1f6b5-1f3ff"], isCanonical: !0 },
        ":mountain_bicyclist_tone4:": { unicode: ["1f6b5-1f3fe"], isCanonical: !0 },
        ":mountain_bicyclist_tone3:": { unicode: ["1f6b5-1f3fd"], isCanonical: !0 },
        ":mountain_bicyclist_tone2:": { unicode: ["1f6b5-1f3fc"], isCanonical: !0 },
        ":mountain_bicyclist_tone1:": { unicode: ["1f6b5-1f3fb"], isCanonical: !0 },
        ":bicyclist_tone5:": { unicode: ["1f6b4-1f3ff"], isCanonical: !0 },
        ":bicyclist_tone4:": { unicode: ["1f6b4-1f3fe"], isCanonical: !0 },
        ":bicyclist_tone3:": { unicode: ["1f6b4-1f3fd"], isCanonical: !0 },
        ":bicyclist_tone2:": { unicode: ["1f6b4-1f3fc"], isCanonical: !0 },
        ":bicyclist_tone1:": { unicode: ["1f6b4-1f3fb"], isCanonical: !0 },
        ":rowboat_tone5:": { unicode: ["1f6a3-1f3ff"], isCanonical: !0 },
        ":rowboat_tone4:": { unicode: ["1f6a3-1f3fe"], isCanonical: !0 },
        ":rowboat_tone3:": { unicode: ["1f6a3-1f3fd"], isCanonical: !0 },
        ":rowboat_tone2:": { unicode: ["1f6a3-1f3fc"], isCanonical: !0 },
        ":rowboat_tone1:": { unicode: ["1f6a3-1f3fb"], isCanonical: !0 },
        ":pray_tone5:": { unicode: ["1f64f-1f3ff"], isCanonical: !0 },
        ":pray_tone4:": { unicode: ["1f64f-1f3fe"], isCanonical: !0 },
        ":pray_tone3:": { unicode: ["1f64f-1f3fd"], isCanonical: !0 },
        ":pray_tone2:": { unicode: ["1f64f-1f3fc"], isCanonical: !0 },
        ":pray_tone1:": { unicode: ["1f64f-1f3fb"], isCanonical: !0 },
        ":person_with_pouting_face_tone5:": { unicode: ["1f64e-1f3ff"], isCanonical: !0 },
        ":person_with_pouting_face_tone4:": { unicode: ["1f64e-1f3fe"], isCanonical: !0 },
        ":person_with_pouting_face_tone3:": { unicode: ["1f64e-1f3fd"], isCanonical: !0 },
        ":person_with_pouting_face_tone2:": { unicode: ["1f64e-1f3fc"], isCanonical: !0 },
        ":person_with_pouting_face_tone1:": { unicode: ["1f64e-1f3fb"], isCanonical: !0 },
        ":person_frowning_tone5:": { unicode: ["1f64d-1f3ff"], isCanonical: !0 },
        ":person_frowning_tone4:": { unicode: ["1f64d-1f3fe"], isCanonical: !0 },
        ":person_frowning_tone3:": { unicode: ["1f64d-1f3fd"], isCanonical: !0 },
        ":person_frowning_tone2:": { unicode: ["1f64d-1f3fc"], isCanonical: !0 },
        ":person_frowning_tone1:": { unicode: ["1f64d-1f3fb"], isCanonical: !0 },
        ":raised_hands_tone5:": { unicode: ["1f64c-1f3ff"], isCanonical: !0 },
        ":raised_hands_tone4:": { unicode: ["1f64c-1f3fe"], isCanonical: !0 },
        ":raised_hands_tone3:": { unicode: ["1f64c-1f3fd"], isCanonical: !0 },
        ":raised_hands_tone2:": { unicode: ["1f64c-1f3fc"], isCanonical: !0 },
        ":raised_hands_tone1:": { unicode: ["1f64c-1f3fb"], isCanonical: !0 },
        ":raising_hand_tone5:": { unicode: ["1f64b-1f3ff"], isCanonical: !0 },
        ":raising_hand_tone4:": { unicode: ["1f64b-1f3fe"], isCanonical: !0 },
        ":raising_hand_tone3:": { unicode: ["1f64b-1f3fd"], isCanonical: !0 },
        ":raising_hand_tone2:": { unicode: ["1f64b-1f3fc"], isCanonical: !0 },
        ":raising_hand_tone1:": { unicode: ["1f64b-1f3fb"], isCanonical: !0 },
        ":bow_tone5:": { unicode: ["1f647-1f3ff"], isCanonical: !0 },
        ":bow_tone4:": { unicode: ["1f647-1f3fe"], isCanonical: !0 },
        ":bow_tone3:": { unicode: ["1f647-1f3fd"], isCanonical: !0 },
        ":bow_tone2:": { unicode: ["1f647-1f3fc"], isCanonical: !0 },
        ":bow_tone1:": { unicode: ["1f647-1f3fb"], isCanonical: !0 },
        ":ok_woman_tone5:": { unicode: ["1f646-1f3ff"], isCanonical: !0 },
        ":ok_woman_tone4:": { unicode: ["1f646-1f3fe"], isCanonical: !0 },
        ":ok_woman_tone3:": { unicode: ["1f646-1f3fd"], isCanonical: !0 },
        ":ok_woman_tone2:": { unicode: ["1f646-1f3fc"], isCanonical: !0 },
        ":ok_woman_tone1:": { unicode: ["1f646-1f3fb"], isCanonical: !0 },
        ":no_good_tone5:": { unicode: ["1f645-1f3ff"], isCanonical: !0 },
        ":no_good_tone4:": { unicode: ["1f645-1f3fe"], isCanonical: !0 },
        ":no_good_tone3:": { unicode: ["1f645-1f3fd"], isCanonical: !0 },
        ":no_good_tone2:": { unicode: ["1f645-1f3fc"], isCanonical: !0 },
        ":round_pushpin:": { unicode: ["1f4cd"], isCanonical: !0 },
        ":no_good_tone1:": { unicode: ["1f645-1f3fb"], isCanonical: !0 },
        ":vulcan_tone5:": { unicode: ["1f596-1f3ff"], isCanonical: !0 },
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone5:": { unicode: ["1f596-1f3ff"], isCanonical: !1 },
        ":vulcan_tone4:": { unicode: ["1f596-1f3fe"], isCanonical: !0 },
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone4:": { unicode: ["1f596-1f3fe"], isCanonical: !1 },
        ":vulcan_tone3:": { unicode: ["1f596-1f3fd"], isCanonical: !0 },
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone3:": { unicode: ["1f596-1f3fd"], isCanonical: !1 },
        ":vulcan_tone2:": { unicode: ["1f596-1f3fc"], isCanonical: !0 },
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone2:": { unicode: ["1f596-1f3fc"], isCanonical: !1 },
        ":vulcan_tone1:": { unicode: ["1f596-1f3fb"], isCanonical: !0 },
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone1:": { unicode: ["1f596-1f3fb"], isCanonical: !1 },
        ":middle_finger_tone5:": { unicode: ["1f595-1f3ff"], isCanonical: !0 },
        ":reversed_hand_with_middle_finger_extended_tone5:": { unicode: ["1f595-1f3ff"], isCanonical: !1 },
        ":middle_finger_tone4:": { unicode: ["1f595-1f3fe"], isCanonical: !0 },
        ":reversed_hand_with_middle_finger_extended_tone4:": { unicode: ["1f595-1f3fe"], isCanonical: !1 },
        ":middle_finger_tone3:": { unicode: ["1f595-1f3fd"], isCanonical: !0 },
        ":reversed_hand_with_middle_finger_extended_tone3:": { unicode: ["1f595-1f3fd"], isCanonical: !1 },
        ":middle_finger_tone2:": { unicode: ["1f595-1f3fc"], isCanonical: !0 },
        ":reversed_hand_with_middle_finger_extended_tone2:": { unicode: ["1f595-1f3fc"], isCanonical: !1 },
        ":middle_finger_tone1:": { unicode: ["1f595-1f3fb"], isCanonical: !0 },
        ":reversed_hand_with_middle_finger_extended_tone1:": { unicode: ["1f595-1f3fb"], isCanonical: !1 },
        ":hand_splayed_tone5:": { unicode: ["1f590-1f3ff"], isCanonical: !0 },
        ":raised_hand_with_fingers_splayed_tone5:": { unicode: ["1f590-1f3ff"], isCanonical: !1 },
        ":hand_splayed_tone4:": { unicode: ["1f590-1f3fe"], isCanonical: !0 },
        ":raised_hand_with_fingers_splayed_tone4:": { unicode: ["1f590-1f3fe"], isCanonical: !1 },
        ":hand_splayed_tone3:": { unicode: ["1f590-1f3fd"], isCanonical: !0 },
        ":raised_hand_with_fingers_splayed_tone3:": { unicode: ["1f590-1f3fd"], isCanonical: !1 },
        ":hand_splayed_tone2:": { unicode: ["1f590-1f3fc"], isCanonical: !0 },
        ":raised_hand_with_fingers_splayed_tone2:": { unicode: ["1f590-1f3fc"], isCanonical: !1 },
        ":hand_splayed_tone1:": { unicode: ["1f590-1f3fb"], isCanonical: !0 },
        ":raised_hand_with_fingers_splayed_tone1:": { unicode: ["1f590-1f3fb"], isCanonical: !1 },
        ":spy_tone5:": { unicode: ["1f575-1f3ff"], isCanonical: !0 },
        ":sleuth_or_spy_tone5:": { unicode: ["1f575-1f3ff"], isCanonical: !1 },
        ":spy_tone4:": { unicode: ["1f575-1f3fe"], isCanonical: !0 },
        ":sleuth_or_spy_tone4:": { unicode: ["1f575-1f3fe"], isCanonical: !1 },
        ":spy_tone3:": { unicode: ["1f575-1f3fd"], isCanonical: !0 },
        ":sleuth_or_spy_tone3:": { unicode: ["1f575-1f3fd"], isCanonical: !1 },
        ":spy_tone2:": { unicode: ["1f575-1f3fc"], isCanonical: !0 },
        ":sleuth_or_spy_tone2:": { unicode: ["1f575-1f3fc"], isCanonical: !1 },
        ":spy_tone1:": { unicode: ["1f575-1f3fb"], isCanonical: !0 },
        ":sleuth_or_spy_tone1:": { unicode: ["1f575-1f3fb"], isCanonical: !1 },
        ":muscle_tone5:": { unicode: ["1f4aa-1f3ff"], isCanonical: !0 },
        ":muscle_tone4:": { unicode: ["1f4aa-1f3fe"], isCanonical: !0 },
        ":muscle_tone3:": { unicode: ["1f4aa-1f3fd"], isCanonical: !0 },
        ":muscle_tone2:": { unicode: ["1f4aa-1f3fc"], isCanonical: !0 },
        ":muscle_tone1:": { unicode: ["1f4aa-1f3fb"], isCanonical: !0 },
        ":haircut_tone5:": { unicode: ["1f487-1f3ff"], isCanonical: !0 },
        ":haircut_tone4:": { unicode: ["1f487-1f3fe"], isCanonical: !0 },
        ":haircut_tone3:": { unicode: ["1f487-1f3fd"], isCanonical: !0 },
        ":haircut_tone2:": { unicode: ["1f487-1f3fc"], isCanonical: !0 },
        ":haircut_tone1:": { unicode: ["1f487-1f3fb"], isCanonical: !0 },
        ":massage_tone5:": { unicode: ["1f486-1f3ff"], isCanonical: !0 },
        ":massage_tone4:": { unicode: ["1f486-1f3fe"], isCanonical: !0 },
        ":massage_tone3:": { unicode: ["1f486-1f3fd"], isCanonical: !0 },
        ":massage_tone2:": { unicode: ["1f486-1f3fc"], isCanonical: !0 },
        ":massage_tone1:": { unicode: ["1f486-1f3fb"], isCanonical: !0 },
        ":nail_care_tone5:": { unicode: ["1f485-1f3ff"], isCanonical: !0 },
        ":nail_care_tone4:": { unicode: ["1f485-1f3fe"], isCanonical: !0 },
        ":nail_care_tone3:": { unicode: ["1f485-1f3fd"], isCanonical: !0 },
        ":nail_care_tone2:": { unicode: ["1f485-1f3fc"], isCanonical: !0 },
        ":nail_care_tone1:": { unicode: ["1f485-1f3fb"], isCanonical: !0 },
        ":dancer_tone5:": { unicode: ["1f483-1f3ff"], isCanonical: !0 },
        ":dancer_tone4:": { unicode: ["1f483-1f3fe"], isCanonical: !0 },
        ":dancer_tone3:": { unicode: ["1f483-1f3fd"], isCanonical: !0 },
        ":dancer_tone2:": { unicode: ["1f483-1f3fc"], isCanonical: !0 },
        ":dancer_tone1:": { unicode: ["1f483-1f3fb"], isCanonical: !0 },
        ":guardsman_tone5:": { unicode: ["1f482-1f3ff"], isCanonical: !0 },
        ":guardsman_tone4:": { unicode: ["1f482-1f3fe"], isCanonical: !0 },
        ":guardsman_tone3:": { unicode: ["1f482-1f3fd"], isCanonical: !0 },
        ":guardsman_tone2:": { unicode: ["1f482-1f3fc"], isCanonical: !0 },
        ":guardsman_tone1:": { unicode: ["1f482-1f3fb"], isCanonical: !0 },
        ":information_desk_person_tone5:": { unicode: ["1f481-1f3ff"], isCanonical: !0 },
        ":information_desk_person_tone4:": { unicode: ["1f481-1f3fe"], isCanonical: !0 },
        ":information_desk_person_tone3:": { unicode: ["1f481-1f3fd"], isCanonical: !0 },
        ":information_desk_person_tone2:": { unicode: ["1f481-1f3fc"], isCanonical: !0 },
        ":information_desk_person_tone1:": { unicode: ["1f481-1f3fb"], isCanonical: !0 },
        ":angel_tone5:": { unicode: ["1f47c-1f3ff"], isCanonical: !0 },
        ":angel_tone4:": { unicode: ["1f47c-1f3fe"], isCanonical: !0 },
        ":angel_tone3:": { unicode: ["1f47c-1f3fd"], isCanonical: !0 },
        ":angel_tone2:": { unicode: ["1f47c-1f3fc"], isCanonical: !0 },
        ":angel_tone1:": { unicode: ["1f47c-1f3fb"], isCanonical: !0 },
        ":princess_tone5:": { unicode: ["1f478-1f3ff"], isCanonical: !0 },
        ":princess_tone4:": { unicode: ["1f478-1f3fe"], isCanonical: !0 },
        ":princess_tone3:": { unicode: ["1f478-1f3fd"], isCanonical: !0 },
        ":princess_tone2:": { unicode: ["1f478-1f3fc"], isCanonical: !0 },
        ":princess_tone1:": { unicode: ["1f478-1f3fb"], isCanonical: !0 },
        ":construction_worker_tone5:": { unicode: ["1f477-1f3ff"], isCanonical: !0 },
        ":construction_worker_tone4:": { unicode: ["1f477-1f3fe"], isCanonical: !0 },
        ":construction_worker_tone3:": { unicode: ["1f477-1f3fd"], isCanonical: !0 },
        ":construction_worker_tone2:": { unicode: ["1f477-1f3fc"], isCanonical: !0 },
        ":construction_worker_tone1:": { unicode: ["1f477-1f3fb"], isCanonical: !0 },
        ":baby_tone5:": { unicode: ["1f476-1f3ff"], isCanonical: !0 },
        ":baby_tone4:": { unicode: ["1f476-1f3fe"], isCanonical: !0 },
        ":baby_tone3:": { unicode: ["1f476-1f3fd"], isCanonical: !0 },
        ":baby_tone2:": { unicode: ["1f476-1f3fc"], isCanonical: !0 },
        ":baby_tone1:": { unicode: ["1f476-1f3fb"], isCanonical: !0 },
        ":older_woman_tone5:": { unicode: ["1f475-1f3ff"], isCanonical: !0 },
        ":grandma_tone5:": { unicode: ["1f475-1f3ff"], isCanonical: !1 },
        ":older_woman_tone4:": { unicode: ["1f475-1f3fe"], isCanonical: !0 },
        ":grandma_tone4:": { unicode: ["1f475-1f3fe"], isCanonical: !1 },
        ":older_woman_tone3:": { unicode: ["1f475-1f3fd"], isCanonical: !0 },
        ":grandma_tone3:": { unicode: ["1f475-1f3fd"], isCanonical: !1 },
        ":older_woman_tone2:": { unicode: ["1f475-1f3fc"], isCanonical: !0 },
        ":grandma_tone2:": { unicode: ["1f475-1f3fc"], isCanonical: !1 },
        ":older_woman_tone1:": { unicode: ["1f475-1f3fb"], isCanonical: !0 },
        ":grandma_tone1:": { unicode: ["1f475-1f3fb"], isCanonical: !1 },
        ":older_man_tone5:": { unicode: ["1f474-1f3ff"], isCanonical: !0 },
        ":older_man_tone4:": { unicode: ["1f474-1f3fe"], isCanonical: !0 },
        ":older_man_tone3:": { unicode: ["1f474-1f3fd"], isCanonical: !0 },
        ":older_man_tone2:": { unicode: ["1f474-1f3fc"], isCanonical: !0 },
        ":older_man_tone1:": { unicode: ["1f474-1f3fb"], isCanonical: !0 },
        ":man_with_turban_tone5:": { unicode: ["1f473-1f3ff"], isCanonical: !0 },
        ":man_with_turban_tone4:": { unicode: ["1f473-1f3fe"], isCanonical: !0 },
        ":man_with_turban_tone3:": { unicode: ["1f473-1f3fd"], isCanonical: !0 },
        ":man_with_turban_tone2:": { unicode: ["1f473-1f3fc"], isCanonical: !0 },
        ":man_with_turban_tone1:": { unicode: ["1f473-1f3fb"], isCanonical: !0 },
        ":man_with_gua_pi_mao_tone5:": { unicode: ["1f472-1f3ff"], isCanonical: !0 },
        ":man_with_gua_pi_mao_tone4:": { unicode: ["1f472-1f3fe"], isCanonical: !0 },
        ":man_with_gua_pi_mao_tone3:": { unicode: ["1f472-1f3fd"], isCanonical: !0 },
        ":man_with_gua_pi_mao_tone2:": { unicode: ["1f472-1f3fc"], isCanonical: !0 },
        ":man_with_gua_pi_mao_tone1:": { unicode: ["1f472-1f3fb"], isCanonical: !0 },
        ":person_with_blond_hair_tone5:": { unicode: ["1f471-1f3ff"], isCanonical: !0 },
        ":person_with_blond_hair_tone4:": { unicode: ["1f471-1f3fe"], isCanonical: !0 },
        ":person_with_blond_hair_tone3:": { unicode: ["1f471-1f3fd"], isCanonical: !0 },
        ":person_with_blond_hair_tone2:": { unicode: ["1f471-1f3fc"], isCanonical: !0 },
        ":person_with_blond_hair_tone1:": { unicode: ["1f471-1f3fb"], isCanonical: !0 },
        ":bride_with_veil_tone5:": { unicode: ["1f470-1f3ff"], isCanonical: !0 },
        ":bride_with_veil_tone4:": { unicode: ["1f470-1f3fe"], isCanonical: !0 },
        ":bride_with_veil_tone3:": { unicode: ["1f470-1f3fd"], isCanonical: !0 },
        ":bride_with_veil_tone2:": { unicode: ["1f470-1f3fc"], isCanonical: !0 },
        ":bride_with_veil_tone1:": { unicode: ["1f470-1f3fb"], isCanonical: !0 },
        ":cop_tone5:": { unicode: ["1f46e-1f3ff"], isCanonical: !0 },
        ":cop_tone4:": { unicode: ["1f46e-1f3fe"], isCanonical: !0 },
        ":cop_tone3:": { unicode: ["1f46e-1f3fd"], isCanonical: !0 },
        ":cop_tone2:": { unicode: ["1f46e-1f3fc"], isCanonical: !0 },
        ":cop_tone1:": { unicode: ["1f46e-1f3fb"], isCanonical: !0 },
        ":woman_tone5:": { unicode: ["1f469-1f3ff"], isCanonical: !0 },
        ":woman_tone4:": { unicode: ["1f469-1f3fe"], isCanonical: !0 },
        ":woman_tone3:": { unicode: ["1f469-1f3fd"], isCanonical: !0 },
        ":woman_tone2:": { unicode: ["1f469-1f3fc"], isCanonical: !0 },
        ":woman_tone1:": { unicode: ["1f469-1f3fb"], isCanonical: !0 },
        ":man_tone5:": { unicode: ["1f468-1f3ff"], isCanonical: !0 },
        ":man_tone4:": { unicode: ["1f468-1f3fe"], isCanonical: !0 },
        ":man_tone3:": { unicode: ["1f468-1f3fd"], isCanonical: !0 },
        ":man_tone2:": { unicode: ["1f468-1f3fc"], isCanonical: !0 },
        ":man_tone1:": { unicode: ["1f468-1f3fb"], isCanonical: !0 },
        ":girl_tone5:": { unicode: ["1f467-1f3ff"], isCanonical: !0 },
        ":girl_tone4:": { unicode: ["1f467-1f3fe"], isCanonical: !0 },
        ":girl_tone3:": { unicode: ["1f467-1f3fd"], isCanonical: !0 },
        ":girl_tone2:": { unicode: ["1f467-1f3fc"], isCanonical: !0 },
        ":girl_tone1:": { unicode: ["1f467-1f3fb"], isCanonical: !0 },
        ":boy_tone5:": { unicode: ["1f466-1f3ff"], isCanonical: !0 },
        ":boy_tone4:": { unicode: ["1f466-1f3fe"], isCanonical: !0 },
        ":boy_tone3:": { unicode: ["1f466-1f3fd"], isCanonical: !0 },
        ":boy_tone2:": { unicode: ["1f466-1f3fc"], isCanonical: !0 },
        ":boy_tone1:": { unicode: ["1f466-1f3fb"], isCanonical: !0 },
        ":open_hands_tone5:": { unicode: ["1f450-1f3ff"], isCanonical: !0 },
        ":open_hands_tone4:": { unicode: ["1f450-1f3fe"], isCanonical: !0 },
        ":open_hands_tone3:": { unicode: ["1f450-1f3fd"], isCanonical: !0 },
        ":open_hands_tone2:": { unicode: ["1f450-1f3fc"], isCanonical: !0 },
        ":open_hands_tone1:": { unicode: ["1f450-1f3fb"], isCanonical: !0 },
        ":clap_tone5:": { unicode: ["1f44f-1f3ff"], isCanonical: !0 },
        ":clap_tone4:": { unicode: ["1f44f-1f3fe"], isCanonical: !0 },
        ":clap_tone3:": { unicode: ["1f44f-1f3fd"], isCanonical: !0 },
        ":clap_tone2:": { unicode: ["1f44f-1f3fc"], isCanonical: !0 },
        ":clap_tone1:": { unicode: ["1f44f-1f3fb"], isCanonical: !0 },
        ":thumbsdown_tone5:": { unicode: ["1f44e-1f3ff"], isCanonical: !0 },
        ":thumbdown_tone5:": { unicode: ["1f44e-1f3ff"], isCanonical: !1 },
        ":thumbsdown_tone4:": { unicode: ["1f44e-1f3fe"], isCanonical: !0 },
        ":thumbdown_tone4:": { unicode: ["1f44e-1f3fe"], isCanonical: !1 },
        ":thumbsdown_tone3:": { unicode: ["1f44e-1f3fd"], isCanonical: !0 },
        ":thumbdown_tone3:": { unicode: ["1f44e-1f3fd"], isCanonical: !1 },
        ":thumbsdown_tone2:": { unicode: ["1f44e-1f3fc"], isCanonical: !0 },
        ":thumbdown_tone2:": { unicode: ["1f44e-1f3fc"], isCanonical: !1 },
        ":thumbsdown_tone1:": { unicode: ["1f44e-1f3fb"], isCanonical: !0 },
        ":thumbdown_tone1:": { unicode: ["1f44e-1f3fb"], isCanonical: !1 },
        ":thumbsup_tone5:": { unicode: ["1f44d-1f3ff"], isCanonical: !0 },
        ":thumbup_tone5:": { unicode: ["1f44d-1f3ff"], isCanonical: !1 },
        ":thumbsup_tone4:": { unicode: ["1f44d-1f3fe"], isCanonical: !0 },
        ":thumbup_tone4:": { unicode: ["1f44d-1f3fe"], isCanonical: !1 },
        ":thumbsup_tone3:": { unicode: ["1f44d-1f3fd"], isCanonical: !0 },
        ":thumbup_tone3:": { unicode: ["1f44d-1f3fd"], isCanonical: !1 },
        ":thumbsup_tone2:": { unicode: ["1f44d-1f3fc"], isCanonical: !0 },
        ":thumbup_tone2:": { unicode: ["1f44d-1f3fc"], isCanonical: !1 },
        ":thumbsup_tone1:": { unicode: ["1f44d-1f3fb"], isCanonical: !0 },
        ":thumbup_tone1:": { unicode: ["1f44d-1f3fb"], isCanonical: !1 },
        ":ok_hand_tone5:": { unicode: ["1f44c-1f3ff"], isCanonical: !0 },
        ":ok_hand_tone4:": { unicode: ["1f44c-1f3fe"], isCanonical: !0 },
        ":ok_hand_tone3:": { unicode: ["1f44c-1f3fd"], isCanonical: !0 },
        ":ok_hand_tone2:": { unicode: ["1f44c-1f3fc"], isCanonical: !0 },
        ":ok_hand_tone1:": { unicode: ["1f44c-1f3fb"], isCanonical: !0 },
        ":wave_tone5:": { unicode: ["1f44b-1f3ff"], isCanonical: !0 },
        ":wave_tone4:": { unicode: ["1f44b-1f3fe"], isCanonical: !0 },
        ":wave_tone3:": { unicode: ["1f44b-1f3fd"], isCanonical: !0 },
        ":wave_tone2:": { unicode: ["1f44b-1f3fc"], isCanonical: !0 },
        ":wave_tone1:": { unicode: ["1f44b-1f3fb"], isCanonical: !0 },
        ":punch_tone5:": { unicode: ["1f44a-1f3ff"], isCanonical: !0 },
        ":punch_tone4:": { unicode: ["1f44a-1f3fe"], isCanonical: !0 },
        ":punch_tone3:": { unicode: ["1f44a-1f3fd"], isCanonical: !0 },
        ":punch_tone2:": { unicode: ["1f44a-1f3fc"], isCanonical: !0 },
        ":punch_tone1:": { unicode: ["1f44a-1f3fb"], isCanonical: !0 },
        ":point_right_tone5:": { unicode: ["1f449-1f3ff"], isCanonical: !0 },
        ":point_right_tone4:": { unicode: ["1f449-1f3fe"], isCanonical: !0 },
        ":point_right_tone3:": { unicode: ["1f449-1f3fd"], isCanonical: !0 },
        ":point_right_tone2:": { unicode: ["1f449-1f3fc"], isCanonical: !0 },
        ":point_right_tone1:": { unicode: ["1f449-1f3fb"], isCanonical: !0 },
        ":point_left_tone5:": { unicode: ["1f448-1f3ff"], isCanonical: !0 },
        ":point_left_tone4:": { unicode: ["1f448-1f3fe"], isCanonical: !0 },
        ":point_left_tone3:": { unicode: ["1f448-1f3fd"], isCanonical: !0 },
        ":point_left_tone2:": { unicode: ["1f448-1f3fc"], isCanonical: !0 },
        ":point_left_tone1:": { unicode: ["1f448-1f3fb"], isCanonical: !0 },
        ":point_down_tone5:": { unicode: ["1f447-1f3ff"], isCanonical: !0 },
        ":point_down_tone4:": { unicode: ["1f447-1f3fe"], isCanonical: !0 },
        ":point_down_tone3:": { unicode: ["1f447-1f3fd"], isCanonical: !0 },
        ":point_down_tone2:": { unicode: ["1f447-1f3fc"], isCanonical: !0 },
        ":point_down_tone1:": { unicode: ["1f447-1f3fb"], isCanonical: !0 },
        ":point_up_2_tone5:": { unicode: ["1f446-1f3ff"], isCanonical: !0 },
        ":point_up_2_tone4:": { unicode: ["1f446-1f3fe"], isCanonical: !0 },
        ":point_up_2_tone3:": { unicode: ["1f446-1f3fd"], isCanonical: !0 },
        ":point_up_2_tone2:": { unicode: ["1f446-1f3fc"], isCanonical: !0 },
        ":point_up_2_tone1:": { unicode: ["1f446-1f3fb"], isCanonical: !0 },
        ":nose_tone5:": { unicode: ["1f443-1f3ff"], isCanonical: !0 },
        ":nose_tone4:": { unicode: ["1f443-1f3fe"], isCanonical: !0 },
        ":nose_tone3:": { unicode: ["1f443-1f3fd"], isCanonical: !0 },
        ":nose_tone2:": { unicode: ["1f443-1f3fc"], isCanonical: !0 },
        ":nose_tone1:": { unicode: ["1f443-1f3fb"], isCanonical: !0 },
        ":ear_tone5:": { unicode: ["1f442-1f3ff"], isCanonical: !0 },
        ":ear_tone4:": { unicode: ["1f442-1f3fe"], isCanonical: !0 },
        ":ear_tone3:": { unicode: ["1f442-1f3fd"], isCanonical: !0 },
        ":ear_tone2:": { unicode: ["1f442-1f3fc"], isCanonical: !0 },
        ":ear_tone1:": { unicode: ["1f442-1f3fb"], isCanonical: !0 },
        ":lifter_tone5:": { unicode: ["1f3cb-1f3ff"], isCanonical: !0 },
        ":weight_lifter_tone5:": { unicode: ["1f3cb-1f3ff"], isCanonical: !1 },
        ":lifter_tone4:": { unicode: ["1f3cb-1f3fe"], isCanonical: !0 },
        ":weight_lifter_tone4:": { unicode: ["1f3cb-1f3fe"], isCanonical: !1 },
        ":lifter_tone3:": { unicode: ["1f3cb-1f3fd"], isCanonical: !0 },
        ":weight_lifter_tone3:": { unicode: ["1f3cb-1f3fd"], isCanonical: !1 },
        ":lifter_tone2:": { unicode: ["1f3cb-1f3fc"], isCanonical: !0 },
        ":weight_lifter_tone2:": { unicode: ["1f3cb-1f3fc"], isCanonical: !1 },
        ":lifter_tone1:": { unicode: ["1f3cb-1f3fb"], isCanonical: !0 },
        ":weight_lifter_tone1:": { unicode: ["1f3cb-1f3fb"], isCanonical: !1 },
        ":swimmer_tone5:": { unicode: ["1f3ca-1f3ff"], isCanonical: !0 },
        ":swimmer_tone4:": { unicode: ["1f3ca-1f3fe"], isCanonical: !0 },
        ":swimmer_tone3:": { unicode: ["1f3ca-1f3fd"], isCanonical: !0 },
        ":swimmer_tone2:": { unicode: ["1f3ca-1f3fc"], isCanonical: !0 },
        ":swimmer_tone1:": { unicode: ["1f3ca-1f3fb"], isCanonical: !0 },
        ":horse_racing_tone5:": { unicode: ["1f3c7-1f3ff"], isCanonical: !0 },
        ":horse_racing_tone4:": { unicode: ["1f3c7-1f3fe"], isCanonical: !0 },
        ":horse_racing_tone3:": { unicode: ["1f3c7-1f3fd"], isCanonical: !0 },
        ":horse_racing_tone2:": { unicode: ["1f3c7-1f3fc"], isCanonical: !0 },
        ":horse_racing_tone1:": { unicode: ["1f3c7-1f3fb"], isCanonical: !0 },
        ":surfer_tone5:": { unicode: ["1f3c4-1f3ff"], isCanonical: !0 },
        ":surfer_tone4:": { unicode: ["1f3c4-1f3fe"], isCanonical: !0 },
        ":surfer_tone3:": { unicode: ["1f3c4-1f3fd"], isCanonical: !0 },
        ":surfer_tone2:": { unicode: ["1f3c4-1f3fc"], isCanonical: !0 },
        ":surfer_tone1:": { unicode: ["1f3c4-1f3fb"], isCanonical: !0 },
        ":runner_tone5:": { unicode: ["1f3c3-1f3ff"], isCanonical: !0 },
        ":runner_tone4:": { unicode: ["1f3c3-1f3fe"], isCanonical: !0 },
        ":runner_tone3:": { unicode: ["1f3c3-1f3fd"], isCanonical: !0 },
        ":runner_tone2:": { unicode: ["1f3c3-1f3fc"], isCanonical: !0 },
        ":runner_tone1:": { unicode: ["1f3c3-1f3fb"], isCanonical: !0 },
        ":santa_tone5:": { unicode: ["1f385-1f3ff"], isCanonical: !0 },
        ":santa_tone4:": { unicode: ["1f385-1f3fe"], isCanonical: !0 },
        ":santa_tone3:": { unicode: ["1f385-1f3fd"], isCanonical: !0 },
        ":santa_tone2:": { unicode: ["1f385-1f3fc"], isCanonical: !0 },
        ":santa_tone1:": { unicode: ["1f385-1f3fb"], isCanonical: !0 },
        ":flag_zw:": { unicode: ["1f1ff-1f1fc"], isCanonical: !0 },
        ":zw:": { unicode: ["1f1ff-1f1fc"], isCanonical: !1 },
        ":flag_zm:": { unicode: ["1f1ff-1f1f2"], isCanonical: !0 },
        ":zm:": { unicode: ["1f1ff-1f1f2"], isCanonical: !1 },
        ":flag_za:": { unicode: ["1f1ff-1f1e6"], isCanonical: !0 },
        ":za:": { unicode: ["1f1ff-1f1e6"], isCanonical: !1 },
        ":flag_yt:": { unicode: ["1f1fe-1f1f9"], isCanonical: !0 },
        ":yt:": { unicode: ["1f1fe-1f1f9"], isCanonical: !1 },
        ":flag_ye:": { unicode: ["1f1fe-1f1ea"], isCanonical: !0 },
        ":ye:": { unicode: ["1f1fe-1f1ea"], isCanonical: !1 },
        ":flag_xk:": { unicode: ["1f1fd-1f1f0"], isCanonical: !0 },
        ":xk:": { unicode: ["1f1fd-1f1f0"], isCanonical: !1 },
        ":flag_ws:": { unicode: ["1f1fc-1f1f8"], isCanonical: !0 },
        ":ws:": { unicode: ["1f1fc-1f1f8"], isCanonical: !1 },
        ":flag_wf:": { unicode: ["1f1fc-1f1eb"], isCanonical: !0 },
        ":wf:": { unicode: ["1f1fc-1f1eb"], isCanonical: !1 },
        ":flag_vu:": { unicode: ["1f1fb-1f1fa"], isCanonical: !0 },
        ":vu:": { unicode: ["1f1fb-1f1fa"], isCanonical: !1 },
        ":flag_vn:": { unicode: ["1f1fb-1f1f3"], isCanonical: !0 },
        ":vn:": { unicode: ["1f1fb-1f1f3"], isCanonical: !1 },
        ":flag_vi:": { unicode: ["1f1fb-1f1ee"], isCanonical: !0 },
        ":vi:": { unicode: ["1f1fb-1f1ee"], isCanonical: !1 },
        ":flag_vg:": { unicode: ["1f1fb-1f1ec"], isCanonical: !0 },
        ":vg:": { unicode: ["1f1fb-1f1ec"], isCanonical: !1 },
        ":flag_ve:": { unicode: ["1f1fb-1f1ea"], isCanonical: !0 },
        ":ve:": {
            unicode: ["1f1fb-1f1ea"],
            isCanonical: !1,
        },
        ":flag_vc:": { unicode: ["1f1fb-1f1e8"], isCanonical: !0 },
        ":vc:": { unicode: ["1f1fb-1f1e8"], isCanonical: !1 },
        ":flag_va:": { unicode: ["1f1fb-1f1e6"], isCanonical: !0 },
        ":va:": { unicode: ["1f1fb-1f1e6"], isCanonical: !1 },
        ":flag_uz:": { unicode: ["1f1fa-1f1ff"], isCanonical: !0 },
        ":uz:": { unicode: ["1f1fa-1f1ff"], isCanonical: !1 },
        ":flag_uy:": { unicode: ["1f1fa-1f1fe"], isCanonical: !0 },
        ":uy:": { unicode: ["1f1fa-1f1fe"], isCanonical: !1 },
        ":flag_us:": { unicode: ["1f1fa-1f1f8"], isCanonical: !0 },
        ":us:": { unicode: ["1f1fa-1f1f8"], isCanonical: !1 },
        ":flag_um:": { unicode: ["1f1fa-1f1f2"], isCanonical: !0 },
        ":um:": { unicode: ["1f1fa-1f1f2"], isCanonical: !1 },
        ":flag_ug:": { unicode: ["1f1fa-1f1ec"], isCanonical: !0 },
        ":ug:": { unicode: ["1f1fa-1f1ec"], isCanonical: !1 },
        ":flag_ua:": { unicode: ["1f1fa-1f1e6"], isCanonical: !0 },
        ":ua:": { unicode: ["1f1fa-1f1e6"], isCanonical: !1 },
        ":flag_tz:": { unicode: ["1f1f9-1f1ff"], isCanonical: !0 },
        ":tz:": { unicode: ["1f1f9-1f1ff"], isCanonical: !1 },
        ":flag_tw:": { unicode: ["1f1f9-1f1fc"], isCanonical: !0 },
        ":tw:": { unicode: ["1f1f9-1f1fc"], isCanonical: !1 },
        ":flag_tv:": { unicode: ["1f1f9-1f1fb"], isCanonical: !0 },
        ":tuvalu:": { unicode: ["1f1f9-1f1fb"], isCanonical: !1 },
        ":flag_tt:": { unicode: ["1f1f9-1f1f9"], isCanonical: !0 },
        ":tt:": { unicode: ["1f1f9-1f1f9"], isCanonical: !1 },
        ":flag_tr:": { unicode: ["1f1f9-1f1f7"], isCanonical: !0 },
        ":tr:": { unicode: ["1f1f9-1f1f7"], isCanonical: !1 },
        ":flag_to:": { unicode: ["1f1f9-1f1f4"], isCanonical: !0 },
        ":to:": { unicode: ["1f1f9-1f1f4"], isCanonical: !1 },
        ":flag_tn:": { unicode: ["1f1f9-1f1f3"], isCanonical: !0 },
        ":tn:": { unicode: ["1f1f9-1f1f3"], isCanonical: !1 },
        ":flag_tm:": { unicode: ["1f1f9-1f1f2"], isCanonical: !0 },
        ":turkmenistan:": { unicode: ["1f1f9-1f1f2"], isCanonical: !1 },
        ":flag_tl:": { unicode: ["1f1f9-1f1f1"], isCanonical: !0 },
        ":tl:": { unicode: ["1f1f9-1f1f1"], isCanonical: !1 },
        ":flag_tk:": { unicode: ["1f1f9-1f1f0"], isCanonical: !0 },
        ":tk:": { unicode: ["1f1f9-1f1f0"], isCanonical: !1 },
        ":flag_tj:": { unicode: ["1f1f9-1f1ef"], isCanonical: !0 },
        ":tj:": { unicode: ["1f1f9-1f1ef"], isCanonical: !1 },
        ":flag_th:": { unicode: ["1f1f9-1f1ed"], isCanonical: !0 },
        ":th:": { unicode: ["1f1f9-1f1ed"], isCanonical: !1 },
        ":flag_tg:": { unicode: ["1f1f9-1f1ec"], isCanonical: !0 },
        ":tg:": { unicode: ["1f1f9-1f1ec"], isCanonical: !1 },
        ":flag_tf:": { unicode: ["1f1f9-1f1eb"], isCanonical: !0 },
        ":tf:": { unicode: ["1f1f9-1f1eb"], isCanonical: !1 },
        ":flag_td:": { unicode: ["1f1f9-1f1e9"], isCanonical: !0 },
        ":td:": { unicode: ["1f1f9-1f1e9"], isCanonical: !1 },
        ":flag_tc:": { unicode: ["1f1f9-1f1e8"], isCanonical: !0 },
        ":tc:": { unicode: ["1f1f9-1f1e8"], isCanonical: !1 },
        ":flag_ta:": { unicode: ["1f1f9-1f1e6"], isCanonical: !0 },
        ":ta:": { unicode: ["1f1f9-1f1e6"], isCanonical: !1 },
        ":flag_sz:": { unicode: ["1f1f8-1f1ff"], isCanonical: !0 },
        ":sz:": { unicode: ["1f1f8-1f1ff"], isCanonical: !1 },
        ":flag_sy:": { unicode: ["1f1f8-1f1fe"], isCanonical: !0 },
        ":sy:": { unicode: ["1f1f8-1f1fe"], isCanonical: !1 },
        ":flag_sx:": { unicode: ["1f1f8-1f1fd"], isCanonical: !0 },
        ":sx:": { unicode: ["1f1f8-1f1fd"], isCanonical: !1 },
        ":flag_sv:": { unicode: ["1f1f8-1f1fb"], isCanonical: !0 },
        ":sv:": { unicode: ["1f1f8-1f1fb"], isCanonical: !1 },
        ":flag_st:": { unicode: ["1f1f8-1f1f9"], isCanonical: !0 },
        ":st:": { unicode: ["1f1f8-1f1f9"], isCanonical: !1 },
        ":flag_ss:": { unicode: ["1f1f8-1f1f8"], isCanonical: !0 },
        ":ss:": { unicode: ["1f1f8-1f1f8"], isCanonical: !1 },
        ":flag_sr:": { unicode: ["1f1f8-1f1f7"], isCanonical: !0 },
        ":sr:": { unicode: ["1f1f8-1f1f7"], isCanonical: !1 },
        ":flag_so:": { unicode: ["1f1f8-1f1f4"], isCanonical: !0 },
        ":so:": { unicode: ["1f1f8-1f1f4"], isCanonical: !1 },
        ":flag_sn:": { unicode: ["1f1f8-1f1f3"], isCanonical: !0 },
        ":sn:": { unicode: ["1f1f8-1f1f3"], isCanonical: !1 },
        ":flag_sm:": { unicode: ["1f1f8-1f1f2"], isCanonical: !0 },
        ":sm:": { unicode: ["1f1f8-1f1f2"], isCanonical: !1 },
        ":flag_sl:": { unicode: ["1f1f8-1f1f1"], isCanonical: !0 },
        ":sl:": { unicode: ["1f1f8-1f1f1"], isCanonical: !1 },
        ":flag_sk:": { unicode: ["1f1f8-1f1f0"], isCanonical: !0 },
        ":sk:": { unicode: ["1f1f8-1f1f0"], isCanonical: !1 },
        ":flag_sj:": { unicode: ["1f1f8-1f1ef"], isCanonical: !0 },
        ":sj:": { unicode: ["1f1f8-1f1ef"], isCanonical: !1 },
        ":flag_si:": { unicode: ["1f1f8-1f1ee"], isCanonical: !0 },
        ":si:": { unicode: ["1f1f8-1f1ee"], isCanonical: !1 },
        ":flag_sh:": { unicode: ["1f1f8-1f1ed"], isCanonical: !0 },
        ":sh:": { unicode: ["1f1f8-1f1ed"], isCanonical: !1 },
        ":flag_sg:": { unicode: ["1f1f8-1f1ec"], isCanonical: !0 },
        ":sg:": { unicode: ["1f1f8-1f1ec"], isCanonical: !1 },
        ":flag_se:": { unicode: ["1f1f8-1f1ea"], isCanonical: !0 },
        ":se:": { unicode: ["1f1f8-1f1ea"], isCanonical: !1 },
        ":flag_sd:": { unicode: ["1f1f8-1f1e9"], isCanonical: !0 },
        ":sd:": { unicode: ["1f1f8-1f1e9"], isCanonical: !1 },
        ":flag_sc:": { unicode: ["1f1f8-1f1e8"], isCanonical: !0 },
        ":sc:": { unicode: ["1f1f8-1f1e8"], isCanonical: !1 },
        ":flag_sb:": { unicode: ["1f1f8-1f1e7"], isCanonical: !0 },
        ":sb:": { unicode: ["1f1f8-1f1e7"], isCanonical: !1 },
        ":flag_sa:": { unicode: ["1f1f8-1f1e6"], isCanonical: !0 },
        ":saudiarabia:": { unicode: ["1f1f8-1f1e6"], isCanonical: !1 },
        ":saudi:": { unicode: ["1f1f8-1f1e6"], isCanonical: !1 },
        ":flag_rw:": { unicode: ["1f1f7-1f1fc"], isCanonical: !0 },
        ":rw:": { unicode: ["1f1f7-1f1fc"], isCanonical: !1 },
        ":flag_ru:": { unicode: ["1f1f7-1f1fa"], isCanonical: !0 },
        ":ru:": { unicode: ["1f1f7-1f1fa"], isCanonical: !1 },
        ":flag_rs:": { unicode: ["1f1f7-1f1f8"], isCanonical: !0 },
        ":rs:": { unicode: ["1f1f7-1f1f8"], isCanonical: !1 },
        ":flag_ro:": { unicode: ["1f1f7-1f1f4"], isCanonical: !0 },
        ":ro:": { unicode: ["1f1f7-1f1f4"], isCanonical: !1 },
        ":flag_re:": { unicode: ["1f1f7-1f1ea"], isCanonical: !0 },
        ":re:": { unicode: ["1f1f7-1f1ea"], isCanonical: !1 },
        ":flag_qa:": { unicode: ["1f1f6-1f1e6"], isCanonical: !0 },
        ":qa:": { unicode: ["1f1f6-1f1e6"], isCanonical: !1 },
        ":flag_py:": { unicode: ["1f1f5-1f1fe"], isCanonical: !0 },
        ":py:": { unicode: ["1f1f5-1f1fe"], isCanonical: !1 },
        ":flag_pw:": { unicode: ["1f1f5-1f1fc"], isCanonical: !0 },
        ":pw:": { unicode: ["1f1f5-1f1fc"], isCanonical: !1 },
        ":flag_pt:": { unicode: ["1f1f5-1f1f9"], isCanonical: !0 },
        ":pt:": { unicode: ["1f1f5-1f1f9"], isCanonical: !1 },
        ":flag_ps:": { unicode: ["1f1f5-1f1f8"], isCanonical: !0 },
        ":ps:": { unicode: ["1f1f5-1f1f8"], isCanonical: !1 },
        ":flag_pr:": { unicode: ["1f1f5-1f1f7"], isCanonical: !0 },
        ":pr:": { unicode: ["1f1f5-1f1f7"], isCanonical: !1 },
        ":flag_pn:": { unicode: ["1f1f5-1f1f3"], isCanonical: !0 },
        ":pn:": { unicode: ["1f1f5-1f1f3"], isCanonical: !1 },
        ":flag_pm:": { unicode: ["1f1f5-1f1f2"], isCanonical: !0 },
        ":pm:": { unicode: ["1f1f5-1f1f2"], isCanonical: !1 },
        ":flag_pl:": { unicode: ["1f1f5-1f1f1"], isCanonical: !0 },
        ":pl:": { unicode: ["1f1f5-1f1f1"], isCanonical: !1 },
        ":flag_pk:": { unicode: ["1f1f5-1f1f0"], isCanonical: !0 },
        ":pk:": { unicode: ["1f1f5-1f1f0"], isCanonical: !1 },
        ":flag_ph:": { unicode: ["1f1f5-1f1ed"], isCanonical: !0 },
        ":ph:": { unicode: ["1f1f5-1f1ed"], isCanonical: !1 },
        ":flag_pg:": { unicode: ["1f1f5-1f1ec"], isCanonical: !0 },
        ":pg:": { unicode: ["1f1f5-1f1ec"], isCanonical: !1 },
        ":flag_pf:": { unicode: ["1f1f5-1f1eb"], isCanonical: !0 },
        ":pf:": { unicode: ["1f1f5-1f1eb"], isCanonical: !1 },
        ":flag_pe:": { unicode: ["1f1f5-1f1ea"], isCanonical: !0 },
        ":pe:": { unicode: ["1f1f5-1f1ea"], isCanonical: !1 },
        ":flag_pa:": { unicode: ["1f1f5-1f1e6"], isCanonical: !0 },
        ":pa:": { unicode: ["1f1f5-1f1e6"], isCanonical: !1 },
        ":flag_om:": { unicode: ["1f1f4-1f1f2"], isCanonical: !0 },
        ":om:": { unicode: ["1f1f4-1f1f2"], isCanonical: !1 },
        ":flag_nz:": { unicode: ["1f1f3-1f1ff"], isCanonical: !0 },
        ":nz:": { unicode: ["1f1f3-1f1ff"], isCanonical: !1 },
        ":flag_nu:": { unicode: ["1f1f3-1f1fa"], isCanonical: !0 },
        ":nu:": { unicode: ["1f1f3-1f1fa"], isCanonical: !1 },
        ":flag_nr:": { unicode: ["1f1f3-1f1f7"], isCanonical: !0 },
        ":nr:": { unicode: ["1f1f3-1f1f7"], isCanonical: !1 },
        ":flag_np:": { unicode: ["1f1f3-1f1f5"], isCanonical: !0 },
        ":np:": { unicode: ["1f1f3-1f1f5"], isCanonical: !1 },
        ":flag_no:": { unicode: ["1f1f3-1f1f4"], isCanonical: !0 },
        ":no:": { unicode: ["1f1f3-1f1f4"], isCanonical: !1 },
        ":flag_nl:": { unicode: ["1f1f3-1f1f1"], isCanonical: !0 },
        ":nl:": { unicode: ["1f1f3-1f1f1"], isCanonical: !1 },
        ":flag_ni:": { unicode: ["1f1f3-1f1ee"], isCanonical: !0 },
        ":ni:": { unicode: ["1f1f3-1f1ee"], isCanonical: !1 },
        ":flag_ng:": { unicode: ["1f1f3-1f1ec"], isCanonical: !0 },
        ":nigeria:": { unicode: ["1f1f3-1f1ec"], isCanonical: !1 },
        ":flag_nf:": { unicode: ["1f1f3-1f1eb"], isCanonical: !0 },
        ":nf:": { unicode: ["1f1f3-1f1eb"], isCanonical: !1 },
        ":flag_ne:": { unicode: ["1f1f3-1f1ea"], isCanonical: !0 },
        ":ne:": { unicode: ["1f1f3-1f1ea"], isCanonical: !1 },
        ":flag_nc:": { unicode: ["1f1f3-1f1e8"], isCanonical: !0 },
        ":nc:": { unicode: ["1f1f3-1f1e8"], isCanonical: !1 },
        ":flag_na:": { unicode: ["1f1f3-1f1e6"], isCanonical: !0 },
        ":na:": { unicode: ["1f1f3-1f1e6"], isCanonical: !1 },
        ":flag_mz:": { unicode: ["1f1f2-1f1ff"], isCanonical: !0 },
        ":mz:": { unicode: ["1f1f2-1f1ff"], isCanonical: !1 },
        ":flag_my:": { unicode: ["1f1f2-1f1fe"], isCanonical: !0 },
        ":my:": { unicode: ["1f1f2-1f1fe"], isCanonical: !1 },
        ":flag_mx:": { unicode: ["1f1f2-1f1fd"], isCanonical: !0 },
        ":mx:": { unicode: ["1f1f2-1f1fd"], isCanonical: !1 },
        ":flag_mw:": { unicode: ["1f1f2-1f1fc"], isCanonical: !0 },
        ":mw:": { unicode: ["1f1f2-1f1fc"], isCanonical: !1 },
        ":flag_mv:": { unicode: ["1f1f2-1f1fb"], isCanonical: !0 },
        ":mv:": { unicode: ["1f1f2-1f1fb"], isCanonical: !1 },
        ":flag_mu:": { unicode: ["1f1f2-1f1fa"], isCanonical: !0 },
        ":mu:": { unicode: ["1f1f2-1f1fa"], isCanonical: !1 },
        ":flag_mt:": { unicode: ["1f1f2-1f1f9"], isCanonical: !0 },
        ":mt:": { unicode: ["1f1f2-1f1f9"], isCanonical: !1 },
        ":flag_ms:": { unicode: ["1f1f2-1f1f8"], isCanonical: !0 },
        ":ms:": { unicode: ["1f1f2-1f1f8"], isCanonical: !1 },
        ":flag_mr:": { unicode: ["1f1f2-1f1f7"], isCanonical: !0 },
        ":mr:": { unicode: ["1f1f2-1f1f7"], isCanonical: !1 },
        ":flag_mq:": { unicode: ["1f1f2-1f1f6"], isCanonical: !0 },
        ":mq:": { unicode: ["1f1f2-1f1f6"], isCanonical: !1 },
        ":flag_mp:": { unicode: ["1f1f2-1f1f5"], isCanonical: !0 },
        ":mp:": { unicode: ["1f1f2-1f1f5"], isCanonical: !1 },
        ":flag_mo:": { unicode: ["1f1f2-1f1f4"], isCanonical: !0 },
        ":mo:": { unicode: ["1f1f2-1f1f4"], isCanonical: !1 },
        ":flag_mn:": { unicode: ["1f1f2-1f1f3"], isCanonical: !0 },
        ":mn:": { unicode: ["1f1f2-1f1f3"], isCanonical: !1 },
        ":flag_mm:": { unicode: ["1f1f2-1f1f2"], isCanonical: !0 },
        ":mm:": { unicode: ["1f1f2-1f1f2"], isCanonical: !1 },
        ":flag_ml:": { unicode: ["1f1f2-1f1f1"], isCanonical: !0 },
        ":ml:": { unicode: ["1f1f2-1f1f1"], isCanonical: !1 },
        ":flag_mk:": { unicode: ["1f1f2-1f1f0"], isCanonical: !0 },
        ":mk:": { unicode: ["1f1f2-1f1f0"], isCanonical: !1 },
        ":flag_mh:": { unicode: ["1f1f2-1f1ed"], isCanonical: !0 },
        ":mh:": { unicode: ["1f1f2-1f1ed"], isCanonical: !1 },
        ":flag_mg:": { unicode: ["1f1f2-1f1ec"], isCanonical: !0 },
        ":mg:": { unicode: ["1f1f2-1f1ec"], isCanonical: !1 },
        ":flag_mf:": { unicode: ["1f1f2-1f1eb"], isCanonical: !0 },
        ":mf:": { unicode: ["1f1f2-1f1eb"], isCanonical: !1 },
        ":flag_me:": { unicode: ["1f1f2-1f1ea"], isCanonical: !0 },
        ":me:": { unicode: ["1f1f2-1f1ea"], isCanonical: !1 },
        ":flag_md:": { unicode: ["1f1f2-1f1e9"], isCanonical: !0 },
        ":md:": { unicode: ["1f1f2-1f1e9"], isCanonical: !1 },
        ":flag_mc:": { unicode: ["1f1f2-1f1e8"], isCanonical: !0 },
        ":mc:": { unicode: ["1f1f2-1f1e8"], isCanonical: !1 },
        ":flag_ma:": { unicode: ["1f1f2-1f1e6"], isCanonical: !0 },
        ":ma:": { unicode: ["1f1f2-1f1e6"], isCanonical: !1 },
        ":flag_ly:": { unicode: ["1f1f1-1f1fe"], isCanonical: !0 },
        ":ly:": { unicode: ["1f1f1-1f1fe"], isCanonical: !1 },
        ":flag_lv:": { unicode: ["1f1f1-1f1fb"], isCanonical: !0 },
        ":lv:": { unicode: ["1f1f1-1f1fb"], isCanonical: !1 },
        ":flag_lu:": { unicode: ["1f1f1-1f1fa"], isCanonical: !0 },
        ":lu:": { unicode: ["1f1f1-1f1fa"], isCanonical: !1 },
        ":flag_lt:": { unicode: ["1f1f1-1f1f9"], isCanonical: !0 },
        ":lt:": { unicode: ["1f1f1-1f1f9"], isCanonical: !1 },
        ":flag_ls:": { unicode: ["1f1f1-1f1f8"], isCanonical: !0 },
        ":ls:": { unicode: ["1f1f1-1f1f8"], isCanonical: !1 },
        ":flag_lr:": { unicode: ["1f1f1-1f1f7"], isCanonical: !0 },
        ":lr:": { unicode: ["1f1f1-1f1f7"], isCanonical: !1 },
        ":flag_lk:": { unicode: ["1f1f1-1f1f0"], isCanonical: !0 },
        ":lk:": { unicode: ["1f1f1-1f1f0"], isCanonical: !1 },
        ":flag_li:": { unicode: ["1f1f1-1f1ee"], isCanonical: !0 },
        ":li:": { unicode: ["1f1f1-1f1ee"], isCanonical: !1 },
        ":flag_lc:": { unicode: ["1f1f1-1f1e8"], isCanonical: !0 },
        ":lc:": { unicode: ["1f1f1-1f1e8"], isCanonical: !1 },
        ":flag_lb:": { unicode: ["1f1f1-1f1e7"], isCanonical: !0 },
        ":lb:": { unicode: ["1f1f1-1f1e7"], isCanonical: !1 },
        ":flag_la:": { unicode: ["1f1f1-1f1e6"], isCanonical: !0 },
        ":la:": { unicode: ["1f1f1-1f1e6"], isCanonical: !1 },
        ":flag_kz:": { unicode: ["1f1f0-1f1ff"], isCanonical: !0 },
        ":kz:": { unicode: ["1f1f0-1f1ff"], isCanonical: !1 },
        ":flag_ky:": { unicode: ["1f1f0-1f1fe"], isCanonical: !0 },
        ":ky:": { unicode: ["1f1f0-1f1fe"], isCanonical: !1 },
        ":flag_kw:": { unicode: ["1f1f0-1f1fc"], isCanonical: !0 },
        ":kw:": { unicode: ["1f1f0-1f1fc"], isCanonical: !1 },
        ":flag_kr:": { unicode: ["1f1f0-1f1f7"], isCanonical: !0 },
        ":kr:": { unicode: ["1f1f0-1f1f7"], isCanonical: !1 },
        ":flag_kp:": { unicode: ["1f1f0-1f1f5"], isCanonical: !0 },
        ":kp:": { unicode: ["1f1f0-1f1f5"], isCanonical: !1 },
        ":flag_kn:": { unicode: ["1f1f0-1f1f3"], isCanonical: !0 },
        ":kn:": { unicode: ["1f1f0-1f1f3"], isCanonical: !1 },
        ":flag_km:": { unicode: ["1f1f0-1f1f2"], isCanonical: !0 },
        ":km:": { unicode: ["1f1f0-1f1f2"], isCanonical: !1 },
        ":flag_ki:": { unicode: ["1f1f0-1f1ee"], isCanonical: !0 },
        ":ki:": { unicode: ["1f1f0-1f1ee"], isCanonical: !1 },
        ":flag_kh:": { unicode: ["1f1f0-1f1ed"], isCanonical: !0 },
        ":kh:": { unicode: ["1f1f0-1f1ed"], isCanonical: !1 },
        ":flag_kg:": { unicode: ["1f1f0-1f1ec"], isCanonical: !0 },
        ":kg:": { unicode: ["1f1f0-1f1ec"], isCanonical: !1 },
        ":flag_ke:": { unicode: ["1f1f0-1f1ea"], isCanonical: !0 },
        ":ke:": { unicode: ["1f1f0-1f1ea"], isCanonical: !1 },
        ":flag_jp:": { unicode: ["1f1ef-1f1f5"], isCanonical: !0 },
        ":jp:": { unicode: ["1f1ef-1f1f5"], isCanonical: !1 },
        ":flag_jo:": { unicode: ["1f1ef-1f1f4"], isCanonical: !0 },
        ":jo:": { unicode: ["1f1ef-1f1f4"], isCanonical: !1 },
        ":flag_jm:": { unicode: ["1f1ef-1f1f2"], isCanonical: !0 },
        ":jm:": { unicode: ["1f1ef-1f1f2"], isCanonical: !1 },
        ":flag_je:": { unicode: ["1f1ef-1f1ea"], isCanonical: !0 },
        ":je:": { unicode: ["1f1ef-1f1ea"], isCanonical: !1 },
        ":flag_it:": { unicode: ["1f1ee-1f1f9"], isCanonical: !0 },
        ":it:": { unicode: ["1f1ee-1f1f9"], isCanonical: !1 },
        ":flag_is:": { unicode: ["1f1ee-1f1f8"], isCanonical: !0 },
        ":is:": { unicode: ["1f1ee-1f1f8"], isCanonical: !1 },
        ":flag_ir:": { unicode: ["1f1ee-1f1f7"], isCanonical: !0 },
        ":ir:": { unicode: ["1f1ee-1f1f7"], isCanonical: !1 },
        ":flag_iq:": { unicode: ["1f1ee-1f1f6"], isCanonical: !0 },
        ":iq:": { unicode: ["1f1ee-1f1f6"], isCanonical: !1 },
        ":flag_io:": { unicode: ["1f1ee-1f1f4"], isCanonical: !0 },
        ":io:": { unicode: ["1f1ee-1f1f4"], isCanonical: !1 },
        ":flag_in:": { unicode: ["1f1ee-1f1f3"], isCanonical: !0 },
        ":in:": { unicode: ["1f1ee-1f1f3"], isCanonical: !1 },
        ":flag_im:": { unicode: ["1f1ee-1f1f2"], isCanonical: !0 },
        ":im:": { unicode: ["1f1ee-1f1f2"], isCanonical: !1 },
        ":flag_il:": { unicode: ["1f1ee-1f1f1"], isCanonical: !0 },
        ":il:": { unicode: ["1f1ee-1f1f1"], isCanonical: !1 },
        ":flag_ie:": { unicode: ["1f1ee-1f1ea"], isCanonical: !0 },
        ":ie:": { unicode: ["1f1ee-1f1ea"], isCanonical: !1 },
        ":flag_id:": { unicode: ["1f1ee-1f1e9"], isCanonical: !0 },
        ":indonesia:": { unicode: ["1f1ee-1f1e9"], isCanonical: !1 },
        ":flag_ic:": { unicode: ["1f1ee-1f1e8"], isCanonical: !0 },
        ":ic:": { unicode: ["1f1ee-1f1e8"], isCanonical: !1 },
        ":flag_hu:": { unicode: ["1f1ed-1f1fa"], isCanonical: !0 },
        ":hu:": { unicode: ["1f1ed-1f1fa"], isCanonical: !1 },
        ":flag_ht:": { unicode: ["1f1ed-1f1f9"], isCanonical: !0 },
        ":ht:": { unicode: ["1f1ed-1f1f9"], isCanonical: !1 },
        ":flag_hr:": { unicode: ["1f1ed-1f1f7"], isCanonical: !0 },
        ":hr:": { unicode: ["1f1ed-1f1f7"], isCanonical: !1 },
        ":flag_hn:": { unicode: ["1f1ed-1f1f3"], isCanonical: !0 },
        ":hn:": { unicode: ["1f1ed-1f1f3"], isCanonical: !1 },
        ":flag_hm:": { unicode: ["1f1ed-1f1f2"], isCanonical: !0 },
        ":hm:": { unicode: ["1f1ed-1f1f2"], isCanonical: !1 },
        ":flag_hk:": { unicode: ["1f1ed-1f1f0"], isCanonical: !0 },
        ":hk:": { unicode: ["1f1ed-1f1f0"], isCanonical: !1 },
        ":flag_gy:": { unicode: ["1f1ec-1f1fe"], isCanonical: !0 },
        ":gy:": { unicode: ["1f1ec-1f1fe"], isCanonical: !1 },
        ":flag_gw:": { unicode: ["1f1ec-1f1fc"], isCanonical: !0 },
        ":gw:": { unicode: ["1f1ec-1f1fc"], isCanonical: !1 },
        ":flag_gu:": { unicode: ["1f1ec-1f1fa"], isCanonical: !0 },
        ":gu:": { unicode: ["1f1ec-1f1fa"], isCanonical: !1 },
        ":flag_gt:": { unicode: ["1f1ec-1f1f9"], isCanonical: !0 },
        ":gt:": { unicode: ["1f1ec-1f1f9"], isCanonical: !1 },
        ":flag_gs:": { unicode: ["1f1ec-1f1f8"], isCanonical: !0 },
        ":gs:": { unicode: ["1f1ec-1f1f8"], isCanonical: !1 },
        ":flag_gr:": { unicode: ["1f1ec-1f1f7"], isCanonical: !0 },
        ":gr:": { unicode: ["1f1ec-1f1f7"], isCanonical: !1 },
        ":flag_gq:": { unicode: ["1f1ec-1f1f6"], isCanonical: !0 },
        ":gq:": { unicode: ["1f1ec-1f1f6"], isCanonical: !1 },
        ":flag_gp:": { unicode: ["1f1ec-1f1f5"], isCanonical: !0 },
        ":gp:": { unicode: ["1f1ec-1f1f5"], isCanonical: !1 },
        ":flag_gn:": { unicode: ["1f1ec-1f1f3"], isCanonical: !0 },
        ":gn:": { unicode: ["1f1ec-1f1f3"], isCanonical: !1 },
        ":flag_gm:": { unicode: ["1f1ec-1f1f2"], isCanonical: !0 },
        ":gm:": { unicode: ["1f1ec-1f1f2"], isCanonical: !1 },
        ":flag_gl:": { unicode: ["1f1ec-1f1f1"], isCanonical: !0 },
        ":gl:": { unicode: ["1f1ec-1f1f1"], isCanonical: !1 },
        ":flag_gi:": { unicode: ["1f1ec-1f1ee"], isCanonical: !0 },
        ":gi:": { unicode: ["1f1ec-1f1ee"], isCanonical: !1 },
        ":flag_gh:": { unicode: ["1f1ec-1f1ed"], isCanonical: !0 },
        ":gh:": { unicode: ["1f1ec-1f1ed"], isCanonical: !1 },
        ":flag_gg:": { unicode: ["1f1ec-1f1ec"], isCanonical: !0 },
        ":gg:": { unicode: ["1f1ec-1f1ec"], isCanonical: !1 },
        ":flag_gf:": { unicode: ["1f1ec-1f1eb"], isCanonical: !0 },
        ":gf:": { unicode: ["1f1ec-1f1eb"], isCanonical: !1 },
        ":flag_ge:": { unicode: ["1f1ec-1f1ea"], isCanonical: !0 },
        ":ge:": { unicode: ["1f1ec-1f1ea"], isCanonical: !1 },
        ":flag_gd:": { unicode: ["1f1ec-1f1e9"], isCanonical: !0 },
        ":gd:": { unicode: ["1f1ec-1f1e9"], isCanonical: !1 },
        ":flag_gb:": { unicode: ["1f1ec-1f1e7"], isCanonical: !0 },
        ":gb:": { unicode: ["1f1ec-1f1e7"], isCanonical: !1 },
        ":flag_ga:": { unicode: ["1f1ec-1f1e6"], isCanonical: !0 },
        ":ga:": { unicode: ["1f1ec-1f1e6"], isCanonical: !1 },
        ":flag_fr:": { unicode: ["1f1eb-1f1f7"], isCanonical: !0 },
        ":fr:": { unicode: ["1f1eb-1f1f7"], isCanonical: !1 },
        ":flag_fo:": { unicode: ["1f1eb-1f1f4"], isCanonical: !0 },
        ":fo:": { unicode: ["1f1eb-1f1f4"], isCanonical: !1 },
        ":flag_fm:": { unicode: ["1f1eb-1f1f2"], isCanonical: !0 },
        ":fm:": { unicode: ["1f1eb-1f1f2"], isCanonical: !1 },
        ":flag_fk:": { unicode: ["1f1eb-1f1f0"], isCanonical: !0 },
        ":fk:": { unicode: ["1f1eb-1f1f0"], isCanonical: !1 },
        ":flag_fj:": { unicode: ["1f1eb-1f1ef"], isCanonical: !0 },
        ":fj:": { unicode: ["1f1eb-1f1ef"], isCanonical: !1 },
        ":flag_fi:": { unicode: ["1f1eb-1f1ee"], isCanonical: !0 },
        ":fi:": { unicode: ["1f1eb-1f1ee"], isCanonical: !1 },
        ":flag_eu:": { unicode: ["1f1ea-1f1fa"], isCanonical: !0 },
        ":eu:": { unicode: ["1f1ea-1f1fa"], isCanonical: !1 },
        ":flag_et:": { unicode: ["1f1ea-1f1f9"], isCanonical: !0 },
        ":et:": { unicode: ["1f1ea-1f1f9"], isCanonical: !1 },
        ":flag_es:": { unicode: ["1f1ea-1f1f8"], isCanonical: !0 },
        ":es:": { unicode: ["1f1ea-1f1f8"], isCanonical: !1 },
        ":flag_er:": { unicode: ["1f1ea-1f1f7"], isCanonical: !0 },
        ":er:": { unicode: ["1f1ea-1f1f7"], isCanonical: !1 },
        ":flag_eh:": { unicode: ["1f1ea-1f1ed"], isCanonical: !0 },
        ":eh:": { unicode: ["1f1ea-1f1ed"], isCanonical: !1 },
        ":flag_eg:": { unicode: ["1f1ea-1f1ec"], isCanonical: !0 },
        ":eg:": { unicode: ["1f1ea-1f1ec"], isCanonical: !1 },
        ":flag_ee:": { unicode: ["1f1ea-1f1ea"], isCanonical: !0 },
        ":ee:": { unicode: ["1f1ea-1f1ea"], isCanonical: !1 },
        ":flag_ec:": { unicode: ["1f1ea-1f1e8"], isCanonical: !0 },
        ":ec:": { unicode: ["1f1ea-1f1e8"], isCanonical: !1 },
        ":flag_ea:": { unicode: ["1f1ea-1f1e6"], isCanonical: !0 },
        ":ea:": { unicode: ["1f1ea-1f1e6"], isCanonical: !1 },
        ":flag_dz:": { unicode: ["1f1e9-1f1ff"], isCanonical: !0 },
        ":dz:": { unicode: ["1f1e9-1f1ff"], isCanonical: !1 },
        ":flag_do:": { unicode: ["1f1e9-1f1f4"], isCanonical: !0 },
        ":do:": { unicode: ["1f1e9-1f1f4"], isCanonical: !1 },
        ":flag_dm:": { unicode: ["1f1e9-1f1f2"], isCanonical: !0 },
        ":dm:": { unicode: ["1f1e9-1f1f2"], isCanonical: !1 },
        ":flag_dk:": { unicode: ["1f1e9-1f1f0"], isCanonical: !0 },
        ":dk:": { unicode: ["1f1e9-1f1f0"], isCanonical: !1 },
        ":flag_dj:": { unicode: ["1f1e9-1f1ef"], isCanonical: !0 },
        ":dj:": { unicode: ["1f1e9-1f1ef"], isCanonical: !1 },
        ":flag_dg:": { unicode: ["1f1e9-1f1ec"], isCanonical: !0 },
        ":dg:": { unicode: ["1f1e9-1f1ec"], isCanonical: !1 },
        ":flag_de:": { unicode: ["1f1e9-1f1ea"], isCanonical: !0 },
        ":de:": { unicode: ["1f1e9-1f1ea"], isCanonical: !1 },
        ":flag_cz:": { unicode: ["1f1e8-1f1ff"], isCanonical: !0 },
        ":cz:": { unicode: ["1f1e8-1f1ff"], isCanonical: !1 },
        ":flag_cy:": { unicode: ["1f1e8-1f1fe"], isCanonical: !0 },
        ":cy:": { unicode: ["1f1e8-1f1fe"], isCanonical: !1 },
        ":flag_cx:": { unicode: ["1f1e8-1f1fd"], isCanonical: !0 },
        ":cx:": { unicode: ["1f1e8-1f1fd"], isCanonical: !1 },
        ":flag_cw:": { unicode: ["1f1e8-1f1fc"], isCanonical: !0 },
        ":cw:": { unicode: ["1f1e8-1f1fc"], isCanonical: !1 },
        ":flag_cv:": { unicode: ["1f1e8-1f1fb"], isCanonical: !0 },
        ":cv:": { unicode: ["1f1e8-1f1fb"], isCanonical: !1 },
        ":flag_cu:": { unicode: ["1f1e8-1f1fa"], isCanonical: !0 },
        ":cu:": { unicode: ["1f1e8-1f1fa"], isCanonical: !1 },
        ":flag_cr:": { unicode: ["1f1e8-1f1f7"], isCanonical: !0 },
        ":cr:": { unicode: ["1f1e8-1f1f7"], isCanonical: !1 },
        ":flag_cp:": { unicode: ["1f1e8-1f1f5"], isCanonical: !0 },
        ":cp:": { unicode: ["1f1e8-1f1f5"], isCanonical: !1 },
        ":flag_co:": { unicode: ["1f1e8-1f1f4"], isCanonical: !0 },
        ":co:": { unicode: ["1f1e8-1f1f4"], isCanonical: !1 },
        ":flag_cn:": { unicode: ["1f1e8-1f1f3"], isCanonical: !0 },
        ":cn:": { unicode: ["1f1e8-1f1f3"], isCanonical: !1 },
        ":flag_cm:": { unicode: ["1f1e8-1f1f2"], isCanonical: !0 },
        ":cm:": { unicode: ["1f1e8-1f1f2"], isCanonical: !1 },
        ":flag_cl:": { unicode: ["1f1e8-1f1f1"], isCanonical: !0 },
        ":chile:": { unicode: ["1f1e8-1f1f1"], isCanonical: !1 },
        ":flag_ck:": { unicode: ["1f1e8-1f1f0"], isCanonical: !0 },
        ":ck:": { unicode: ["1f1e8-1f1f0"], isCanonical: !1 },
        ":flag_ci:": { unicode: ["1f1e8-1f1ee"], isCanonical: !0 },
        ":ci:": { unicode: ["1f1e8-1f1ee"], isCanonical: !1 },
        ":flag_ch:": { unicode: ["1f1e8-1f1ed"], isCanonical: !0 },
        ":ch:": { unicode: ["1f1e8-1f1ed"], isCanonical: !1 },
        ":flag_cg:": { unicode: ["1f1e8-1f1ec"], isCanonical: !0 },
        ":cg:": { unicode: ["1f1e8-1f1ec"], isCanonical: !1 },
        ":flag_cf:": { unicode: ["1f1e8-1f1eb"], isCanonical: !0 },
        ":cf:": { unicode: ["1f1e8-1f1eb"], isCanonical: !1 },
        ":flag_cd:": { unicode: ["1f1e8-1f1e9"], isCanonical: !0 },
        ":congo:": { unicode: ["1f1e8-1f1e9"], isCanonical: !1 },
        ":flag_cc:": { unicode: ["1f1e8-1f1e8"], isCanonical: !0 },
        ":cc:": { unicode: ["1f1e8-1f1e8"], isCanonical: !1 },
        ":flag_ca:": { unicode: ["1f1e8-1f1e6"], isCanonical: !0 },
        ":ca:": { unicode: ["1f1e8-1f1e6"], isCanonical: !1 },
        ":flag_bz:": { unicode: ["1f1e7-1f1ff"], isCanonical: !0 },
        ":bz:": { unicode: ["1f1e7-1f1ff"], isCanonical: !1 },
        ":flag_by:": { unicode: ["1f1e7-1f1fe"], isCanonical: !0 },
        ":by:": { unicode: ["1f1e7-1f1fe"], isCanonical: !1 },
        ":flag_bw:": { unicode: ["1f1e7-1f1fc"], isCanonical: !0 },
        ":bw:": { unicode: ["1f1e7-1f1fc"], isCanonical: !1 },
        ":flag_bv:": { unicode: ["1f1e7-1f1fb"], isCanonical: !0 },
        ":bv:": { unicode: ["1f1e7-1f1fb"], isCanonical: !1 },
        ":flag_bt:": { unicode: ["1f1e7-1f1f9"], isCanonical: !0 },
        ":bt:": { unicode: ["1f1e7-1f1f9"], isCanonical: !1 },
        ":flag_bs:": { unicode: ["1f1e7-1f1f8"], isCanonical: !0 },
        ":bs:": { unicode: ["1f1e7-1f1f8"], isCanonical: !1 },
        ":flag_br:": { unicode: ["1f1e7-1f1f7"], isCanonical: !0 },
        ":br:": { unicode: ["1f1e7-1f1f7"], isCanonical: !1 },
        ":flag_bq:": { unicode: ["1f1e7-1f1f6"], isCanonical: !0 },
        ":bq:": { unicode: ["1f1e7-1f1f6"], isCanonical: !1 },
        ":flag_bo:": { unicode: ["1f1e7-1f1f4"], isCanonical: !0 },
        ":bo:": { unicode: ["1f1e7-1f1f4"], isCanonical: !1 },
        ":flag_bn:": { unicode: ["1f1e7-1f1f3"], isCanonical: !0 },
        ":bn:": { unicode: ["1f1e7-1f1f3"], isCanonical: !1 },
        ":flag_bm:": { unicode: ["1f1e7-1f1f2"], isCanonical: !0 },
        ":bm:": { unicode: ["1f1e7-1f1f2"], isCanonical: !1 },
        ":flag_bl:": { unicode: ["1f1e7-1f1f1"], isCanonical: !0 },
        ":bl:": { unicode: ["1f1e7-1f1f1"], isCanonical: !1 },
        ":flag_bj:": { unicode: ["1f1e7-1f1ef"], isCanonical: !0 },
        ":bj:": { unicode: ["1f1e7-1f1ef"], isCanonical: !1 },
        ":flag_bi:": { unicode: ["1f1e7-1f1ee"], isCanonical: !0 },
        ":bi:": { unicode: ["1f1e7-1f1ee"], isCanonical: !1 },
        ":flag_bh:": { unicode: ["1f1e7-1f1ed"], isCanonical: !0 },
        ":bh:": { unicode: ["1f1e7-1f1ed"], isCanonical: !1 },
        ":flag_bg:": { unicode: ["1f1e7-1f1ec"], isCanonical: !0 },
        ":bg:": { unicode: ["1f1e7-1f1ec"], isCanonical: !1 },
        ":flag_bf:": { unicode: ["1f1e7-1f1eb"], isCanonical: !0 },
        ":bf:": { unicode: ["1f1e7-1f1eb"], isCanonical: !1 },
        ":flag_be:": { unicode: ["1f1e7-1f1ea"], isCanonical: !0 },
        ":be:": { unicode: ["1f1e7-1f1ea"], isCanonical: !1 },
        ":flag_bd:": { unicode: ["1f1e7-1f1e9"], isCanonical: !0 },
        ":bd:": { unicode: ["1f1e7-1f1e9"], isCanonical: !1 },
        ":flag_bb:": { unicode: ["1f1e7-1f1e7"], isCanonical: !0 },
        ":bb:": { unicode: ["1f1e7-1f1e7"], isCanonical: !1 },
        ":flag_ba:": { unicode: ["1f1e7-1f1e6"], isCanonical: !0 },
        ":ba:": { unicode: ["1f1e7-1f1e6"], isCanonical: !1 },
        ":flag_az:": { unicode: ["1f1e6-1f1ff"], isCanonical: !0 },
        ":az:": { unicode: ["1f1e6-1f1ff"], isCanonical: !1 },
        ":flag_ax:": { unicode: ["1f1e6-1f1fd"], isCanonical: !0 },
        ":ax:": { unicode: ["1f1e6-1f1fd"], isCanonical: !1 },
        ":flag_aw:": { unicode: ["1f1e6-1f1fc"], isCanonical: !0 },
        ":aw:": { unicode: ["1f1e6-1f1fc"], isCanonical: !1 },
        ":flag_au:": { unicode: ["1f1e6-1f1fa"], isCanonical: !0 },
        ":au:": { unicode: ["1f1e6-1f1fa"], isCanonical: !1 },
        ":flag_at:": { unicode: ["1f1e6-1f1f9"], isCanonical: !0 },
        ":at:": { unicode: ["1f1e6-1f1f9"], isCanonical: !1 },
        ":flag_as:": { unicode: ["1f1e6-1f1f8"], isCanonical: !0 },
        ":as:": { unicode: ["1f1e6-1f1f8"], isCanonical: !1 },
        ":flag_ar:": { unicode: ["1f1e6-1f1f7"], isCanonical: !0 },
        ":ar:": { unicode: ["1f1e6-1f1f7"], isCanonical: !1 },
        ":flag_aq:": { unicode: ["1f1e6-1f1f6"], isCanonical: !0 },
        ":aq:": { unicode: ["1f1e6-1f1f6"], isCanonical: !1 },
        ":flag_ao:": { unicode: ["1f1e6-1f1f4"], isCanonical: !0 },
        ":ao:": { unicode: ["1f1e6-1f1f4"], isCanonical: !1 },
        ":flag_am:": { unicode: ["1f1e6-1f1f2"], isCanonical: !0 },
        ":am:": { unicode: ["1f1e6-1f1f2"], isCanonical: !1 },
        ":flag_al:": { unicode: ["1f1e6-1f1f1"], isCanonical: !0 },
        ":al:": { unicode: ["1f1e6-1f1f1"], isCanonical: !1 },
        ":flag_ai:": { unicode: ["1f1e6-1f1ee"], isCanonical: !0 },
        ":ai:": { unicode: ["1f1e6-1f1ee"], isCanonical: !1 },
        ":flag_ag:": { unicode: ["1f1e6-1f1ec"], isCanonical: !0 },
        ":ag:": { unicode: ["1f1e6-1f1ec"], isCanonical: !1 },
        ":flag_af:": { unicode: ["1f1e6-1f1eb"], isCanonical: !0 },
        ":af:": { unicode: ["1f1e6-1f1eb"], isCanonical: !1 },
        ":flag_ae:": { unicode: ["1f1e6-1f1ea"], isCanonical: !0 },
        ":ae:": { unicode: ["1f1e6-1f1ea"], isCanonical: !1 },
        ":flag_ad:": { unicode: ["1f1e6-1f1e9"], isCanonical: !0 },
        ":ad:": { unicode: ["1f1e6-1f1e9"], isCanonical: !1 },
        ":flag_ac:": { unicode: ["1f1e6-1f1e8"], isCanonical: !0 },
        ":ac:": { unicode: ["1f1e6-1f1e8"], isCanonical: !1 },
        ":mahjong:": { unicode: ["1f004-fe0f", "1f004"], isCanonical: !0 },
        ":parking:": { unicode: ["1f17f-fe0f", "1f17f"], isCanonical: !0 },
        ":sa:": { unicode: ["1f202-fe0f", "1f202"], isCanonical: !0 },
        ":u7121:": { unicode: ["1f21a-fe0f", "1f21a"], isCanonical: !0 },
        ":u6307:": { unicode: ["1f22f-fe0f", "1f22f"], isCanonical: !0 },
        ":u6708:": { unicode: ["1f237-fe0f", "1f237"], isCanonical: !0 },
        ":film_frames:": { unicode: ["1f39e-fe0f", "1f39e"], isCanonical: !0 },
        ":tickets:": { unicode: ["1f39f-fe0f", "1f39f"], isCanonical: !0 },
        ":admission_tickets:": { unicode: ["1f39f-fe0f", "1f39f"], isCanonical: !1 },
        ":lifter:": { unicode: ["1f3cb-fe0f", "1f3cb"], isCanonical: !0 },
        ":weight_lifter:": { unicode: ["1f3cb-fe0f", "1f3cb"], isCanonical: !1 },
        ":golfer:": { unicode: ["1f3cc-fe0f", "1f3cc"], isCanonical: !0 },
        ":motorcycle:": { unicode: ["1f3cd-fe0f", "1f3cd"], isCanonical: !0 },
        ":racing_motorcycle:": { unicode: ["1f3cd-fe0f", "1f3cd"], isCanonical: !1 },
        ":race_car:": { unicode: ["1f3ce-fe0f", "1f3ce"], isCanonical: !0 },
        ":racing_car:": { unicode: ["1f3ce-fe0f", "1f3ce"], isCanonical: !1 },
        ":military_medal:": { unicode: ["1f396-fe0f", "1f396"], isCanonical: !0 },
        ":reminder_ribbon:": { unicode: ["1f397-fe0f", "1f397"], isCanonical: !0 },
        ":hot_pepper:": { unicode: ["1f336-fe0f", "1f336"], isCanonical: !0 },
        ":cloud_rain:": { unicode: ["1f327-fe0f", "1f327"], isCanonical: !0 },
        ":cloud_with_rain:": { unicode: ["1f327-fe0f", "1f327"], isCanonical: !1 },
        ":cloud_snow:": { unicode: ["1f328-fe0f", "1f328"], isCanonical: !0 },
        ":cloud_with_snow:": { unicode: ["1f328-fe0f", "1f328"], isCanonical: !1 },
        ":cloud_lightning:": { unicode: ["1f329-fe0f", "1f329"], isCanonical: !0 },
        ":cloud_with_lightning:": { unicode: ["1f329-fe0f", "1f329"], isCanonical: !1 },
        ":cloud_tornado:": { unicode: ["1f32a-fe0f", "1f32a"], isCanonical: !0 },
        ":cloud_with_tornado:": { unicode: ["1f32a-fe0f", "1f32a"], isCanonical: !1 },
        ":fog:": { unicode: ["1f32b-fe0f", "1f32b"], isCanonical: !0 },
        ":wind_blowing_face:": { unicode: ["1f32c-fe0f", "1f32c"], isCanonical: !0 },
        ":chipmunk:": { unicode: ["1f43f-fe0f", "1f43f"], isCanonical: !0 },
        ":spider:": { unicode: ["1f577-fe0f", "1f577"], isCanonical: !0 },
        ":spider_web:": { unicode: ["1f578-fe0f", "1f578"], isCanonical: !0 },
        ":thermometer:": { unicode: ["1f321-fe0f", "1f321"], isCanonical: !0 },
        ":microphone2:": { unicode: ["1f399-fe0f", "1f399"], isCanonical: !0 },
        ":studio_microphone:": { unicode: ["1f399-fe0f", "1f399"], isCanonical: !1 },
        ":level_slider:": { unicode: ["1f39a-fe0f", "1f39a"], isCanonical: !0 },
        ":control_knobs:": { unicode: ["1f39b-fe0f", "1f39b"], isCanonical: !0 },
        ":flag_white:": { unicode: ["1f3f3-fe0f", "1f3f3"], isCanonical: !0 },
        ":waving_white_flag:": { unicode: ["1f3f3-fe0f", "1f3f3"], isCanonical: !1 },
        ":rosette:": { unicode: ["1f3f5-fe0f", "1f3f5"], isCanonical: !0 },
        ":label:": { unicode: ["1f3f7-fe0f", "1f3f7"], isCanonical: !0 },
        ":projector:": { unicode: ["1f4fd-fe0f", "1f4fd"], isCanonical: !0 },
        ":film_projector:": { unicode: ["1f4fd-fe0f", "1f4fd"], isCanonical: !1 },
        ":om_symbol:": { unicode: ["1f549-fe0f", "1f549"], isCanonical: !0 },
        ":dove:": { unicode: ["1f54a-fe0f", "1f54a"], isCanonical: !0 },
        ":dove_of_peace:": { unicode: ["1f54a-fe0f", "1f54a"], isCanonical: !1 },
        ":candle:": { unicode: ["1f56f-fe0f", "1f56f"], isCanonical: !0 },
        ":clock:": { unicode: ["1f570-fe0f", "1f570"], isCanonical: !0 },
        ":mantlepiece_clock:": { unicode: ["1f570-fe0f", "1f570"], isCanonical: !1 },
        ":hole:": { unicode: ["1f573-fe0f", "1f573"], isCanonical: !0 },
        ":dark_sunglasses:": { unicode: ["1f576-fe0f", "1f576"], isCanonical: !0 },
        ":joystick:": { unicode: ["1f579-fe0f", "1f579"], isCanonical: !0 },
        ":paperclips:": { unicode: ["1f587-fe0f", "1f587"], isCanonical: !0 },
        ":linked_paperclips:": { unicode: ["1f587-fe0f", "1f587"], isCanonical: !1 },
        ":pen_ballpoint:": { unicode: ["1f58a-fe0f", "1f58a"], isCanonical: !0 },
        ":lower_left_ballpoint_pen:": { unicode: ["1f58a-fe0f", "1f58a"], isCanonical: !1 },
        ":pen_fountain:": { unicode: ["1f58b-fe0f", "1f58b"], isCanonical: !0 },
        ":lower_left_fountain_pen:": { unicode: ["1f58b-fe0f", "1f58b"], isCanonical: !1 },
        ":paintbrush:": { unicode: ["1f58c-fe0f", "1f58c"], isCanonical: !0 },
        ":lower_left_paintbrush:": { unicode: ["1f58c-fe0f", "1f58c"], isCanonical: !1 },
        ":crayon:": { unicode: ["1f58d-fe0f", "1f58d"], isCanonical: !0 },
        ":lower_left_crayon:": { unicode: ["1f58d-fe0f", "1f58d"], isCanonical: !1 },
        ":desktop:": { unicode: ["1f5a5-fe0f", "1f5a5"], isCanonical: !0 },
        ":desktop_computer:": { unicode: ["1f5a5-fe0f", "1f5a5"], isCanonical: !1 },
        ":printer:": { unicode: ["1f5a8-fe0f", "1f5a8"], isCanonical: !0 },
        ":trackball:": { unicode: ["1f5b2-fe0f", "1f5b2"], isCanonical: !0 },
        ":frame_photo:": { unicode: ["1f5bc-fe0f", "1f5bc"], isCanonical: !0 },
        ":frame_with_picture:": { unicode: ["1f5bc-fe0f", "1f5bc"], isCanonical: !1 },
        ":dividers:": { unicode: ["1f5c2-fe0f", "1f5c2"], isCanonical: !0 },
        ":card_index_dividers:": { unicode: ["1f5c2-fe0f", "1f5c2"], isCanonical: !1 },
        ":card_box:": { unicode: ["1f5c3-fe0f", "1f5c3"], isCanonical: !0 },
        ":card_file_box:": { unicode: ["1f5c3-fe0f", "1f5c3"], isCanonical: !1 },
        ":file_cabinet:": { unicode: ["1f5c4-fe0f", "1f5c4"], isCanonical: !0 },
        ":wastebasket:": { unicode: ["1f5d1-fe0f", "1f5d1"], isCanonical: !0 },
        ":notepad_spiral:": { unicode: ["1f5d2-fe0f", "1f5d2"], isCanonical: !0 },
        ":spiral_note_pad:": { unicode: ["1f5d2-fe0f", "1f5d2"], isCanonical: !1 },
        ":calendar_spiral:": { unicode: ["1f5d3-fe0f", "1f5d3"], isCanonical: !0 },
        ":spiral_calendar_pad:": { unicode: ["1f5d3-fe0f", "1f5d3"], isCanonical: !1 },
        ":compression:": { unicode: ["1f5dc-fe0f", "1f5dc"], isCanonical: !0 },
        ":key2:": { unicode: ["1f5dd-fe0f", "1f5dd"], isCanonical: !0 },
        ":old_key:": { unicode: ["1f5dd-fe0f", "1f5dd"], isCanonical: !1 },
        ":newspaper2:": { unicode: ["1f5de-fe0f", "1f5de"], isCanonical: !0 },
        ":rolled_up_newspaper:": { unicode: ["1f5de-fe0f", "1f5de"], isCanonical: !1 },
        ":dagger:": { unicode: ["1f5e1-fe0f", "1f5e1"], isCanonical: !0 },
        ":dagger_knife:": { unicode: ["1f5e1-fe0f", "1f5e1"], isCanonical: !1 },
        ":speaking_head:": { unicode: ["1f5e3-fe0f", "1f5e3"], isCanonical: !0 },
        ":speaking_head_in_silhouette:": { unicode: ["1f5e3-fe0f", "1f5e3"], isCanonical: !1 },
        ":anger_right:": { unicode: ["1f5ef-fe0f", "1f5ef"], isCanonical: !0 },
        ":right_anger_bubble:": { unicode: ["1f5ef-fe0f", "1f5ef"], isCanonical: !1 },
        ":ballot_box:": { unicode: ["1f5f3-fe0f", "1f5f3"], isCanonical: !0 },
        ":ballot_box_with_ballot:": { unicode: ["1f5f3-fe0f", "1f5f3"], isCanonical: !1 },
        ":map:": { unicode: ["1f5fa-fe0f", "1f5fa"], isCanonical: !0 },
        ":world_map:": { unicode: ["1f5fa-fe0f", "1f5fa"], isCanonical: !1 },
        ":tools:": { unicode: ["1f6e0-fe0f", "1f6e0"], isCanonical: !0 },
        ":hammer_and_wrench:": { unicode: ["1f6e0-fe0f", "1f6e0"], isCanonical: !1 },
        ":shield:": { unicode: ["1f6e1-fe0f", "1f6e1"], isCanonical: !0 },
        ":oil:": { unicode: ["1f6e2-fe0f", "1f6e2"], isCanonical: !0 },
        ":oil_drum:": { unicode: ["1f6e2-fe0f", "1f6e2"], isCanonical: !1 },
        ":satellite_orbital:": { unicode: ["1f6f0-fe0f", "1f6f0"], isCanonical: !0 },
        ":fork_knife_plate:": { unicode: ["1f37d-fe0f", "1f37d"], isCanonical: !0 },
        ":fork_and_knife_with_plate:": { unicode: ["1f37d-fe0f", "1f37d"], isCanonical: !1 },
        ":eye:": { unicode: ["1f441-fe0f", "1f441"], isCanonical: !0 },
        ":levitate:": { unicode: ["1f574-fe0f", "1f574"], isCanonical: !0 },
        ":man_in_business_suit_levitating:": { unicode: ["1f574-fe0f", "1f574"], isCanonical: !1 },
        ":spy:": { unicode: ["1f575-fe0f", "1f575"], isCanonical: !0 },
        ":sleuth_or_spy:": { unicode: ["1f575-fe0f", "1f575"], isCanonical: !1 },
        ":hand_splayed:": { unicode: ["1f590-fe0f", "1f590"], isCanonical: !0 },
        ":raised_hand_with_fingers_splayed:": { unicode: ["1f590-fe0f", "1f590"], isCanonical: !1 },
        ":mountain_snow:": { unicode: ["1f3d4-fe0f", "1f3d4"], isCanonical: !0 },
        ":snow_capped_mountain:": { unicode: ["1f3d4-fe0f", "1f3d4"], isCanonical: !1 },
        ":camping:": { unicode: ["1f3d5-fe0f", "1f3d5"], isCanonical: !0 },
        ":beach:": { unicode: ["1f3d6-fe0f", "1f3d6"], isCanonical: !0 },
        ":beach_with_umbrella:": { unicode: ["1f3d6-fe0f", "1f3d6"], isCanonical: !1 },
        ":construction_site:": { unicode: ["1f3d7-fe0f", "1f3d7"], isCanonical: !0 },
        ":building_construction:": { unicode: ["1f3d7-fe0f", "1f3d7"], isCanonical: !1 },
        ":homes:": { unicode: ["1f3d8-fe0f", "1f3d8"], isCanonical: !0 },
        ":house_buildings:": { unicode: ["1f3d8-fe0f", "1f3d8"], isCanonical: !1 },
        ":cityscape:": { unicode: ["1f3d9-fe0f", "1f3d9"], isCanonical: !0 },
        ":house_abandoned:": { unicode: ["1f3da-fe0f", "1f3da"], isCanonical: !0 },
        ":derelict_house_building:": { unicode: ["1f3da-fe0f", "1f3da"], isCanonical: !1 },
        ":classical_building:": { unicode: ["1f3db-fe0f", "1f3db"], isCanonical: !0 },
        ":desert:": { unicode: ["1f3dc-fe0f", "1f3dc"], isCanonical: !0 },
        ":island:": { unicode: ["1f3dd-fe0f", "1f3dd"], isCanonical: !0 },
        ":desert_island:": { unicode: ["1f3dd-fe0f", "1f3dd"], isCanonical: !1 },
        ":park:": { unicode: ["1f3de-fe0f", "1f3de"], isCanonical: !0 },
        ":national_park:": { unicode: ["1f3de-fe0f", "1f3de"], isCanonical: !1 },
        ":stadium:": { unicode: ["1f3df-fe0f", "1f3df"], isCanonical: !0 },
        ":couch:": { unicode: ["1f6cb-fe0f", "1f6cb"], isCanonical: !0 },
        ":couch_and_lamp:": { unicode: ["1f6cb-fe0f", "1f6cb"], isCanonical: !1 },
        ":shopping_bags:": { unicode: ["1f6cd-fe0f", "1f6cd"], isCanonical: !0 },
        ":bellhop:": { unicode: ["1f6ce-fe0f", "1f6ce"], isCanonical: !0 },
        ":bellhop_bell:": { unicode: ["1f6ce-fe0f", "1f6ce"], isCanonical: !1 },
        ":bed:": { unicode: ["1f6cf-fe0f", "1f6cf"], isCanonical: !0 },
        ":motorway:": { unicode: ["1f6e3-fe0f", "1f6e3"], isCanonical: !0 },
        ":railway_track:": { unicode: ["1f6e4-fe0f", "1f6e4"], isCanonical: !0 },
        ":railroad_track:": { unicode: ["1f6e4-fe0f", "1f6e4"], isCanonical: !1 },
        ":motorboat:": { unicode: ["1f6e5-fe0f", "1f6e5"], isCanonical: !0 },
        ":airplane_small:": { unicode: ["1f6e9-fe0f", "1f6e9"], isCanonical: !0 },
        ":small_airplane:": { unicode: ["1f6e9-fe0f", "1f6e9"], isCanonical: !1 },
        ":cruise_ship:": { unicode: ["1f6f3-fe0f", "1f6f3"], isCanonical: !0 },
        ":passenger_ship:": { unicode: ["1f6f3-fe0f", "1f6f3"], isCanonical: !1 },
        ":white_sun_small_cloud:": { unicode: ["1f324-fe0f", "1f324"], isCanonical: !0 },
        ":white_sun_with_small_cloud:": { unicode: ["1f324-fe0f", "1f324"], isCanonical: !1 },
        ":white_sun_cloud:": { unicode: ["1f325-fe0f", "1f325"], isCanonical: !0 },
        ":white_sun_behind_cloud:": { unicode: ["1f325-fe0f", "1f325"], isCanonical: !1 },
        ":white_sun_rain_cloud:": { unicode: ["1f326-fe0f", "1f326"], isCanonical: !0 },
        ":white_sun_behind_cloud_with_rain:": { unicode: ["1f326-fe0f", "1f326"], isCanonical: !1 },
        ":mouse_three_button:": { unicode: ["1f5b1-fe0f", "1f5b1"], isCanonical: !0 },
        ":three_button_mouse:": { unicode: ["1f5b1-fe0f", "1f5b1"], isCanonical: !1 },
        ":point_up_tone1:": { unicode: ["261d-1f3fb"], isCanonical: !0 },
        ":point_up_tone2:": { unicode: ["261d-1f3fc"], isCanonical: !0 },
        ":point_up_tone3:": { unicode: ["261d-1f3fd"], isCanonical: !0 },
        ":point_up_tone4:": { unicode: ["261d-1f3fe"], isCanonical: !0 },
        ":point_up_tone5:": { unicode: ["261d-1f3ff"], isCanonical: !0 },
        ":v_tone1:": { unicode: ["270c-1f3fb"], isCanonical: !0 },
        ":v_tone2:": { unicode: ["270c-1f3fc"], isCanonical: !0 },
        ":v_tone3:": { unicode: ["270c-1f3fd"], isCanonical: !0 },
        ":v_tone4:": { unicode: ["270c-1f3fe"], isCanonical: !0 },
        ":v_tone5:": { unicode: ["270c-1f3ff"], isCanonical: !0 },
        ":fist_tone1:": { unicode: ["270a-1f3fb"], isCanonical: !0 },
        ":fist_tone2:": { unicode: ["270a-1f3fc"], isCanonical: !0 },
        ":fist_tone3:": { unicode: ["270a-1f3fd"], isCanonical: !0 },
        ":fist_tone4:": { unicode: ["270a-1f3fe"], isCanonical: !0 },
        ":fist_tone5:": { unicode: ["270a-1f3ff"], isCanonical: !0 },
        ":raised_hand_tone1:": { unicode: ["270b-1f3fb"], isCanonical: !0 },
        ":raised_hand_tone2:": { unicode: ["270b-1f3fc"], isCanonical: !0 },
        ":raised_hand_tone3:": { unicode: ["270b-1f3fd"], isCanonical: !0 },
        ":raised_hand_tone4:": { unicode: ["270b-1f3fe"], isCanonical: !0 },
        ":raised_hand_tone5:": { unicode: ["270b-1f3ff"], isCanonical: !0 },
        ":writing_hand_tone1:": { unicode: ["270d-1f3fb"], isCanonical: !0 },
        ":writing_hand_tone2:": { unicode: ["270d-1f3fc"], isCanonical: !0 },
        ":writing_hand_tone3:": { unicode: ["270d-1f3fd"], isCanonical: !0 },
        ":writing_hand_tone4:": { unicode: ["270d-1f3fe"], isCanonical: !0 },
        ":writing_hand_tone5:": { unicode: ["270d-1f3ff"], isCanonical: !0 },
        ":basketball_player_tone1:": { unicode: ["26f9-1f3fb"], isCanonical: !0 },
        ":person_with_ball_tone1:": { unicode: ["26f9-1f3fb"], isCanonical: !1 },
        ":basketball_player_tone2:": { unicode: ["26f9-1f3fc"], isCanonical: !0 },
        ":person_with_ball_tone2:": { unicode: ["26f9-1f3fc"], isCanonical: !1 },
        ":basketball_player_tone3:": { unicode: ["26f9-1f3fd"], isCanonical: !0 },
        ":person_with_ball_tone3:": { unicode: ["26f9-1f3fd"], isCanonical: !1 },
        ":basketball_player_tone4:": { unicode: ["26f9-1f3fe"], isCanonical: !0 },
        ":person_with_ball_tone4:": { unicode: ["26f9-1f3fe"], isCanonical: !1 },
        ":basketball_player_tone5:": { unicode: ["26f9-1f3ff"], isCanonical: !0 },
        ":person_with_ball_tone5:": { unicode: ["26f9-1f3ff"], isCanonical: !1 },
        ":copyright:": { unicode: ["00a9-fe0f", "00a9"], isCanonical: !0 },
        ":registered:": { unicode: ["00ae-fe0f", "00ae"], isCanonical: !0 },
        ":bangbang:": { unicode: ["203c-fe0f", "203c"], isCanonical: !0 },
        ":interrobang:": { unicode: ["2049-fe0f", "2049"], isCanonical: !0 },
        ":tm:": { unicode: ["2122-fe0f", "2122"], isCanonical: !0 },
        ":information_source:": { unicode: ["2139-fe0f", "2139"], isCanonical: !0 },
        ":left_right_arrow:": { unicode: ["2194-fe0f", "2194"], isCanonical: !0 },
        ":arrow_up_down:": { unicode: ["2195-fe0f", "2195"], isCanonical: !0 },
        ":arrow_upper_left:": { unicode: ["2196-fe0f", "2196"], isCanonical: !0 },
        ":arrow_upper_right:": { unicode: ["2197-fe0f", "2197"], isCanonical: !0 },
        ":arrow_lower_right:": { unicode: ["2198-fe0f", "2198"], isCanonical: !0 },
        ":arrow_lower_left:": { unicode: ["2199-fe0f", "2199"], isCanonical: !0 },
        ":leftwards_arrow_with_hook:": { unicode: ["21a9-fe0f", "21a9"], isCanonical: !0 },
        ":arrow_right_hook:": { unicode: ["21aa-fe0f", "21aa"], isCanonical: !0 },
        ":watch:": { unicode: ["231a-fe0f", "231a"], isCanonical: !0 },
        ":hourglass:": { unicode: ["231b-fe0f", "231b"], isCanonical: !0 },
        ":m:": { unicode: ["24c2-fe0f", "24c2"], isCanonical: !0 },
        ":black_small_square:": { unicode: ["25aa-fe0f", "25aa"], isCanonical: !0 },
        ":white_small_square:": { unicode: ["25ab-fe0f", "25ab"], isCanonical: !0 },
        ":arrow_forward:": { unicode: ["25b6-fe0f", "25b6"], isCanonical: !0 },
        ":arrow_backward:": { unicode: ["25c0-fe0f", "25c0"], isCanonical: !0 },
        ":white_medium_square:": { unicode: ["25fb-fe0f", "25fb"], isCanonical: !0 },
        ":black_medium_square:": { unicode: ["25fc-fe0f", "25fc"], isCanonical: !0 },
        ":white_medium_small_square:": { unicode: ["25fd-fe0f", "25fd"], isCanonical: !0 },
        ":black_medium_small_square:": { unicode: ["25fe-fe0f", "25fe"], isCanonical: !0 },
        ":sunny:": { unicode: ["2600-fe0f", "2600"], isCanonical: !0 },
        ":cloud:": { unicode: ["2601-fe0f", "2601"], isCanonical: !0 },
        ":telephone:": { unicode: ["260e-fe0f", "260e"], isCanonical: !0 },
        ":ballot_box_with_check:": { unicode: ["2611-fe0f", "2611"], isCanonical: !0 },
        ":umbrella:": { unicode: ["2614-fe0f", "2614"], isCanonical: !0 },
        ":coffee:": { unicode: ["2615-fe0f", "2615"], isCanonical: !0 },
        ":point_up:": { unicode: ["261d-fe0f", "261d"], isCanonical: !0 },
        ":relaxed:": { unicode: ["263a-fe0f", "263a"], isCanonical: !0 },
        ":aries:": { unicode: ["2648-fe0f", "2648"], isCanonical: !0 },
        ":taurus:": { unicode: ["2649-fe0f", "2649"], isCanonical: !0 },
        ":gemini:": { unicode: ["264a-fe0f", "264a"], isCanonical: !0 },
        ":cancer:": { unicode: ["264b-fe0f", "264b"], isCanonical: !0 },
        ":leo:": { unicode: ["264c-fe0f", "264c"], isCanonical: !0 },
        ":virgo:": { unicode: ["264d-fe0f", "264d"], isCanonical: !0 },
        ":libra:": { unicode: ["264e-fe0f", "264e"], isCanonical: !0 },
        ":scorpius:": { unicode: ["264f-fe0f", "264f"], isCanonical: !0 },
        ":sagittarius:": { unicode: ["2650-fe0f", "2650"], isCanonical: !0 },
        ":capricorn:": { unicode: ["2651-fe0f", "2651"], isCanonical: !0 },
        ":aquarius:": { unicode: ["2652-fe0f", "2652"], isCanonical: !0 },
        ":pisces:": { unicode: ["2653-fe0f", "2653"], isCanonical: !0 },
        ":spades:": { unicode: ["2660-fe0f", "2660"], isCanonical: !0 },
        ":clubs:": { unicode: ["2663-fe0f", "2663"], isCanonical: !0 },
        ":hearts:": { unicode: ["2665-fe0f", "2665"], isCanonical: !0 },
        ":diamonds:": { unicode: ["2666-fe0f", "2666"], isCanonical: !0 },
        ":hotsprings:": { unicode: ["2668-fe0f", "2668"], isCanonical: !0 },
        ":recycle:": { unicode: ["267b-fe0f", "267b"], isCanonical: !0 },
        ":wheelchair:": { unicode: ["267f-fe0f", "267f"], isCanonical: !0 },
        ":anchor:": { unicode: ["2693-fe0f", "2693"], isCanonical: !0 },
        ":warning:": { unicode: ["26a0-fe0f", "26a0"], isCanonical: !0 },
        ":zap:": { unicode: ["26a1-fe0f", "26a1"], isCanonical: !0 },
        ":white_circle:": { unicode: ["26aa-fe0f", "26aa"], isCanonical: !0 },
        ":black_circle:": { unicode: ["26ab-fe0f", "26ab"], isCanonical: !0 },
        ":soccer:": { unicode: ["26bd-fe0f", "26bd"], isCanonical: !0 },
        ":baseball:": { unicode: ["26be-fe0f", "26be"], isCanonical: !0 },
        ":snowman:": { unicode: ["26c4-fe0f", "26c4"], isCanonical: !0 },
        ":partly_sunny:": { unicode: ["26c5-fe0f", "26c5"], isCanonical: !0 },
        ":no_entry:": { unicode: ["26d4-fe0f", "26d4"], isCanonical: !0 },
        ":church:": { unicode: ["26ea-fe0f", "26ea"], isCanonical: !0 },
        ":fountain:": { unicode: ["26f2-fe0f", "26f2"], isCanonical: !0 },
        ":golf:": { unicode: ["26f3-fe0f", "26f3"], isCanonical: !0 },
        ":sailboat:": { unicode: ["26f5-fe0f", "26f5"], isCanonical: !0 },
        ":tent:": { unicode: ["26fa-fe0f", "26fa"], isCanonical: !0 },
        ":fuelpump:": { unicode: ["26fd-fe0f", "26fd"], isCanonical: !0 },
        ":scissors:": { unicode: ["2702-fe0f", "2702"], isCanonical: !0 },
        ":airplane:": { unicode: ["2708-fe0f", "2708"], isCanonical: !0 },
        ":envelope:": { unicode: ["2709-fe0f", "2709"], isCanonical: !0 },
        ":v:": { unicode: ["270c-fe0f", "270c"], isCanonical: !0 },
        ":pencil2:": { unicode: ["270f-fe0f", "270f"], isCanonical: !0 },
        ":black_nib:": { unicode: ["2712-fe0f", "2712"], isCanonical: !0 },
        ":heavy_check_mark:": { unicode: ["2714-fe0f", "2714"], isCanonical: !0 },
        ":heavy_multiplication_x:": { unicode: ["2716-fe0f", "2716"], isCanonical: !0 },
        ":eight_spoked_asterisk:": { unicode: ["2733-fe0f", "2733"], isCanonical: !0 },
        ":eight_pointed_black_star:": { unicode: ["2734-fe0f", "2734"], isCanonical: !0 },
        ":snowflake:": { unicode: ["2744-fe0f", "2744"], isCanonical: !0 },
        ":sparkle:": { unicode: ["2747-fe0f", "2747"], isCanonical: !0 },
        ":exclamation:": { unicode: ["2757-fe0f", "2757"], isCanonical: !0 },
        ":heart:": { unicode: ["2764-fe0f", "2764"], isCanonical: !0 },
        ":arrow_right:": { unicode: ["27a1-fe0f", "27a1"], isCanonical: !0 },
        ":arrow_heading_up:": { unicode: ["2934-fe0f", "2934"], isCanonical: !0 },
        ":arrow_heading_down:": { unicode: ["2935-fe0f", "2935"], isCanonical: !0 },
        ":arrow_left:": { unicode: ["2b05-fe0f", "2b05"], isCanonical: !0 },
        ":arrow_up:": { unicode: ["2b06-fe0f", "2b06"], isCanonical: !0 },
        ":arrow_down:": { unicode: ["2b07-fe0f", "2b07"], isCanonical: !0 },
        ":black_large_square:": { unicode: ["2b1b-fe0f", "2b1b"], isCanonical: !0 },
        ":white_large_square:": { unicode: ["2b1c-fe0f", "2b1c"], isCanonical: !0 },
        ":star:": { unicode: ["2b50-fe0f", "2b50"], isCanonical: !0 },
        ":o:": { unicode: ["2b55-fe0f", "2b55"], isCanonical: !0 },
        ":wavy_dash:": { unicode: ["3030-fe0f", "3030"], isCanonical: !0 },
        ":part_alternation_mark:": { unicode: ["303d-fe0f", "303d"], isCanonical: !0 },
        ":congratulations:": { unicode: ["3297-fe0f", "3297"], isCanonical: !0 },
        ":secret:": { unicode: ["3299-fe0f", "3299"], isCanonical: !0 },
        ":cross:": { unicode: ["271d-fe0f", "271d"], isCanonical: !0 },
        ":latin_cross:": { unicode: ["271d-fe0f", "271d"], isCanonical: !1 },
        ":keyboard:": { unicode: ["2328-fe0f", "2328"], isCanonical: !0 },
        ":writing_hand:": { unicode: ["270d-fe0f", "270d"], isCanonical: !0 },
        ":track_next:": { unicode: ["23ed-fe0f", "23ed"], isCanonical: !0 },
        ":next_track:": { unicode: ["23ed-fe0f", "23ed"], isCanonical: !1 },
        ":track_previous:": { unicode: ["23ee-fe0f", "23ee"], isCanonical: !0 },
        ":previous_track:": { unicode: ["23ee-fe0f", "23ee"], isCanonical: !1 },
        ":play_pause:": { unicode: ["23ef-fe0f", "23ef"], isCanonical: !0 },
        ":stopwatch:": { unicode: ["23f1-fe0f", "23f1"], isCanonical: !0 },
        ":timer:": { unicode: ["23f2-fe0f", "23f2"], isCanonical: !0 },
        ":timer_clock:": { unicode: ["23f2-fe0f", "23f2"], isCanonical: !1 },
        ":pause_button:": { unicode: ["23f8-fe0f", "23f8"], isCanonical: !0 },
        ":double_vertical_bar:": { unicode: ["23f8-fe0f", "23f8"], isCanonical: !1 },
        ":stop_button:": { unicode: ["23f9-fe0f", "23f9"], isCanonical: !0 },
        ":record_button:": { unicode: ["23fa-fe0f", "23fa"], isCanonical: !0 },
        ":umbrella2:": { unicode: ["2602-fe0f", "2602"], isCanonical: !0 },
        ":snowman2:": { unicode: ["2603-fe0f", "2603"], isCanonical: !0 },
        ":comet:": { unicode: ["2604-fe0f", "2604"], isCanonical: !0 },
        ":shamrock:": { unicode: ["2618-fe0f", "2618"], isCanonical: !0 },
        ":skull_crossbones:": { unicode: ["2620-fe0f", "2620"], isCanonical: !0 },
        ":skull_and_crossbones:": { unicode: ["2620-fe0f", "2620"], isCanonical: !1 },
        ":radioactive:": { unicode: ["2622-fe0f", "2622"], isCanonical: !0 },
        ":radioactive_sign:": { unicode: ["2622-fe0f", "2622"], isCanonical: !1 },
        ":biohazard:": { unicode: ["2623-fe0f", "2623"], isCanonical: !0 },
        ":biohazard_sign:": { unicode: ["2623-fe0f", "2623"], isCanonical: !1 },
        ":orthodox_cross:": { unicode: ["2626-fe0f", "2626"], isCanonical: !0 },
        ":star_and_crescent:": { unicode: ["262a-fe0f", "262a"], isCanonical: !0 },
        ":peace:": { unicode: ["262e-fe0f", "262e"], isCanonical: !0 },
        ":peace_symbol:": { unicode: ["262e-fe0f", "262e"], isCanonical: !1 },
        ":yin_yang:": { unicode: ["262f-fe0f", "262f"], isCanonical: !0 },
        ":wheel_of_dharma:": { unicode: ["2638-fe0f", "2638"], isCanonical: !0 },
        ":frowning2:": { unicode: ["2639-fe0f", "2639"], isCanonical: !0 },
        ":white_frowning_face:": { unicode: ["2639-fe0f", "2639"], isCanonical: !1 },
        ":hammer_pick:": { unicode: ["2692-fe0f", "2692"], isCanonical: !0 },
        ":hammer_and_pick:": { unicode: ["2692-fe0f", "2692"], isCanonical: !1 },
        ":crossed_swords:": { unicode: ["2694-fe0f", "2694"], isCanonical: !0 },
        ":scales:": { unicode: ["2696-fe0f", "2696"], isCanonical: !0 },
        ":alembic:": { unicode: ["2697-fe0f", "2697"], isCanonical: !0 },
        ":gear:": { unicode: ["2699-fe0f", "2699"], isCanonical: !0 },
        ":atom:": { unicode: ["269b-fe0f", "269b"], isCanonical: !0 },
        ":atom_symbol:": { unicode: ["269b-fe0f", "269b"], isCanonical: !1 },
        ":fleur-de-lis:": { unicode: ["269c-fe0f", "269c"], isCanonical: !0 },
        ":coffin:": { unicode: ["26b0-fe0f", "26b0"], isCanonical: !0 },
        ":urn:": { unicode: ["26b1-fe0f", "26b1"], isCanonical: !0 },
        ":funeral_urn:": { unicode: ["26b1-fe0f", "26b1"], isCanonical: !1 },
        ":thunder_cloud_rain:": { unicode: ["26c8-fe0f", "26c8"], isCanonical: !0 },
        ":thunder_cloud_and_rain:": { unicode: ["26c8-fe0f", "26c8"], isCanonical: !1 },
        ":pick:": { unicode: ["26cf-fe0f", "26cf"], isCanonical: !0 },
        ":helmet_with_cross:": { unicode: ["26d1-fe0f", "26d1"], isCanonical: !0 },
        ":helmet_with_white_cross:": { unicode: ["26d1-fe0f", "26d1"], isCanonical: !1 },
        ":chains:": { unicode: ["26d3-fe0f", "26d3"], isCanonical: !0 },
        ":shinto_shrine:": { unicode: ["26e9-fe0f", "26e9"], isCanonical: !0 },
        ":mountain:": { unicode: ["26f0-fe0f", "26f0"], isCanonical: !0 },
        ":beach_umbrella:": { unicode: ["26f1-fe0f", "26f1"], isCanonical: !0 },
        ":umbrella_on_ground:": { unicode: ["26f1-fe0f", "26f1"], isCanonical: !1 },
        ":ferry:": { unicode: ["26f4-fe0f", "26f4"], isCanonical: !0 },
        ":skier:": { unicode: ["26f7-fe0f", "26f7"], isCanonical: !0 },
        ":ice_skate:": { unicode: ["26f8-fe0f", "26f8"], isCanonical: !0 },
        ":basketball_player:": { unicode: ["26f9-fe0f", "26f9"], isCanonical: !0 },
        ":person_with_ball:": { unicode: ["26f9-fe0f", "26f9"], isCanonical: !1 },
        ":star_of_david:": { unicode: ["2721-fe0f", "2721"], isCanonical: !0 },
        ":heart_exclamation:": { unicode: ["2763-fe0f", "2763"], isCanonical: !0 },
        ":heavy_heart_exclamation_mark_ornament:": { unicode: ["2763-fe0f", "2763"], isCanonical: !1 },
        ":black_joker:": { unicode: ["1f0cf"], isCanonical: !0 },
        ":a:": { unicode: ["1f170"], isCanonical: !0 },
        ":b:": { unicode: ["1f171"], isCanonical: !0 },
        ":o2:": { unicode: ["1f17e"], isCanonical: !0 },
        ":ab:": { unicode: ["1f18e"], isCanonical: !0 },
        ":cl:": { unicode: ["1f191"], isCanonical: !0 },
        ":cool:": { unicode: ["1f192"], isCanonical: !0 },
        ":free:": { unicode: ["1f193"], isCanonical: !0 },
        ":id:": { unicode: ["1f194"], isCanonical: !0 },
        ":new:": { unicode: ["1f195"], isCanonical: !0 },
        ":ng:": { unicode: ["1f196"], isCanonical: !0 },
        ":ok:": { unicode: ["1f197"], isCanonical: !0 },
        ":sos:": { unicode: ["1f198"], isCanonical: !0 },
        ":up:": { unicode: ["1f199"], isCanonical: !0 },
        ":vs:": { unicode: ["1f19a"], isCanonical: !0 },
        ":koko:": { unicode: ["1f201"], isCanonical: !0 },
        ":u7981:": { unicode: ["1f232"], isCanonical: !0 },
        ":u7a7a:": { unicode: ["1f233"], isCanonical: !0 },
        ":u5408:": { unicode: ["1f234"], isCanonical: !0 },
        ":u6e80:": { unicode: ["1f235"], isCanonical: !0 },
        ":u6709:": { unicode: ["1f236"], isCanonical: !0 },
        ":u7533:": { unicode: ["1f238"], isCanonical: !0 },
        ":u5272:": { unicode: ["1f239"], isCanonical: !0 },
        ":u55b6:": { unicode: ["1f23a"], isCanonical: !0 },
        ":ideograph_advantage:": { unicode: ["1f250"], isCanonical: !0 },
        ":accept:": { unicode: ["1f251"], isCanonical: !0 },
        ":cyclone:": { unicode: ["1f300"], isCanonical: !0 },
        ":foggy:": { unicode: ["1f301"], isCanonical: !0 },
        ":closed_umbrella:": { unicode: ["1f302"], isCanonical: !0 },
        ":night_with_stars:": { unicode: ["1f303"], isCanonical: !0 },
        ":sunrise_over_mountains:": { unicode: ["1f304"], isCanonical: !0 },
        ":sunrise:": { unicode: ["1f305"], isCanonical: !0 },
        ":city_dusk:": { unicode: ["1f306"], isCanonical: !0 },
        ":city_sunset:": { unicode: ["1f307"], isCanonical: !0 },
        ":city_sunrise:": { unicode: ["1f307"], isCanonical: !1 },
        ":rainbow:": { unicode: ["1f308"], isCanonical: !0 },
        ":bridge_at_night:": { unicode: ["1f309"], isCanonical: !0 },
        ":ocean:": { unicode: ["1f30a"], isCanonical: !0 },
        ":volcano:": { unicode: ["1f30b"], isCanonical: !0 },
        ":milky_way:": { unicode: ["1f30c"], isCanonical: !0 },
        ":earth_asia:": { unicode: ["1f30f"], isCanonical: !0 },
        ":new_moon:": { unicode: ["1f311"], isCanonical: !0 },
        ":first_quarter_moon:": { unicode: ["1f313"], isCanonical: !0 },
        ":waxing_gibbous_moon:": { unicode: ["1f314"], isCanonical: !0 },
        ":full_moon:": { unicode: ["1f315"], isCanonical: !0 },
        ":crescent_moon:": { unicode: ["1f319"], isCanonical: !0 },
        ":first_quarter_moon_with_face:": { unicode: ["1f31b"], isCanonical: !0 },
        ":star2:": { unicode: ["1f31f"], isCanonical: !0 },
        ":stars:": { unicode: ["1f320"], isCanonical: !0 },
        ":chestnut:": { unicode: ["1f330"], isCanonical: !0 },
        ":seedling:": { unicode: ["1f331"], isCanonical: !0 },
        ":palm_tree:": { unicode: ["1f334"], isCanonical: !0 },
        ":cactus:": { unicode: ["1f335"], isCanonical: !0 },
        ":tulip:": { unicode: ["1f337"], isCanonical: !0 },
        ":cherry_blossom:": { unicode: ["1f338"], isCanonical: !0 },
        ":rose:": { unicode: ["1f339"], isCanonical: !0 },
        ":hibiscus:": { unicode: ["1f33a"], isCanonical: !0 },
        ":sunflower:": { unicode: ["1f33b"], isCanonical: !0 },
        ":blossom:": { unicode: ["1f33c"], isCanonical: !0 },
        ":corn:": { unicode: ["1f33d"], isCanonical: !0 },
        ":ear_of_rice:": { unicode: ["1f33e"], isCanonical: !0 },
        ":herb:": { unicode: ["1f33f"], isCanonical: !0 },
        ":four_leaf_clover:": { unicode: ["1f340"], isCanonical: !0 },
        ":maple_leaf:": { unicode: ["1f341"], isCanonical: !0 },
        ":fallen_leaf:": { unicode: ["1f342"], isCanonical: !0 },
        ":leaves:": { unicode: ["1f343"], isCanonical: !0 },
        ":mushroom:": { unicode: ["1f344"], isCanonical: !0 },
        ":tomato:": { unicode: ["1f345"], isCanonical: !0 },
        ":eggplant:": { unicode: ["1f346"], isCanonical: !0 },
        ":grapes:": { unicode: ["1f347"], isCanonical: !0 },
        ":melon:": { unicode: ["1f348"], isCanonical: !0 },
        ":watermelon:": { unicode: ["1f349"], isCanonical: !0 },
        ":tangerine:": { unicode: ["1f34a"], isCanonical: !0 },
        ":banana:": { unicode: ["1f34c"], isCanonical: !0 },
        ":pineapple:": { unicode: ["1f34d"], isCanonical: !0 },
        ":apple:": { unicode: ["1f34e"], isCanonical: !0 },
        ":green_apple:": { unicode: ["1f34f"], isCanonical: !0 },
        ":peach:": { unicode: ["1f351"], isCanonical: !0 },
        ":cherries:": { unicode: ["1f352"], isCanonical: !0 },
        ":strawberry:": { unicode: ["1f353"], isCanonical: !0 },
        ":hamburger:": { unicode: ["1f354"], isCanonical: !0 },
        ":pizza:": { unicode: ["1f355"], isCanonical: !0 },
        ":meat_on_bone:": { unicode: ["1f356"], isCanonical: !0 },
        ":poultry_leg:": { unicode: ["1f357"], isCanonical: !0 },
        ":rice_cracker:": { unicode: ["1f358"], isCanonical: !0 },
        ":rice_ball:": { unicode: ["1f359"], isCanonical: !0 },
        ":rice:": { unicode: ["1f35a"], isCanonical: !0 },
        ":curry:": { unicode: ["1f35b"], isCanonical: !0 },
        ":ramen:": { unicode: ["1f35c"], isCanonical: !0 },
        ":spaghetti:": { unicode: ["1f35d"], isCanonical: !0 },
        ":bread:": { unicode: ["1f35e"], isCanonical: !0 },
        ":fries:": { unicode: ["1f35f"], isCanonical: !0 },
        ":sweet_potato:": { unicode: ["1f360"], isCanonical: !0 },
        ":dango:": { unicode: ["1f361"], isCanonical: !0 },
        ":oden:": { unicode: ["1f362"], isCanonical: !0 },
        ":sushi:": { unicode: ["1f363"], isCanonical: !0 },
        ":fried_shrimp:": { unicode: ["1f364"], isCanonical: !0 },
        ":fish_cake:": { unicode: ["1f365"], isCanonical: !0 },
        ":icecream:": { unicode: ["1f366"], isCanonical: !0 },
        ":shaved_ice:": { unicode: ["1f367"], isCanonical: !0 },
        ":ice_cream:": { unicode: ["1f368"], isCanonical: !0 },
        ":doughnut:": { unicode: ["1f369"], isCanonical: !0 },
        ":cookie:": { unicode: ["1f36a"], isCanonical: !0 },
        ":chocolate_bar:": { unicode: ["1f36b"], isCanonical: !0 },
        ":candy:": { unicode: ["1f36c"], isCanonical: !0 },
        ":lollipop:": { unicode: ["1f36d"], isCanonical: !0 },
        ":custard:": { unicode: ["1f36e"], isCanonical: !0 },
        ":pudding:": { unicode: ["1f36e"], isCanonical: !1 },
        ":flan:": { unicode: ["1f36e"], isCanonical: !1 },
        ":honey_pot:": { unicode: ["1f36f"], isCanonical: !0 },
        ":cake:": { unicode: ["1f370"], isCanonical: !0 },
        ":bento:": { unicode: ["1f371"], isCanonical: !0 },
        ":stew:": { unicode: ["1f372"], isCanonical: !0 },
        ":egg:": { unicode: ["1f373"], isCanonical: !0 },
        ":fork_and_knife:": { unicode: ["1f374"], isCanonical: !0 },
        ":tea:": { unicode: ["1f375"], isCanonical: !0 },
        ":sake:": { unicode: ["1f376"], isCanonical: !0 },
        ":wine_glass:": { unicode: ["1f377"], isCanonical: !0 },
        ":cocktail:": { unicode: ["1f378"], isCanonical: !0 },
        ":tropical_drink:": { unicode: ["1f379"], isCanonical: !0 },
        ":beer:": { unicode: ["1f37a"], isCanonical: !0 },
        ":beers:": { unicode: ["1f37b"], isCanonical: !0 },
        ":ribbon:": { unicode: ["1f380"], isCanonical: !0 },
        ":gift:": { unicode: ["1f381"], isCanonical: !0 },
        ":birthday:": { unicode: ["1f382"], isCanonical: !0 },
        ":jack_o_lantern:": { unicode: ["1f383"], isCanonical: !0 },
        ":christmas_tree:": { unicode: ["1f384"], isCanonical: !0 },
        ":santa:": { unicode: ["1f385"], isCanonical: !0 },
        ":fireworks:": { unicode: ["1f386"], isCanonical: !0 },
        ":sparkler:": { unicode: ["1f387"], isCanonical: !0 },
        ":balloon:": { unicode: ["1f388"], isCanonical: !0 },
        ":tada:": { unicode: ["1f389"], isCanonical: !0 },
        ":confetti_ball:": { unicode: ["1f38a"], isCanonical: !0 },
        ":tanabata_tree:": { unicode: ["1f38b"], isCanonical: !0 },
        ":crossed_flags:": { unicode: ["1f38c"], isCanonical: !0 },
        ":bamboo:": { unicode: ["1f38d"], isCanonical: !0 },
        ":dolls:": { unicode: ["1f38e"], isCanonical: !0 },
        ":flags:": { unicode: ["1f38f"], isCanonical: !0 },
        ":wind_chime:": { unicode: ["1f390"], isCanonical: !0 },
        ":rice_scene:": { unicode: ["1f391"], isCanonical: !0 },
        ":school_satchel:": { unicode: ["1f392"], isCanonical: !0 },
        ":mortar_board:": { unicode: ["1f393"], isCanonical: !0 },
        ":carousel_horse:": { unicode: ["1f3a0"], isCanonical: !0 },
        ":ferris_wheel:": { unicode: ["1f3a1"], isCanonical: !0 },
        ":roller_coaster:": { unicode: ["1f3a2"], isCanonical: !0 },
        ":fishing_pole_and_fish:": { unicode: ["1f3a3"], isCanonical: !0 },
        ":microphone:": { unicode: ["1f3a4"], isCanonical: !0 },
        ":movie_camera:": { unicode: ["1f3a5"], isCanonical: !0 },
        ":cinema:": { unicode: ["1f3a6"], isCanonical: !0 },
        ":headphones:": { unicode: ["1f3a7"], isCanonical: !0 },
        ":art:": { unicode: ["1f3a8"], isCanonical: !0 },
        ":tophat:": { unicode: ["1f3a9"], isCanonical: !0 },
        ":circus_tent:": { unicode: ["1f3aa"], isCanonical: !0 },
        ":ticket:": { unicode: ["1f3ab"], isCanonical: !0 },
        ":clapper:": { unicode: ["1f3ac"], isCanonical: !0 },
        ":performing_arts:": { unicode: ["1f3ad"], isCanonical: !0 },
        ":video_game:": { unicode: ["1f3ae"], isCanonical: !0 },
        ":dart:": { unicode: ["1f3af"], isCanonical: !0 },
        ":slot_machine:": { unicode: ["1f3b0"], isCanonical: !0 },
        ":8ball:": { unicode: ["1f3b1"], isCanonical: !0 },
        ":game_die:": { unicode: ["1f3b2"], isCanonical: !0 },
        ":bowling:": { unicode: ["1f3b3"], isCanonical: !0 },
        ":flower_playing_cards:": { unicode: ["1f3b4"], isCanonical: !0 },
        ":musical_note:": { unicode: ["1f3b5"], isCanonical: !0 },
        ":notes:": { unicode: ["1f3b6"], isCanonical: !0 },
        ":saxophone:": { unicode: ["1f3b7"], isCanonical: !0 },
        ":guitar:": { unicode: ["1f3b8"], isCanonical: !0 },
        ":musical_keyboard:": { unicode: ["1f3b9"], isCanonical: !0 },
        ":trumpet:": { unicode: ["1f3ba"], isCanonical: !0 },
        ":violin:": { unicode: ["1f3bb"], isCanonical: !0 },
        ":musical_score:": { unicode: ["1f3bc"], isCanonical: !0 },
        ":running_shirt_with_sash:": { unicode: ["1f3bd"], isCanonical: !0 },
        ":tennis:": { unicode: ["1f3be"], isCanonical: !0 },
        ":ski:": { unicode: ["1f3bf"], isCanonical: !0 },
        ":basketball:": { unicode: ["1f3c0"], isCanonical: !0 },
        ":checkered_flag:": { unicode: ["1f3c1"], isCanonical: !0 },
        ":snowboarder:": { unicode: ["1f3c2"], isCanonical: !0 },
        ":runner:": { unicode: ["1f3c3"], isCanonical: !0 },
        ":surfer:": { unicode: ["1f3c4"], isCanonical: !0 },
        ":trophy:": { unicode: ["1f3c6"], isCanonical: !0 },
        ":football:": { unicode: ["1f3c8"], isCanonical: !0 },
        ":swimmer:": { unicode: ["1f3ca"], isCanonical: !0 },
        ":house:": { unicode: ["1f3e0"], isCanonical: !0 },
        ":house_with_garden:": { unicode: ["1f3e1"], isCanonical: !0 },
        ":office:": { unicode: ["1f3e2"], isCanonical: !0 },
        ":post_office:": { unicode: ["1f3e3"], isCanonical: !0 },
        ":hospital:": { unicode: ["1f3e5"], isCanonical: !0 },
        ":bank:": { unicode: ["1f3e6"], isCanonical: !0 },
        ":atm:": { unicode: ["1f3e7"], isCanonical: !0 },
        ":hotel:": { unicode: ["1f3e8"], isCanonical: !0 },
        ":love_hotel:": { unicode: ["1f3e9"], isCanonical: !0 },
        ":convenience_store:": { unicode: ["1f3ea"], isCanonical: !0 },
        ":school:": { unicode: ["1f3eb"], isCanonical: !0 },
        ":department_store:": { unicode: ["1f3ec"], isCanonical: !0 },
        ":factory:": { unicode: ["1f3ed"], isCanonical: !0 },
        ":izakaya_lantern:": { unicode: ["1f3ee"], isCanonical: !0 },
        ":japanese_castle:": { unicode: ["1f3ef"], isCanonical: !0 },
        ":european_castle:": { unicode: ["1f3f0"], isCanonical: !0 },
        ":snail:": { unicode: ["1f40c"], isCanonical: !0 },
        ":snake:": { unicode: ["1f40d"], isCanonical: !0 },
        ":racehorse:": { unicode: ["1f40e"], isCanonical: !0 },
        ":sheep:": { unicode: ["1f411"], isCanonical: !0 },
        ":monkey:": { unicode: ["1f412"], isCanonical: !0 },
        ":chicken:": { unicode: ["1f414"], isCanonical: !0 },
        ":boar:": { unicode: ["1f417"], isCanonical: !0 },
        ":elephant:": { unicode: ["1f418"], isCanonical: !0 },
        ":octopus:": { unicode: ["1f419"], isCanonical: !0 },
        ":shell:": { unicode: ["1f41a"], isCanonical: !0 },
        ":bug:": { unicode: ["1f41b"], isCanonical: !0 },
        ":ant:": { unicode: ["1f41c"], isCanonical: !0 },
        ":bee:": { unicode: ["1f41d"], isCanonical: !0 },
        ":beetle:": { unicode: ["1f41e"], isCanonical: !0 },
        ":fish:": { unicode: ["1f41f"], isCanonical: !0 },
        ":tropical_fish:": { unicode: ["1f420"], isCanonical: !0 },
        ":blowfish:": { unicode: ["1f421"], isCanonical: !0 },
        ":turtle:": { unicode: ["1f422"], isCanonical: !0 },
        ":hatching_chick:": { unicode: ["1f423"], isCanonical: !0 },
        ":baby_chick:": { unicode: ["1f424"], isCanonical: !0 },
        ":hatched_chick:": { unicode: ["1f425"], isCanonical: !0 },
        ":bird:": { unicode: ["1f426"], isCanonical: !0 },
        ":penguin:": { unicode: ["1f427"], isCanonical: !0 },
        ":koala:": { unicode: ["1f428"], isCanonical: !0 },
        ":poodle:": { unicode: ["1f429"], isCanonical: !0 },
        ":camel:": { unicode: ["1f42b"], isCanonical: !0 },
        ":dolphin:": { unicode: ["1f42c"], isCanonical: !0 },
        ":mouse:": { unicode: ["1f42d"], isCanonical: !0 },
        ":cow:": { unicode: ["1f42e"], isCanonical: !0 },
        ":tiger:": { unicode: ["1f42f"], isCanonical: !0 },
        ":rabbit:": { unicode: ["1f430"], isCanonical: !0 },
        ":cat:": { unicode: ["1f431"], isCanonical: !0 },
        ":dragon_face:": { unicode: ["1f432"], isCanonical: !0 },
        ":whale:": { unicode: ["1f433"], isCanonical: !0 },
        ":horse:": { unicode: ["1f434"], isCanonical: !0 },
        ":monkey_face:": { unicode: ["1f435"], isCanonical: !0 },
        ":dog:": { unicode: ["1f436"], isCanonical: !0 },
        ":pig:": { unicode: ["1f437"], isCanonical: !0 },
        ":frog:": { unicode: ["1f438"], isCanonical: !0 },
        ":hamster:": { unicode: ["1f439"], isCanonical: !0 },
        ":wolf:": { unicode: ["1f43a"], isCanonical: !0 },
        ":bear:": { unicode: ["1f43b"], isCanonical: !0 },
        ":panda_face:": { unicode: ["1f43c"], isCanonical: !0 },
        ":pig_nose:": { unicode: ["1f43d"], isCanonical: !0 },
        ":feet:": { unicode: ["1f43e"], isCanonical: !0 },
        ":paw_prints:": { unicode: ["1f43e"], isCanonical: !1 },
        ":eyes:": { unicode: ["1f440"], isCanonical: !0 },
        ":ear:": { unicode: ["1f442"], isCanonical: !0 },
        ":nose:": { unicode: ["1f443"], isCanonical: !0 },
        ":lips:": { unicode: ["1f444"], isCanonical: !0 },
        ":tongue:": { unicode: ["1f445"], isCanonical: !0 },
        ":point_up_2:": { unicode: ["1f446"], isCanonical: !0 },
        ":point_down:": { unicode: ["1f447"], isCanonical: !0 },
        ":point_left:": { unicode: ["1f448"], isCanonical: !0 },
        ":point_right:": { unicode: ["1f449"], isCanonical: !0 },
        ":punch:": { unicode: ["1f44a"], isCanonical: !0 },
        ":wave:": { unicode: ["1f44b"], isCanonical: !0 },
        ":ok_hand:": { unicode: ["1f44c"], isCanonical: !0 },
        ":thumbsup:": { unicode: ["1f44d"], isCanonical: !0 },
        ":+1:": { unicode: ["1f44d"], isCanonical: !1 },
        ":thumbup:": { unicode: ["1f44d"], isCanonical: !1 },
        ":thumbsdown:": { unicode: ["1f44e"], isCanonical: !0 },
        ":-1:": { unicode: ["1f44e"], isCanonical: !1 },
        ":thumbdown:": { unicode: ["1f44e"], isCanonical: !1 },
        ":clap:": { unicode: ["1f44f"], isCanonical: !0 },
        ":open_hands:": { unicode: ["1f450"], isCanonical: !0 },
        ":crown:": { unicode: ["1f451"], isCanonical: !0 },
        ":womans_hat:": { unicode: ["1f452"], isCanonical: !0 },
        ":eyeglasses:": { unicode: ["1f453"], isCanonical: !0 },
        ":necktie:": { unicode: ["1f454"], isCanonical: !0 },
        ":shirt:": { unicode: ["1f455"], isCanonical: !0 },
        ":jeans:": { unicode: ["1f456"], isCanonical: !0 },
        ":dress:": { unicode: ["1f457"], isCanonical: !0 },
        ":kimono:": { unicode: ["1f458"], isCanonical: !0 },
        ":bikini:": { unicode: ["1f459"], isCanonical: !0 },
        ":womans_clothes:": { unicode: ["1f45a"], isCanonical: !0 },
        ":purse:": { unicode: ["1f45b"], isCanonical: !0 },
        ":handbag:": { unicode: ["1f45c"], isCanonical: !0 },
        ":pouch:": { unicode: ["1f45d"], isCanonical: !0 },
        ":mans_shoe:": { unicode: ["1f45e"], isCanonical: !0 },
        ":athletic_shoe:": { unicode: ["1f45f"], isCanonical: !0 },
        ":high_heel:": { unicode: ["1f460"], isCanonical: !0 },
        ":sandal:": { unicode: ["1f461"], isCanonical: !0 },
        ":boot:": { unicode: ["1f462"], isCanonical: !0 },
        ":footprints:": { unicode: ["1f463"], isCanonical: !0 },
        ":bust_in_silhouette:": { unicode: ["1f464"], isCanonical: !0 },
        ":boy:": { unicode: ["1f466"], isCanonical: !0 },
        ":girl:": { unicode: ["1f467"], isCanonical: !0 },
        ":man:": { unicode: ["1f468"], isCanonical: !0 },
        ":woman:": { unicode: ["1f469"], isCanonical: !0 },
        ":family:": { unicode: ["1f46a"], isCanonical: !0 },
        ":couple:": { unicode: ["1f46b"], isCanonical: !0 },
        ":cop:": { unicode: ["1f46e"], isCanonical: !0 },
        ":dancers:": { unicode: ["1f46f"], isCanonical: !0 },
        ":bride_with_veil:": { unicode: ["1f470"], isCanonical: !0 },
        ":person_with_blond_hair:": { unicode: ["1f471"], isCanonical: !0 },
        ":man_with_gua_pi_mao:": { unicode: ["1f472"], isCanonical: !0 },
        ":man_with_turban:": { unicode: ["1f473"], isCanonical: !0 },
        ":older_man:": { unicode: ["1f474"], isCanonical: !0 },
        ":older_woman:": { unicode: ["1f475"], isCanonical: !0 },
        ":grandma:": { unicode: ["1f475"], isCanonical: !1 },
        ":baby:": { unicode: ["1f476"], isCanonical: !0 },
        ":construction_worker:": { unicode: ["1f477"], isCanonical: !0 },
        ":princess:": { unicode: ["1f478"], isCanonical: !0 },
        ":japanese_ogre:": { unicode: ["1f479"], isCanonical: !0 },
        ":japanese_goblin:": { unicode: ["1f47a"], isCanonical: !0 },
        ":ghost:": { unicode: ["1f47b"], isCanonical: !0 },
        ":angel:": { unicode: ["1f47c"], isCanonical: !0 },
        ":alien:": { unicode: ["1f47d"], isCanonical: !0 },
        ":space_invader:": { unicode: ["1f47e"], isCanonical: !0 },
        ":imp:": { unicode: ["1f47f"], isCanonical: !0 },
        ":skull:": { unicode: ["1f480"], isCanonical: !0 },
        ":skeleton:": { unicode: ["1f480"], isCanonical: !1 },
        ":card_index:": { unicode: ["1f4c7"], isCanonical: !0 },
        ":information_desk_person:": { unicode: ["1f481"], isCanonical: !0 },
        ":guardsman:": { unicode: ["1f482"], isCanonical: !0 },
        ":dancer:": { unicode: ["1f483"], isCanonical: !0 },
        ":lipstick:": { unicode: ["1f484"], isCanonical: !0 },
        ":nail_care:": { unicode: ["1f485"], isCanonical: !0 },
        ":ledger:": { unicode: ["1f4d2"], isCanonical: !0 },
        ":massage:": { unicode: ["1f486"], isCanonical: !0 },
        ":notebook:": { unicode: ["1f4d3"], isCanonical: !0 },
        ":haircut:": { unicode: ["1f487"], isCanonical: !0 },
        ":notebook_with_decorative_cover:": { unicode: ["1f4d4"], isCanonical: !0 },
        ":barber:": { unicode: ["1f488"], isCanonical: !0 },
        ":closed_book:": { unicode: ["1f4d5"], isCanonical: !0 },
        ":syringe:": { unicode: ["1f489"], isCanonical: !0 },
        ":book:": { unicode: ["1f4d6"], isCanonical: !0 },
        ":pill:": { unicode: ["1f48a"], isCanonical: !0 },
        ":green_book:": { unicode: ["1f4d7"], isCanonical: !0 },
        ":kiss:": { unicode: ["1f48b"], isCanonical: !0 },
        ":blue_book:": { unicode: ["1f4d8"], isCanonical: !0 },
        ":love_letter:": { unicode: ["1f48c"], isCanonical: !0 },
        ":orange_book:": { unicode: ["1f4d9"], isCanonical: !0 },
        ":ring:": { unicode: ["1f48d"], isCanonical: !0 },
        ":books:": { unicode: ["1f4da"], isCanonical: !0 },
        ":gem:": { unicode: ["1f48e"], isCanonical: !0 },
        ":name_badge:": { unicode: ["1f4db"], isCanonical: !0 },
        ":couplekiss:": { unicode: ["1f48f"], isCanonical: !0 },
        ":scroll:": { unicode: ["1f4dc"], isCanonical: !0 },
        ":bouquet:": { unicode: ["1f490"], isCanonical: !0 },
        ":pencil:": { unicode: ["1f4dd"], isCanonical: !0 },
        ":couple_with_heart:": { unicode: ["1f491"], isCanonical: !0 },
        ":telephone_receiver:": { unicode: ["1f4de"], isCanonical: !0 },
        ":wedding:": { unicode: ["1f492"], isCanonical: !0 },
        ":pager:": { unicode: ["1f4df"], isCanonical: !0 },
        ":fax:": { unicode: ["1f4e0"], isCanonical: !0 },
        ":heartbeat:": { unicode: ["1f493"], isCanonical: !0 },
        ":satellite:": { unicode: ["1f4e1"], isCanonical: !0 },
        ":loudspeaker:": { unicode: ["1f4e2"], isCanonical: !0 },
        ":broken_heart:": { unicode: ["1f494"], isCanonical: !0 },
        ":mega:": { unicode: ["1f4e3"], isCanonical: !0 },
        ":outbox_tray:": { unicode: ["1f4e4"], isCanonical: !0 },
        ":two_hearts:": { unicode: ["1f495"], isCanonical: !0 },
        ":inbox_tray:": { unicode: ["1f4e5"], isCanonical: !0 },
        ":package:": { unicode: ["1f4e6"], isCanonical: !0 },
        ":sparkling_heart:": { unicode: ["1f496"], isCanonical: !0 },
        ":e-mail:": { unicode: ["1f4e7"], isCanonical: !0 },
        ":email:": { unicode: ["1f4e7"], isCanonical: !1 },
        ":incoming_envelope:": { unicode: ["1f4e8"], isCanonical: !0 },
        ":heartpulse:": { unicode: ["1f497"], isCanonical: !0 },
        ":envelope_with_arrow:": { unicode: ["1f4e9"], isCanonical: !0 },
        ":mailbox_closed:": { unicode: ["1f4ea"], isCanonical: !0 },
        ":cupid:": { unicode: ["1f498"], isCanonical: !0 },
        ":mailbox:": { unicode: ["1f4eb"], isCanonical: !0 },
        ":postbox:": { unicode: ["1f4ee"], isCanonical: !0 },
        ":blue_heart:": { unicode: ["1f499"], isCanonical: !0 },
        ":newspaper:": { unicode: ["1f4f0"], isCanonical: !0 },
        ":iphone:": { unicode: ["1f4f1"], isCanonical: !0 },
        ":green_heart:": { unicode: ["1f49a"], isCanonical: !0 },
        ":calling:": { unicode: ["1f4f2"], isCanonical: !0 },
        ":vibration_mode:": { unicode: ["1f4f3"], isCanonical: !0 },
        ":yellow_heart:": { unicode: ["1f49b"], isCanonical: !0 },
        ":mobile_phone_off:": { unicode: ["1f4f4"], isCanonical: !0 },
        ":signal_strength:": { unicode: ["1f4f6"], isCanonical: !0 },
        ":purple_heart:": { unicode: ["1f49c"], isCanonical: !0 },
        ":camera:": { unicode: ["1f4f7"], isCanonical: !0 },
        ":video_camera:": { unicode: ["1f4f9"], isCanonical: !0 },
        ":gift_heart:": { unicode: ["1f49d"], isCanonical: !0 },
        ":tv:": { unicode: ["1f4fa"], isCanonical: !0 },
        ":radio:": { unicode: ["1f4fb"], isCanonical: !0 },
        ":revolving_hearts:": { unicode: ["1f49e"], isCanonical: !0 },
        ":vhs:": { unicode: ["1f4fc"], isCanonical: !0 },
        ":arrows_clockwise:": { unicode: ["1f503"], isCanonical: !0 },
        ":heart_decoration:": { unicode: ["1f49f"], isCanonical: !0 },
        ":loud_sound:": { unicode: ["1f50a"], isCanonical: !0 },
        ":battery:": { unicode: ["1f50b"], isCanonical: !0 },
        ":diamond_shape_with_a_dot_inside:": { unicode: ["1f4a0"], isCanonical: !0 },
        ":electric_plug:": { unicode: ["1f50c"], isCanonical: !0 },
        ":mag:": { unicode: ["1f50d"], isCanonical: !0 },
        ":bulb:": { unicode: ["1f4a1"], isCanonical: !0 },
        ":mag_right:": { unicode: ["1f50e"], isCanonical: !0 },
        ":lock_with_ink_pen:": { unicode: ["1f50f"], isCanonical: !0 },
        ":anger:": { unicode: ["1f4a2"], isCanonical: !0 },
        ":closed_lock_with_key:": { unicode: ["1f510"], isCanonical: !0 },
        ":key:": { unicode: ["1f511"], isCanonical: !0 },
        ":bomb:": { unicode: ["1f4a3"], isCanonical: !0 },
        ":lock:": { unicode: ["1f512"], isCanonical: !0 },
        ":unlock:": { unicode: ["1f513"], isCanonical: !0 },
        ":zzz:": { unicode: ["1f4a4"], isCanonical: !0 },
        ":bell:": { unicode: ["1f514"], isCanonical: !0 },
        ":bookmark:": { unicode: ["1f516"], isCanonical: !0 },
        ":boom:": { unicode: ["1f4a5"], isCanonical: !0 },
        ":link:": { unicode: ["1f517"], isCanonical: !0 },
        ":radio_button:": { unicode: ["1f518"], isCanonical: !0 },
        ":sweat_drops:": { unicode: ["1f4a6"], isCanonical: !0 },
        ":back:": { unicode: ["1f519"], isCanonical: !0 },
        ":end:": { unicode: ["1f51a"], isCanonical: !0 },
        ":droplet:": { unicode: ["1f4a7"], isCanonical: !0 },
        ":on:": { unicode: ["1f51b"], isCanonical: !0 },
        ":soon:": { unicode: ["1f51c"], isCanonical: !0 },
        ":dash:": { unicode: ["1f4a8"], isCanonical: !0 },
        ":top:": { unicode: ["1f51d"], isCanonical: !0 },
        ":underage:": { unicode: ["1f51e"], isCanonical: !0 },
        ":poop:": { unicode: ["1f4a9"], isCanonical: !0 },
        ":shit:": { unicode: ["1f4a9"], isCanonical: !1 },
        ":hankey:": { unicode: ["1f4a9"], isCanonical: !1 },
        ":poo:": { unicode: ["1f4a9"], isCanonical: !1 },
        ":ten:": { unicode: ["1f51f"], isCanonical: !0 },
        ":muscle:": { unicode: ["1f4aa"], isCanonical: !0 },
        ":capital_abcd:": { unicode: ["1f520"], isCanonical: !0 },
        ":abcd:": { unicode: ["1f521"], isCanonical: !0 },
        ":dizzy:": { unicode: ["1f4ab"], isCanonical: !0 },
        ":1234:": { unicode: ["1f522"], isCanonical: !0 },
        ":symbols:": { unicode: ["1f523"], isCanonical: !0 },
        ":speech_balloon:": { unicode: ["1f4ac"], isCanonical: !0 },
        ":abc:": { unicode: ["1f524"], isCanonical: !0 },
        ":fire:": { unicode: ["1f525"], isCanonical: !0 },
        ":flame:": { unicode: ["1f525"], isCanonical: !1 },
        ":white_flower:": { unicode: ["1f4ae"], isCanonical: !0 },
        ":flashlight:": { unicode: ["1f526"], isCanonical: !0 },
        ":wrench:": { unicode: ["1f527"], isCanonical: !0 },
        ":100:": { unicode: ["1f4af"], isCanonical: !0 },
        ":hammer:": { unicode: ["1f528"], isCanonical: !0 },
        ":nut_and_bolt:": { unicode: ["1f529"], isCanonical: !0 },
        ":moneybag:": { unicode: ["1f4b0"], isCanonical: !0 },
        ":knife:": { unicode: ["1f52a"], isCanonical: !0 },
        ":gun:": { unicode: ["1f52b"], isCanonical: !0 },
        ":currency_exchange:": { unicode: ["1f4b1"], isCanonical: !0 },
        ":crystal_ball:": { unicode: ["1f52e"], isCanonical: !0 },
        ":heavy_dollar_sign:": { unicode: ["1f4b2"], isCanonical: !0 },
        ":six_pointed_star:": { unicode: ["1f52f"], isCanonical: !0 },
        ":credit_card:": { unicode: ["1f4b3"], isCanonical: !0 },
        ":beginner:": { unicode: ["1f530"], isCanonical: !0 },
        ":trident:": { unicode: ["1f531"], isCanonical: !0 },
        ":yen:": { unicode: ["1f4b4"], isCanonical: !0 },
        ":black_square_button:": { unicode: ["1f532"], isCanonical: !0 },
        ":white_square_button:": { unicode: ["1f533"], isCanonical: !0 },
        ":dollar:": { unicode: ["1f4b5"], isCanonical: !0 },
        ":red_circle:": { unicode: ["1f534"], isCanonical: !0 },
        ":large_blue_circle:": { unicode: ["1f535"], isCanonical: !0 },
        ":money_with_wings:": { unicode: ["1f4b8"], isCanonical: !0 },
        ":large_orange_diamond:": { unicode: ["1f536"], isCanonical: !0 },
        ":large_blue_diamond:": { unicode: ["1f537"], isCanonical: !0 },
        ":chart:": { unicode: ["1f4b9"], isCanonical: !0 },
        ":small_orange_diamond:": { unicode: ["1f538"], isCanonical: !0 },
        ":small_blue_diamond:": { unicode: ["1f539"], isCanonical: !0 },
        ":seat:": { unicode: ["1f4ba"], isCanonical: !0 },
        ":small_red_triangle:": { unicode: ["1f53a"], isCanonical: !0 },
        ":small_red_triangle_down:": { unicode: ["1f53b"], isCanonical: !0 },
        ":computer:": { unicode: ["1f4bb"], isCanonical: !0 },
        ":arrow_up_small:": { unicode: ["1f53c"], isCanonical: !0 },
        ":briefcase:": { unicode: ["1f4bc"], isCanonical: !0 },
        ":arrow_down_small:": { unicode: ["1f53d"], isCanonical: !0 },
        ":clock1:": { unicode: ["1f550"], isCanonical: !0 },
        ":minidisc:": { unicode: ["1f4bd"], isCanonical: !0 },
        ":clock2:": { unicode: ["1f551"], isCanonical: !0 },
        ":floppy_disk:": { unicode: ["1f4be"], isCanonical: !0 },
        ":clock3:": { unicode: ["1f552"], isCanonical: !0 },
        ":cd:": { unicode: ["1f4bf"], isCanonical: !0 },
        ":clock4:": { unicode: ["1f553"], isCanonical: !0 },
        ":dvd:": { unicode: ["1f4c0"], isCanonical: !0 },
        ":clock5:": { unicode: ["1f554"], isCanonical: !0 },
        ":clock6:": { unicode: ["1f555"], isCanonical: !0 },
        ":file_folder:": { unicode: ["1f4c1"], isCanonical: !0 },
        ":clock7:": { unicode: ["1f556"], isCanonical: !0 },
        ":clock8:": { unicode: ["1f557"], isCanonical: !0 },
        ":open_file_folder:": { unicode: ["1f4c2"], isCanonical: !0 },
        ":clock9:": { unicode: ["1f558"], isCanonical: !0 },
        ":clock10:": { unicode: ["1f559"], isCanonical: !0 },
        ":page_with_curl:": { unicode: ["1f4c3"], isCanonical: !0 },
        ":clock11:": { unicode: ["1f55a"], isCanonical: !0 },
        ":clock12:": { unicode: ["1f55b"], isCanonical: !0 },
        ":page_facing_up:": { unicode: ["1f4c4"], isCanonical: !0 },
        ":mount_fuji:": { unicode: ["1f5fb"], isCanonical: !0 },
        ":tokyo_tower:": { unicode: ["1f5fc"], isCanonical: !0 },
        ":date:": { unicode: ["1f4c5"], isCanonical: !0 },
        ":statue_of_liberty:": { unicode: ["1f5fd"], isCanonical: !0 },
        ":japan:": { unicode: ["1f5fe"], isCanonical: !0 },
        ":calendar:": { unicode: ["1f4c6"], isCanonical: !0 },
        ":moyai:": { unicode: ["1f5ff"], isCanonical: !0 },
        ":helicopter:": { unicode: ["1f681"], isCanonical: !0 },
        ":steam_locomotive:": { unicode: ["1f682"], isCanonical: !0 },
        ":train2:": { unicode: ["1f686"], isCanonical: !0 },
        ":light_rail:": { unicode: ["1f688"], isCanonical: !0 },
        ":tram:": { unicode: ["1f68a"], isCanonical: !0 },
        ":oncoming_bus:": { unicode: ["1f68d"], isCanonical: !0 },
        ":trolleybus:": { unicode: ["1f68e"], isCanonical: !0 },
        ":minibus:": { unicode: ["1f690"], isCanonical: !0 },
        ":oncoming_police_car:": { unicode: ["1f694"], isCanonical: !0 },
        ":oncoming_taxi:": { unicode: ["1f696"], isCanonical: !0 },
        ":oncoming_automobile:": { unicode: ["1f698"], isCanonical: !0 },
        ":articulated_lorry:": { unicode: ["1f69b"], isCanonical: !0 },
        ":tractor:": { unicode: ["1f69c"], isCanonical: !0 },
        ":monorail:": { unicode: ["1f69d"], isCanonical: !0 },
        ":mountain_railway:": { unicode: ["1f69e"], isCanonical: !0 },
        ":suspension_railway:": { unicode: ["1f69f"], isCanonical: !0 },
        ":mountain_cableway:": { unicode: ["1f6a0"], isCanonical: !0 },
        ":aerial_tramway:": { unicode: ["1f6a1"], isCanonical: !0 },
        ":rowboat:": { unicode: ["1f6a3"], isCanonical: !0 },
        ":vertical_traffic_light:": { unicode: ["1f6a6"], isCanonical: !0 },
        ":put_litter_in_its_place:": { unicode: ["1f6ae"], isCanonical: !0 },
        ":do_not_litter:": { unicode: ["1f6af"], isCanonical: !0 },
        ":potable_water:": { unicode: ["1f6b0"], isCanonical: !0 },
        ":non-potable_water:": { unicode: ["1f6b1"], isCanonical: !0 },
        ":no_bicycles:": { unicode: ["1f6b3"], isCanonical: !0 },
        ":bicyclist:": { unicode: ["1f6b4"], isCanonical: !0 },
        ":mountain_bicyclist:": { unicode: ["1f6b5"], isCanonical: !0 },
        ":no_pedestrians:": { unicode: ["1f6b7"], isCanonical: !0 },
        ":children_crossing:": { unicode: ["1f6b8"], isCanonical: !0 },
        ":shower:": { unicode: ["1f6bf"], isCanonical: !0 },
        ":bathtub:": { unicode: ["1f6c1"], isCanonical: !0 },
        ":passport_control:": { unicode: ["1f6c2"], isCanonical: !0 },
        ":customs:": { unicode: ["1f6c3"], isCanonical: !0 },
        ":baggage_claim:": { unicode: ["1f6c4"], isCanonical: !0 },
        ":left_luggage:": { unicode: ["1f6c5"], isCanonical: !0 },
        ":earth_africa:": { unicode: ["1f30d"], isCanonical: !0 },
        ":earth_americas:": { unicode: ["1f30e"], isCanonical: !0 },
        ":globe_with_meridians:": { unicode: ["1f310"], isCanonical: !0 },
        ":waxing_crescent_moon:": { unicode: ["1f312"], isCanonical: !0 },
        ":waning_gibbous_moon:": { unicode: ["1f316"], isCanonical: !0 },
        ":last_quarter_moon:": { unicode: ["1f317"], isCanonical: !0 },
        ":waning_crescent_moon:": { unicode: ["1f318"], isCanonical: !0 },
        ":new_moon_with_face:": { unicode: ["1f31a"], isCanonical: !0 },
        ":last_quarter_moon_with_face:": { unicode: ["1f31c"], isCanonical: !0 },
        ":full_moon_with_face:": { unicode: ["1f31d"], isCanonical: !0 },
        ":sun_with_face:": { unicode: ["1f31e"], isCanonical: !0 },
        ":evergreen_tree:": { unicode: ["1f332"], isCanonical: !0 },
        ":deciduous_tree:": { unicode: ["1f333"], isCanonical: !0 },
        ":lemon:": { unicode: ["1f34b"], isCanonical: !0 },
        ":pear:": { unicode: ["1f350"], isCanonical: !0 },
        ":baby_bottle:": { unicode: ["1f37c"], isCanonical: !0 },
        ":horse_racing:": { unicode: ["1f3c7"], isCanonical: !0 },
        ":rugby_football:": { unicode: ["1f3c9"], isCanonical: !0 },
        ":european_post_office:": { unicode: ["1f3e4"], isCanonical: !0 },
        ":rat:": { unicode: ["1f400"], isCanonical: !0 },
        ":mouse2:": { unicode: ["1f401"], isCanonical: !0 },
        ":ox:": { unicode: ["1f402"], isCanonical: !0 },
        ":water_buffalo:": { unicode: ["1f403"], isCanonical: !0 },
        ":cow2:": { unicode: ["1f404"], isCanonical: !0 },
        ":tiger2:": { unicode: ["1f405"], isCanonical: !0 },
        ":leopard:": { unicode: ["1f406"], isCanonical: !0 },
        ":rabbit2:": { unicode: ["1f407"], isCanonical: !0 },
        ":cat2:": { unicode: ["1f408"], isCanonical: !0 },
        ":dragon:": { unicode: ["1f409"], isCanonical: !0 },
        ":crocodile:": { unicode: ["1f40a"], isCanonical: !0 },
        ":whale2:": { unicode: ["1f40b"], isCanonical: !0 },
        ":ram:": { unicode: ["1f40f"], isCanonical: !0 },
        ":goat:": { unicode: ["1f410"], isCanonical: !0 },
        ":rooster:": { unicode: ["1f413"], isCanonical: !0 },
        ":dog2:": { unicode: ["1f415"], isCanonical: !0 },
        ":pig2:": { unicode: ["1f416"], isCanonical: !0 },
        ":dromedary_camel:": { unicode: ["1f42a"], isCanonical: !0 },
        ":busts_in_silhouette:": { unicode: ["1f465"], isCanonical: !0 },
        ":two_men_holding_hands:": { unicode: ["1f46c"], isCanonical: !0 },
        ":two_women_holding_hands:": { unicode: ["1f46d"], isCanonical: !0 },
        ":thought_balloon:": { unicode: ["1f4ad"], isCanonical: !0 },
        ":euro:": { unicode: ["1f4b6"], isCanonical: !0 },
        ":pound:": { unicode: ["1f4b7"], isCanonical: !0 },
        ":mailbox_with_mail:": { unicode: ["1f4ec"], isCanonical: !0 },
        ":mailbox_with_no_mail:": { unicode: ["1f4ed"], isCanonical: !0 },
        ":postal_horn:": { unicode: ["1f4ef"], isCanonical: !0 },
        ":no_mobile_phones:": { unicode: ["1f4f5"], isCanonical: !0 },
        ":twisted_rightwards_arrows:": { unicode: ["1f500"], isCanonical: !0 },
        ":repeat:": { unicode: ["1f501"], isCanonical: !0 },
        ":repeat_one:": { unicode: ["1f502"], isCanonical: !0 },
        ":arrows_counterclockwise:": { unicode: ["1f504"], isCanonical: !0 },
        ":low_brightness:": { unicode: ["1f505"], isCanonical: !0 },
        ":high_brightness:": { unicode: ["1f506"], isCanonical: !0 },
        ":mute:": { unicode: ["1f507"], isCanonical: !0 },
        ":sound:": { unicode: ["1f509"], isCanonical: !0 },
        ":no_bell:": { unicode: ["1f515"], isCanonical: !0 },
        ":microscope:": { unicode: ["1f52c"], isCanonical: !0 },
        ":telescope:": { unicode: ["1f52d"], isCanonical: !0 },
        ":clock130:": { unicode: ["1f55c"], isCanonical: !0 },
        ":clock230:": { unicode: ["1f55d"], isCanonical: !0 },
        ":clock330:": { unicode: ["1f55e"], isCanonical: !0 },
        ":clock430:": { unicode: ["1f55f"], isCanonical: !0 },
        ":clock530:": { unicode: ["1f560"], isCanonical: !0 },
        ":clock630:": { unicode: ["1f561"], isCanonical: !0 },
        ":clock730:": { unicode: ["1f562"], isCanonical: !0 },
        ":clock830:": { unicode: ["1f563"], isCanonical: !0 },
        ":clock930:": { unicode: ["1f564"], isCanonical: !0 },
        ":clock1030:": { unicode: ["1f565"], isCanonical: !0 },
        ":clock1130:": { unicode: ["1f566"], isCanonical: !0 },
        ":clock1230:": { unicode: ["1f567"], isCanonical: !0 },
        ":speaker:": { unicode: ["1f508"], isCanonical: !0 },
        ":train:": { unicode: ["1f68b"], isCanonical: !0 },
        ":medal:": { unicode: ["1f3c5"], isCanonical: !0 },
        ":sports_medal:": { unicode: ["1f3c5"], isCanonical: !1 },
        ":flag_black:": { unicode: ["1f3f4"], isCanonical: !0 },
        ":waving_black_flag:": { unicode: ["1f3f4"], isCanonical: !1 },
        ":camera_with_flash:": { unicode: ["1f4f8"], isCanonical: !0 },
        ":sleeping_accommodation:": { unicode: ["1f6cc"], isCanonical: !0 },
        ":middle_finger:": { unicode: ["1f595"], isCanonical: !0 },
        ":reversed_hand_with_middle_finger_extended:": { unicode: ["1f595"], isCanonical: !1 },
        ":vulcan:": { unicode: ["1f596"], isCanonical: !0 },
        ":raised_hand_with_part_between_middle_and_ring_fingers:": { unicode: ["1f596"], isCanonical: !1 },
        ":airplane_departure:": { unicode: ["1f6eb"], isCanonical: !0 },
        ":airplane_arriving:": { unicode: ["1f6ec"], isCanonical: !0 },
        ":tone1:": { unicode: ["1f3fb"], isCanonical: !0 },
        ":tone2:": { unicode: ["1f3fc"], isCanonical: !0 },
        ":tone3:": { unicode: ["1f3fd"], isCanonical: !0 },
        ":tone4:": { unicode: ["1f3fe"], isCanonical: !0 },
        ":tone5:": { unicode: ["1f3ff"], isCanonical: !0 },
        ":upside_down:": { unicode: ["1f643"], isCanonical: !0 },
        ":upside_down_face:": { unicode: ["1f643"], isCanonical: !1 },
        ":money_mouth:": { unicode: ["1f911"], isCanonical: !0 },
        ":money_mouth_face:": { unicode: ["1f911"], isCanonical: !1 },
        ":nerd:": { unicode: ["1f913"], isCanonical: !0 },
        ":nerd_face:": { unicode: ["1f913"], isCanonical: !1 },
        ":hugging:": { unicode: ["1f917"], isCanonical: !0 },
        ":hugging_face:": { unicode: ["1f917"], isCanonical: !1 },
        ":rolling_eyes:": { unicode: ["1f644"], isCanonical: !0 },
        ":face_with_rolling_eyes:": { unicode: ["1f644"], isCanonical: !1 },
        ":thinking:": { unicode: ["1f914"], isCanonical: !0 },
        ":thinking_face:": { unicode: ["1f914"], isCanonical: !1 },
        ":zipper_mouth:": { unicode: ["1f910"], isCanonical: !0 },
        ":zipper_mouth_face:": { unicode: ["1f910"], isCanonical: !1 },
        ":thermometer_face:": { unicode: ["1f912"], isCanonical: !0 },
        ":face_with_thermometer:": { unicode: ["1f912"], isCanonical: !1 },
        ":head_bandage:": { unicode: ["1f915"], isCanonical: !0 },
        ":face_with_head_bandage:": { unicode: ["1f915"], isCanonical: !1 },
        ":robot:": { unicode: ["1f916"], isCanonical: !0 },
        ":robot_face:": { unicode: ["1f916"], isCanonical: !1 },
        ":lion_face:": { unicode: ["1f981"], isCanonical: !0 },
        ":lion:": { unicode: ["1f981"], isCanonical: !1 },
        ":unicorn:": { unicode: ["1f984"], isCanonical: !0 },
        ":unicorn_face:": { unicode: ["1f984"], isCanonical: !1 },
        ":scorpion:": { unicode: ["1f982"], isCanonical: !0 },
        ":crab:": { unicode: ["1f980"], isCanonical: !0 },
        ":turkey:": { unicode: ["1f983"], isCanonical: !0 },
        ":cheese:": { unicode: ["1f9c0"], isCanonical: !0 },
        ":cheese_wedge:": { unicode: ["1f9c0"], isCanonical: !1 },
        ":hotdog:": { unicode: ["1f32d"], isCanonical: !0 },
        ":hot_dog:": { unicode: ["1f32d"], isCanonical: !1 },
        ":taco:": { unicode: ["1f32e"], isCanonical: !0 },
        ":burrito:": { unicode: ["1f32f"], isCanonical: !0 },
        ":popcorn:": { unicode: ["1f37f"], isCanonical: !0 },
        ":champagne:": { unicode: ["1f37e"], isCanonical: !0 },
        ":bottle_with_popping_cork:": { unicode: ["1f37e"], isCanonical: !1 },
        ":bow_and_arrow:": { unicode: ["1f3f9"], isCanonical: !0 },
        ":archery:": { unicode: ["1f3f9"], isCanonical: !1 },
        ":amphora:": { unicode: ["1f3fa"], isCanonical: !0 },
        ":place_of_worship:": { unicode: ["1f6d0"], isCanonical: !0 },
        ":worship_symbol:": { unicode: ["1f6d0"], isCanonical: !1 },
        ":kaaba:": { unicode: ["1f54b"], isCanonical: !0 },
        ":mosque:": { unicode: ["1f54c"], isCanonical: !0 },
        ":synagogue:": { unicode: ["1f54d"], isCanonical: !0 },
        ":menorah:": { unicode: ["1f54e"], isCanonical: !0 },
        ":prayer_beads:": { unicode: ["1f4ff"], isCanonical: !0 },
        ":cricket:": { unicode: ["1f3cf"], isCanonical: !0 },
        ":cricket_bat_ball:": { unicode: ["1f3cf"], isCanonical: !1 },
        ":volleyball:": { unicode: ["1f3d0"], isCanonical: !0 },
        ":field_hockey:": { unicode: ["1f3d1"], isCanonical: !0 },
        ":hockey:": { unicode: ["1f3d2"], isCanonical: !0 },
        ":ping_pong:": { unicode: ["1f3d3"], isCanonical: !0 },
        ":table_tennis:": { unicode: ["1f3d3"], isCanonical: !1 },
        ":badminton:": { unicode: ["1f3f8"], isCanonical: !0 },
        ":fast_forward:": { unicode: ["23e9"], isCanonical: !0 },
        ":rewind:": { unicode: ["23ea"], isCanonical: !0 },
        ":arrow_double_up:": { unicode: ["23eb"], isCanonical: !0 },
        ":arrow_double_down:": { unicode: ["23ec"], isCanonical: !0 },
        ":alarm_clock:": { unicode: ["23f0"], isCanonical: !0 },
        ":hourglass_flowing_sand:": { unicode: ["23f3"], isCanonical: !0 },
        ":ophiuchus:": { unicode: ["26ce"], isCanonical: !0 },
        ":white_check_mark:": { unicode: ["2705"], isCanonical: !0 },
        ":fist:": { unicode: ["270a"], isCanonical: !0 },
        ":raised_hand:": { unicode: ["270b"], isCanonical: !0 },
        ":sparkles:": { unicode: ["2728"], isCanonical: !0 },
        ":x:": { unicode: ["274c"], isCanonical: !0 },
        ":negative_squared_cross_mark:": { unicode: ["274e"], isCanonical: !0 },
        ":question:": { unicode: ["2753"], isCanonical: !0 },
        ":grey_question:": { unicode: ["2754"], isCanonical: !0 },
        ":grey_exclamation:": { unicode: ["2755"], isCanonical: !0 },
        ":heavy_plus_sign:": { unicode: ["2795"], isCanonical: !0 },
        ":heavy_minus_sign:": { unicode: ["2796"], isCanonical: !0 },
        ":heavy_division_sign:": { unicode: ["2797"], isCanonical: !0 },
        ":curly_loop:": { unicode: ["27b0"], isCanonical: !0 },
        ":loop:": { unicode: ["27bf"], isCanonical: !0 },
    };
    var b,
        c = [];
    for (b in this.emojioneList) this.emojioneList.hasOwnProperty(b) && c.push(b.replace(/[+]/g, "\\$&"));
    (this.shortnames = c.join("|")),
        (this.asciiList = {
            "<3": "2764",
            "</3": "1f494",
            ":')": "1f602",
            ":'-)": "1f602",
            ":D": "1f603",
            ":-D": "1f603",
            "=D": "1f603",
            ":)": "1f642",
            ":-)": "1f642",
            "=]": "1f642",
            "=)": "1f642",
            ":]": "1f642",
            "':)": "1f605",
            "':-)": "1f605",
            "'=)": "1f605",
            "':D": "1f605",
            "':-D": "1f605",
            "'=D": "1f605",
            ">:)": "1f606",
            ">;)": "1f606",
            ">:-)": "1f606",
            ">=)": "1f606",
            ";)": "1f609",
            ";-)": "1f609",
            "*-)": "1f609",
            "*)": "1f609",
            ";-]": "1f609",
            ";]": "1f609",
            ";D": "1f609",
            ";^)": "1f609",
            "':(": "1f613",
            "':-(": "1f613",
            "'=(": "1f613",
            ":*": "1f618",
            ":-*": "1f618",
            "=*": "1f618",
            ":^*": "1f618",
            ">:P": "1f61c",
            "X-P": "1f61c",
            "x-p": "1f61c",
            ">:[": "1f61e",
            ":-(": "1f61e",
            ":(": "1f61e",
            ":-[": "1f61e",
            ":[": "1f61e",
            "=(": "1f61e",
            ">:(": "1f620",
            ">:-(": "1f620",
            ":@": "1f620",
            ":'(": "1f622",
            ":'-(": "1f622",
            ";(": "1f622",
            ";-(": "1f622",
            ">.<": "1f623",
            "D:": "1f628",
            ":$": "1f633",
            "=$": "1f633",
            "#-)": "1f635",
            "#)": "1f635",
            "%-)": "1f635",
            "%)": "1f635",
            "X)": "1f635",
            "X-)": "1f635",
            "*\\0/*": "1f646",
            "\\0/": "1f646",
            "*\\O/*": "1f646",
            "\\O/": "1f646",
            "O:-)": "1f607",
            "0:-3": "1f607",
            "0:3": "1f607",
            "0:-)": "1f607",
            "0:)": "1f607",
            "0;^)": "1f607",
            "O:)": "1f607",
            "O;-)": "1f607",
            "O=)": "1f607",
            "0;-)": "1f607",
            "O:-3": "1f607",
            "O:3": "1f607",
            "B-)": "1f60e",
            "B)": "1f60e",
            "8)": "1f60e",
            "8-)": "1f60e",
            "B-D": "1f60e",
            "8-D": "1f60e",
            "-_-": "1f611",
            "-__-": "1f611",
            "-___-": "1f611",
            ">:\\": "1f615",
            ">:/": "1f615",
            ":-/": "1f615",
            ":-.": "1f615",
            ":/": "1f615",
            ":\\": "1f615",
            "=/": "1f615",
            "=\\": "1f615",
            ":L": "1f615",
            "=L": "1f615",
            ":P": "1f61b",
            ":-P": "1f61b",
            "=P": "1f61b",
            ":-p": "1f61b",
            ":p": "1f61b",
            "=p": "1f61b",
            ":-Þ": "1f61b",
            ":Þ": "1f61b",
            ":þ": "1f61b",
            ":-þ": "1f61b",
            ":-b": "1f61b",
            ":b": "1f61b",
            "d:": "1f61b",
            ":-O": "1f62e",
            ":O": "1f62e",
            ":-o": "1f62e",
            ":o": "1f62e",
            O_O: "1f62e",
            ">:O": "1f62e",
            ":-X": "1f636",
            ":X": "1f636",
            ":-#": "1f636",
            ":#": "1f636",
            "=X": "1f636",
            "=x": "1f636",
            ":x": "1f636",
            ":-x": "1f636",
            "=#": "1f636",
        }),
        (this.asciiRegexp =
            "(\\<3|&lt;3|\\<\\/3|&lt;\\/3|\\:'\\)|\\:'\\-\\)|\\:D|\\:\\-D|\\=D|\\:\\)|\\:\\-\\)|\\=\\]|\\=\\)|\\:\\]|'\\:\\)|'\\:\\-\\)|'\\=\\)|'\\:D|'\\:\\-D|'\\=D|\\>\\:\\)|&gt;\\:\\)|\\>;\\)|&gt;;\\)|\\>\\:\\-\\)|&gt;\\:\\-\\)|\\>\\=\\)|&gt;\\=\\)|;\\)|;\\-\\)|\\*\\-\\)|\\*\\)|;\\-\\]|;\\]|;D|;\\^\\)|'\\:\\(|'\\:\\-\\(|'\\=\\(|\\:\\*|\\:\\-\\*|\\=\\*|\\:\\^\\*|\\>\\:P|&gt;\\:P|X\\-P|x\\-p|\\>\\:\\[|&gt;\\:\\[|\\:\\-\\(|\\:\\(|\\:\\-\\[|\\:\\[|\\=\\(|\\>\\:\\(|&gt;\\:\\(|\\>\\:\\-\\(|&gt;\\:\\-\\(|\\:@|\\:'\\(|\\:'\\-\\(|;\\(|;\\-\\(|\\>\\.\\<|&gt;\\.&lt;|D\\:|\\:\\$|\\=\\$|#\\-\\)|#\\)|%\\-\\)|%\\)|X\\)|X\\-\\)|\\*\\\\0\\/\\*|\\\\0\\/|\\*\\\\O\\/\\*|\\\\O\\/|O\\:\\-\\)|0\\:\\-3|0\\:3|0\\:\\-\\)|0\\:\\)|0;\\^\\)|O\\:\\-\\)|O\\:\\)|O;\\-\\)|O\\=\\)|0;\\-\\)|O\\:\\-3|O\\:3|B\\-\\)|B\\)|8\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\-__\\-|\\-___\\-|\\>\\:\\\\|&gt;\\:\\\\|\\>\\:\\/|&gt;\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\:\\-P|\\=P|\\:\\-p|\\:p|\\=p|\\:\\-Þ|\\:\\-&THORN;|\\:Þ|\\:&THORN;|\\:þ|\\:&thorn;|\\:\\-þ|\\:\\-&thorn;|\\:\\-b|\\:b|d\\:|\\:\\-O|\\:O|\\:\\-o|\\:o|O_O|\\>\\:O|&gt;\\:O|\\:\\-X|\\:X|\\:\\-#|\\:#|\\=X|\\=x|\\:x|\\:\\-x|\\=#)"),
        (this.unicodeRegexp =
            "(\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66|\\uD83D\\uDC41\\u200D\\uD83D\\uDDE8|\\uD83C\\uDDE6\\uD83C\\uDDE9|\\uD83C\\uDDE6\\uD83C\\uDDEA|\\uD83C\\uDDE6\\uD83C\\uDDEB|\\uD83C\\uDDE6\\uD83C\\uDDEC|\\uD83C\\uDDE6\\uD83C\\uDDEE|\\uD83C\\uDDE6\\uD83C\\uDDF1|\\uD83C\\uDDE6\\uD83C\\uDDF2|\\uD83C\\uDDE6\\uD83C\\uDDF4|\\uD83C\\uDDE6\\uD83C\\uDDF6|\\uD83C\\uDDE6\\uD83C\\uDDF7|\\uD83C\\uDDE6\\uD83C\\uDDF8|\\uD83E\\uDD18\\uD83C\\uDFFF|\\uD83E\\uDD18\\uD83C\\uDFFE|\\uD83E\\uDD18\\uD83C\\uDFFD|\\uD83E\\uDD18\\uD83C\\uDFFC|\\uD83E\\uDD18\\uD83C\\uDFFB|\\uD83D\\uDEC0\\uD83C\\uDFFF|\\uD83D\\uDEC0\\uD83C\\uDFFE|\\uD83D\\uDEC0\\uD83C\\uDFFD|\\uD83D\\uDEC0\\uD83C\\uDFFC|\\uD83D\\uDEC0\\uD83C\\uDFFB|\\uD83D\\uDEB6\\uD83C\\uDFFF|\\uD83D\\uDEB6\\uD83C\\uDFFE|\\uD83D\\uDEB6\\uD83C\\uDFFD|\\uD83D\\uDEB6\\uD83C\\uDFFC|\\uD83D\\uDEB6\\uD83C\\uDFFB|\\uD83D\\uDEB5\\uD83C\\uDFFF|\\uD83D\\uDEB5\\uD83C\\uDFFE|\\uD83D\\uDEB5\\uD83C\\uDFFD|\\uD83D\\uDEB5\\uD83C\\uDFFC|\\uD83D\\uDEB5\\uD83C\\uDFFB|\\uD83D\\uDEB4\\uD83C\\uDFFF|\\uD83D\\uDEB4\\uD83C\\uDFFE|\\uD83D\\uDEB4\\uD83C\\uDFFD|\\uD83D\\uDEB4\\uD83C\\uDFFC|\\uD83D\\uDEB4\\uD83C\\uDFFB|\\uD83D\\uDEA3\\uD83C\\uDFFF|\\uD83D\\uDEA3\\uD83C\\uDFFE|\\uD83D\\uDEA3\\uD83C\\uDFFD|\\uD83D\\uDEA3\\uD83C\\uDFFC|\\uD83D\\uDEA3\\uD83C\\uDFFB|\\uD83D\\uDE4F\\uD83C\\uDFFF|\\uD83D\\uDE4F\\uD83C\\uDFFE|\\uD83D\\uDE4F\\uD83C\\uDFFD|\\uD83D\\uDE4F\\uD83C\\uDFFC|\\uD83D\\uDE4F\\uD83C\\uDFFB|\\uD83D\\uDE4E\\uD83C\\uDFFF|\\uD83D\\uDE4E\\uD83C\\uDFFE|\\uD83D\\uDE4E\\uD83C\\uDFFD|\\uD83D\\uDE4E\\uD83C\\uDFFC|\\uD83D\\uDE4E\\uD83C\\uDFFB|\\uD83D\\uDE4D\\uD83C\\uDFFF|\\uD83D\\uDE4D\\uD83C\\uDFFE|\\uD83D\\uDE4D\\uD83C\\uDFFD|\\uD83D\\uDE4D\\uD83C\\uDFFC|\\uD83D\\uDE4D\\uD83C\\uDFFB|\\uD83D\\uDE4C\\uD83C\\uDFFF|\\uD83D\\uDE4C\\uD83C\\uDFFE|\\uD83D\\uDE4C\\uD83C\\uDFFD|\\uD83D\\uDE4C\\uD83C\\uDFFC|\\uD83D\\uDE4C\\uD83C\\uDFFB|\\uD83D\\uDE4B\\uD83C\\uDFFF|\\uD83D\\uDE4B\\uD83C\\uDFFE|\\uD83D\\uDE4B\\uD83C\\uDFFD|\\uD83D\\uDE4B\\uD83C\\uDFFC|\\uD83D\\uDE4B\\uD83C\\uDFFB|\\uD83D\\uDE47\\uD83C\\uDFFF|\\uD83D\\uDE47\\uD83C\\uDFFE|\\uD83D\\uDE47\\uD83C\\uDFFD|\\uD83D\\uDE47\\uD83C\\uDFFC|\\uD83D\\uDE47\\uD83C\\uDFFB|\\uD83D\\uDE46\\uD83C\\uDFFF|\\uD83D\\uDE46\\uD83C\\uDFFE|\\uD83D\\uDE46\\uD83C\\uDFFD|\\uD83D\\uDE46\\uD83C\\uDFFC|\\uD83D\\uDE46\\uD83C\\uDFFB|\\uD83D\\uDE45\\uD83C\\uDFFF|\\uD83D\\uDE45\\uD83C\\uDFFE|\\uD83D\\uDE45\\uD83C\\uDFFD|\\uD83D\\uDE45\\uD83C\\uDFFC|\\uD83D\\uDE45\\uD83C\\uDFFB|\\uD83D\\uDD96\\uD83C\\uDFFF|\\uD83D\\uDD96\\uD83C\\uDFFE|\\uD83D\\uDD96\\uD83C\\uDFFD|\\uD83D\\uDD96\\uD83C\\uDFFC|\\uD83D\\uDD96\\uD83C\\uDFFB|\\uD83D\\uDD95\\uD83C\\uDFFF|\\uD83D\\uDD95\\uD83C\\uDFFE|\\uD83D\\uDD95\\uD83C\\uDFFD|\\uD83D\\uDD95\\uD83C\\uDFFC|\\uD83D\\uDD95\\uD83C\\uDFFB|\\uD83D\\uDD90\\uD83C\\uDFFF|\\uD83D\\uDD90\\uD83C\\uDFFE|\\uD83D\\uDD90\\uD83C\\uDFFD|\\uD83D\\uDD90\\uD83C\\uDFFC|\\uD83D\\uDD90\\uD83C\\uDFFB|\\uD83D\\uDD75\\uD83C\\uDFFF|\\uD83D\\uDD75\\uD83C\\uDFFE|\\uD83D\\uDD75\\uD83C\\uDFFD|\\uD83D\\uDD75\\uD83C\\uDFFC|\\uD83D\\uDD75\\uD83C\\uDFFB|\\uD83D\\uDCAA\\uD83C\\uDFFF|\\uD83D\\uDCAA\\uD83C\\uDFFE|\\uD83D\\uDCAA\\uD83C\\uDFFD|\\uD83D\\uDCAA\\uD83C\\uDFFC|\\uD83D\\uDCAA\\uD83C\\uDFFB|\\uD83D\\uDC87\\uD83C\\uDFFF|\\uD83D\\uDC87\\uD83C\\uDFFE|\\uD83D\\uDC87\\uD83C\\uDFFD|\\uD83D\\uDC87\\uD83C\\uDFFC|\\uD83D\\uDC87\\uD83C\\uDFFB|\\uD83D\\uDC86\\uD83C\\uDFFF|\\uD83D\\uDC86\\uD83C\\uDFFE|\\uD83D\\uDC86\\uD83C\\uDFFD|\\uD83D\\uDC86\\uD83C\\uDFFC|\\uD83D\\uDC86\\uD83C\\uDFFB|\\uD83D\\uDC85\\uD83C\\uDFFF|\\uD83D\\uDC85\\uD83C\\uDFFE|\\uD83D\\uDC85\\uD83C\\uDFFD|\\uD83D\\uDC85\\uD83C\\uDFFC|\\uD83D\\uDC85\\uD83C\\uDFFB|\\uD83D\\uDC83\\uD83C\\uDFFF|\\uD83D\\uDC83\\uD83C\\uDFFE|\\uD83D\\uDC83\\uD83C\\uDFFD|\\uD83D\\uDC83\\uD83C\\uDFFC|\\uD83D\\uDC83\\uD83C\\uDFFB|\\uD83D\\uDC82\\uD83C\\uDFFF|\\uD83D\\uDC82\\uD83C\\uDFFE|\\uD83D\\uDC82\\uD83C\\uDFFD|\\uD83D\\uDC82\\uD83C\\uDFFC|\\uD83D\\uDC82\\uD83C\\uDFFB|\\uD83D\\uDC81\\uD83C\\uDFFF|\\uD83D\\uDC81\\uD83C\\uDFFE|\\uD83D\\uDC81\\uD83C\\uDFFD|\\uD83D\\uDC81\\uD83C\\uDFFC|\\uD83D\\uDC81\\uD83C\\uDFFB|\\uD83D\\uDC7C\\uD83C\\uDFFF|\\uD83D\\uDC7C\\uD83C\\uDFFE|\\uD83D\\uDC7C\\uD83C\\uDFFD|\\uD83D\\uDC7C\\uD83C\\uDFFC|\\uD83D\\uDC7C\\uD83C\\uDFFB|\\uD83D\\uDC78\\uD83C\\uDFFF|\\uD83D\\uDC78\\uD83C\\uDFFE|\\uD83D\\uDC78\\uD83C\\uDFFD|\\uD83D\\uDC78\\uD83C\\uDFFC|\\uD83D\\uDC78\\uD83C\\uDFFB|\\uD83D\\uDC77\\uD83C\\uDFFF|\\uD83D\\uDC77\\uD83C\\uDFFE|\\uD83D\\uDC77\\uD83C\\uDFFD|\\uD83D\\uDC77\\uD83C\\uDFFC|\\uD83D\\uDC77\\uD83C\\uDFFB|\\uD83D\\uDC76\\uD83C\\uDFFF|\\uD83D\\uDC76\\uD83C\\uDFFE|\\uD83D\\uDC76\\uD83C\\uDFFD|\\uD83D\\uDC76\\uD83C\\uDFFC|\\uD83D\\uDC76\\uD83C\\uDFFB|\\uD83D\\uDC75\\uD83C\\uDFFF|\\uD83D\\uDC75\\uD83C\\uDFFE|\\uD83D\\uDC75\\uD83C\\uDFFD|\\uD83D\\uDC75\\uD83C\\uDFFC|\\uD83D\\uDC75\\uD83C\\uDFFB|\\uD83D\\uDC74\\uD83C\\uDFFF|\\uD83D\\uDC74\\uD83C\\uDFFE|\\uD83D\\uDC74\\uD83C\\uDFFD|\\uD83D\\uDC74\\uD83C\\uDFFC|\\uD83D\\uDC74\\uD83C\\uDFFB|\\uD83D\\uDC73\\uD83C\\uDFFF|\\uD83D\\uDC73\\uD83C\\uDFFE|\\uD83D\\uDC73\\uD83C\\uDFFD|\\uD83D\\uDC73\\uD83C\\uDFFC|\\uD83D\\uDC73\\uD83C\\uDFFB|\\uD83D\\uDC72\\uD83C\\uDFFF|\\uD83D\\uDC72\\uD83C\\uDFFE|\\uD83D\\uDC72\\uD83C\\uDFFD|\\uD83D\\uDC72\\uD83C\\uDFFC|\\uD83D\\uDC72\\uD83C\\uDFFB|\\uD83D\\uDC71\\uD83C\\uDFFF|\\uD83D\\uDC71\\uD83C\\uDFFE|\\uD83D\\uDC71\\uD83C\\uDFFD|\\uD83D\\uDC71\\uD83C\\uDFFC|\\uD83D\\uDC71\\uD83C\\uDFFB|\\uD83D\\uDC70\\uD83C\\uDFFF|\\uD83D\\uDC70\\uD83C\\uDFFE|\\uD83D\\uDC70\\uD83C\\uDFFD|\\uD83D\\uDC70\\uD83C\\uDFFC|\\uD83D\\uDC70\\uD83C\\uDFFB|\\uD83D\\uDC6E\\uD83C\\uDFFF|\\uD83D\\uDC6E\\uD83C\\uDFFE|\\uD83D\\uDC6E\\uD83C\\uDFFD|\\uD83D\\uDC6E\\uD83C\\uDFFC|\\uD83D\\uDC6E\\uD83C\\uDFFB|\\uD83D\\uDC69\\uD83C\\uDFFF|\\uD83D\\uDC69\\uD83C\\uDFFE|\\uD83D\\uDC69\\uD83C\\uDFFD|\\uD83D\\uDC69\\uD83C\\uDFFC|\\uD83D\\uDC69\\uD83C\\uDFFB|\\uD83D\\uDC68\\uD83C\\uDFFF|\\uD83D\\uDC68\\uD83C\\uDFFE|\\uD83D\\uDC68\\uD83C\\uDFFD|\\uD83D\\uDC68\\uD83C\\uDFFC|\\uD83D\\uDC68\\uD83C\\uDFFB|\\uD83D\\uDC67\\uD83C\\uDFFF|\\uD83D\\uDC67\\uD83C\\uDFFE|\\uD83D\\uDC67\\uD83C\\uDFFD|\\uD83D\\uDC67\\uD83C\\uDFFC|\\uD83D\\uDC67\\uD83C\\uDFFB|\\uD83D\\uDC66\\uD83C\\uDFFF|\\uD83D\\uDC66\\uD83C\\uDFFE|\\uD83D\\uDC66\\uD83C\\uDFFD|\\uD83D\\uDC66\\uD83C\\uDFFC|\\uD83D\\uDC66\\uD83C\\uDFFB|\\uD83D\\uDC50\\uD83C\\uDFFF|\\uD83D\\uDC50\\uD83C\\uDFFE|\\uD83D\\uDC50\\uD83C\\uDFFD|\\uD83D\\uDC50\\uD83C\\uDFFC|\\uD83D\\uDC50\\uD83C\\uDFFB|\\uD83D\\uDC4F\\uD83C\\uDFFF|\\uD83D\\uDC4F\\uD83C\\uDFFE|\\uD83D\\uDC4F\\uD83C\\uDFFD|\\uD83D\\uDC4F\\uD83C\\uDFFC|\\uD83D\\uDC4F\\uD83C\\uDFFB|\\uD83D\\uDC4E\\uD83C\\uDFFF|\\uD83D\\uDC4E\\uD83C\\uDFFE|\\uD83D\\uDC4E\\uD83C\\uDFFD|\\uD83D\\uDC4E\\uD83C\\uDFFC|\\uD83D\\uDC4E\\uD83C\\uDFFB|\\uD83D\\uDC4D\\uD83C\\uDFFF|\\uD83D\\uDC4D\\uD83C\\uDFFE|\\uD83D\\uDC4D\\uD83C\\uDFFD|\\uD83D\\uDC4D\\uD83C\\uDFFC|\\uD83D\\uDC4D\\uD83C\\uDFFB|\\uD83D\\uDC4C\\uD83C\\uDFFF|\\uD83D\\uDC4C\\uD83C\\uDFFE|\\uD83D\\uDC4C\\uD83C\\uDFFD|\\uD83D\\uDC4C\\uD83C\\uDFFC|\\uD83D\\uDC4C\\uD83C\\uDFFB|\\uD83D\\uDC4B\\uD83C\\uDFFF|\\uD83D\\uDC4B\\uD83C\\uDFFE|\\uD83D\\uDC4B\\uD83C\\uDFFD|\\uD83D\\uDC4B\\uD83C\\uDFFC|\\uD83D\\uDC4B\\uD83C\\uDFFB|\\uD83D\\uDC4A\\uD83C\\uDFFF|\\uD83D\\uDC4A\\uD83C\\uDFFE|\\uD83D\\uDC4A\\uD83C\\uDFFD|\\uD83D\\uDC4A\\uD83C\\uDFFC|\\uD83D\\uDC4A\\uD83C\\uDFFB|\\uD83D\\uDC49\\uD83C\\uDFFF|\\uD83D\\uDC49\\uD83C\\uDFFE|\\uD83D\\uDC49\\uD83C\\uDFFD|\\uD83D\\uDC49\\uD83C\\uDFFC|\\uD83D\\uDC49\\uD83C\\uDFFB|\\uD83D\\uDC48\\uD83C\\uDFFF|\\uD83D\\uDC48\\uD83C\\uDFFE|\\uD83D\\uDC48\\uD83C\\uDFFD|\\uD83D\\uDC48\\uD83C\\uDFFC|\\uD83D\\uDC48\\uD83C\\uDFFB|\\uD83D\\uDC47\\uD83C\\uDFFF|\\uD83D\\uDC47\\uD83C\\uDFFE|\\uD83D\\uDC47\\uD83C\\uDFFD|\\uD83D\\uDC47\\uD83C\\uDFFC|\\uD83D\\uDC47\\uD83C\\uDFFB|\\uD83D\\uDC46\\uD83C\\uDFFF|\\uD83D\\uDC46\\uD83C\\uDFFE|\\uD83D\\uDC46\\uD83C\\uDFFD|\\uD83D\\uDC46\\uD83C\\uDFFC|\\uD83D\\uDC46\\uD83C\\uDFFB|\\uD83D\\uDC43\\uD83C\\uDFFF|\\uD83D\\uDC43\\uD83C\\uDFFE|\\uD83D\\uDC43\\uD83C\\uDFFD|\\uD83D\\uDC43\\uD83C\\uDFFC|\\uD83D\\uDC43\\uD83C\\uDFFB|\\uD83D\\uDC42\\uD83C\\uDFFF|\\uD83D\\uDC42\\uD83C\\uDFFE|\\uD83D\\uDC42\\uD83C\\uDFFD|\\uD83D\\uDC42\\uD83C\\uDFFC|\\uD83D\\uDC42\\uD83C\\uDFFB|\\uD83C\\uDFCB\\uD83C\\uDFFF|\\uD83C\\uDFCB\\uD83C\\uDFFE|\\uD83C\\uDFCB\\uD83C\\uDFFD|\\uD83C\\uDFCB\\uD83C\\uDFFC|\\uD83C\\uDFCB\\uD83C\\uDFFB|\\uD83C\\uDFCA\\uD83C\\uDFFF|\\uD83C\\uDFCA\\uD83C\\uDFFE|\\uD83C\\uDFCA\\uD83C\\uDFFD|\\uD83C\\uDFCA\\uD83C\\uDFFC|\\uD83C\\uDFCA\\uD83C\\uDFFB|\\uD83C\\uDFC7\\uD83C\\uDFFF|\\uD83C\\uDFC7\\uD83C\\uDFFE|\\uD83C\\uDFC7\\uD83C\\uDFFD|\\uD83C\\uDFC7\\uD83C\\uDFFC|\\uD83C\\uDFC7\\uD83C\\uDFFB|\\uD83C\\uDFC4\\uD83C\\uDFFF|\\uD83C\\uDFC4\\uD83C\\uDFFE|\\uD83C\\uDFC4\\uD83C\\uDFFD|\\uD83C\\uDFC4\\uD83C\\uDFFC|\\uD83C\\uDFC4\\uD83C\\uDFFB|\\uD83C\\uDFC3\\uD83C\\uDFFF|\\uD83C\\uDFC3\\uD83C\\uDFFE|\\uD83C\\uDFC3\\uD83C\\uDFFD|\\uD83C\\uDFC3\\uD83C\\uDFFC|\\uD83C\\uDFC3\\uD83C\\uDFFB|\\uD83C\\uDF85\\uD83C\\uDFFF|\\uD83C\\uDF85\\uD83C\\uDFFE|\\uD83C\\uDF85\\uD83C\\uDFFD|\\uD83C\\uDF85\\uD83C\\uDFFC|\\uD83C\\uDF85\\uD83C\\uDFFB|\\uD83C\\uDDFF\\uD83C\\uDDFC|\\uD83C\\uDDFF\\uD83C\\uDDF2|\\uD83C\\uDDFF\\uD83C\\uDDE6|\\uD83C\\uDDFE\\uD83C\\uDDF9|\\uD83C\\uDDFE\\uD83C\\uDDEA|\\uD83C\\uDDFD\\uD83C\\uDDF0|\\uD83C\\uDDFC\\uD83C\\uDDF8|\\uD83C\\uDDFC\\uD83C\\uDDEB|\\uD83C\\uDDFB\\uD83C\\uDDFA|\\uD83C\\uDDFB\\uD83C\\uDDF3|\\uD83C\\uDDFB\\uD83C\\uDDEE|\\uD83C\\uDDFB\\uD83C\\uDDEC|\\uD83C\\uDDFB\\uD83C\\uDDEA|\\uD83C\\uDDFB\\uD83C\\uDDE8|\\uD83C\\uDDFB\\uD83C\\uDDE6|\\uD83C\\uDDFA\\uD83C\\uDDFF|\\uD83C\\uDDFA\\uD83C\\uDDFE|\\uD83C\\uDDFA\\uD83C\\uDDF8|\\uD83C\\uDDFA\\uD83C\\uDDF2|\\uD83C\\uDDFA\\uD83C\\uDDEC|\\uD83C\\uDDFA\\uD83C\\uDDE6|\\uD83C\\uDDF9\\uD83C\\uDDFF|\\uD83C\\uDDF9\\uD83C\\uDDFC|\\uD83C\\uDDF9\\uD83C\\uDDFB|\\uD83C\\uDDF9\\uD83C\\uDDF9|\\uD83C\\uDDF9\\uD83C\\uDDF7|\\uD83C\\uDDF9\\uD83C\\uDDF4|\\uD83C\\uDDF9\\uD83C\\uDDF3|\\uD83C\\uDDF9\\uD83C\\uDDF2|\\uD83C\\uDDF9\\uD83C\\uDDF1|\\uD83C\\uDDF9\\uD83C\\uDDF0|\\uD83C\\uDDF9\\uD83C\\uDDEF|\\uD83C\\uDDF9\\uD83C\\uDDED|\\uD83C\\uDDF9\\uD83C\\uDDEC|\\uD83C\\uDDF9\\uD83C\\uDDEB|\\uD83C\\uDDE6\\uD83C\\uDDE8|\\uD83C\\uDDF9\\uD83C\\uDDE8|\\uD83C\\uDDF9\\uD83C\\uDDE6|\\uD83C\\uDDF8\\uD83C\\uDDFF|\\uD83C\\uDDF8\\uD83C\\uDDFE|\\uD83C\\uDDF8\\uD83C\\uDDFD|\\uD83C\\uDDF8\\uD83C\\uDDFB|\\uD83C\\uDDF8\\uD83C\\uDDF9|\\uD83C\\uDDF8\\uD83C\\uDDF8|\\uD83C\\uDDF8\\uD83C\\uDDF7|\\uD83C\\uDDF8\\uD83C\\uDDF4|\\uD83C\\uDDF8\\uD83C\\uDDF3|\\uD83C\\uDDF8\\uD83C\\uDDF2|\\uD83C\\uDDF8\\uD83C\\uDDF1|\\uD83C\\uDDF8\\uD83C\\uDDF0|\\uD83C\\uDDF8\\uD83C\\uDDEF|\\uD83C\\uDDF8\\uD83C\\uDDEE|\\uD83C\\uDDF8\\uD83C\\uDDED|\\uD83C\\uDDF8\\uD83C\\uDDEC|\\uD83C\\uDDF8\\uD83C\\uDDEA|\\uD83C\\uDDF8\\uD83C\\uDDE9|\\uD83C\\uDDF8\\uD83C\\uDDE8|\\uD83C\\uDDF8\\uD83C\\uDDE7|\\uD83C\\uDDF8\\uD83C\\uDDE6|\\uD83C\\uDDF7\\uD83C\\uDDFC|\\uD83C\\uDDF7\\uD83C\\uDDFA|\\uD83C\\uDDF7\\uD83C\\uDDF8|\\uD83C\\uDDF7\\uD83C\\uDDF4|\\uD83C\\uDDF7\\uD83C\\uDDEA|\\uD83C\\uDDF6\\uD83C\\uDDE6|\\uD83C\\uDDF5\\uD83C\\uDDFE|\\uD83C\\uDDF5\\uD83C\\uDDFC|\\uD83C\\uDDF5\\uD83C\\uDDF9|\\uD83C\\uDDF5\\uD83C\\uDDF8|\\uD83C\\uDDF5\\uD83C\\uDDF7|\\uD83C\\uDDF5\\uD83C\\uDDF3|\\uD83C\\uDDF5\\uD83C\\uDDF2|\\uD83C\\uDDF5\\uD83C\\uDDF1|\\uD83C\\uDDF5\\uD83C\\uDDF0|\\uD83C\\uDDF5\\uD83C\\uDDED|\\uD83C\\uDDF5\\uD83C\\uDDEC|\\uD83C\\uDDF5\\uD83C\\uDDEB|\\uD83C\\uDDF5\\uD83C\\uDDEA|\\uD83C\\uDDF5\\uD83C\\uDDE6|\\uD83C\\uDDF4\\uD83C\\uDDF2|\\uD83C\\uDDF3\\uD83C\\uDDFF|\\uD83C\\uDDF3\\uD83C\\uDDFA|\\uD83C\\uDDF3\\uD83C\\uDDF7|\\uD83C\\uDDF3\\uD83C\\uDDF5|\\uD83C\\uDDF3\\uD83C\\uDDF4|\\uD83C\\uDDF3\\uD83C\\uDDF1|\\uD83C\\uDDF3\\uD83C\\uDDEE|\\uD83C\\uDDF3\\uD83C\\uDDEC|\\uD83C\\uDDF3\\uD83C\\uDDEB|\\uD83C\\uDDF3\\uD83C\\uDDEA|\\uD83C\\uDDF3\\uD83C\\uDDE8|\\uD83C\\uDDF3\\uD83C\\uDDE6|\\uD83C\\uDDF2\\uD83C\\uDDFF|\\uD83C\\uDDF2\\uD83C\\uDDFE|\\uD83C\\uDDF2\\uD83C\\uDDFD|\\uD83C\\uDDF2\\uD83C\\uDDFC|\\uD83C\\uDDF2\\uD83C\\uDDFB|\\uD83C\\uDDF2\\uD83C\\uDDFA|\\uD83C\\uDDF2\\uD83C\\uDDF9|\\uD83C\\uDDF2\\uD83C\\uDDF8|\\uD83C\\uDDF2\\uD83C\\uDDF7|\\uD83C\\uDDF2\\uD83C\\uDDF6|\\uD83C\\uDDF2\\uD83C\\uDDF5|\\uD83C\\uDDF2\\uD83C\\uDDF4|\\uD83C\\uDDF2\\uD83C\\uDDF3|\\uD83C\\uDDF2\\uD83C\\uDDF2|\\uD83C\\uDDF2\\uD83C\\uDDF1|\\uD83C\\uDDF2\\uD83C\\uDDF0|\\uD83C\\uDDF2\\uD83C\\uDDED|\\uD83C\\uDDF2\\uD83C\\uDDEC|\\uD83C\\uDDF2\\uD83C\\uDDEB|\\uD83C\\uDDF2\\uD83C\\uDDEA|\\uD83C\\uDDF2\\uD83C\\uDDE9|\\uD83C\\uDDF2\\uD83C\\uDDE8|\\uD83C\\uDDF2\\uD83C\\uDDE6|\\uD83C\\uDDF1\\uD83C\\uDDFE|\\uD83C\\uDDF1\\uD83C\\uDDFB|\\uD83C\\uDDF1\\uD83C\\uDDFA|\\uD83C\\uDDF1\\uD83C\\uDDF9|\\uD83C\\uDDF1\\uD83C\\uDDF8|\\uD83C\\uDDF1\\uD83C\\uDDF7|\\uD83C\\uDDF1\\uD83C\\uDDF0|\\uD83C\\uDDF1\\uD83C\\uDDEE|\\uD83C\\uDDF1\\uD83C\\uDDE8|\\uD83C\\uDDF1\\uD83C\\uDDE7|\\uD83C\\uDDF1\\uD83C\\uDDE6|\\uD83C\\uDDF0\\uD83C\\uDDFF|\\uD83C\\uDDF0\\uD83C\\uDDFE|\\uD83C\\uDDF0\\uD83C\\uDDFC|\\uD83C\\uDDF0\\uD83C\\uDDF7|\\uD83C\\uDDF0\\uD83C\\uDDF5|\\uD83C\\uDDF0\\uD83C\\uDDF3|\\uD83C\\uDDF0\\uD83C\\uDDF2|\\uD83C\\uDDF0\\uD83C\\uDDEE|\\uD83C\\uDDF0\\uD83C\\uDDED|\\uD83C\\uDDF0\\uD83C\\uDDEC|\\uD83C\\uDDF0\\uD83C\\uDDEA|\\uD83C\\uDDEF\\uD83C\\uDDF5|\\uD83C\\uDDEF\\uD83C\\uDDF4|\\uD83C\\uDDEF\\uD83C\\uDDF2|\\uD83C\\uDDEF\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDF9|\\uD83C\\uDDEE\\uD83C\\uDDF8|\\uD83C\\uDDEE\\uD83C\\uDDF7|\\uD83C\\uDDEE\\uD83C\\uDDF6|\\uD83C\\uDDEE\\uD83C\\uDDF4|\\uD83C\\uDDEE\\uD83C\\uDDF3|\\uD83C\\uDDEE\\uD83C\\uDDF2|\\uD83C\\uDDEE\\uD83C\\uDDF1|\\uD83C\\uDDEE\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDE9|\\uD83C\\uDDEE\\uD83C\\uDDE8|\\uD83C\\uDDED\\uD83C\\uDDFA|\\uD83C\\uDDED\\uD83C\\uDDF9|\\uD83C\\uDDED\\uD83C\\uDDF7|\\uD83C\\uDDED\\uD83C\\uDDF3|\\uD83C\\uDDED\\uD83C\\uDDF2|\\uD83C\\uDDED\\uD83C\\uDDF0|\\uD83C\\uDDEC\\uD83C\\uDDFE|\\uD83C\\uDDEC\\uD83C\\uDDFC|\\uD83C\\uDDEC\\uD83C\\uDDFA|\\uD83C\\uDDEC\\uD83C\\uDDF9|\\uD83C\\uDDEC\\uD83C\\uDDF8|\\uD83C\\uDDEC\\uD83C\\uDDF7|\\uD83C\\uDDEC\\uD83C\\uDDF6|\\uD83C\\uDDEC\\uD83C\\uDDF5|\\uD83C\\uDDEC\\uD83C\\uDDF3|\\uD83C\\uDDEC\\uD83C\\uDDF2|\\uD83C\\uDDEC\\uD83C\\uDDF1|\\uD83C\\uDDEC\\uD83C\\uDDEE|\\uD83C\\uDDEC\\uD83C\\uDDED|\\uD83C\\uDDEC\\uD83C\\uDDEC|\\uD83C\\uDDEC\\uD83C\\uDDEB|\\uD83C\\uDDEC\\uD83C\\uDDEA|\\uD83C\\uDDEC\\uD83C\\uDDE9|\\uD83C\\uDDEC\\uD83C\\uDDE7|\\uD83C\\uDDEC\\uD83C\\uDDE6|\\uD83C\\uDDEB\\uD83C\\uDDF7|\\uD83C\\uDDEB\\uD83C\\uDDF4|\\uD83C\\uDDEB\\uD83C\\uDDF2|\\uD83C\\uDDEB\\uD83C\\uDDF0|\\uD83C\\uDDEB\\uD83C\\uDDEF|\\uD83C\\uDDEB\\uD83C\\uDDEE|\\uD83C\\uDDEA\\uD83C\\uDDFA|\\uD83C\\uDDEA\\uD83C\\uDDF9|\\uD83C\\uDDEA\\uD83C\\uDDF8|\\uD83C\\uDDEA\\uD83C\\uDDF7|\\uD83C\\uDDEA\\uD83C\\uDDED|\\uD83C\\uDDEA\\uD83C\\uDDEC|\\uD83C\\uDDEA\\uD83C\\uDDEA|\\uD83C\\uDDEA\\uD83C\\uDDE8|\\uD83C\\uDDEA\\uD83C\\uDDE6|\\uD83C\\uDDE9\\uD83C\\uDDFF|\\uD83C\\uDDE9\\uD83C\\uDDF4|\\uD83C\\uDDE9\\uD83C\\uDDF2|\\uD83C\\uDDE9\\uD83C\\uDDF0|\\uD83C\\uDDE9\\uD83C\\uDDEF|\\uD83C\\uDDE9\\uD83C\\uDDEC|\\uD83C\\uDDE9\\uD83C\\uDDEA|\\uD83C\\uDDE8\\uD83C\\uDDFF|\\uD83C\\uDDE8\\uD83C\\uDDFE|\\uD83C\\uDDE8\\uD83C\\uDDFD|\\uD83C\\uDDE8\\uD83C\\uDDFC|\\uD83C\\uDDE8\\uD83C\\uDDFB|\\uD83C\\uDDE8\\uD83C\\uDDFA|\\uD83C\\uDDE8\\uD83C\\uDDF7|\\uD83C\\uDDE8\\uD83C\\uDDF5|\\uD83C\\uDDE8\\uD83C\\uDDF4|\\uD83C\\uDDE8\\uD83C\\uDDF3|\\uD83C\\uDDE8\\uD83C\\uDDF2|\\uD83C\\uDDE8\\uD83C\\uDDF1|\\uD83C\\uDDE8\\uD83C\\uDDF0|\\uD83C\\uDDE8\\uD83C\\uDDEE|\\uD83C\\uDDE8\\uD83C\\uDDED|\\uD83C\\uDDE8\\uD83C\\uDDEC|\\uD83C\\uDDE8\\uD83C\\uDDEB|\\uD83C\\uDDE8\\uD83C\\uDDE9|\\uD83C\\uDDE8\\uD83C\\uDDE8|\\uD83C\\uDDE8\\uD83C\\uDDE6|\\uD83C\\uDDE7\\uD83C\\uDDFF|\\uD83C\\uDDE7\\uD83C\\uDDFE|\\uD83C\\uDDE7\\uD83C\\uDDFC|\\uD83C\\uDDE7\\uD83C\\uDDFB|\\uD83C\\uDDE7\\uD83C\\uDDF9|\\uD83C\\uDDE7\\uD83C\\uDDF8|\\uD83C\\uDDE7\\uD83C\\uDDF7|\\uD83C\\uDDE7\\uD83C\\uDDF6|\\uD83C\\uDDE7\\uD83C\\uDDF4|\\uD83C\\uDDE7\\uD83C\\uDDF3|\\uD83C\\uDDE7\\uD83C\\uDDF2|\\uD83C\\uDDE7\\uD83C\\uDDF1|\\uD83C\\uDDE7\\uD83C\\uDDEF|\\uD83C\\uDDE7\\uD83C\\uDDEE|\\uD83C\\uDDE7\\uD83C\\uDDED|\\uD83C\\uDDE7\\uD83C\\uDDEC|\\uD83C\\uDDE7\\uD83C\\uDDEB|\\uD83C\\uDDE7\\uD83C\\uDDEA|\\uD83C\\uDDE7\\uD83C\\uDDE9|\\uD83C\\uDDE7\\uD83C\\uDDE7|\\uD83C\\uDDE7\\uD83C\\uDDE6|\\uD83C\\uDDE6\\uD83C\\uDDFF|\\uD83C\\uDDE6\\uD83C\\uDDFD|\\uD83C\\uDDE6\\uD83C\\uDDFC|\\uD83C\\uDDE6\\uD83C\\uDDFA|\\uD83C\\uDDE6\\uD83C\\uDDF9|\\uD83C\\uDDF9\\uD83C\\uDDE9|\\uD83D\\uDDE1\\uFE0F|\\u26F9\\uD83C\\uDFFF|\\u26F9\\uD83C\\uDFFE|\\u26F9\\uD83C\\uDFFD|\\u26F9\\uD83C\\uDFFC|\\u26F9\\uD83C\\uDFFB|\\u270D\\uD83C\\uDFFF|\\u270D\\uD83C\\uDFFE|\\u270D\\uD83C\\uDFFD|\\u270D\\uD83C\\uDFFC|\\u270D\\uD83C\\uDFFB|\\uD83C\\uDC04\\uFE0F|\\uD83C\\uDD7F\\uFE0F|\\uD83C\\uDE02\\uFE0F|\\uD83C\\uDE1A\\uFE0F|\\uD83C\\uDE2F\\uFE0F|\\uD83C\\uDE37\\uFE0F|\\uD83C\\uDF9E\\uFE0F|\\uD83C\\uDF9F\\uFE0F|\\uD83C\\uDFCB\\uFE0F|\\uD83C\\uDFCC\\uFE0F|\\uD83C\\uDFCD\\uFE0F|\\uD83C\\uDFCE\\uFE0F|\\uD83C\\uDF96\\uFE0F|\\uD83C\\uDF97\\uFE0F|\\uD83C\\uDF36\\uFE0F|\\uD83C\\uDF27\\uFE0F|\\uD83C\\uDF28\\uFE0F|\\uD83C\\uDF29\\uFE0F|\\uD83C\\uDF2A\\uFE0F|\\uD83C\\uDF2B\\uFE0F|\\uD83C\\uDF2C\\uFE0F|\\uD83D\\uDC3F\\uFE0F|\\uD83D\\uDD77\\uFE0F|\\uD83D\\uDD78\\uFE0F|\\uD83C\\uDF21\\uFE0F|\\uD83C\\uDF99\\uFE0F|\\uD83C\\uDF9A\\uFE0F|\\uD83C\\uDF9B\\uFE0F|\\uD83C\\uDFF3\\uFE0F|\\uD83C\\uDFF5\\uFE0F|\\uD83C\\uDFF7\\uFE0F|\\uD83D\\uDCFD\\uFE0F|\\uD83D\\uDD49\\uFE0F|\\uD83D\\uDD4A\\uFE0F|\\uD83D\\uDD6F\\uFE0F|\\uD83D\\uDD70\\uFE0F|\\uD83D\\uDD73\\uFE0F|\\uD83D\\uDD76\\uFE0F|\\uD83D\\uDD79\\uFE0F|\\uD83D\\uDD87\\uFE0F|\\uD83D\\uDD8A\\uFE0F|\\uD83D\\uDD8B\\uFE0F|\\uD83D\\uDD8C\\uFE0F|\\uD83D\\uDD8D\\uFE0F|\\uD83D\\uDDA5\\uFE0F|\\uD83D\\uDDA8\\uFE0F|\\uD83D\\uDDB2\\uFE0F|\\uD83D\\uDDBC\\uFE0F|\\uD83D\\uDDC2\\uFE0F|\\uD83D\\uDDC3\\uFE0F|\\uD83D\\uDDC4\\uFE0F|\\uD83D\\uDDD1\\uFE0F|\\uD83D\\uDDD2\\uFE0F|\\uD83D\\uDDD3\\uFE0F|\\uD83D\\uDDDC\\uFE0F|\\uD83D\\uDDDD\\uFE0F|\\uD83D\\uDDDE\\uFE0F|\\u270B\\uD83C\\uDFFF|\\uD83D\\uDDE3\\uFE0F|\\uD83D\\uDDEF\\uFE0F|\\uD83D\\uDDF3\\uFE0F|\\uD83D\\uDDFA\\uFE0F|\\uD83D\\uDEE0\\uFE0F|\\uD83D\\uDEE1\\uFE0F|\\uD83D\\uDEE2\\uFE0F|\\uD83D\\uDEF0\\uFE0F|\\uD83C\\uDF7D\\uFE0F|\\uD83D\\uDC41\\uFE0F|\\uD83D\\uDD74\\uFE0F|\\uD83D\\uDD75\\uFE0F|\\uD83D\\uDD90\\uFE0F|\\uD83C\\uDFD4\\uFE0F|\\uD83C\\uDFD5\\uFE0F|\\uD83C\\uDFD6\\uFE0F|\\uD83C\\uDFD7\\uFE0F|\\uD83C\\uDFD8\\uFE0F|\\uD83C\\uDFD9\\uFE0F|\\uD83C\\uDFDA\\uFE0F|\\uD83C\\uDFDB\\uFE0F|\\uD83C\\uDFDC\\uFE0F|\\uD83C\\uDFDD\\uFE0F|\\uD83C\\uDFDE\\uFE0F|\\uD83C\\uDFDF\\uFE0F|\\uD83D\\uDECB\\uFE0F|\\uD83D\\uDECD\\uFE0F|\\uD83D\\uDECE\\uFE0F|\\uD83D\\uDECF\\uFE0F|\\uD83D\\uDEE3\\uFE0F|\\uD83D\\uDEE4\\uFE0F|\\uD83D\\uDEE5\\uFE0F|\\uD83D\\uDEE9\\uFE0F|\\uD83D\\uDEF3\\uFE0F|\\uD83C\\uDF24\\uFE0F|\\uD83C\\uDF25\\uFE0F|\\uD83C\\uDF26\\uFE0F|\\uD83D\\uDDB1\\uFE0F|\\u261D\\uD83C\\uDFFB|\\u261D\\uD83C\\uDFFC|\\u261D\\uD83C\\uDFFD|\\u261D\\uD83C\\uDFFE|\\u261D\\uD83C\\uDFFF|\\u270C\\uD83C\\uDFFB|\\u270C\\uD83C\\uDFFC|\\u270C\\uD83C\\uDFFD|\\u270C\\uD83C\\uDFFE|\\u270C\\uD83C\\uDFFF|\\u270A\\uD83C\\uDFFB|\\u270A\\uD83C\\uDFFC|\\u270A\\uD83C\\uDFFD|\\u270A\\uD83C\\uDFFE|\\u270A\\uD83C\\uDFFF|\\u270B\\uD83C\\uDFFB|\\u270B\\uD83C\\uDFFC|\\u270B\\uD83C\\uDFFD|\\u270B\\uD83C\\uDFFE|4\\uFE0F\\u20E3|9\\uFE0F\\u20E3|0\\uFE0F\\u20E3|1\\uFE0F\\u20E3|2\\uFE0F\\u20E3|3\\uFE0F\\u20E3|#\\uFE0F\\u20E3|5\\uFE0F\\u20E3|6\\uFE0F\\u20E3|7\\uFE0F\\u20E3|8\\uFE0F\\u20E3|\\*\\uFE0F\\u20E3|\\u00A9\\uFE0F|\\u00AE\\uFE0F|\\u203C\\uFE0F|\\u2049\\uFE0F|\\u2122\\uFE0F|\\u2139\\uFE0F|\\u2194\\uFE0F|\\u2195\\uFE0F|\\u2196\\uFE0F|\\u2197\\uFE0F|\\u2198\\uFE0F|\\u2199\\uFE0F|\\u21A9\\uFE0F|\\u21AA\\uFE0F|\\u231A\\uFE0F|\\u231B\\uFE0F|\\u24C2\\uFE0F|\\u25AA\\uFE0F|\\u25AB\\uFE0F|\\u25B6\\uFE0F|\\u25C0\\uFE0F|\\u25FB\\uFE0F|\\u25FC\\uFE0F|\\u25FD\\uFE0F|\\u25FE\\uFE0F|\\u2600\\uFE0F|\\u2601\\uFE0F|\\u260E\\uFE0F|\\u2611\\uFE0F|\\u2614\\uFE0F|\\u2615\\uFE0F|\\u261D\\uFE0F|\\u263A\\uFE0F|\\u2648\\uFE0F|\\u2649\\uFE0F|\\u264A\\uFE0F|\\u264B\\uFE0F|\\u264C\\uFE0F|\\u264D\\uFE0F|\\u264E\\uFE0F|\\u264F\\uFE0F|\\u2650\\uFE0F|\\u2651\\uFE0F|\\u2652\\uFE0F|\\u2653\\uFE0F|\\u2660\\uFE0F|\\u2663\\uFE0F|\\u2665\\uFE0F|\\u2666\\uFE0F|\\u2668\\uFE0F|\\u267B\\uFE0F|\\u267F\\uFE0F|\\u2693\\uFE0F|\\u26A0\\uFE0F|\\u26A1\\uFE0F|\\u26AA\\uFE0F|\\u26AB\\uFE0F|\\u26BD\\uFE0F|\\u26BE\\uFE0F|\\u26C4\\uFE0F|\\u26C5\\uFE0F|\\u26D4\\uFE0F|\\u26EA\\uFE0F|\\u26F2\\uFE0F|\\u26F3\\uFE0F|\\u26F5\\uFE0F|\\u26FA\\uFE0F|\\u26FD\\uFE0F|\\u2702\\uFE0F|\\u2708\\uFE0F|\\u2709\\uFE0F|\\u270C\\uFE0F|\\u270F\\uFE0F|\\u2712\\uFE0F|\\u2714\\uFE0F|\\u2716\\uFE0F|\\u2733\\uFE0F|\\u2734\\uFE0F|\\u2744\\uFE0F|\\u2747\\uFE0F|\\u2757\\uFE0F|\\u2764\\uFE0F|\\u27A1\\uFE0F|\\u2934\\uFE0F|\\u2935\\uFE0F|\\u2B05\\uFE0F|\\u2B06\\uFE0F|\\u2B07\\uFE0F|\\u2B1B\\uFE0F|\\u2B1C\\uFE0F|\\u2B50\\uFE0F|\\u2B55\\uFE0F|\\u3030\\uFE0F|\\u303D\\uFE0F|\\u3297\\uFE0F|\\u3299\\uFE0F|\\u271D\\uFE0F|\\u2328\\uFE0F|\\u270D\\uFE0F|\\u23ED\\uFE0F|\\u23EE\\uFE0F|\\u23EF\\uFE0F|\\u23F1\\uFE0F|\\u23F2\\uFE0F|\\u23F8\\uFE0F|\\u23F9\\uFE0F|\\u23FA\\uFE0F|\\u2602\\uFE0F|\\u2603\\uFE0F|\\u2604\\uFE0F|\\u2618\\uFE0F|\\u2620\\uFE0F|\\u2622\\uFE0F|\\u2623\\uFE0F|\\u2626\\uFE0F|\\u262A\\uFE0F|\\u262E\\uFE0F|\\u262F\\uFE0F|\\u2638\\uFE0F|\\u2639\\uFE0F|\\u2692\\uFE0F|\\u2694\\uFE0F|\\u2696\\uFE0F|\\u2697\\uFE0F|\\u2699\\uFE0F|\\u269B\\uFE0F|\\u269C\\uFE0F|\\u26B0\\uFE0F|\\u26B1\\uFE0F|\\u26C8\\uFE0F|\\u26CF\\uFE0F|\\u26D1\\uFE0F|\\u26D3\\uFE0F|\\u26E9\\uFE0F|\\u26F0\\uFE0F|\\u26F1\\uFE0F|\\u26F4\\uFE0F|\\u26F7\\uFE0F|\\u26F8\\uFE0F|\\u26F9\\uFE0F|\\u2721\\uFE0F|\\u2763\\uFE0F|\\uD83C\\uDCCF|\\uD83C\\uDD70|\\uD83C\\uDD71|\\uD83C\\uDD7E|\\uD83C\\uDD8E|\\uD83C\\uDD91|\\uD83C\\uDD92|\\uD83C\\uDD93|\\uD83C\\uDD94|\\uD83C\\uDD95|\\uD83C\\uDD96|\\uD83C\\uDD97|\\uD83C\\uDD98|\\uD83C\\uDD99|\\uD83C\\uDD9A|\\uD83C\\uDE01|\\uD83C\\uDE32|\\uD83C\\uDE33|\\uD83C\\uDE34|\\uD83C\\uDE35|\\uD83C\\uDE36|\\uD83C\\uDE38|\\uD83C\\uDE39|\\uD83C\\uDE3A|\\uD83C\\uDE50|\\uD83C\\uDE51|\\uD83C\\uDF00|\\uD83C\\uDF01|\\uD83C\\uDF02|\\uD83C\\uDF03|\\uD83C\\uDF04|\\uD83C\\uDF05|\\uD83C\\uDF06|\\uD83C\\uDF07|\\uD83C\\uDF08|\\uD83C\\uDF09|\\uD83C\\uDF0A|\\uD83C\\uDF0B|\\uD83C\\uDF0C|\\uD83C\\uDF0F|\\uD83C\\uDF11|\\uD83C\\uDF13|\\uD83C\\uDF14|\\uD83C\\uDF15|\\uD83C\\uDF19|\\uD83C\\uDF1B|\\uD83C\\uDF1F|\\uD83C\\uDF20|\\uD83C\\uDF30|\\uD83C\\uDF31|\\uD83C\\uDF34|\\uD83C\\uDF35|\\uD83C\\uDF37|\\uD83C\\uDF38|\\uD83C\\uDF39|\\uD83C\\uDF3A|\\uD83C\\uDF3B|\\uD83C\\uDF3C|\\uD83C\\uDF3D|\\uD83C\\uDF3E|\\uD83C\\uDF3F|\\uD83C\\uDF40|\\uD83C\\uDF41|\\uD83C\\uDF42|\\uD83C\\uDF43|\\uD83C\\uDF44|\\uD83C\\uDF45|\\uD83C\\uDF46|\\uD83C\\uDF47|\\uD83C\\uDF48|\\uD83C\\uDF49|\\uD83C\\uDF4A|\\uD83C\\uDF4C|\\uD83C\\uDF4D|\\uD83C\\uDF4E|\\uD83C\\uDF4F|\\uD83C\\uDF51|\\uD83C\\uDF52|\\uD83C\\uDF53|\\uD83C\\uDF54|\\uD83C\\uDF55|\\uD83C\\uDF56|\\uD83C\\uDF57|\\uD83C\\uDF58|\\uD83C\\uDF59|\\uD83C\\uDF5A|\\uD83C\\uDF5B|\\uD83C\\uDF5C|\\uD83C\\uDF5D|\\uD83C\\uDF5E|\\uD83C\\uDF5F|\\uD83C\\uDF60|\\uD83C\\uDF61|\\uD83C\\uDF62|\\uD83C\\uDF63|\\uD83C\\uDF64|\\uD83C\\uDF65|\\uD83C\\uDF66|\\uD83C\\uDF67|\\uD83C\\uDF68|\\uD83C\\uDF69|\\uD83C\\uDF6A|\\uD83C\\uDF6B|\\uD83C\\uDF6C|\\uD83C\\uDF6D|\\uD83C\\uDF6E|\\uD83C\\uDF6F|\\uD83C\\uDF70|\\uD83C\\uDF71|\\uD83C\\uDF72|\\uD83C\\uDF73|\\uD83C\\uDF74|\\uD83C\\uDF75|\\uD83C\\uDF76|\\uD83C\\uDF77|\\uD83C\\uDF78|\\uD83C\\uDF79|\\uD83C\\uDF7A|\\uD83C\\uDF7B|\\uD83C\\uDF80|\\uD83C\\uDF81|\\uD83C\\uDF82|\\uD83C\\uDF83|\\uD83C\\uDF84|\\uD83C\\uDF85|\\uD83C\\uDF86|\\uD83C\\uDF87|\\uD83C\\uDF88|\\uD83C\\uDF89|\\uD83C\\uDF8A|\\uD83C\\uDF8B|\\uD83C\\uDF8C|\\uD83C\\uDF8D|\\uD83C\\uDF8E|\\uD83C\\uDF8F|\\uD83C\\uDF90|\\uD83C\\uDF91|\\uD83C\\uDF92|\\uD83C\\uDF93|\\uD83C\\uDFA0|\\uD83C\\uDFA1|\\uD83C\\uDFA2|\\uD83C\\uDFA3|\\uD83C\\uDFA4|\\uD83C\\uDFA5|\\uD83C\\uDFA6|\\uD83C\\uDFA7|\\uD83C\\uDFA8|\\uD83C\\uDFA9|\\uD83C\\uDFAA|\\uD83C\\uDFAB|\\uD83C\\uDFAC|\\uD83C\\uDFAD|\\uD83C\\uDFAE|\\uD83C\\uDFAF|\\uD83C\\uDFB0|\\uD83C\\uDFB1|\\uD83C\\uDFB2|\\uD83C\\uDFB3|\\uD83C\\uDFB4|\\uD83C\\uDFB5|\\uD83C\\uDFB6|\\uD83C\\uDFB7|\\uD83C\\uDFB8|\\uD83C\\uDFB9|\\uD83C\\uDFBA|\\uD83C\\uDFBB|\\uD83C\\uDFBC|\\uD83C\\uDFBD|\\uD83C\\uDFBE|\\uD83C\\uDFBF|\\uD83C\\uDFC0|\\uD83C\\uDFC1|\\uD83C\\uDFC2|\\uD83C\\uDFC3|\\uD83C\\uDFC4|\\uD83C\\uDFC6|\\uD83C\\uDFC8|\\uD83C\\uDFCA|\\uD83C\\uDFE0|\\uD83D\\uDDB1|\\uD83C\\uDFE2|\\uD83C\\uDFE3|\\uD83C\\uDFE5|\\uD83C\\uDFE6|\\uD83C\\uDFE7|\\uD83C\\uDFE8|\\uD83C\\uDFE9|\\uD83C\\uDFEA|\\uD83C\\uDFEB|\\uD83C\\uDFEC|\\uD83C\\uDFED|\\uD83C\\uDFEE|\\uD83C\\uDFEF|\\uD83C\\uDFF0|\\uD83D\\uDC0C|\\uD83D\\uDC0D|\\uD83D\\uDC0E|\\uD83D\\uDC11|\\uD83D\\uDC12|\\uD83D\\uDC14|\\uD83D\\uDC17|\\uD83D\\uDC18|\\uD83D\\uDC19|\\uD83D\\uDC1A|\\uD83D\\uDC1B|\\uD83D\\uDC1C|\\uD83D\\uDC1D|\\uD83D\\uDC1E|\\uD83D\\uDC1F|\\uD83D\\uDC20|\\uD83D\\uDC21|\\uD83D\\uDC22|\\uD83D\\uDC23|\\uD83D\\uDC24|\\uD83D\\uDC25|\\uD83D\\uDC26|\\uD83D\\uDC27|\\uD83D\\uDC28|\\uD83D\\uDC29|\\uD83D\\uDC2B|\\uD83D\\uDC2C|\\uD83D\\uDC2D|\\uD83D\\uDC2E|\\uD83D\\uDC2F|\\uD83D\\uDC30|\\uD83D\\uDC31|\\uD83D\\uDC32|\\uD83D\\uDC33|\\uD83D\\uDC34|\\uD83D\\uDC35|\\uD83D\\uDC36|\\uD83D\\uDC37|\\uD83D\\uDC38|\\uD83D\\uDC39|\\uD83D\\uDC3A|\\uD83D\\uDC3B|\\uD83D\\uDC3C|\\uD83D\\uDC3D|\\uD83D\\uDC3E|\\uD83D\\uDC40|\\uD83D\\uDC42|\\uD83D\\uDC43|\\uD83D\\uDC44|\\uD83D\\uDC45|\\uD83D\\uDC46|\\uD83D\\uDC47|\\uD83D\\uDC48|\\uD83D\\uDC49|\\uD83D\\uDC4A|\\uD83D\\uDC4B|\\uD83D\\uDC4C|\\uD83D\\uDC4D|\\uD83D\\uDC4E|\\uD83D\\uDC4F|\\uD83D\\uDC50|\\uD83D\\uDC51|\\uD83D\\uDC52|\\uD83D\\uDC53|\\uD83D\\uDC54|\\uD83D\\uDC55|\\uD83D\\uDC56|\\uD83D\\uDC57|\\uD83D\\uDC58|\\uD83D\\uDC59|\\uD83D\\uDC5A|\\uD83D\\uDC5B|\\uD83D\\uDC5C|\\uD83D\\uDC5D|\\uD83D\\uDC5E|\\uD83D\\uDC5F|\\uD83D\\uDC60|\\uD83D\\uDC61|\\uD83D\\uDC62|\\uD83D\\uDC63|\\uD83D\\uDC64|\\uD83D\\uDC66|\\uD83D\\uDC67|\\uD83D\\uDC68|\\uD83D\\uDC69|\\uD83D\\uDC6A|\\uD83D\\uDC6B|\\uD83D\\uDC6E|\\uD83D\\uDC6F|\\uD83D\\uDC70|\\uD83D\\uDC71|\\uD83D\\uDC72|\\uD83D\\uDC73|\\uD83D\\uDC74|\\uD83D\\uDC75|\\uD83D\\uDC76|\\uD83D\\uDC77|\\uD83D\\uDC78|\\uD83D\\uDC79|\\uD83D\\uDC7A|\\uD83D\\uDC7B|\\uD83D\\uDC7C|\\uD83D\\uDC7D|\\uD83D\\uDC7E|\\uD83D\\uDC7F|\\uD83D\\uDC80|\\uD83D\\uDCC7|\\uD83D\\uDC81|\\uD83D\\uDC82|\\uD83D\\uDC83|\\uD83D\\uDC84|\\uD83D\\uDC85|\\uD83D\\uDCD2|\\uD83D\\uDC86|\\uD83D\\uDCD3|\\uD83D\\uDC87|\\uD83D\\uDCD4|\\uD83D\\uDC88|\\uD83D\\uDCD5|\\uD83D\\uDC89|\\uD83D\\uDCD6|\\uD83D\\uDC8A|\\uD83D\\uDCD7|\\uD83D\\uDC8B|\\uD83D\\uDCD8|\\uD83D\\uDC8C|\\uD83D\\uDCD9|\\uD83D\\uDC8D|\\uD83D\\uDCDA|\\uD83D\\uDC8E|\\uD83D\\uDCDB|\\uD83D\\uDC8F|\\uD83D\\uDCDC|\\uD83D\\uDC90|\\uD83D\\uDCDD|\\uD83D\\uDC91|\\uD83D\\uDCDE|\\uD83D\\uDC92|\\uD83D\\uDCDF|\\uD83D\\uDCE0|\\uD83D\\uDC93|\\uD83D\\uDCE1|\\uD83D\\uDCE2|\\uD83D\\uDC94|\\uD83D\\uDCE3|\\uD83D\\uDCE4|\\uD83D\\uDC95|\\uD83D\\uDCE5|\\uD83D\\uDCE6|\\uD83D\\uDC96|\\uD83D\\uDCE7|\\uD83D\\uDCE8|\\uD83D\\uDC97|\\uD83D\\uDCE9|\\uD83D\\uDCEA|\\uD83D\\uDC98|\\uD83D\\uDCEB|\\uD83D\\uDCEE|\\uD83D\\uDC99|\\uD83D\\uDCF0|\\uD83D\\uDCF1|\\uD83D\\uDC9A|\\uD83D\\uDCF2|\\uD83D\\uDCF3|\\uD83D\\uDC9B|\\uD83D\\uDCF4|\\uD83D\\uDCF6|\\uD83D\\uDC9C|\\uD83D\\uDCF7|\\uD83D\\uDCF9|\\uD83D\\uDC9D|\\uD83D\\uDCFA|\\uD83D\\uDCFB|\\uD83D\\uDC9E|\\uD83D\\uDCFC|\\uD83D\\uDD03|\\uD83D\\uDC9F|\\uD83D\\uDD0A|\\uD83D\\uDD0B|\\uD83D\\uDCA0|\\uD83D\\uDD0C|\\uD83D\\uDD0D|\\uD83D\\uDCA1|\\uD83D\\uDD0E|\\uD83D\\uDD0F|\\uD83D\\uDCA2|\\uD83D\\uDD10|\\uD83D\\uDD11|\\uD83D\\uDCA3|\\uD83D\\uDD12|\\uD83D\\uDD13|\\uD83D\\uDCA4|\\uD83D\\uDD14|\\uD83D\\uDD16|\\uD83D\\uDCA5|\\uD83D\\uDD17|\\uD83D\\uDD18|\\uD83D\\uDCA6|\\uD83D\\uDD19|\\uD83D\\uDD1A|\\uD83D\\uDCA7|\\uD83D\\uDD1B|\\uD83D\\uDD1C|\\uD83D\\uDCA8|\\uD83D\\uDD1D|\\uD83D\\uDD1E|\\uD83D\\uDCA9|\\uD83D\\uDD1F|\\uD83D\\uDCAA|\\uD83D\\uDD20|\\uD83D\\uDD21|\\uD83D\\uDCAB|\\uD83D\\uDD22|\\uD83D\\uDD23|\\uD83D\\uDCAC|\\uD83D\\uDD24|\\uD83D\\uDD25|\\uD83D\\uDCAE|\\uD83D\\uDD26|\\uD83D\\uDD27|\\uD83D\\uDCAF|\\uD83D\\uDD28|\\uD83D\\uDD29|\\uD83D\\uDCB0|\\uD83D\\uDD2A|\\uD83D\\uDD2B|\\uD83D\\uDCB1|\\uD83D\\uDD2E|\\uD83D\\uDCB2|\\uD83D\\uDD2F|\\uD83D\\uDCB3|\\uD83D\\uDD30|\\uD83D\\uDD31|\\uD83D\\uDCB4|\\uD83D\\uDD32|\\uD83D\\uDD33|\\uD83D\\uDCB5|\\uD83D\\uDD34|\\uD83D\\uDD35|\\uD83D\\uDCB8|\\uD83D\\uDD36|\\uD83D\\uDD37|\\uD83D\\uDCB9|\\uD83D\\uDD38|\\uD83D\\uDD39|\\uD83D\\uDCBA|\\uD83D\\uDD3A|\\uD83D\\uDD3B|\\uD83D\\uDCBB|\\uD83D\\uDD3C|\\uD83D\\uDCBC|\\uD83D\\uDD3D|\\uD83D\\uDD50|\\uD83D\\uDCBD|\\uD83D\\uDD51|\\uD83D\\uDCBE|\\uD83D\\uDD52|\\uD83D\\uDCBF|\\uD83D\\uDD53|\\uD83D\\uDCC0|\\uD83D\\uDD54|\\uD83D\\uDD55|\\uD83D\\uDCC1|\\uD83D\\uDD56|\\uD83D\\uDD57|\\uD83D\\uDCC2|\\uD83D\\uDD58|\\uD83D\\uDD59|\\uD83D\\uDCC3|\\uD83D\\uDD5A|\\uD83D\\uDD5B|\\uD83D\\uDCC4|\\uD83D\\uDDFB|\\uD83D\\uDDFC|\\uD83D\\uDCC5|\\uD83D\\uDDFD|\\uD83D\\uDDFE|\\uD83D\\uDCC6|\\uD83D\\uDDFF|\\uD83D\\uDE01|\\uD83D\\uDE02|\\uD83D\\uDE03|\\uD83D\\uDCC8|\\uD83D\\uDE04|\\uD83D\\uDE05|\\uD83D\\uDCC9|\\uD83D\\uDE06|\\uD83D\\uDE09|\\uD83D\\uDCCA|\\uD83D\\uDE0A|\\uD83D\\uDE0B|\\uD83D\\uDCCB|\\uD83D\\uDE0C|\\uD83D\\uDE0D|\\uD83D\\uDCCC|\\uD83D\\uDE0F|\\uD83D\\uDE12|\\uD83D\\uDCCD|\\uD83D\\uDE13|\\uD83D\\uDE14|\\uD83D\\uDCCE|\\uD83D\\uDE16|\\uD83D\\uDE18|\\uD83D\\uDCCF|\\uD83D\\uDE1A|\\uD83D\\uDE1C|\\uD83D\\uDCD0|\\uD83D\\uDE1D|\\uD83D\\uDE1E|\\uD83D\\uDCD1|\\uD83D\\uDE20|\\uD83D\\uDE21|\\uD83D\\uDE22|\\uD83D\\uDE23|\\uD83D\\uDE24|\\uD83D\\uDE25|\\uD83D\\uDE28|\\uD83D\\uDE29|\\uD83D\\uDE2A|\\uD83D\\uDE2B|\\uD83D\\uDE2D|\\uD83D\\uDE30|\\uD83D\\uDE31|\\uD83D\\uDE32|\\uD83D\\uDE33|\\uD83D\\uDE35|\\uD83D\\uDE37|\\uD83D\\uDE38|\\uD83D\\uDE39|\\uD83D\\uDE3A|\\uD83D\\uDE3B|\\uD83D\\uDE3C|\\uD83D\\uDE3D|\\uD83D\\uDE3E|\\uD83D\\uDE3F|\\uD83D\\uDE40|\\uD83D\\uDE45|\\uD83D\\uDE46|\\uD83D\\uDE47|\\uD83D\\uDE48|\\uD83D\\uDE49|\\uD83D\\uDE4A|\\uD83D\\uDE4B|\\uD83D\\uDE4C|\\uD83D\\uDE4D|\\uD83D\\uDE4E|\\uD83D\\uDE4F|\\uD83D\\uDE80|\\uD83D\\uDE83|\\uD83D\\uDE84|\\uD83D\\uDE85|\\uD83D\\uDE87|\\uD83D\\uDE89|\\uD83D\\uDE8C|\\uD83D\\uDE8F|\\uD83D\\uDE91|\\uD83D\\uDE92|\\uD83D\\uDE93|\\uD83D\\uDE95|\\uD83D\\uDE97|\\uD83D\\uDE99|\\uD83D\\uDE9A|\\uD83D\\uDEA2|\\uD83D\\uDEA4|\\uD83D\\uDEA5|\\uD83D\\uDEA7|\\uD83D\\uDEA8|\\uD83D\\uDEA9|\\uD83D\\uDEAA|\\uD83D\\uDEAB|\\uD83D\\uDEAC|\\uD83D\\uDEAD|\\uD83D\\uDEB2|\\uD83D\\uDEB6|\\uD83D\\uDEB9|\\uD83D\\uDEBA|\\uD83D\\uDEBB|\\uD83D\\uDEBC|\\uD83D\\uDEBD|\\uD83D\\uDEBE|\\uD83D\\uDEC0|\\uD83E\\uDD18|\\uD83D\\uDE00|\\uD83D\\uDE07|\\uD83D\\uDE08|\\uD83D\\uDE0E|\\uD83D\\uDE10|\\uD83D\\uDE11|\\uD83D\\uDE15|\\uD83D\\uDE17|\\uD83D\\uDE19|\\uD83D\\uDE1B|\\uD83D\\uDE1F|\\uD83D\\uDE26|\\uD83D\\uDE27|\\uD83D\\uDE2C|\\uD83D\\uDE2E|\\uD83D\\uDE2F|\\uD83D\\uDE34|\\uD83D\\uDE36|\\uD83D\\uDE81|\\uD83D\\uDE82|\\uD83D\\uDE86|\\uD83D\\uDE88|\\uD83D\\uDE8A|\\uD83D\\uDE8D|\\uD83D\\uDE8E|\\uD83D\\uDE90|\\uD83D\\uDE94|\\uD83D\\uDE96|\\uD83D\\uDE98|\\uD83D\\uDE9B|\\uD83D\\uDE9C|\\uD83D\\uDE9D|\\uD83D\\uDE9E|\\uD83D\\uDE9F|\\uD83D\\uDEA0|\\uD83D\\uDEA1|\\uD83D\\uDEA3|\\uD83D\\uDEA6|\\uD83D\\uDEAE|\\uD83D\\uDEAF|\\uD83D\\uDEB0|\\uD83D\\uDEB1|\\uD83D\\uDEB3|\\uD83D\\uDEB4|\\uD83D\\uDEB5|\\uD83D\\uDEB7|\\uD83D\\uDEB8|\\uD83D\\uDEBF|\\uD83D\\uDEC1|\\uD83D\\uDEC2|\\uD83D\\uDEC3|\\uD83D\\uDEC4|\\uD83D\\uDEC5|\\uD83C\\uDF0D|\\uD83C\\uDF0E|\\uD83C\\uDF10|\\uD83C\\uDF12|\\uD83C\\uDF16|\\uD83C\\uDF17|\\uD83C\\uDF18|\\uD83C\\uDF1A|\\uD83C\\uDF1C|\\uD83C\\uDF1D|\\uD83C\\uDF1E|\\uD83C\\uDF32|\\uD83C\\uDF33|\\uD83C\\uDF4B|\\uD83C\\uDF50|\\uD83C\\uDF7C|\\uD83C\\uDFC7|\\uD83C\\uDFC9|\\uD83C\\uDFE4|\\uD83D\\uDC00|\\uD83D\\uDC01|\\uD83D\\uDC02|\\uD83D\\uDC03|\\uD83D\\uDC04|\\uD83D\\uDC05|\\uD83D\\uDC06|\\uD83D\\uDC07|\\uD83D\\uDC08|\\uD83D\\uDC09|\\uD83D\\uDC0A|\\uD83D\\uDC0B|\\uD83D\\uDC0F|\\uD83D\\uDC10|\\uD83D\\uDC13|\\uD83D\\uDC15|\\uD83D\\uDC16|\\uD83D\\uDC2A|\\uD83D\\uDC65|\\uD83D\\uDC6C|\\uD83D\\uDC6D|\\uD83D\\uDCAD|\\uD83D\\uDCB6|\\uD83D\\uDCB7|\\uD83D\\uDCEC|\\uD83D\\uDCED|\\uD83D\\uDCEF|\\uD83D\\uDCF5|\\uD83D\\uDD00|\\uD83D\\uDD01|\\uD83D\\uDD02|\\uD83D\\uDD04|\\uD83D\\uDD05|\\uD83D\\uDD06|\\uD83D\\uDD07|\\uD83D\\uDD09|\\uD83D\\uDD15|\\uD83D\\uDD2C|\\uD83D\\uDD2D|\\uD83D\\uDD5C|\\uD83D\\uDD5D|\\uD83D\\uDD5E|\\uD83D\\uDD5F|\\uD83D\\uDD60|\\uD83D\\uDD61|\\uD83D\\uDD62|\\uD83D\\uDD63|\\uD83D\\uDD64|\\uD83D\\uDD65|\\uD83D\\uDD66|\\uD83D\\uDD67|\\uD83D\\uDD08|\\uD83D\\uDE8B|\\uD83C\\uDFC5|\\uD83C\\uDFF4|\\uD83D\\uDCF8|\\uD83D\\uDECC|\\uD83D\\uDD95|\\uD83D\\uDD96|\\uD83D\\uDE41|\\uD83D\\uDE42|\\uD83D\\uDEEB|\\uD83D\\uDEEC|\\uD83C\\uDFFB|\\uD83C\\uDFFC|\\uD83C\\uDFFD|\\uD83C\\uDFFE|\\uD83C\\uDFFF|\\uD83D\\uDE43|\\uD83E\\uDD11|\\uD83E\\uDD13|\\uD83E\\uDD17|\\uD83D\\uDE44|\\uD83E\\uDD14|\\uD83E\\uDD10|\\uD83E\\uDD12|\\uD83E\\uDD15|\\uD83E\\uDD16|\\uD83E\\uDD81|\\uD83E\\uDD84|\\uD83E\\uDD82|\\uD83E\\uDD80|\\uD83E\\uDD83|\\uD83E\\uDDC0|\\uD83C\\uDF2D|\\uD83C\\uDF2E|\\uD83C\\uDF2F|\\uD83C\\uDF7F|\\uD83C\\uDF7E|\\uD83C\\uDFF9|\\uD83C\\uDFFA|\\uD83D\\uDED0|\\uD83D\\uDD4B|\\uD83D\\uDD4C|\\uD83D\\uDD4D|\\uD83D\\uDD4E|\\uD83D\\uDCFF|\\uD83C\\uDFCF|\\uD83C\\uDFD0|\\uD83C\\uDFD1|\\uD83C\\uDFD2|\\uD83C\\uDFD3|\\uD83C\\uDFF8|\\uD83C\\uDF26|\\uD83C\\uDF25|\\uD83C\\uDF24|\\uD83D\\uDEF3|\\uD83D\\uDEE9|\\uD83D\\uDEE5|\\uD83D\\uDEE4|\\uD83D\\uDEE3|\\uD83D\\uDECF|\\uD83D\\uDECE|\\uD83D\\uDECD|\\uD83D\\uDECB|\\uD83C\\uDFDF|\\uD83C\\uDFDE|\\uD83C\\uDFDD|\\uD83C\\uDFDC|\\uD83C\\uDFDB|\\uD83C\\uDFDA|\\uD83C\\uDFD9|\\uD83C\\uDFD8|\\uD83C\\uDFD7|\\uD83C\\uDFD6|\\uD83C\\uDFD5|\\uD83C\\uDFD4|\\uD83D\\uDD90|\\uD83D\\uDD75|\\uD83D\\uDD74|\\uD83D\\uDC41|\\uD83C\\uDF7D|\\uD83D\\uDEF0|\\uD83D\\uDEE2|\\uD83D\\uDEE1|\\uD83D\\uDEE0|\\uD83D\\uDDFA|\\uD83D\\uDDF3|\\uD83D\\uDDEF|\\uD83D\\uDDE3|\\uD83D\\uDDE1|\\uD83D\\uDDDE|\\uD83D\\uDDDD|\\uD83D\\uDDDC|\\uD83D\\uDDD3|\\uD83D\\uDDD2|\\uD83D\\uDDD1|\\uD83D\\uDDC4|\\uD83D\\uDDC3|\\uD83D\\uDDC2|\\uD83D\\uDDBC|\\uD83D\\uDDB2|\\uD83D\\uDDA8|\\uD83D\\uDDA5|\\uD83D\\uDD8D|\\uD83D\\uDD8C|\\uD83D\\uDD8B|\\uD83D\\uDD8A|\\uD83D\\uDD87|\\uD83D\\uDD79|\\uD83D\\uDD76|\\uD83D\\uDD73|\\uD83D\\uDD70|\\uD83D\\uDD6F|\\uD83D\\uDD4A|\\uD83D\\uDD49|\\uD83D\\uDCFD|\\uD83C\\uDFF7|\\uD83C\\uDFF5|\\uD83C\\uDFF3|\\uD83C\\uDF9B|\\uD83C\\uDF9A|\\uD83C\\uDF99|\\uD83C\\uDF21|\\uD83D\\uDD78|\\uD83D\\uDD77|\\uD83D\\uDC3F|\\uD83C\\uDF2C|\\uD83C\\uDF2B|\\uD83C\\uDF2A|\\uD83C\\uDF29|\\uD83C\\uDF28|\\uD83C\\uDF27|\\uD83C\\uDF36|\\uD83C\\uDF97|\\uD83C\\uDF96|\\uD83C\\uDFCE|\\uD83C\\uDFCD|\\uD83C\\uDFCC|\\uD83C\\uDFCB|\\uD83C\\uDF9F|\\uD83C\\uDF9E|\\uD83C\\uDE37|\\uD83C\\uDE2F|\\uD83C\\uDE1A|\\uD83C\\uDE02|\\uD83C\\uDD7F|\\uD83C\\uDC04|\\uD83C\\uDFE1|\\u2714|\\u2733|\\u2734|\\u2744|\\u2747|\\u2757|\\u2764|\\u27A1|\\u2934|\\u2935|\\u2B05|\\u2B06|\\u2B07|\\u2B1B|\\u2B1C|\\u2B50|\\u2B55|\\u3030|\\u303D|\\u3297|\\u3299|\\u2712|\\u270F|\\u270C|\\u2709|\\u2708|\\u2702|\\u26FD|\\u26FA|\\u26F5|\\u26F3|\\u26F2|\\u26EA|\\u26D4|\\u26C5|\\u26C4|\\u26BE|\\u26BD|\\u26AB|\\u26AA|\\u26A1|\\u26A0|\\u2693|\\u267F|\\u267B|\\u2668|\\u2666|\\u2665|\\u2663|\\u2660|\\u2653|\\u2652|\\u2651|\\u271D|\\u2650|\\u264F|\\u264E|\\u264D|\\u264C|\\u264B|\\u264A|\\u2649|\\u2648|\\u263A|\\u261D|\\u2615|\\u2614|\\u2611|\\u2328|\\u260E|\\u2601|\\u2600|\\u25FE|\\u25FD|\\u25FC|\\u25FB|\\u25C0|\\u25B6|\\u25AB|\\u25AA|\\u24C2|\\u2716|\\u231A|\\u21AA|\\u21A9|\\u2199|\\u2198|\\u2197|\\u2196|\\u2195|\\u2194|\\u2139|\\u2122|\\u270D|\\u2049|\\u203C|\\u00AE|\\u00A9|\\u27BF|\\u27B0|\\u2797|\\u2796|\\u2795|\\u2755|\\u2754|\\u2753|\\u274E|\\u274C|\\u2728|\\u270B|\\u270A|\\u2705|\\u26CE|\\u23F3|\\u23F0|\\u23EC|\\u23ED|\\u23EE|\\u23EF|\\u23F1|\\u23F2|\\u23F8|\\u23F9|\\u23FA|\\u2602|\\u2603|\\u2604|\\u2618|\\u2620|\\u2622|\\u2623|\\u2626|\\u262A|\\u262E|\\u262F|\\u2638|\\u2639|\\u2692|\\u2694|\\u2696|\\u2697|\\u2699|\\u269B|\\u269C|\\u26B0|\\u26B1|\\u26C8|\\u26CF|\\u26D1|\\u26D3|\\u26E9|\\u26F0|\\u26F1|\\u26F4|\\u26F7|\\u26F8|\\u26F9|\\u2721|\\u2763|\\u23EB|\\u23EA|\\u23E9|\\u231B)"),
        (this.jsEscapeMap = {
            "👩‍❤️‍💋‍👩": "1f469-2764-1f48b-1f469",
            "👨‍❤️‍💋‍👨": "1f468-2764-1f48b-1f468",
            "👨‍👨‍👦‍👦": "1f468-1f468-1f466-1f466",
            "👨‍👨‍👧‍👦": "1f468-1f468-1f467-1f466",
            "👨‍👨‍👧‍👧": "1f468-1f468-1f467-1f467",
            "👨‍👩‍👦‍👦": "1f468-1f469-1f466-1f466",
            "👨‍👩‍👧‍👦": "1f468-1f469-1f467-1f466",
            "👨‍👩‍👧‍👧": "1f468-1f469-1f467-1f467",
            "👩‍👩‍👦‍👦": "1f469-1f469-1f466-1f466",
            "👩‍👩‍👧‍👦": "1f469-1f469-1f467-1f466",
            "👩‍👩‍👧‍👧": "1f469-1f469-1f467-1f467",
            "👩‍❤️‍👩": "1f469-2764-1f469",
            "👨‍❤️‍👨": "1f468-2764-1f468",
            "👨‍👨‍👦": "1f468-1f468-1f466",
            "👨‍👨‍👧": "1f468-1f468-1f467",
            "👨‍👩‍👧": "1f468-1f469-1f467",
            "👩‍👩‍👦": "1f469-1f469-1f466",
            "👩‍👩‍👧": "1f469-1f469-1f467",
            "👁‍🗨": "1f441-1f5e8",
            "#️⃣": "0023-20e3",
            "0️⃣": "0030-20e3",
            "1️⃣": "0031-20e3",
            "2️⃣": "0032-20e3",
            "3️⃣": "0033-20e3",
            "4️⃣": "0034-20e3",
            "5️⃣": "0035-20e3",
            "6️⃣": "0036-20e3",
            "7️⃣": "0037-20e3",
            "8️⃣": "0038-20e3",
            "9️⃣": "0039-20e3",
            "*️⃣": "002a-20e3",
            "🤘🏿": "1f918-1f3ff",
            "🤘🏾": "1f918-1f3fe",
            "🤘🏽": "1f918-1f3fd",
            "🤘🏼": "1f918-1f3fc",
            "🤘🏻": "1f918-1f3fb",
            "🛀🏿": "1f6c0-1f3ff",
            "🛀🏾": "1f6c0-1f3fe",
            "🛀🏽": "1f6c0-1f3fd",
            "🛀🏼": "1f6c0-1f3fc",
            "🛀🏻": "1f6c0-1f3fb",
            "🚶🏿": "1f6b6-1f3ff",
            "🚶🏾": "1f6b6-1f3fe",
            "🚶🏽": "1f6b6-1f3fd",
            "🚶🏼": "1f6b6-1f3fc",
            "🚶🏻": "1f6b6-1f3fb",
            "🚵🏿": "1f6b5-1f3ff",
            "🚵🏾": "1f6b5-1f3fe",
            "🚵🏽": "1f6b5-1f3fd",
            "🚵🏼": "1f6b5-1f3fc",
            "🚵🏻": "1f6b5-1f3fb",
            "🚴🏿": "1f6b4-1f3ff",
            "🚴🏾": "1f6b4-1f3fe",
            "🚴🏽": "1f6b4-1f3fd",
            "🚴🏼": "1f6b4-1f3fc",
            "🚴🏻": "1f6b4-1f3fb",
            "🚣🏿": "1f6a3-1f3ff",
            "🚣🏾": "1f6a3-1f3fe",
            "🚣🏽": "1f6a3-1f3fd",
            "🚣🏼": "1f6a3-1f3fc",
            "🚣🏻": "1f6a3-1f3fb",
            "🙏🏿": "1f64f-1f3ff",
            "🙏🏾": "1f64f-1f3fe",
            "🙏🏽": "1f64f-1f3fd",
            "🙏🏼": "1f64f-1f3fc",
            "🙏🏻": "1f64f-1f3fb",
            "🙎🏿": "1f64e-1f3ff",
            "🙎🏾": "1f64e-1f3fe",
            "🙎🏽": "1f64e-1f3fd",
            "🙎🏼": "1f64e-1f3fc",
            "🙎🏻": "1f64e-1f3fb",
            "🙍🏿": "1f64d-1f3ff",
            "🙍🏾": "1f64d-1f3fe",
            "🙍🏽": "1f64d-1f3fd",
            "🙍🏼": "1f64d-1f3fc",
            "🙍🏻": "1f64d-1f3fb",
            "🙌🏿": "1f64c-1f3ff",
            "🙌🏾": "1f64c-1f3fe",
            "🙌🏽": "1f64c-1f3fd",
            "🙌🏼": "1f64c-1f3fc",
            "🙌🏻": "1f64c-1f3fb",
            "🙋🏿": "1f64b-1f3ff",
            "🙋🏾": "1f64b-1f3fe",
            "🙋🏽": "1f64b-1f3fd",
            "🙋🏼": "1f64b-1f3fc",
            "🙋🏻": "1f64b-1f3fb",
            "🙇🏿": "1f647-1f3ff",
            "🙇🏾": "1f647-1f3fe",
            "🙇🏽": "1f647-1f3fd",
            "🙇🏼": "1f647-1f3fc",
            "🙇🏻": "1f647-1f3fb",
            "🙆🏿": "1f646-1f3ff",
            "🙆🏾": "1f646-1f3fe",
            "🙆🏽": "1f646-1f3fd",
            "🙆🏼": "1f646-1f3fc",
            "🙆🏻": "1f646-1f3fb",
            "🙅🏿": "1f645-1f3ff",
            "🙅🏾": "1f645-1f3fe",
            "🙅🏽": "1f645-1f3fd",
            "🙅🏼": "1f645-1f3fc",
            "🙅🏻": "1f645-1f3fb",
            "🖖🏿": "1f596-1f3ff",
            "🖖🏾": "1f596-1f3fe",
            "🖖🏽": "1f596-1f3fd",
            "🖖🏼": "1f596-1f3fc",
            "🖖🏻": "1f596-1f3fb",
            "🖕🏿": "1f595-1f3ff",
            "🖕🏾": "1f595-1f3fe",
            "🖕🏽": "1f595-1f3fd",
            "🖕🏼": "1f595-1f3fc",
            "🖕🏻": "1f595-1f3fb",
            "🖐🏿": "1f590-1f3ff",
            "🖐🏾": "1f590-1f3fe",
            "🖐🏽": "1f590-1f3fd",
            "🖐🏼": "1f590-1f3fc",
            "🖐🏻": "1f590-1f3fb",
            "🕵🏿": "1f575-1f3ff",
            "🕵🏾": "1f575-1f3fe",
            "🕵🏽": "1f575-1f3fd",
            "🕵🏼": "1f575-1f3fc",
            "🕵🏻": "1f575-1f3fb",
            "💪🏿": "1f4aa-1f3ff",
            "💪🏾": "1f4aa-1f3fe",
            "💪🏽": "1f4aa-1f3fd",
            "💪🏼": "1f4aa-1f3fc",
            "💪🏻": "1f4aa-1f3fb",
            "💇🏿": "1f487-1f3ff",
            "💇🏾": "1f487-1f3fe",
            "💇🏽": "1f487-1f3fd",
            "💇🏼": "1f487-1f3fc",
            "💇🏻": "1f487-1f3fb",
            "💆🏿": "1f486-1f3ff",
            "💆🏾": "1f486-1f3fe",
            "💆🏽": "1f486-1f3fd",
            "💆🏼": "1f486-1f3fc",
            "💆🏻": "1f486-1f3fb",
            "💅🏿": "1f485-1f3ff",
            "💅🏾": "1f485-1f3fe",
            "💅🏽": "1f485-1f3fd",
            "💅🏼": "1f485-1f3fc",
            "💅🏻": "1f485-1f3fb",
            "💃🏿": "1f483-1f3ff",
            "💃🏾": "1f483-1f3fe",
            "💃🏽": "1f483-1f3fd",
            "💃🏼": "1f483-1f3fc",
            "💃🏻": "1f483-1f3fb",
            "💂🏿": "1f482-1f3ff",
            "💂🏾": "1f482-1f3fe",
            "💂🏽": "1f482-1f3fd",
            "💂🏼": "1f482-1f3fc",
            "💂🏻": "1f482-1f3fb",
            "💁🏿": "1f481-1f3ff",
            "💁🏾": "1f481-1f3fe",
            "💁🏽": "1f481-1f3fd",
            "💁🏼": "1f481-1f3fc",
            "💁🏻": "1f481-1f3fb",
            "👼🏿": "1f47c-1f3ff",
            "👼🏾": "1f47c-1f3fe",
            "👼🏽": "1f47c-1f3fd",
            "👼🏼": "1f47c-1f3fc",
            "👼🏻": "1f47c-1f3fb",
            "👸🏿": "1f478-1f3ff",
            "👸🏾": "1f478-1f3fe",
            "👸🏽": "1f478-1f3fd",
            "👸🏼": "1f478-1f3fc",
            "👸🏻": "1f478-1f3fb",
            "👷🏿": "1f477-1f3ff",
            "👷🏾": "1f477-1f3fe",
            "👷🏽": "1f477-1f3fd",
            "👷🏼": "1f477-1f3fc",
            "👷🏻": "1f477-1f3fb",
            "👶🏿": "1f476-1f3ff",
            "👶🏾": "1f476-1f3fe",
            "👶🏽": "1f476-1f3fd",
            "👶🏼": "1f476-1f3fc",
            "👶🏻": "1f476-1f3fb",
            "👵🏿": "1f475-1f3ff",
            "👵🏾": "1f475-1f3fe",
            "👵🏽": "1f475-1f3fd",
            "👵🏼": "1f475-1f3fc",
            "👵🏻": "1f475-1f3fb",
            "👴🏿": "1f474-1f3ff",
            "👴🏾": "1f474-1f3fe",
            "👴🏽": "1f474-1f3fd",
            "👴🏼": "1f474-1f3fc",
            "👴🏻": "1f474-1f3fb",
            "👳🏿": "1f473-1f3ff",
            "👳🏾": "1f473-1f3fe",
            "👳🏽": "1f473-1f3fd",
            "👳🏼": "1f473-1f3fc",
            "👳🏻": "1f473-1f3fb",
            "👲🏿": "1f472-1f3ff",
            "👲🏾": "1f472-1f3fe",
            "👲🏽": "1f472-1f3fd",
            "👲🏼": "1f472-1f3fc",
            "👲🏻": "1f472-1f3fb",
            "👱🏿": "1f471-1f3ff",
            "👱🏾": "1f471-1f3fe",
            "👱🏽": "1f471-1f3fd",
            "👱🏼": "1f471-1f3fc",
            "👱🏻": "1f471-1f3fb",
            "👰🏿": "1f470-1f3ff",
            "👰🏾": "1f470-1f3fe",
            "👰🏽": "1f470-1f3fd",
            "👰🏼": "1f470-1f3fc",
            "👰🏻": "1f470-1f3fb",
            "👮🏿": "1f46e-1f3ff",
            "👮🏾": "1f46e-1f3fe",
            "👮🏽": "1f46e-1f3fd",
            "👮🏼": "1f46e-1f3fc",
            "👮🏻": "1f46e-1f3fb",
            "👩🏿": "1f469-1f3ff",
            "👩🏾": "1f469-1f3fe",
            "👩🏽": "1f469-1f3fd",
            "👩🏼": "1f469-1f3fc",
            "👩🏻": "1f469-1f3fb",
            "👨🏿": "1f468-1f3ff",
            "👨🏾": "1f468-1f3fe",
            "👨🏽": "1f468-1f3fd",
            "👨🏼": "1f468-1f3fc",
            "👨🏻": "1f468-1f3fb",
            "👧🏿": "1f467-1f3ff",
            "👧🏾": "1f467-1f3fe",
            "👧🏽": "1f467-1f3fd",
            "👧🏼": "1f467-1f3fc",
            "👧🏻": "1f467-1f3fb",
            "👦🏿": "1f466-1f3ff",
            "👦🏾": "1f466-1f3fe",
            "👦🏽": "1f466-1f3fd",
            "👦🏼": "1f466-1f3fc",
            "👦🏻": "1f466-1f3fb",
            "👐🏿": "1f450-1f3ff",
            "👐🏾": "1f450-1f3fe",
            "👐🏽": "1f450-1f3fd",
            "👐🏼": "1f450-1f3fc",
            "👐🏻": "1f450-1f3fb",
            "👏🏿": "1f44f-1f3ff",
            "👏🏾": "1f44f-1f3fe",
            "👏🏽": "1f44f-1f3fd",
            "👏🏼": "1f44f-1f3fc",
            "👏🏻": "1f44f-1f3fb",
            "👎🏿": "1f44e-1f3ff",
            "👎🏾": "1f44e-1f3fe",
            "👎🏽": "1f44e-1f3fd",
            "👎🏼": "1f44e-1f3fc",
            "👎🏻": "1f44e-1f3fb",
            "👍🏿": "1f44d-1f3ff",
            "👍🏾": "1f44d-1f3fe",
            "👍🏽": "1f44d-1f3fd",
            "👍🏼": "1f44d-1f3fc",
            "👍🏻": "1f44d-1f3fb",
            "👌🏿": "1f44c-1f3ff",
            "👌🏾": "1f44c-1f3fe",
            "👌🏽": "1f44c-1f3fd",
            "👌🏼": "1f44c-1f3fc",
            "👌🏻": "1f44c-1f3fb",
            "👋🏿": "1f44b-1f3ff",
            "👋🏾": "1f44b-1f3fe",
            "👋🏽": "1f44b-1f3fd",
            "👋🏼": "1f44b-1f3fc",
            "👋🏻": "1f44b-1f3fb",
            "👊🏿": "1f44a-1f3ff",
            "👊🏾": "1f44a-1f3fe",
            "👊🏽": "1f44a-1f3fd",
            "👊🏼": "1f44a-1f3fc",
            "👊🏻": "1f44a-1f3fb",
            "👉🏿": "1f449-1f3ff",
            "👉🏾": "1f449-1f3fe",
            "👉🏽": "1f449-1f3fd",
            "👉🏼": "1f449-1f3fc",
            "👉🏻": "1f449-1f3fb",
            "👈🏿": "1f448-1f3ff",
            "👈🏾": "1f448-1f3fe",
            "👈🏽": "1f448-1f3fd",
            "👈🏼": "1f448-1f3fc",
            "👈🏻": "1f448-1f3fb",
            "👇🏿": "1f447-1f3ff",
            "👇🏾": "1f447-1f3fe",
            "👇🏽": "1f447-1f3fd",
            "👇🏼": "1f447-1f3fc",
            "👇🏻": "1f447-1f3fb",
            "👆🏿": "1f446-1f3ff",
            "👆🏾": "1f446-1f3fe",
            "👆🏽": "1f446-1f3fd",
            "👆🏼": "1f446-1f3fc",
            "👆🏻": "1f446-1f3fb",
            "👃🏿": "1f443-1f3ff",
            "👃🏾": "1f443-1f3fe",
            "👃🏽": "1f443-1f3fd",
            "👃🏼": "1f443-1f3fc",
            "👃🏻": "1f443-1f3fb",
            "👂🏿": "1f442-1f3ff",
            "👂🏾": "1f442-1f3fe",
            "👂🏽": "1f442-1f3fd",
            "👂🏼": "1f442-1f3fc",
            "👂🏻": "1f442-1f3fb",
            "🏋🏿": "1f3cb-1f3ff",
            "🏋🏾": "1f3cb-1f3fe",
            "🏋🏽": "1f3cb-1f3fd",
            "🏋🏼": "1f3cb-1f3fc",
            "🏋🏻": "1f3cb-1f3fb",
            "🏊🏿": "1f3ca-1f3ff",
            "🏊🏾": "1f3ca-1f3fe",
            "🏊🏽": "1f3ca-1f3fd",
            "🏊🏼": "1f3ca-1f3fc",
            "🏊🏻": "1f3ca-1f3fb",
            "🏇🏿": "1f3c7-1f3ff",
            "🏇🏾": "1f3c7-1f3fe",
            "🏇🏽": "1f3c7-1f3fd",
            "🏇🏼": "1f3c7-1f3fc",
            "🏇🏻": "1f3c7-1f3fb",
            "🏄🏿": "1f3c4-1f3ff",
            "🏄🏾": "1f3c4-1f3fe",
            "🏄🏽": "1f3c4-1f3fd",
            "🏄🏼": "1f3c4-1f3fc",
            "🏄🏻": "1f3c4-1f3fb",
            "🏃🏿": "1f3c3-1f3ff",
            "🏃🏾": "1f3c3-1f3fe",
            "🏃🏽": "1f3c3-1f3fd",
            "🏃🏼": "1f3c3-1f3fc",
            "🏃🏻": "1f3c3-1f3fb",
            "🎅🏿": "1f385-1f3ff",
            "🎅🏾": "1f385-1f3fe",
            "🎅🏽": "1f385-1f3fd",
            "🎅🏼": "1f385-1f3fc",
            "🎅🏻": "1f385-1f3fb",
            "🇿🇼": "1f1ff-1f1fc",
            "🇿🇲": "1f1ff-1f1f2",
            "🇿🇦": "1f1ff-1f1e6",
            "🇾🇹": "1f1fe-1f1f9",
            "🇾🇪": "1f1fe-1f1ea",
            "🇽🇰": "1f1fd-1f1f0",
            "🇼🇸": "1f1fc-1f1f8",
            "🇼🇫": "1f1fc-1f1eb",
            "🇻🇺": "1f1fb-1f1fa",
            "🇻🇳": "1f1fb-1f1f3",
            "🇻🇮": "1f1fb-1f1ee",
            "🇻🇬": "1f1fb-1f1ec",
            "🇻🇪": "1f1fb-1f1ea",
            "🇻🇨": "1f1fb-1f1e8",
            "🇻🇦": "1f1fb-1f1e6",
            "🇺🇿": "1f1fa-1f1ff",
            "🇺🇾": "1f1fa-1f1fe",
            "🇺🇸": "1f1fa-1f1f8",
            "🇺🇲": "1f1fa-1f1f2",
            "🇺🇬": "1f1fa-1f1ec",
            "🇺🇦": "1f1fa-1f1e6",
            "🇹🇿": "1f1f9-1f1ff",
            "🇹🇼": "1f1f9-1f1fc",
            "🇹🇻": "1f1f9-1f1fb",
            "🇹🇹": "1f1f9-1f1f9",
            "🇹🇷": "1f1f9-1f1f7",
            "🇹🇴": "1f1f9-1f1f4",
            "🇹🇳": "1f1f9-1f1f3",
            "🇹🇲": "1f1f9-1f1f2",
            "🇹🇱": "1f1f9-1f1f1",
            "🇹🇰": "1f1f9-1f1f0",
            "🇹🇯": "1f1f9-1f1ef",
            "🇹🇭": "1f1f9-1f1ed",
            "🇹🇬": "1f1f9-1f1ec",
            "🇹🇫": "1f1f9-1f1eb",
            "🇹🇩": "1f1f9-1f1e9",
            "🇹🇨": "1f1f9-1f1e8",
            "🇹🇦": "1f1f9-1f1e6",
            "🇸🇿": "1f1f8-1f1ff",
            "🇸🇾": "1f1f8-1f1fe",
            "🇸🇽": "1f1f8-1f1fd",
            "🇸🇻": "1f1f8-1f1fb",
            "🇸🇹": "1f1f8-1f1f9",
            "🇸🇸": "1f1f8-1f1f8",
            "🇸🇷": "1f1f8-1f1f7",
            "🇸🇴": "1f1f8-1f1f4",
            "🇸🇳": "1f1f8-1f1f3",
            "🇸🇲": "1f1f8-1f1f2",
            "🇸🇱": "1f1f8-1f1f1",
            "🇸🇰": "1f1f8-1f1f0",
            "🇸🇯": "1f1f8-1f1ef",
            "🇸🇮": "1f1f8-1f1ee",
            "🇸🇭": "1f1f8-1f1ed",
            "🇸🇬": "1f1f8-1f1ec",
            "🇸🇪": "1f1f8-1f1ea",
            "🇸🇩": "1f1f8-1f1e9",
            "🇸🇨": "1f1f8-1f1e8",
            "🇸🇧": "1f1f8-1f1e7",
            "🇸🇦": "1f1f8-1f1e6",
            "🇷🇼": "1f1f7-1f1fc",
            "🇷🇺": "1f1f7-1f1fa",
            "🇷🇸": "1f1f7-1f1f8",
            "🇷🇴": "1f1f7-1f1f4",
            "🇷🇪": "1f1f7-1f1ea",
            "🇶🇦": "1f1f6-1f1e6",
            "🇵🇾": "1f1f5-1f1fe",
            "🇵🇼": "1f1f5-1f1fc",
            "🇵🇹": "1f1f5-1f1f9",
            "🇵🇸": "1f1f5-1f1f8",
            "🇵🇷": "1f1f5-1f1f7",
            "🇵🇳": "1f1f5-1f1f3",
            "🇵🇲": "1f1f5-1f1f2",
            "🇵🇱": "1f1f5-1f1f1",
            "🇵🇰": "1f1f5-1f1f0",
            "🇵🇭": "1f1f5-1f1ed",
            "🇵🇬": "1f1f5-1f1ec",
            "🇵🇫": "1f1f5-1f1eb",
            "🇵🇪": "1f1f5-1f1ea",
            "🇵🇦": "1f1f5-1f1e6",
            "🇴🇲": "1f1f4-1f1f2",
            "🇳🇿": "1f1f3-1f1ff",
            "🇳🇺": "1f1f3-1f1fa",
            "🇳🇷": "1f1f3-1f1f7",
            "🇳🇵": "1f1f3-1f1f5",
            "🇳🇴": "1f1f3-1f1f4",
            "🇳🇱": "1f1f3-1f1f1",
            "🇳🇮": "1f1f3-1f1ee",
            "🇳🇬": "1f1f3-1f1ec",
            "🇳🇫": "1f1f3-1f1eb",
            "🇳🇪": "1f1f3-1f1ea",
            "🇳🇨": "1f1f3-1f1e8",
            "🇳🇦": "1f1f3-1f1e6",
            "🇲🇿": "1f1f2-1f1ff",
            "🇲🇾": "1f1f2-1f1fe",
            "🇲🇽": "1f1f2-1f1fd",
            "🇲🇼": "1f1f2-1f1fc",
            "🇲🇻": "1f1f2-1f1fb",
            "🇲🇺": "1f1f2-1f1fa",
            "🇲🇹": "1f1f2-1f1f9",
            "🇲🇸": "1f1f2-1f1f8",
            "🇲🇷": "1f1f2-1f1f7",
            "🇲🇶": "1f1f2-1f1f6",
            "🇲🇵": "1f1f2-1f1f5",
            "🇲🇴": "1f1f2-1f1f4",
            "🇲🇳": "1f1f2-1f1f3",
            "🇲🇲": "1f1f2-1f1f2",
            "🇲🇱": "1f1f2-1f1f1",
            "🇲🇰": "1f1f2-1f1f0",
            "🇲🇭": "1f1f2-1f1ed",
            "🇲🇬": "1f1f2-1f1ec",
            "🇲🇫": "1f1f2-1f1eb",
            "🇲🇪": "1f1f2-1f1ea",
            "🇲🇩": "1f1f2-1f1e9",
            "🇲🇨": "1f1f2-1f1e8",
            "🇲🇦": "1f1f2-1f1e6",
            "🇱🇾": "1f1f1-1f1fe",
            "🇱🇻": "1f1f1-1f1fb",
            "🇱🇺": "1f1f1-1f1fa",
            "🇱🇹": "1f1f1-1f1f9",
            "🇱🇸": "1f1f1-1f1f8",
            "🇱🇷": "1f1f1-1f1f7",
            "🇱🇰": "1f1f1-1f1f0",
            "🇱🇮": "1f1f1-1f1ee",
            "🇱🇨": "1f1f1-1f1e8",
            "🇱🇧": "1f1f1-1f1e7",
            "🇱🇦": "1f1f1-1f1e6",
            "🇰🇿": "1f1f0-1f1ff",
            "🇰🇾": "1f1f0-1f1fe",
            "🇰🇼": "1f1f0-1f1fc",
            "🇰🇷": "1f1f0-1f1f7",
            "🇰🇵": "1f1f0-1f1f5",
            "🇰🇳": "1f1f0-1f1f3",
            "🇰🇲": "1f1f0-1f1f2",
            "🇰🇮": "1f1f0-1f1ee",
            "🇰🇭": "1f1f0-1f1ed",
            "🇰🇬": "1f1f0-1f1ec",
            "🇰🇪": "1f1f0-1f1ea",
            "🇯🇵": "1f1ef-1f1f5",
            "🇯🇴": "1f1ef-1f1f4",
            "🇯🇲": "1f1ef-1f1f2",
            "🇯🇪": "1f1ef-1f1ea",
            "🇮🇹": "1f1ee-1f1f9",
            "🇮🇸": "1f1ee-1f1f8",
            "🇮🇷": "1f1ee-1f1f7",
            "🇮🇶": "1f1ee-1f1f6",
            "🇮🇴": "1f1ee-1f1f4",
            "🇮🇳": "1f1ee-1f1f3",
            "🇮🇲": "1f1ee-1f1f2",
            "🇮🇱": "1f1ee-1f1f1",
            "🇮🇪": "1f1ee-1f1ea",
            "🇮🇩": "1f1ee-1f1e9",
            "🇮🇨": "1f1ee-1f1e8",
            "🇭🇺": "1f1ed-1f1fa",
            "🇭🇹": "1f1ed-1f1f9",
            "🇭🇷": "1f1ed-1f1f7",
            "🇭🇳": "1f1ed-1f1f3",
            "🇭🇲": "1f1ed-1f1f2",
            "🇭🇰": "1f1ed-1f1f0",
            "🇬🇾": "1f1ec-1f1fe",
            "🇬🇼": "1f1ec-1f1fc",
            "🇬🇺": "1f1ec-1f1fa",
            "🇬🇹": "1f1ec-1f1f9",
            "🇬🇸": "1f1ec-1f1f8",
            "🇬🇷": "1f1ec-1f1f7",
            "🇬🇶": "1f1ec-1f1f6",
            "🇬🇵": "1f1ec-1f1f5",
            "🇬🇳": "1f1ec-1f1f3",
            "🇬🇲": "1f1ec-1f1f2",
            "🇬🇱": "1f1ec-1f1f1",
            "🇬🇮": "1f1ec-1f1ee",
            "🇬🇭": "1f1ec-1f1ed",
            "🇬🇬": "1f1ec-1f1ec",
            "🇬🇫": "1f1ec-1f1eb",
            "🇬🇪": "1f1ec-1f1ea",
            "🇬🇩": "1f1ec-1f1e9",
            "🇬🇧": "1f1ec-1f1e7",
            "🇬🇦": "1f1ec-1f1e6",
            "🇫🇷": "1f1eb-1f1f7",
            "🇫🇴": "1f1eb-1f1f4",
            "🇫🇲": "1f1eb-1f1f2",
            "🇫🇰": "1f1eb-1f1f0",
            "🇫🇯": "1f1eb-1f1ef",
            "🇫🇮": "1f1eb-1f1ee",
            "🇪🇺": "1f1ea-1f1fa",
            "🇪🇹": "1f1ea-1f1f9",
            "🇪🇸": "1f1ea-1f1f8",
            "🇪🇷": "1f1ea-1f1f7",
            "🇪🇭": "1f1ea-1f1ed",
            "🇪🇬": "1f1ea-1f1ec",
            "🇪🇪": "1f1ea-1f1ea",
            "🇪🇨": "1f1ea-1f1e8",
            "🇪🇦": "1f1ea-1f1e6",
            "🇩🇿": "1f1e9-1f1ff",
            "🇩🇴": "1f1e9-1f1f4",
            "🇩🇲": "1f1e9-1f1f2",
            "🇩🇰": "1f1e9-1f1f0",
            "🇩🇯": "1f1e9-1f1ef",
            "🇩🇬": "1f1e9-1f1ec",
            "🇩🇪": "1f1e9-1f1ea",
            "🇨🇿": "1f1e8-1f1ff",
            "🇨🇾": "1f1e8-1f1fe",
            "🇨🇽": "1f1e8-1f1fd",
            "🇨🇼": "1f1e8-1f1fc",
            "🇨🇻": "1f1e8-1f1fb",
            "🇨🇺": "1f1e8-1f1fa",
            "🇨🇷": "1f1e8-1f1f7",
            "🇨🇵": "1f1e8-1f1f5",
            "🇨🇴": "1f1e8-1f1f4",
            "🇨🇳": "1f1e8-1f1f3",
            "🇨🇲": "1f1e8-1f1f2",
            "🇨🇱": "1f1e8-1f1f1",
            "🇨🇰": "1f1e8-1f1f0",
            "🇨🇮": "1f1e8-1f1ee",
            "🇨🇭": "1f1e8-1f1ed",
            "🇨🇬": "1f1e8-1f1ec",
            "🇨🇫": "1f1e8-1f1eb",
            "🇨🇩": "1f1e8-1f1e9",
            "🇨🇨": "1f1e8-1f1e8",
            "🇨🇦": "1f1e8-1f1e6",
            "🇧🇿": "1f1e7-1f1ff",
            "🇧🇾": "1f1e7-1f1fe",
            "🇧🇼": "1f1e7-1f1fc",
            "🇧🇻": "1f1e7-1f1fb",
            "🇧🇹": "1f1e7-1f1f9",
            "🇧🇸": "1f1e7-1f1f8",
            "🇧🇷": "1f1e7-1f1f7",
            "🇧🇶": "1f1e7-1f1f6",
            "🇧🇴": "1f1e7-1f1f4",
            "🇧🇳": "1f1e7-1f1f3",
            "🇧🇲": "1f1e7-1f1f2",
            "🇧🇱": "1f1e7-1f1f1",
            "🇧🇯": "1f1e7-1f1ef",
            "🇧🇮": "1f1e7-1f1ee",
            "🇧🇭": "1f1e7-1f1ed",
            "🇧🇬": "1f1e7-1f1ec",
            "🇧🇫": "1f1e7-1f1eb",
            "🇧🇪": "1f1e7-1f1ea",
            "🇧🇩": "1f1e7-1f1e9",
            "🇧🇧": "1f1e7-1f1e7",
            "🇧🇦": "1f1e7-1f1e6",
            "🇦🇿": "1f1e6-1f1ff",
            "🇦🇽": "1f1e6-1f1fd",
            "🇦🇼": "1f1e6-1f1fc",
            "🇦🇺": "1f1e6-1f1fa",
            "🇦🇹": "1f1e6-1f1f9",
            "🇦🇸": "1f1e6-1f1f8",
            "🇦🇷": "1f1e6-1f1f7",
            "🇦🇶": "1f1e6-1f1f6",
            "🇦🇴": "1f1e6-1f1f4",
            "🇦🇲": "1f1e6-1f1f2",
            "🇦🇱": "1f1e6-1f1f1",
            "🇦🇮": "1f1e6-1f1ee",
            "🇦🇬": "1f1e6-1f1ec",
            "🇦🇫": "1f1e6-1f1eb",
            "🇦🇪": "1f1e6-1f1ea",
            "🇦🇩": "1f1e6-1f1e9",
            "🇦🇨": "1f1e6-1f1e8",
            "🀄️": "1f004",
            "🅿️": "1f17f",
            "🈂️": "1f202",
            "🈚️": "1f21a",
            "🈯️": "1f22f",
            "🈷️": "1f237",
            "🎞️": "1f39e",
            "🎟️": "1f39f",
            "🏋️": "1f3cb",
            "🏌️": "1f3cc",
            "🏍️": "1f3cd",
            "🏎️": "1f3ce",
            "🎖️": "1f396",
            "🎗️": "1f397",
            "🌶️": "1f336",
            "🌧️": "1f327",
            "🌨️": "1f328",
            "🌩️": "1f329",
            "🌪️": "1f32a",
            "🌫️": "1f32b",
            "🌬️": "1f32c",
            "🐿️": "1f43f",
            "🕷️": "1f577",
            "🕸️": "1f578",
            "🌡️": "1f321",
            "🎙️": "1f399",
            "🎚️": "1f39a",
            "🎛️": "1f39b",
            "🏳️": "1f3f3",
            "🏵️": "1f3f5",
            "🏷️": "1f3f7",
            "📽️": "1f4fd",
            "🕉️": "1f549",
            "🕊️": "1f54a",
            "🕯️": "1f56f",
            "🕰️": "1f570",
            "🕳️": "1f573",
            "🕶️": "1f576",
            "🕹️": "1f579",
            "🖇️": "1f587",
            "🖊️": "1f58a",
            "🖋️": "1f58b",
            "🖌️": "1f58c",
            "🖍️": "1f58d",
            "🖥️": "1f5a5",
            "🖨️": "1f5a8",
            "🖲️": "1f5b2",
            "🖼️": "1f5bc",
            "🗂️": "1f5c2",
            "🗃️": "1f5c3",
            "🗄️": "1f5c4",
            "🗑️": "1f5d1",
            "🗒️": "1f5d2",
            "🗓️": "1f5d3",
            "🗜️": "1f5dc",
            "🗝️": "1f5dd",
            "🗞️": "1f5de",
            "🗡️": "1f5e1",
            "🗣️": "1f5e3",
            "🗯️": "1f5ef",
            "🗳️": "1f5f3",
            "🗺️": "1f5fa",
            "🛠️": "1f6e0",
            "🛡️": "1f6e1",
            "🛢️": "1f6e2",
            "🛰️": "1f6f0",
            "🍽️": "1f37d",
            "👁️": "1f441",
            "🕴️": "1f574",
            "🕵️": "1f575",
            "🖐️": "1f590",
            "🏔️": "1f3d4",
            "🏕️": "1f3d5",
            "🏖️": "1f3d6",
            "🏗️": "1f3d7",
            "🏘️": "1f3d8",
            "🏙️": "1f3d9",
            "🏚️": "1f3da",
            "🏛️": "1f3db",
            "🏜️": "1f3dc",
            "🏝️": "1f3dd",
            "🏞️": "1f3de",
            "🏟️": "1f3df",
            "🛋️": "1f6cb",
            "🛍️": "1f6cd",
            "🛎️": "1f6ce",
            "🛏️": "1f6cf",
            "🛣️": "1f6e3",
            "🛤️": "1f6e4",
            "🛥️": "1f6e5",
            "🛩️": "1f6e9",
            "🛳️": "1f6f3",
            "🌤️": "1f324",
            "🌥️": "1f325",
            "🌦️": "1f326",
            "🖱️": "1f5b1",
            "☝🏻": "261d-1f3fb",
            "☝🏼": "261d-1f3fc",
            "☝🏽": "261d-1f3fd",
            "☝🏾": "261d-1f3fe",
            "☝🏿": "261d-1f3ff",
            "✌🏻": "270c-1f3fb",
            "✌🏼": "270c-1f3fc",
            "✌🏽": "270c-1f3fd",
            "✌🏾": "270c-1f3fe",
            "✌🏿": "270c-1f3ff",
            "✊🏻": "270a-1f3fb",
            "✊🏼": "270a-1f3fc",
            "✊🏽": "270a-1f3fd",
            "✊🏾": "270a-1f3fe",
            "✊🏿": "270a-1f3ff",
            "✋🏻": "270b-1f3fb",
            "✋🏼": "270b-1f3fc",
            "✋🏽": "270b-1f3fd",
            "✋🏾": "270b-1f3fe",
            "✋🏿": "270b-1f3ff",
            "✍🏻": "270d-1f3fb",
            "✍🏼": "270d-1f3fc",
            "✍🏽": "270d-1f3fd",
            "✍🏾": "270d-1f3fe",
            "✍🏿": "270d-1f3ff",
            "⛹🏻": "26f9-1f3fb",
            "⛹🏼": "26f9-1f3fc",
            "⛹🏽": "26f9-1f3fd",
            "⛹🏾": "26f9-1f3fe",
            "⛹🏿": "26f9-1f3ff",
            "©️": "00a9",
            "®️": "00ae",
            "‼️": "203c",
            "⁉️": "2049",
            "™️": "2122",
            ℹ️: "2139",
            "↔️": "2194",
            "↕️": "2195",
            "↖️": "2196",
            "↗️": "2197",
            "↘️": "2198",
            "↙️": "2199",
            "↩️": "21a9",
            "↪️": "21aa",
            "⌚️": "231a",
            "⌛️": "231b",
            "Ⓜ️": "24c2",
            "▪️": "25aa",
            "▫️": "25ab",
            "▶️": "25b6",
            "◀️": "25c0",
            "◻️": "25fb",
            "◼️": "25fc",
            "◽️": "25fd",
            "◾️": "25fe",
            "☀️": "2600",
            "☁️": "2601",
            "☎️": "260e",
            "☑️": "2611",
            "☔️": "2614",
            "☕️": "2615",
            "☝️": "261d",
            "☺️": "263a",
            "♈️": "2648",
            "♉️": "2649",
            "♊️": "264a",
            "♋️": "264b",
            "♌️": "264c",
            "♍️": "264d",
            "♎️": "264e",
            "♏️": "264f",
            "♐️": "2650",
            "♑️": "2651",
            "♒️": "2652",
            "♓️": "2653",
            "♠️": "2660",
            "♣️": "2663",
            "♥️": "2665",
            "♦️": "2666",
            "♨️": "2668",
            "♻️": "267b",
            "♿️": "267f",
            "⚓️": "2693",
            "⚠️": "26a0",
            "⚡️": "26a1",
            "⚪️": "26aa",
            "⚫️": "26ab",
            "⚽️": "26bd",
            "⚾️": "26be",
            "⛄️": "26c4",
            "⛅️": "26c5",
            "⛔️": "26d4",
            "⛪️": "26ea",
            "⛲️": "26f2",
            "⛳️": "26f3",
            "⛵️": "26f5",
            "⛺️": "26fa",
            "⛽️": "26fd",
            "✂️": "2702",
            "✈️": "2708",
            "✉️": "2709",
            "✌️": "270c",
            "✏️": "270f",
            "✒️": "2712",
            "✔️": "2714",
            "✖️": "2716",
            "✳️": "2733",
            "✴️": "2734",
            "❄️": "2744",
            "❇️": "2747",
            "❗️": "2757",
            "❤️": "2764",
            "➡️": "27a1",
            "⤴️": "2934",
            "⤵️": "2935",
            "⬅️": "2b05",
            "⬆️": "2b06",
            "⬇️": "2b07",
            "⬛️": "2b1b",
            "⬜️": "2b1c",
            "⭐️": "2b50",
            "⭕️": "2b55",
            "〰️": "3030",
            "〽️": "303d",
            "㊗️": "3297",
            "㊙️": "3299",
            "✝️": "271d",
            "⌨️": "2328",
            "✍️": "270d",
            "⏭️": "23ed",
            "⏮️": "23ee",
            "⏯️": "23ef",
            "⏱️": "23f1",
            "⏲️": "23f2",
            "⏸️": "23f8",
            "⏹️": "23f9",
            "⏺️": "23fa",
            "☂️": "2602",
            "☃️": "2603",
            "☄️": "2604",
            "☘️": "2618",
            "☠️": "2620",
            "☢️": "2622",
            "☣️": "2623",
            "☦️": "2626",
            "☪️": "262a",
            "☮️": "262e",
            "☯️": "262f",
            "☸️": "2638",
            "☹️": "2639",
            "⚒️": "2692",
            "⚔️": "2694",
            "⚖️": "2696",
            "⚗️": "2697",
            "⚙️": "2699",
            "⚛️": "269b",
            "⚜️": "269c",
            "⚰️": "26b0",
            "⚱️": "26b1",
            "⛈️": "26c8",
            "⛏️": "26cf",
            "⛑️": "26d1",
            "⛓️": "26d3",
            "⛩️": "26e9",
            "⛰️": "26f0",
            "⛱️": "26f1",
            "⛴️": "26f4",
            "⛷️": "26f7",
            "⛸️": "26f8",
            "⛹️": "26f9",
            "✡️": "2721",
            "❣️": "2763",
            "🃏": "1f0cf",
            "🅰": "1f170",
            "🅱": "1f171",
            "🅾": "1f17e",
            "🆎": "1f18e",
            "🆑": "1f191",
            "🆒": "1f192",
            "🆓": "1f193",
            "🆔": "1f194",
            "🆕": "1f195",
            "🆖": "1f196",
            "🆗": "1f197",
            "🆘": "1f198",
            "🆙": "1f199",
            "🆚": "1f19a",
            "🈁": "1f201",
            "🈲": "1f232",
            "🈳": "1f233",
            "🈴": "1f234",
            "🈵": "1f235",
            "🈶": "1f236",
            "🈸": "1f238",
            "🈹": "1f239",
            "🈺": "1f23a",
            "🉐": "1f250",
            "🉑": "1f251",
            "🌀": "1f300",
            "🌁": "1f301",
            "🌂": "1f302",
            "🌃": "1f303",
            "🌄": "1f304",
            "🌅": "1f305",
            "🌆": "1f306",
            "🌇": "1f307",
            "🌈": "1f308",
            "🌉": "1f309",
            "🌊": "1f30a",
            "🌋": "1f30b",
            "🌌": "1f30c",
            "🌏": "1f30f",
            "🌑": "1f311",
            "🌓": "1f313",
            "🌔": "1f314",
            "🌕": "1f315",
            "🌙": "1f319",
            "🌛": "1f31b",
            "🌟": "1f31f",
            "🌠": "1f320",
            "🌰": "1f330",
            "🌱": "1f331",
            "🌴": "1f334",
            "🌵": "1f335",
            "🌷": "1f337",
            "🌸": "1f338",
            "🌹": "1f339",
            "🌺": "1f33a",
            "🌻": "1f33b",
            "🌼": "1f33c",
            "🌽": "1f33d",
            "🌾": "1f33e",
            "🌿": "1f33f",
            "🍀": "1f340",
            "🍁": "1f341",
            "🍂": "1f342",
            "🍃": "1f343",
            "🍄": "1f344",
            "🍅": "1f345",
            "🍆": "1f346",
            "🍇": "1f347",
            "🍈": "1f348",
            "🍉": "1f349",
            "🍊": "1f34a",
            "🍌": "1f34c",
            "🍍": "1f34d",
            "🍎": "1f34e",
            "🍏": "1f34f",
            "🍑": "1f351",
            "🍒": "1f352",
            "🍓": "1f353",
            "🍔": "1f354",
            "🍕": "1f355",
            "🍖": "1f356",
            "🍗": "1f357",
            "🍘": "1f358",
            "🍙": "1f359",
            "🍚": "1f35a",
            "🍛": "1f35b",
            "🍜": "1f35c",
            "🍝": "1f35d",
            "🍞": "1f35e",
            "🍟": "1f35f",
            "🍠": "1f360",
            "🍡": "1f361",
            "🍢": "1f362",
            "🍣": "1f363",
            "🍤": "1f364",
            "🍥": "1f365",
            "🍦": "1f366",
            "🍧": "1f367",
            "🍨": "1f368",
            "🍩": "1f369",
            "🍪": "1f36a",
            "🍫": "1f36b",
            "🍬": "1f36c",
            "🍭": "1f36d",
            "🍮": "1f36e",
            "🍯": "1f36f",
            "🍰": "1f370",
            "🍱": "1f371",
            "🍲": "1f372",
            "🍳": "1f373",
            "🍴": "1f374",
            "🍵": "1f375",
            "🍶": "1f376",
            "🍷": "1f377",
            "🍸": "1f378",
            "🍹": "1f379",
            "🍺": "1f37a",
            "🍻": "1f37b",
            "🎀": "1f380",
            "🎁": "1f381",
            "🎂": "1f382",
            "🎃": "1f383",
            "🎄": "1f384",
            "🎅": "1f385",
            "🎆": "1f386",
            "🎇": "1f387",
            "🎈": "1f388",
            "🎉": "1f389",
            "🎊": "1f38a",
            "🎋": "1f38b",
            "🎌": "1f38c",
            "🎍": "1f38d",
            "🎎": "1f38e",
            "🎏": "1f38f",
            "🎐": "1f390",
            "🎑": "1f391",
            "🎒": "1f392",
            "🎓": "1f393",
            "🎠": "1f3a0",
            "🎡": "1f3a1",
            "🎢": "1f3a2",
            "🎣": "1f3a3",
            "🎤": "1f3a4",
            "🎥": "1f3a5",
            "🎦": "1f3a6",
            "🎧": "1f3a7",
            "🎨": "1f3a8",
            "🎩": "1f3a9",
            "🎪": "1f3aa",
            "🎫": "1f3ab",
            "🎬": "1f3ac",
            "🎭": "1f3ad",
            "🎮": "1f3ae",
            "🎯": "1f3af",
            "🎰": "1f3b0",
            "🎱": "1f3b1",
            "🎲": "1f3b2",
            "🎳": "1f3b3",
            "🎴": "1f3b4",
            "🎵": "1f3b5",
            "🎶": "1f3b6",
            "🎷": "1f3b7",
            "🎸": "1f3b8",
            "🎹": "1f3b9",
            "🎺": "1f3ba",
            "🎻": "1f3bb",
            "🎼": "1f3bc",
            "🎽": "1f3bd",
            "🎾": "1f3be",
            "🎿": "1f3bf",
            "🏀": "1f3c0",
            "🏁": "1f3c1",
            "🏂": "1f3c2",
            "🏃": "1f3c3",
            "🏄": "1f3c4",
            "🏆": "1f3c6",
            "🏈": "1f3c8",
            "🏊": "1f3ca",
            "🏠": "1f3e0",
            "🏡": "1f3e1",
            "🏢": "1f3e2",
            "🏣": "1f3e3",
            "🏥": "1f3e5",
            "🏦": "1f3e6",
            "🏧": "1f3e7",
            "🏨": "1f3e8",
            "🏩": "1f3e9",
            "🏪": "1f3ea",
            "🏫": "1f3eb",
            "🏬": "1f3ec",
            "🏭": "1f3ed",
            "🏮": "1f3ee",
            "🏯": "1f3ef",
            "🏰": "1f3f0",
            "🐌": "1f40c",
            "🐍": "1f40d",
            "🐎": "1f40e",
            "🐑": "1f411",
            "🐒": "1f412",
            "🐔": "1f414",
            "🐗": "1f417",
            "🐘": "1f418",
            "🐙": "1f419",
            "🐚": "1f41a",
            "🐛": "1f41b",
            "🐜": "1f41c",
            "🐝": "1f41d",
            "🐞": "1f41e",
            "🐟": "1f41f",
            "🐠": "1f420",
            "🐡": "1f421",
            "🐢": "1f422",
            "🐣": "1f423",
            "🐤": "1f424",
            "🐥": "1f425",
            "🐦": "1f426",
            "🐧": "1f427",
            "🐨": "1f428",
            "🐩": "1f429",
            "🐫": "1f42b",
            "🐬": "1f42c",
            "🐭": "1f42d",
            "🐮": "1f42e",
            "🐯": "1f42f",
            "🐰": "1f430",
            "🐱": "1f431",
            "🐲": "1f432",
            "🐳": "1f433",
            "🐴": "1f434",
            "🐵": "1f435",
            "🐶": "1f436",
            "🐷": "1f437",
            "🐸": "1f438",
            "🐹": "1f439",
            "🐺": "1f43a",
            "🐻": "1f43b",
            "🐼": "1f43c",
            "🐽": "1f43d",
            "🐾": "1f43e",
            "👀": "1f440",
            "👂": "1f442",
            "👃": "1f443",
            "👄": "1f444",
            "👅": "1f445",
            "👆": "1f446",
            "👇": "1f447",
            "👈": "1f448",
            "👉": "1f449",
            "👊": "1f44a",
            "👋": "1f44b",
            "👌": "1f44c",
            "👍": "1f44d",
            "👎": "1f44e",
            "👏": "1f44f",
            "👐": "1f450",
            "👑": "1f451",
            "👒": "1f452",
            "👓": "1f453",
            "👔": "1f454",
            "👕": "1f455",
            "👖": "1f456",
            "👗": "1f457",
            "👘": "1f458",
            "👙": "1f459",
            "👚": "1f45a",
            "👛": "1f45b",
            "👜": "1f45c",
            "👝": "1f45d",
            "👞": "1f45e",
            "👟": "1f45f",
            "👠": "1f460",
            "👡": "1f461",
            "👢": "1f462",
            "👣": "1f463",
            "👤": "1f464",
            "👦": "1f466",
            "👧": "1f467",
            "👨": "1f468",
            "👩": "1f469",
            "👪": "1f46a",
            "👫": "1f46b",
            "👮": "1f46e",
            "👯": "1f46f",
            "👰": "1f470",
            "👱": "1f471",
            "👲": "1f472",
            "👳": "1f473",
            "👴": "1f474",
            "👵": "1f475",
            "👶": "1f476",
            "👷": "1f477",
            "👸": "1f478",
            "👹": "1f479",
            "👺": "1f47a",
            "👻": "1f47b",
            "👼": "1f47c",
            "👽": "1f47d",
            "👾": "1f47e",
            "👿": "1f47f",
            "💀": "1f480",
            "📇": "1f4c7",
            "💁": "1f481",
            "💂": "1f482",
            "💃": "1f483",
            "💄": "1f484",
            "💅": "1f485",
            "📒": "1f4d2",
            "💆": "1f486",
            "📓": "1f4d3",
            "💇": "1f487",
            "📔": "1f4d4",
            "💈": "1f488",
            "📕": "1f4d5",
            "💉": "1f489",
            "📖": "1f4d6",
            "💊": "1f48a",
            "📗": "1f4d7",
            "💋": "1f48b",
            "📘": "1f4d8",
            "💌": "1f48c",
            "📙": "1f4d9",
            "💍": "1f48d",
            "📚": "1f4da",
            "💎": "1f48e",
            "📛": "1f4db",
            "💏": "1f48f",
            "📜": "1f4dc",
            "💐": "1f490",
            "📝": "1f4dd",
            "💑": "1f491",
            "📞": "1f4de",
            "💒": "1f492",
            "📟": "1f4df",
            "📠": "1f4e0",
            "💓": "1f493",
            "📡": "1f4e1",
            "📢": "1f4e2",
            "💔": "1f494",
            "📣": "1f4e3",
            "📤": "1f4e4",
            "💕": "1f495",
            "📥": "1f4e5",
            "📦": "1f4e6",
            "💖": "1f496",
            "📧": "1f4e7",
            "📨": "1f4e8",
            "💗": "1f497",
            "📩": "1f4e9",
            "📪": "1f4ea",
            "💘": "1f498",
            "📫": "1f4eb",
            "📮": "1f4ee",
            "💙": "1f499",
            "📰": "1f4f0",
            "📱": "1f4f1",
            "💚": "1f49a",
            "📲": "1f4f2",
            "📳": "1f4f3",
            "💛": "1f49b",
            "📴": "1f4f4",
            "📶": "1f4f6",
            "💜": "1f49c",
            "📷": "1f4f7",
            "📹": "1f4f9",
            "💝": "1f49d",
            "📺": "1f4fa",
            "📻": "1f4fb",
            "💞": "1f49e",
            "📼": "1f4fc",
            "🔃": "1f503",
            "💟": "1f49f",
            "🔊": "1f50a",
            "🔋": "1f50b",
            "💠": "1f4a0",
            "🔌": "1f50c",
            "🔍": "1f50d",
            "💡": "1f4a1",
            "🔎": "1f50e",
            "🔏": "1f50f",
            "💢": "1f4a2",
            "🔐": "1f510",
            "🔑": "1f511",
            "💣": "1f4a3",
            "🔒": "1f512",
            "🔓": "1f513",
            "💤": "1f4a4",
            "🔔": "1f514",
            "🔖": "1f516",
            "💥": "1f4a5",
            "🔗": "1f517",
            "🔘": "1f518",
            "💦": "1f4a6",
            "🔙": "1f519",
            "🔚": "1f51a",
            "💧": "1f4a7",
            "🔛": "1f51b",
            "🔜": "1f51c",
            "💨": "1f4a8",
            "🔝": "1f51d",
            "🔞": "1f51e",
            "💩": "1f4a9",
            "🔟": "1f51f",
            "💪": "1f4aa",
            "🔠": "1f520",
            "🔡": "1f521",
            "💫": "1f4ab",
            "🔢": "1f522",
            "🔣": "1f523",
            "💬": "1f4ac",
            "🔤": "1f524",
            "🔥": "1f525",
            "💮": "1f4ae",
            "🔦": "1f526",
            "🔧": "1f527",
            "💯": "1f4af",
            "🔨": "1f528",
            "🔩": "1f529",
            "💰": "1f4b0",
            "🔪": "1f52a",
            "🔫": "1f52b",
            "💱": "1f4b1",
            "🔮": "1f52e",
            "💲": "1f4b2",
            "🔯": "1f52f",
            "💳": "1f4b3",
            "🔰": "1f530",
            "🔱": "1f531",
            "💴": "1f4b4",
            "🔲": "1f532",
            "🔳": "1f533",
            "💵": "1f4b5",
            "🔴": "1f534",
            "🔵": "1f535",
            "💸": "1f4b8",
            "🔶": "1f536",
            "🔷": "1f537",
            "💹": "1f4b9",
            "🔸": "1f538",
            "🔹": "1f539",
            "💺": "1f4ba",
            "🔺": "1f53a",
            "🔻": "1f53b",
            "💻": "1f4bb",
            "🔼": "1f53c",
            "💼": "1f4bc",
            "🔽": "1f53d",
            "🕐": "1f550",
            "💽": "1f4bd",
            "🕑": "1f551",
            "💾": "1f4be",
            "🕒": "1f552",
            "💿": "1f4bf",
            "🕓": "1f553",
            "📀": "1f4c0",
            "🕔": "1f554",
            "🕕": "1f555",
            "📁": "1f4c1",
            "🕖": "1f556",
            "🕗": "1f557",
            "📂": "1f4c2",
            "🕘": "1f558",
            "🕙": "1f559",
            "📃": "1f4c3",
            "🕚": "1f55a",
            "🕛": "1f55b",
            "📄": "1f4c4",
            "🗻": "1f5fb",
            "🗼": "1f5fc",
            "📅": "1f4c5",
            "🗽": "1f5fd",
            "🗾": "1f5fe",
            "📆": "1f4c6",
            "🗿": "1f5ff",
            "😁": "1f601",
            "😂": "1f602",
            "😃": "1f603",
            "📈": "1f4c8",
            "😄": "1f604",
            "😅": "1f605",
            "📉": "1f4c9",
            "😆": "1f606",
            "😉": "1f609",
            "📊": "1f4ca",
            "😊": "1f60a",
            "😋": "1f60b",
            "📋": "1f4cb",
            "😌": "1f60c",
            "😍": "1f60d",
            "📌": "1f4cc",
            "😏": "1f60f",
            "😒": "1f612",
            "📍": "1f4cd",
            "😓": "1f613",
            "😔": "1f614",
            "📎": "1f4ce",
            "😖": "1f616",
            "😘": "1f618",
            "📏": "1f4cf",
            "😚": "1f61a",
            "😜": "1f61c",
            "📐": "1f4d0",
            "😝": "1f61d",
            "😞": "1f61e",
            "📑": "1f4d1",
            "😠": "1f620",
            "😡": "1f621",
            "😢": "1f622",
            "😣": "1f623",
            "😤": "1f624",
            "😥": "1f625",
            "😨": "1f628",
            "😩": "1f629",
            "😪": "1f62a",
            "😫": "1f62b",
            "😭": "1f62d",
            "😰": "1f630",
            "😱": "1f631",
            "😲": "1f632",
            "😳": "1f633",
            "😵": "1f635",
            "😷": "1f637",
            "😸": "1f638",
            "😹": "1f639",
            "😺": "1f63a",
            "😻": "1f63b",
            "😼": "1f63c",
            "😽": "1f63d",
            "😾": "1f63e",
            "😿": "1f63f",
            "🙀": "1f640",
            "🙅": "1f645",
            "🙆": "1f646",
            "🙇": "1f647",
            "🙈": "1f648",
            "🙉": "1f649",
            "🙊": "1f64a",
            "🙋": "1f64b",
            "🙌": "1f64c",
            "🙍": "1f64d",
            "🙎": "1f64e",
            "🙏": "1f64f",
            "🚀": "1f680",
            "🚃": "1f683",
            "🚄": "1f684",
            "🚅": "1f685",
            "🚇": "1f687",
            "🚉": "1f689",
            "🚌": "1f68c",
            "🚏": "1f68f",
            "🚑": "1f691",
            "🚒": "1f692",
            "🚓": "1f693",
            "🚕": "1f695",
            "🚗": "1f697",
            "🚙": "1f699",
            "🚚": "1f69a",
            "🚢": "1f6a2",
            "🚤": "1f6a4",
            "🚥": "1f6a5",
            "🚧": "1f6a7",
            "🚨": "1f6a8",
            "🚩": "1f6a9",
            "🚪": "1f6aa",
            "🚫": "1f6ab",
            "🚬": "1f6ac",
            "🚭": "1f6ad",
            "🚲": "1f6b2",
            "🚶": "1f6b6",
            "🚹": "1f6b9",
            "🚺": "1f6ba",
            "🚻": "1f6bb",
            "🚼": "1f6bc",
            "🚽": "1f6bd",
            "🚾": "1f6be",
            "🛀": "1f6c0",
            "🤘": "1f918",
            "😀": "1f600",
            "😇": "1f607",
            "😈": "1f608",
            "😎": "1f60e",
            "😐": "1f610",
            "😑": "1f611",
            "😕": "1f615",
            "😗": "1f617",
            "😙": "1f619",
            "😛": "1f61b",
            "😟": "1f61f",
            "😦": "1f626",
            "😧": "1f627",
            "😬": "1f62c",
            "😮": "1f62e",
            "😯": "1f62f",
            "😴": "1f634",
            "😶": "1f636",
            "🚁": "1f681",
            "🚂": "1f682",
            "🚆": "1f686",
            "🚈": "1f688",
            "🚊": "1f68a",
            "🚍": "1f68d",
            "🚎": "1f68e",
            "🚐": "1f690",
            "🚔": "1f694",
            "🚖": "1f696",
            "🚘": "1f698",
            "🚛": "1f69b",
            "🚜": "1f69c",
            "🚝": "1f69d",
            "🚞": "1f69e",
            "🚟": "1f69f",
            "🚠": "1f6a0",
            "🚡": "1f6a1",
            "🚣": "1f6a3",
            "🚦": "1f6a6",
            "🚮": "1f6ae",
            "🚯": "1f6af",
            "🚰": "1f6b0",
            "🚱": "1f6b1",
            "🚳": "1f6b3",
            "🚴": "1f6b4",
            "🚵": "1f6b5",
            "🚷": "1f6b7",
            "🚸": "1f6b8",
            "🚿": "1f6bf",
            "🛁": "1f6c1",
            "🛂": "1f6c2",
            "🛃": "1f6c3",
            "🛄": "1f6c4",
            "🛅": "1f6c5",
            "🌍": "1f30d",
            "🌎": "1f30e",
            "🌐": "1f310",
            "🌒": "1f312",
            "🌖": "1f316",
            "🌗": "1f317",
            "🌘": "1f318",
            "🌚": "1f31a",
            "🌜": "1f31c",
            "🌝": "1f31d",
            "🌞": "1f31e",
            "🌲": "1f332",
            "🌳": "1f333",
            "🍋": "1f34b",
            "🍐": "1f350",
            "🍼": "1f37c",
            "🏇": "1f3c7",
            "🏉": "1f3c9",
            "🏤": "1f3e4",
            "🐀": "1f400",
            "🐁": "1f401",
            "🐂": "1f402",
            "🐃": "1f403",
            "🐄": "1f404",
            "🐅": "1f405",
            "🐆": "1f406",
            "🐇": "1f407",
            "🐈": "1f408",
            "🐉": "1f409",
            "🐊": "1f40a",
            "🐋": "1f40b",
            "🐏": "1f40f",
            "🐐": "1f410",
            "🐓": "1f413",
            "🐕": "1f415",
            "🐖": "1f416",
            "🐪": "1f42a",
            "👥": "1f465",
            "👬": "1f46c",
            "👭": "1f46d",
            "💭": "1f4ad",
            "💶": "1f4b6",
            "💷": "1f4b7",
            "📬": "1f4ec",
            "📭": "1f4ed",
            "📯": "1f4ef",
            "📵": "1f4f5",
            "🔀": "1f500",
            "🔁": "1f501",
            "🔂": "1f502",
            "🔄": "1f504",
            "🔅": "1f505",
            "🔆": "1f506",
            "🔇": "1f507",
            "🔉": "1f509",
            "🔕": "1f515",
            "🔬": "1f52c",
            "🔭": "1f52d",
            "🕜": "1f55c",
            "🕝": "1f55d",
            "🕞": "1f55e",
            "🕟": "1f55f",
            "🕠": "1f560",
            "🕡": "1f561",
            "🕢": "1f562",
            "🕣": "1f563",
            "🕤": "1f564",
            "🕥": "1f565",
            "🕦": "1f566",
            "🕧": "1f567",
            "🔈": "1f508",
            "🚋": "1f68b",
            "🏅": "1f3c5",
            "🏴": "1f3f4",
            "📸": "1f4f8",
            "🛌": "1f6cc",
            "🖕": "1f595",
            "🖖": "1f596",
            "🙁": "1f641",
            "🙂": "1f642",
            "🛫": "1f6eb",
            "🛬": "1f6ec",
            "🏻": "1f3fb",
            "🏼": "1f3fc",
            "🏽": "1f3fd",
            "🏾": "1f3fe",
            "🏿": "1f3ff",
            "🙃": "1f643",
            "🤑": "1f911",
            "🤓": "1f913",
            "🤗": "1f917",
            "🙄": "1f644",
            "🤔": "1f914",
            "🤐": "1f910",
            "🤒": "1f912",
            "🤕": "1f915",
            "🤖": "1f916",
            "🦁": "1f981",
            "🦄": "1f984",
            "🦂": "1f982",
            "🦀": "1f980",
            "🦃": "1f983",
            "🧀": "1f9c0",
            "🌭": "1f32d",
            "🌮": "1f32e",
            "🌯": "1f32f",
            "🍿": "1f37f",
            "🍾": "1f37e",
            "🏹": "1f3f9",
            "🏺": "1f3fa",
            "🛐": "1f6d0",
            "🕋": "1f54b",
            "🕌": "1f54c",
            "🕍": "1f54d",
            "🕎": "1f54e",
            "📿": "1f4ff",
            "🏏": "1f3cf",
            "🏐": "1f3d0",
            "🏑": "1f3d1",
            "🏒": "1f3d2",
            "🏓": "1f3d3",
            "🏸": "1f3f8",
            "⏩": "23e9",
            "⏪": "23ea",
            "⏫": "23eb",
            "⏬": "23ec",
            "⏰": "23f0",
            "⏳": "23f3",
            "⛎": "26ce",
            "✅": "2705",
            "✊": "270a",
            "✋": "270b",
            "✨": "2728",
            "❌": "274c",
            "❎": "274e",
            "❓": "2753",
            "❔": "2754",
            "❕": "2755",
            "➕": "2795",
            "➖": "2796",
            "➗": "2797",
            "➰": "27b0",
            "➿": "27bf",
            "©": "00a9",
            "®": "00ae",
            "‼": "203c",
            "⁉": "2049",
            "™": "2122",
            ℹ: "2139",
            "↔": "2194",
            "↕": "2195",
            "↖": "2196",
            "↗": "2197",
            "↘": "2198",
            "↙": "2199",
            "↩": "21a9",
            "↪": "21aa",
            "⌚": "231a",
            "⌛": "231b",
            "Ⓜ": "24c2",
            "▪": "25aa",
            "▫": "25ab",
            "▶": "25b6",
            "◀": "25c0",
            "◻": "25fb",
            "◼": "25fc",
            "◽": "25fd",
            "◾": "25fe",
            "☀": "2600",
            "☁": "2601",
            "☎": "260e",
            "☑": "2611",
            "☔": "2614",
            "☕": "2615",
            "☝": "261d",
            "☺": "263a",
            "♈": "2648",
            "♉": "2649",
            "♊": "264a",
            "♋": "264b",
            "♌": "264c",
            "♍": "264d",
            "♎": "264e",
            "♏": "264f",
            "♐": "2650",
            "♑": "2651",
            "♒": "2652",
            "♓": "2653",
            "♠": "2660",
            "♣": "2663",
            "♥": "2665",
            "♦": "2666",
            "♨": "2668",
            "♻": "267b",
            "♿": "267f",
            "⚓": "2693",
            "⚠": "26a0",
            "⚡": "26a1",
            "⚪": "26aa",
            "⚫": "26ab",
            "⚽": "26bd",
            "⚾": "26be",
            "⛄": "26c4",
            "⛅": "26c5",
            "⛔": "26d4",
            "⛪": "26ea",
            "⛲": "26f2",
            "⛳": "26f3",
            "⛵": "26f5",
            "⛺": "26fa",
            "⛽": "26fd",
            "✂": "2702",
            "✈": "2708",
            "✉": "2709",
            "✌": "270c",
            "✏": "270f",
            "✒": "2712",
            "✔": "2714",
            "✖": "2716",
            "✳": "2733",
            "✴": "2734",
            "❄": "2744",
            "❇": "2747",
            "❗": "2757",
            "❤": "2764",
            "➡": "27a1",
            "⤴": "2934",
            "⤵": "2935",
            "⬅": "2b05",
            "⬆": "2b06",
            "⬇": "2b07",
            "⬛": "2b1b",
            "⬜": "2b1c",
            "⭐": "2b50",
            "⭕": "2b55",
            "〰": "3030",
            "〽": "303d",
            "㊗": "3297",
            "㊙": "3299",
            "🀄": "1f004",
            "🅿": "1f17f",
            "🈂": "1f202",
            "🈚": "1f21a",
            "🈯": "1f22f",
            "🈷": "1f237",
            "🎞": "1f39e",
            "🎟": "1f39f",
            "🏋": "1f3cb",
            "🏌": "1f3cc",
            "🏍": "1f3cd",
            "🏎": "1f3ce",
            "🎖": "1f396",
            "🎗": "1f397",
            "🌶": "1f336",
            "🌧": "1f327",
            "🌨": "1f328",
            "🌩": "1f329",
            "🌪": "1f32a",
            "🌫": "1f32b",
            "🌬": "1f32c",
            "🐿": "1f43f",
            "🕷": "1f577",
            "🕸": "1f578",
            "🌡": "1f321",
            "🎙": "1f399",
            "🎚": "1f39a",
            "🎛": "1f39b",
            "🏳": "1f3f3",
            "🏵": "1f3f5",
            "🏷": "1f3f7",
            "📽": "1f4fd",
            "✝": "271d",
            "🕉": "1f549",
            "🕊": "1f54a",
            "🕯": "1f56f",
            "🕰": "1f570",
            "🕳": "1f573",
            "🕶": "1f576",
            "🕹": "1f579",
            "🖇": "1f587",
            "🖊": "1f58a",
            "🖋": "1f58b",
            "🖌": "1f58c",
            "🖍": "1f58d",
            "🖥": "1f5a5",
            "🖨": "1f5a8",
            "⌨": "2328",
            "🖲": "1f5b2",
            "🖼": "1f5bc",
            "🗂": "1f5c2",
            "🗃": "1f5c3",
            "🗄": "1f5c4",
            "🗑": "1f5d1",
            "🗒": "1f5d2",
            "🗓": "1f5d3",
            "🗜": "1f5dc",
            "🗝": "1f5dd",
            "🗞": "1f5de",
            "🗡": "1f5e1",
            "🗣": "1f5e3",
            "🗯": "1f5ef",
            "🗳": "1f5f3",
            "🗺": "1f5fa",
            "🛠": "1f6e0",
            "🛡": "1f6e1",
            "🛢": "1f6e2",
            "🛰": "1f6f0",
            "🍽": "1f37d",
            "👁": "1f441",
            "🕴": "1f574",
            "🕵": "1f575",
            "✍": "270d",
            "🖐": "1f590",
            "🏔": "1f3d4",
            "🏕": "1f3d5",
            "🏖": "1f3d6",
            "🏗": "1f3d7",
            "🏘": "1f3d8",
            "🏙": "1f3d9",
            "🏚": "1f3da",
            "🏛": "1f3db",
            "🏜": "1f3dc",
            "🏝": "1f3dd",
            "🏞": "1f3de",
            "🏟": "1f3df",
            "🛋": "1f6cb",
            "🛍": "1f6cd",
            "🛎": "1f6ce",
            "🛏": "1f6cf",
            "🛣": "1f6e3",
            "🛤": "1f6e4",
            "🛥": "1f6e5",
            "🛩": "1f6e9",
            "🛳": "1f6f3",
            "⏭": "23ed",
            "⏮": "23ee",
            "⏯": "23ef",
            "⏱": "23f1",
            "⏲": "23f2",
            "⏸": "23f8",
            "⏹": "23f9",
            "⏺": "23fa",
            "☂": "2602",
            "☃": "2603",
            "☄": "2604",
            "☘": "2618",
            "☠": "2620",
            "☢": "2622",
            "☣": "2623",
            "☦": "2626",
            "☪": "262a",
            "☮": "262e",
            "☯": "262f",
            "☸": "2638",
            "☹": "2639",
            "⚒": "2692",
            "⚔": "2694",
            "⚖": "2696",
            "⚗": "2697",
            "⚙": "2699",
            "⚛": "269b",
            "⚜": "269c",
            "⚰": "26b0",
            "⚱": "26b1",
            "⛈": "26c8",
            "⛏": "26cf",
            "⛑": "26d1",
            "⛓": "26d3",
            "⛩": "26e9",
            "⛰": "26f0",
            "⛱": "26f1",
            "⛴": "26f4",
            "⛷": "26f7",
            "⛸": "26f8",
            "⛹": "26f9",
            "✡": "2721",
            "❣": "2763",
            "🌤": "1f324",
            "🌥": "1f325",
            "🌦": "1f326",
            "🖱": "1f5b1",
        }),
        (this.imagePathPNG = a.chatbroWwwHost + "/libs/emojione/assets/png/"),
        (this.imagePathSVG = a.chatbroWwwHost + "/libs/emojione/assets/svg/"),
        (this.imagePathSVGSprites = a.chatbroWwwHost + "/libs/emojione/assets/sprites/emojione.sprites.svg"),
        (this.imageType = "png"),
        (this.sprites = !1),
        (this.unicodeAlt = !0),
        (this.ascii = !0),
        (this.cacheBustParam = "?v=2.2.3"),
        (this.regShortNames = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + this.shortnames + ")", "gi")),
        (this.regAscii = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)" + this.asciiRegexp + "(?=\\s|$|[!,.?]))", "g")),
        (this.regUnicode = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + this.unicodeRegexp + ")", "gi")),
        (this.toImage = function (a) {
            return (a = this.unicodeToImage(a)), (a = this.shortnameToImage(a));
        }),
        (this.unifyUnicode = function (a) {
            return (a = this.toShort(a)), (a = this.shortnameToUnicode(a));
        }),
        (this.shortnameToAscii = function (a) {
            var b,
                c = this.objectFlip(this.asciiList),
                d = this;
            return (a = a.replace(this.regShortNames, function (a) {
                return "undefined" != typeof a && "" !== a && a in d.emojioneList ? ((b = d.emojioneList[a].unicode[d.emojioneList[a].unicode.length - 1]), "undefined" != typeof c[b] ? c[b] : a) : a;
            }));
        }),
        (this.shortnameToUnicode = function (a) {
            var b,
                c = this;
            return (
                (a = a.replace(this.regShortNames, function (a) {
                    return "undefined" != typeof a && "" !== a && a in c.emojioneList ? ((b = c.emojioneList[a].unicode[0].toUpperCase()), c.convert(b)) : a;
                })),
                this.ascii &&
                    (a = a.replace(this.regAscii, function (a, d, e, f) {
                        return "undefined" != typeof f && "" !== f && c.unescapeHTML(f) in c.asciiList ? ((f = c.unescapeHTML(f)), (b = c.asciiList[f].toUpperCase()), e + c.convert(b)) : a;
                    })),
                a
            );
        }),
        (this.shortnameToImage = function (a) {
            var b,
                c,
                d,
                e = this;
            return (
                (a = a.replace(this.regShortNames, function (f) {
                    return "undefined" != typeof f && "" !== f && f in e.emojioneList
                        ? ((c = e.emojioneList[f].unicode[e.emojioneList[f].unicode.length - 1]),
                          (d = e.unicodeAlt ? e.convert(c.toUpperCase()) : f),
                          (b =
                              "png" === e.imageType
                                  ? e.sprites
                                      ? '<span class="emojione emojione-' + c + '" title="' + f + '">' + d + "</span>"
                                      : '<img class="emojione" data="' + a + '" alt="' + d + '" src="' + e.imagePathPNG + c + ".png" + e.cacheBustParam + '"/>'
                                  : e.sprites
                                  ? '<svg class="emojione"><description>' + d + '</description><use xlink:href="' + e.imagePathSVGSprites + "#emoji-" + c + '"></use></svg>'
                                  : '<object class="emojione" data="' + e.imagePathSVG + c + ".svg" + e.cacheBustParam + '" type="image/svg+xml" standby="' + d + '">' + d + "</object>"))
                        : f;
                })),
                this.ascii &&
                    (a = a.replace(this.regAscii, function (a, f, g, h) {
                        return "undefined" != typeof h && "" !== h && e.unescapeHTML(h) in e.asciiList
                            ? ((h = e.unescapeHTML(h)),
                              (c = e.asciiList[h]),
                              (d = e.unicodeAlt ? e.convert(c.toUpperCase()) : e.escapeHTML(h)),
                              (b =
                                  "png" === e.imageType
                                      ? e.sprites
                                          ? g + '<span class="emojione emojione-' + c + '" title="' + e.escapeHTML(h) + '">' + d + "</span>"
                                          : g + '<img class="emojione" alt="' + d + '" src="' + e.imagePathPNG + c + ".png" + e.cacheBustParam + '"/>'
                                      : e.sprites
                                      ? '<svg class="emojione"><description>' + d + '</description><use xlink:href="' + e.imagePathSVGSprites + "#emoji-" + c + '"></use></svg>'
                                      : g + '<object class="emojione" data="' + e.imagePathSVG + c + ".svg" + e.cacheBustParam + '" type="image/svg+xml" standby="' + d + '">' + d + "</object>"))
                            : a;
                    })),
                a
            );
        }),
        (this.unicodeToImage = function (a) {
            var b,
                c,
                d,
                e = this;
            if (!this.unicodeAlt || this.sprites) var f = this.mapUnicodeToShort();
            return (a = a.replace(this.regUnicode, function (a) {
                return "undefined" != typeof a && "" !== a && a in e.jsEscapeMap
                    ? ((c = e.jsEscapeMap[a]),
                      (d = e.unicodeAlt ? e.convert(c.toUpperCase()) : f[c]),
                      (b =
                          "png" === e.imageType
                              ? e.sprites
                                  ? '<span class="emojione emojione-' + c + '" title="' + f[c] + '">' + d + "</span>"
                                  : '<img class="emojione" alt="' + d + '" src="' + e.imagePathPNG + c + ".png" + e.cacheBustParam + '"/>'
                              : e.sprites
                              ? '<svg class="emojione"><description>' + d + '</description><use xlink:href="' + e.imagePathSVGSprites + "#emoji-" + c + '"></use></svg>'
                              : '<img class="emojione" alt="' + d + '" src="' + e.imagePathSVG + c + ".svg" + e.cacheBustParam + '"/>'))
                    : a;
            }));
        }),
        (this.toShort = function (a) {
            var b = this.getUnicodeReplacementRegEx(),
                c = this.mapUnicodeCharactersToShort();
            return this.replaceAll(a, b, c);
        }),
        (this.convert = function (a) {
            if (a.indexOf("-") > -1) {
                for (var b = [], c = a.split("-"), d = 0; d < c.length; d++) {
                    var e = parseInt(c[d], 16);
                    if (e >= 65536 && e <= 1114111) {
                        var f = Math.floor((e - 65536) / 1024) + 55296,
                            g = ((e - 65536) % 1024) + 56320;
                        e = String.fromCharCode(f) + String.fromCharCode(g);
                    } else e = String.fromCharCode(e);
                    b.push(e);
                }
                return b.join("");
            }
            var c = parseInt(a, 16);
            if (c >= 65536 && c <= 1114111) {
                var f = Math.floor((c - 65536) / 1024) + 55296,
                    g = ((c - 65536) % 1024) + 56320;
                return String.fromCharCode(f) + String.fromCharCode(g);
            }
            return String.fromCharCode(c);
        }),
        (this.escapeHTML = function (a) {
            var b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
            return a.replace(/[&<>"']/g, function (a) {
                return b[a];
            });
        }),
        (this.unescapeHTML = function (a) {
            var b = { "&amp;": "&", "&#38;": "&", "&#x26;": "&", "&lt;": "<", "&#60;": "<", "&#x3C;": "<", "&gt;": ">", "&#62;": ">", "&#x3E;": ">", "&quot;": '"', "&#34;": '"', "&#x22;": '"', "&apos;": "'", "&#39;": "'", "&#x27;": "'" };
            return a.replace(/&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/gi, function (a) {
                return b[a];
            });
        }),
        (this.mapEmojioneList = function (a) {
            for (var b in this.emojioneList)
                if (this.emojioneList.hasOwnProperty(b))
                    for (var c = 0, d = this.emojioneList[b].unicode.length; c < d; c++) {
                        var e = this.emojioneList[b].unicode[c];
                        a(e, b);
                    }
        }),
        (this.mapUnicodeToShort = function () {
            var a = this;
            return (
                this.memMapShortToUnicode ||
                    ((this.memMapShortToUnicode = {}),
                    this.mapEmojioneList(function (b, c) {
                        a.memMapShortToUnicode[b] = c;
                    })),
                this.memMapShortToUnicode
            );
        }),
        (this.memoizeReplacement = function () {
            var a = this;
            if (!this.unicodeReplacementRegEx || !this.memMapShortToUnicodeCharacters) {
                var b = [];
                (this.memMapShortToUnicodeCharacters = {}),
                    this.mapEmojioneList(function (c, d) {
                        var e = a.convert(c);
                        a.emojioneList[d].isCanonical && (a.memMapShortToUnicodeCharacters[e] = d), b.push(e);
                    }),
                    (this.unicodeReplacementRegEx = b.join("|"));
            }
        }),
        (this.mapUnicodeCharactersToShort = function () {
            return this.memoizeReplacement(), this.memMapShortToUnicodeCharacters;
        }),
        (this.getUnicodeReplacementRegEx = function () {
            return this.memoizeReplacement(), this.unicodeReplacementRegEx;
        }),
        (this.objectFlip = function (a) {
            var b,
                c = {};
            for (b in a) a.hasOwnProperty(b) && (c[a[b]] = b);
            return c;
        }),
        (this.escapeRegExp = function (a) {
            return a.replace(/[-[\]{}()*+?.,;:&\\^$#\s]/g, "\\$&");
        }),
        (this.replaceAll = function (a, b, c) {
            var d = this.escapeRegExp(b),
                e = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + d + ")", "gi"),
                f = function (a, b) {
                    return b ? c[b] : a;
                };
            return a.replace(e, f);
        });
}
var ChatbroUtils = function (a) {
        function b(a) {
            var b = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return b ? decodeURIComponent(b[1]) : void 0;
        }
        function c(a, b, c) {
            c = c || {};
            var d = c.expires;
            if ("number" == typeof d && d) {
                var e = new Date();
                e.setTime(e.getTime() + 1e3 * d), (d = c.expires = e);
            }
            d && d.toUTCString && (c.expires = d.toUTCString()), (b = encodeURIComponent(b));
            var f = a + "=" + b;
            for (var g in c)
                if (c.hasOwnProperty(g)) {
                    f += "; " + g;
                    var h = c[g];
                    h !== !0 && (f += "=" + h);
                }
            document.cookie = f;
        }
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a;
        }
        function e(a) {
            var b = [];
            if (Array.isArray(a)) b = a;
            else if ("number" == typeof a.length) for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b;
        }
        function f() {}
        function g(a, b, c) {
            return this instanceof g
                ? ("string" == typeof a && (a = document.querySelectorAll(a)),
                  (this.elements = e(a)),
                  (this.options = d({}, this.options)),
                  "function" == typeof b ? (c = b) : d(this.options, b),
                  c && this.on("always", c),
                  this.getImages(),
                  void setTimeout(
                      function () {
                          this.check();
                      }.bind(this)
                  ))
                : new g(a, b, c);
        }
        function h(a) {
            this.img = a;
        }
        this.settings = a;
        var i = f.prototype;
        (i.on = function (a, b) {
            if (a && b) {
                var c = (this._events = this._events || {}),
                    d = (c[a] = c[a] || []);
                return d.indexOf(b) == -1 && d.push(b), this;
            }
        }),
            (i.once = function (a, b) {
                if (a && b) {
                    this.on(a, b);
                    var c = (this._onceEvents = this._onceEvents || {}),
                        d = (c[a] = c[a] || {});
                    return (d[b] = !0), this;
                }
            }),
            (i.off = function (a, b) {
                var c = this._events && this._events[a];
                if (c && c.length) {
                    var d = c.indexOf(b);
                    return d != -1 && c.splice(d, 1), this;
                }
            }),
            (i.emitEvent = function (a, b) {
                var c = this._events && this._events[a];
                if (c && c.length) {
                    var d = 0,
                        e = c[d];
                    b = b || [];
                    for (var f = this._onceEvents && this._onceEvents[a]; e; ) {
                        var g = f && f[e];
                        g && (this.off(a, e), delete f[e]), e.apply(this, b), (d += g ? 0 : 1), (e = c[d]);
                    }
                    return this;
                }
            }),
            (g.prototype = Object.create(f.prototype)),
            (g.prototype.options = {}),
            (g.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (g.prototype.addElementImages = function (a) {
                "IMG" == a.nodeName && this.addImage(a);
                var b = { 1: !0, 9: !0, 11: !0 },
                    c = a.nodeType;
                if (c && b[c]) {
                    for (var d = a.querySelectorAll("img"), e = 0; e < d.length; e++) {
                        var f = d[e];
                        this.addImage(f);
                    }
                    if ("string" == typeof this.options.background) {
                        var g = a.querySelectorAll(this.options.background);
                        for (e = 0; e < g.length; e++) {
                            var h = g[e];
                            this.addElementBackgroundImages(h);
                        }
                    }
                }
            }),
            (g.prototype.addImage = function (a) {
                var b = new h(a);
                this.images.push(b);
            }),
            (g.prototype.check = function () {
                function a(a, c, d) {
                    setTimeout(function () {
                        b.progress(a, c, d);
                    });
                }
                var b = this;
                return (
                    (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? void this.images.forEach(function (b) {
                              b.once("progress", a), b.check();
                          })
                        : void this.complete()
                );
            }),
            (g.prototype.progress = function (a, b, c) {
                this.progressedCount++, (this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded), this.emitEvent("progress", [this, a, b]), this.progressedCount == this.images.length && this.complete();
            }),
            (g.prototype.complete = function () {
                var a = this.hasAnyBroken ? "fail" : "done";
                (this.isComplete = !0), this.emitEvent(a, [this]), this.emitEvent("always", [this]);
            }),
            (h.prototype = Object.create(f.prototype)),
            (h.prototype.check = function () {
                var a = this,
                    b = this.getIsImageComplete();
                return b
                    ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.proxyImage.src = this.img.src),
                      void setTimeout(function () {
                          a.alreadyParser || ((a.alreadyParser = !0), a.confirm(!1, "onerror"), a.unbindEvents());
                      }, 2e3));
            }),
            (h.prototype.getIsImageComplete = function () {
                return this.img.complete && void 0 !== this.img.naturalWidth;
            }),
            (h.prototype.confirm = function (a, b) {
                (this.isLoaded = a), this.emitEvent("progress", [this, this.img, b]);
            }),
            (h.prototype.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a);
            }),
            (h.prototype.onload = function () {
                this.alreadyParser || ((this.alreadyParser = !0), this.confirm(!0, "onload"), this.unbindEvents());
            }),
            (h.prototype.onerror = function () {
                this.alreadyParser || ((this.alreadyParser = !0), this.confirm(!1, "onerror"), this.unbindEvents());
            }),
            (h.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            });
        var j = new (function () {
            var a = !1,
                b = [],
                c = [];
            this.init = function () {
                a || e(), (a = !0);
            };
            var d = function (a) {
                    if (b.indexOf(a) == -1) {
                        var d = [{}, {}];
                        b.push(a), c.push(d);
                    }
                    return c[b.indexOf(a)];
                },
                e = function () {
                    function a(a, b, c) {
                        var f = d(this);
                        e.addEventListener.apply(this, arguments), (c = c ? 1 : 0), f[c][a] || (f[c][a] = []), f[c][a].push(b);
                    }
                    function b(a, b, c) {
                        var f = d(this);
                        if ((e.removeEventListener.apply(this, arguments), (c = c ? 1 : 0), f[c][a])) {
                            var g = f[c][a].indexOf(b);
                            g > -1 && f[c][a].splice(g, 1);
                        }
                    }
                    function c(a) {
                        for (var b, c = d(this), e = [], f = 0; (b = c[f]); f++)
                            if ("string" == typeof a) {
                                if (b[a]) for (var g in b[a]) b[a].hasOwnProperty(g) && e.push({ type: a, listener: b[a][g], useCapture: !!f });
                            } else for (var h in b) if (b.hasOwnProperty(h)) for (var g in b[h]) b[a].hasOwnProperty(g) && e.push({ type: h, listener: b[h][g], useCapture: !!f });
                        return e;
                    }
                    var e = { addEventListener: HTMLElement.prototype.addEventListener, removeEventListener: HTMLElement.prototype.removeEventListener };
                    "undefined" != typeof HTMLDocument
                        ? ((HTMLDocument.prototype.addEventListener = a), (HTMLDocument.prototype.removeEventListener = b), (HTMLDocument.prototype.getEventListeners = c))
                        : ((Document.prototype.addEventListener = a), (Document.prototype.removeEventListener = b), (Document.prototype.getEventListeners = c));
                };
        })();
        return { ListenerTracker: j, ImagesLoaded: g, getCookie: b, setCookie: c };
    },
    Chatbro = function (a, b) {
        (b.chatbroWwwHost = "https://" + b.chatbroWwwSubdomain), (b.chatbroVideoFilePath = b.chatbroWwwSubdomain + "/files/user/"), (this.UTILS = new ChatbroUtils(b)), this.UTILS.ListenerTracker.init();
        var c = this;
        this.HISTORY_PLUG_DIV,
            (this.debug = this.createDebugger()),
            (this.body = document.getElementsByTagName("body")[0]),
            (this.isScrolledToBottom = !0),
            (this.isConstructorsChat = !1),
            (this.isIE = !1),
            ("Microsoft Internet Explorer" === navigator.appName || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) && (this.isIE = !0),
            (this.isIE = !0),
            (this.chatTools = new this.ChatTools(this)),
            this.chatTools.checkMobile(),
            (this.subbatchControl = new this.SubbatchControl(this)),
            (this.messageControl = new this.MessageControl(this)),
            (this.isChatInIframe = this.chatTools.checkWhereChatLoad()),
            (this.messages = {});
        for (var d in b) b.hasOwnProperty(d) && (this[d] = b[d]);
        this.chatbroScriptVersion && (localStorage.chatbroScriptVersion = this.chatbroScriptVersion);
        try {
            Object.defineProperty(this, "showAds", { writeable: !1, value: this.showAds }), Object.defineProperty(this, "showAdsForMinimizedChat", { writeable: !1, value: this.showAdsForMinimizedChat });
        } catch (e) {}
        (this.DEFAULT.CHAT_MIN_WIDTH = this.showUsersAvatars ? this.DEFAULT.CHAT_MIN_WIDTH : this.DEFAULT.CHAT_MIN_WIDTH_WITHOUT_AVATARS),
            (this.userCurrentLoginMethod = this.LOGIN_METHODS[this.userSiteId] || null),
            (this.getDataFromSender = this.needToLoadSubbatchMessages),
            this.initChatContainer(
                function () {
                    if (((this.body = document.getElementsByTagName("body")[0]), !this.containerDiv)) return void this.debug.error("Not found container for chat:", this.containerDivId);
                    if (
                        (this.isIE ? (this.containerDiv.innerHTML = a) : ((this.containerDivTest = document.createElement("div")), (this.containerDivTest.innerHTML = a), (this.containerDivTest.className += "chatbro_chat_wrapper")),
                        (this.containerDiv.className += " chatbro_container"),
                        (this.siteUserSettingsName = this.containerDivId + "|" + this.chatPivot + "|site_user"),
                        (this.chatGeometrySettingsName = this.containerDivId + "|" + this.chatPivot + "|chat_geometry"),
                        (this.freqUsedSmilesSettingName = "chatbro_freqUsedSmiles"),
                        (this.clientIdSettingsName = this.chatPivot + "|client_id"),
                        (b = this.loadFromLocalStorage(this.clientIdSettingsName)))
                    )
                        for (d in b) this[d] = b[d];
                    else {
                        try {
                            this.clientId = this.chatTools.uuidv4();
                        } catch (e) {
                            this.clientId = Math.random();
                        }
                        this.saveToLocalStorage(this.clientIdSettingsName, { clientId: this.clientId });
                    }
                    if ((this.allowMoveChat && this.restoreChatGeometry && (b = this.loadFromLocalStorage(this.chatGeometrySettingsName)), b && b.chatSettingsVersion === this.CHAT_SETTINGS_VERSION)) {
                        for (d in b)
                            if (b.hasOwnProperty(d)) {
                                if (this.isMobile && "chatState" !== d) continue;
                                this[d] = b[d];
                            }
                    } else this.saveGeometryToLocalStorage();
                    (this.NODES = {
                        chatMaxDiv: this.chatTools.getChatElement("chatbro_chat"),
                        chatMinDiv: this.chatTools.getChatElement("chatbro_minimized_chat"),
                        chatMaxHeaderDiv: this.chatTools.getChatElement("chatbro_maximized_header"),
                        chatMinHeaderDiv: this.chatTools.getChatElement("chatbro_minimized_header"),
                        chatMinHeaderDivTable: this.chatTools.getChatElement("chatbro_minimized_header").getElementsByTagName("table")[0],
                        chatHeaderMinCaption: this.chatTools.getChatElement("chatbro_caption chatbro_minimized_caption"),
                        chatHeaderMinIco: this.chatTools.getChatElement("chatbro_minimized_chat_ico"),
                        chatCaptionDiv: this.chatTools.getChatElements("chatbro_header_caption_td"),
                        chatMaxCaptionDiv: this.chatTools.getChatElement("chatbro_maximized_caption"),
                        chatNameDiv: this.chatTools.getChatElements("chatbro_chat_name"),
                        chatMaxParticipantsWrapperDiv: this.chatTools.getChatElement("chatbro_participant_wrapper_max"),
                        chatMaxNeedToUpdateCodeDiv: this.chatTools.getChatElement("chatbro_need_to_update_code"),
                        chatMinParticipantsWrapperDiv: this.chatTools.getChatElement("chatbro_participant_wrapper_min"),
                        chatMinCaptionDiv: this.chatTools.getChatElement("chatbro_minimized_caption"),
                        chatParticipantCountWrapper: this.chatTools.getChatElements("chatbro_participant_count_wrapper"),
                        chatParticipantCountSpans: this.chatTools.getChatElements("chatbro_participant_count"),
                        chatNewMessagesCountWrapperDiv: this.chatTools.getChatElement("new_messages_count_wrapper"),
                        chatNewMessagesCountWrapperMaxDiv: this.chatTools.getChatElement("new_messages_count_wrapper_max"),
                        chatNewMessagesCountDivs: this.chatTools.getChatElements("new_messages_count"),
                        chatMinimizeButton: this.chatTools.getChatElement("chatbro_minimize_button"),
                        chatMaxInviteButton: this.chatTools.getChatElement("chatbro_maximized_invite_button"),
                        chatMinInviteButton: this.chatTools.getChatElement("chatbro_minimized_invite_button"),
                        chatMaxHeaderTitle: this.chatTools.getChatElement("chatbro_maximized_title"),
                        chatMinHeaderTitle: this.chatTools.getChatElement("chatbro_minimized_title"),
                        chatMovableMinHeaderTitle: this.chatTools.getChatElement("chatbro_header_minimized_movable"),
                        chatDropdownMenuDiv: this.chatTools.getChatElement("chatbro_dropdown_menu"),
                        chatDropdownMenuHeaderAlarm: this.chatTools.getChatElement("chatbro_header_alarm"),
                        chatDropdownMenuBlockDiv: this.chatTools.getChatElement("chatbro_dropdown_block"),
                        chatDropdownAdminStuffDiv: this.chatTools.getChatElement("chatbro_dropdown_menu_admin_stuff"),
                        chatDropdownMenuUserWrapper: this.chatTools.getChatElement("chatbro_dropdown_menu_user_wrapper"),
                        chatDropdownMenuPlanDiv: this.chatTools.getChatElement("chatbro_dropdown_menu_plan_wrapper"),
                        chatDropdownMenuPatronDiv: this.chatTools.getChatElement("chatbro_dropdown_menu_patron_wrapper"),
                        chatDropdownMenuLinkDiv: this.chatTools.getChatElement("chatbro_dropdown_menu_links_wrapper"),
                        chatDropdownAdminStuffWrapperDiv: this.chatTools.getChatElement("chatbro_dropdown_menu_admin_stuff_wrapper"),
                        chatDropdownMenuLoadProgressWrapper: this.chatTools.getChatElement("chatbro_dropdown_menu_load_progress_wrapper"),
                        chatbroDropdownLoadProgress: this.chatTools.getChatElement("chatbro_dropdown_load_progress_radial"),
                        chatDropdownMenuCopyright: this.chatTools.getChatElement("chatbro_copyright"),
                        chatDropdownMenuCopyrightLink: this.chatTools.getChatElement("chatbro_copyright_link"),
                        chatDropdownMenuCopyrightLinkDomain: this.chatTools.getChatElement("chatbro_copyright_link_domain"),
                        chatDropdownMenuUser: this.chatTools.getChatElement("chatbro_dropdown_menu_user"),
                        chatDropdownMenuUserGuestAvatar: this.chatTools.getChatElement("chatbro_dropdown_menu_user_avatar"),
                        chatDropdownMenuUserGuestName: this.chatTools.getChatElement("chatbro_dropdown_menu_user_info_name"),
                        chatSmilesMenuDiv: this.chatTools.getChatElement("chatbro_smiles_menu"),
                        chatSmilesDiv: this.chatTools.getChatElement("chatbro_smiles"),
                        chatBodyDiv: this.chatTools.getChatElement("chatbro_body"),
                        chatSystemMessagesBlock: this.chatTools.getChatElement("chatbro_system_messages_block"),
                        chatSystemMessagesWrapperDiv: this.chatTools.getChatElement("chatbro_system_messages_wrapper"),
                        chatNotificationsIco: this.chatTools.getChatElement("chatbro_notifications"),
                        chatSystemMessagesDiv: this.chatTools.getChatElement("chatbro_system_messages"),
                        chatMessagesWrapperDiv: this.chatTools.getChatElement("chatbro_messages_wrapper"),
                        chatMessagesBlockDiv: this.chatTools.getChatElement("chatbro_messages_block"),
                        chatMessagesSpace: this.chatTools.getChatElement("chatbro_messages_space"),
                        chatOneMessageBlockTr: this.chatTools.getChatElements("chatbro_message"),
                        chatMessagesTable: this.chatTools.getChatElement("chatbro_messages"),
                        chatMessagesTbody: this.chatTools.getChatElement("chatbro_messages").getElementsByTagName("tbody")[0],
                        chatMessagesEmptyTd: this.chatTools.getChatElement("chatbro_messages_empty"),
                        chatMessagesErrorTd: this.chatTools.getChatElement("chatbro_messages_error"),
                        chatMessagesScrollToLast: this.chatTools.getChatElement("chatbro_messages_scroll_to_last"),
                        chatbroLink: this.chatTools.getChatElement("chatbro_link"),
                        chatInfoBlock: this.chatTools.getChatElement("chatbro_chat_info_block"),
                        chatSendBlock: this.chatTools.getChatElement("chatbro_send_input_block"),
                        chatSendWrapper: this.chatTools.getChatElement("chatbro_send_input_wrapper"),
                        chatSendDiv: this.chatTools.getChatElement("chatbro_send"),
                        chatSendPreviewDiv: this.chatTools.getChatElement("chatbro_send_input_preview"),
                        chatSendInput: this.chatTools.getChatElement("chatbro_send_input"),
                        chatSendButton: this.chatTools.getChatElement("chatbro_send_button"),
                        chatOpenSmilesButton: this.chatTools.getChatElement("chatbro_open_smiles_button"),
                        chatOpenUploadButton: this.chatTools.getChatElement("chatbro_open_upload_button"),
                        chatFileSelectInput: this.chatTools.getChatElement("chatbro_file_select_input"),
                        chatFileSelectInfoDiv: this.chatTools.getChatElement("chatbro_modal_file_info"),
                        chatFileSelectWrapperDiv: this.chatTools.getChatElement("chatbro_modal_file"),
                        chatSendLoaderDiv: this.chatTools.getChatElement("chatbro_loader_radial"),
                        chatSendIndicatorWrapper: this.chatTools.getChatElement("chatbro_send_input_indicator_wrapped"),
                        chatSendIndicator: this.chatTools.getChatElement("chatbro_send_input_indicator"),
                        chatMessageLoader: this.chatTools.getChatElement("chatbro_messages_plug"),
                        chatMessagesWrapperPreloadDiv: this.chatTools.getChatElement("chatbro_messages_preload"),
                        chatFakeMessagesTable: this.chatTools.getChatElement("chatbro_fake_messages"),
                        chatPaginatorTable: this.chatTools.getChatElement("chatbro_paginator"),
                        chatPaginatorPrev: this.chatTools.getChatElement("chatbro_paginator_prev"),
                        chatPaginatorNext: this.chatTools.getChatElement("chatbro_paginator_next"),
                        chatModalBlock: this.chatTools.getChatElement("chatbro_modal_block"),
                        chatModalFadeBlock: this.chatTools.getChatElement("chatbro_fade_block"),
                        chatModalFadeBlockRadial: this.chatTools.getChatElement("chatbro_login_progress_radial"),
                        chatModalFadeSideBlock: this.chatTools.getChatElement("chatbro_fade_side_block"),
                        chatModalWrapper: this.chatTools.getChatElement("chatbro_modal_wrapper"),
                        chatModalLoginBlock: this.chatTools.getChatElement("chatbro_modal_wrapper_login"),
                        chatModalLoginSocialDiv: this.chatTools.getChatElement("chatbro_modal_login_social"),
                        chatModalLoginHeadSocialDiv: this.chatTools.getChatElement("chatbro_modal_login_head_social"),
                        chatModalLoginHeadGuestVar1Div: this.chatTools.getChatElement("chatbro_modal_login_head_guest_var1"),
                        chatModalLoginHeadGuestVar2Div: this.chatTools.getChatElement("chatbro_modal_login_head_guest_var2"),
                        chatModalLoginCloseSpan: this.chatTools.getChatElement("chatbro_modal_login_close"),
                        chatModalLoginOkBtn: this.chatTools.getChatElement("chatbro_modal_login_btn"),
                        chatModalLoginInput: this.chatTools.getChatElement("chatbro_modal_login_input"),
                        chatModalLoginBottomDiv: this.chatTools.getChatElement("chatbro_modal_login_bot"),
                        chatModalLoginInputDiv: this.chatTools.getChatElement("chatbro_modal_login_input_div"),
                        chatModalLoginTosDiv: this.chatTools.getChatElement("bodyBackgroundColorLighten"),
                        chatModalLoginInputWrapperDiv: this.chatTools.getChatElement("chatbro_modal_login_input_wrapper"),
                        chatModalLoginCustomLinkDiv: this.chatTools.getChatElement("chatbro_custom_login"),
                        chatModalLoginCustomLink: this.chatTools.getChatElement("chatbro_custom_login_link"),
                        chatModalLoginInputBlock: this.chatTools.getChatElement("chatbro_modal_login_input_block"),
                        chatModalLoginHeadSiteDiv: this.chatTools.getChatElement("chatbro_modal_login_head_site"),
                        chatModalLoginSiteDiv: this.chatTools.getChatElement("chatbro_modal_login_site"),
                        chatModalLoginSiteAvatar: this.chatTools.getChatElement("chatbro_modal_login_site_avatar"),
                        chatModalLoginSiteName: this.chatTools.getChatElement("chatbro_modal_login_site_name"),
                        chatModalBanBlock: this.chatTools.getChatElement("chatbro_modal_wrapper_ban"),
                        chatModalBanHeadDiv: this.chatTools.getChatElement("chatbro_modal_ban_head"),
                        chatModalBanCloseSpan: this.chatTools.getChatElement("chatbro_modal_ban_close"),
                        chatModalBanLabelDiv: this.chatTools.getChatElement("chatbro_modal_ban_info_label"),
                        chatModalBanOkBtn: this.chatTools.getChatElement("chatbro_modal_ban_btn"),
                        chatModalBanInput: this.chatTools.getChatElement("chatbro_modal_ban_input"),
                        chatModalBanIsShadow: this.chatTools.getChatElement("chatbro_modal_ban_is_shadow"),
                        chatModalBanDeleteAllMessages: this.chatTools.getChatElement("chatbro_modal_delete_all_messages_form_user"),
                        chatModalBanReason: this.chatTools.getChatElement("chatbro_modal_ban_reason"),
                        chatModalBanbanByIp: this.chatTools.getChatElement("chatbro_ban_by_ip"),
                        chatModalBanbanByUserId: this.chatTools.getChatElement("chatbro_ban_by_user_id"),
                        chatModalBanbanByIpRadio: this.chatTools.getChatElement("chatbro_ban_by_ip_radio"),
                        chatModalBanbanByUserIdRadio: this.chatTools.getChatElement("chatbro_ban_by_user_id_radio"),
                        chatModalMenuBlock: this.chatTools.getChatElement("chatbro_modal_wrapper_menu"),
                        chatModalMenuHeadDiv: this.chatTools.getChatElement("chatbro_modal_menu_head"),
                        chatModalMenuCloseSpan: this.chatTools.getChatElement("chatbro_modal_menu_close"),
                        chatModalMenuSetModer: this.chatTools.getChatElement("chatbro_modal_menu_set_moder"),
                        chatModalMenuDeleteModer: this.chatTools.getChatElement("chatbro_modal_menu_delete_moder"),
                        chatModalMenuBanUser: this.chatTools.getChatElement("chatbro_modal_menu_ban_user"),
                        chatModalMenuDeleteMessage: this.chatTools.getChatElement("chatbro_modal_menu_delete_message"),
                        chatModalMenuDeleteMessagesFromUser: this.chatTools.getChatElement("chatbro_modal_menu_delete_messages_from_user"),
                        chatModalPatronBlock: this.chatTools.getChatElement("chatbro_modal_wrapper_patron"),
                        chatModalPatronBodyBlock: this.chatTools.getChatElement("chatbro_modal_patron_body"),
                        chatModalPatronHeadDiv: this.chatTools.getChatElement("chatbro_modal_patron_head"),
                        chatModalUploadBtn: this.chatTools.getChatElement("chatbro_modal_upload_files_btn"),
                        chatModalUploadOKBtn: this.chatTools.getChatElement("chatbro_modal_upload_ok_btn"),
                        chatModalUploadInput: this.chatTools.getChatElement("chatbro_modal_upload_input"),
                        chatBottomBorder: this.chatTools.getChatElement("chatbro_bottom_border"),
                        chatTopBorder: (function () {
                            var a = document.createElement("div");
                            return (a.className = "chatbro_top_border"), a;
                        })(),
                        chatInChatBottom: this.chatTools.getChatElement("chatbro_in_chat_bottom"),
                        chatInChatTop: this.chatTools.getChatElement("chatbro_in_chat_top"),
                        chatOutOfChatTop: this.chatTools.getChatElement("chatbro_out_of_chat_top"),
                        chatOutOfChatBottom: this.chatTools.getChatElement("chatbro_out_of_chat_bottom"),
                        chatOutOfChatMinimized: this.chatTools.getChatElement("chatbro_out_of_chat_minimized"),
                        chatConnectingBottomDiv: this.chatTools.getChatElement("chatbro_connecting_bottom"),
                        chatConnectingBottomWrapperDiv: this.chatTools.getChatElement("chatbro_messages_noconnection_wrapper"),
                        chatConnectingBottomMessageConnectingDiv: this.chatTools.getChatElement("chatbro_connecting_bottom_message_connecting"),
                        chatConnectingBottomMessageNoconnectingDiv: this.chatTools.getChatElement("chatbro_connecting_bottom_message_noconnection"),
                        chatConnectingBottomMessageReconnectDiv: this.chatTools.getChatElement("chatbro_connecting_bottom_message_reconnect"),
                        chatConnectingBottomMessageConnectingSecDiv: this.chatTools.getChatElement("chatbro_connecting_bottom_message_connecting_sec"),
                        chatConnectingBottomBtn: this.chatTools.getChatElement("chatbro_connecting_bottom_button"),
                        chatConnectingBottomLoader: this.chatTools.getChatElement("chatbro_connecting_bottom_radial"),
                    }),
                        (this.translatedText = {});
                    var f = [
                        "ban",
                        "reply",
                        "delete",
                        "banMessage",
                        "systemMessage",
                        "limitFileSize",
                        "limitFileCount",
                        "newMessage",
                        "registeredOnly",
                        "incorrectSignature",
                        "scriptException",
                        "sendFromTg",
                        "sendFromVk",
                        "chatsPatron",
                        "guest",
                        "admin",
                        "moder",
                        "patron",
                        "moderList",
                        "banList",
                        "menu",
                        "newTabChat",
                        "newWindowChat",
                        "editChat",
                        "editParentChat",
                        "patronList",
                        "list",
                        "featChatUploading",
                        "featChatSync",
                        "featChatHistory",
                        "featChatMark",
                        "mismatchDomain",
                        "moreInfo",
                        "needToUpdateCode",
                        "whereGetCode",
                        "fromDocumentation",
                        "clickToShowAlert",
                        "signout",
                        "cantBanUser",
                        "hasBeenBanned",
                        "cantBanAdmin",
                        "cantBanOtherModer",
                        "signIn",
                        "loginIsNotAllowed_guest",
                        "loginIsNotAllowed_vk",
                        "loginIsNotAllowed_tg",
                        "loginIsNotAllowed_fb",
                        "loginIsNotAllowed_google",
                        "loginIsNotAllowed_guid",
                        "insufficientFunds",
                        "unobtrusiveAds",
                        "frequentlyUsed",
                        "change",
                        "trialPeriod",
                        "pay",
                        "basicPlan",
                        "acost",
                        "disabledUploading",
                        "disabledSyncs",
                        "perMonth",
                        "acostforprem",
                        "aworkTime",
                        "supportThisChat",
                        "becomeAPatron",
                        "whyBecomeAPatron",
                        "topPatrons",
                        "payDescPremium",
                        "payDescBasic",
                        "noPatrons",
                        "youAreLoggedAs",
                        "youAreLoggedOut",
                        "changePlan",
                        "approxCosts",
                        "addFunds",
                        "editThisBlock",
                        "chatPlan",
                        "noReferralAlert",
                        "tooOftenSending",
                        "disabledChatHistory",
                        "chatHistoryIsBlocked",
                        "disabledChatHistoryDesc",
                        "disabledChatHistoryBasicDescAdmin",
                        "disabledChatHistoryPremDescAdmin",
                        "disabledSyncsAlertBasic",
                        "disabledSyncsAlertInsuf",
                        "disabledUploadingAlertBasic",
                        "disabledUploadingAlertInsuf",
                        "disabledSyncsAlertPayBtn",
                        "disabledUploadingAlertPayBtn",
                        "optionNotAvailableWithoutAdmin",
                        "notEnoughBalanceToUpload",
                        "payHere",
                        "somethingWentWrong",
                        "premiumPlan",
                        "onlyYouSeeThisBlock",
                        "minutes",
                        "hours",
                        "days",
                        "weeks",
                        "months",
                        "years",
                        "badLogin",
                    ];
                    for (var g in f)
                        if (f.hasOwnProperty(g)) {
                            var h = f[g];
                            (this.translatedText[h] = this.NODES.chatMessagesTable.getAttribute(h) || ""), this.NODES.chatMessagesTable.removeAttribute(h);
                        }
                    if (
                        ((this.geometry = new this.Geometry(this)),
                        (this.colorsCtrl = new this.ChatColors(this)),
                        (this.conControl = new this.ConControl(this)),
                        (this.dropdownMenuControl = { active: !1 }),
                        this.NODES.chatDropdownMenuDiv &&
                            ((this.dropdownMenuControl = new this.DropdownMenuControl(this)),
                            (this.dropdownMenuControl.active = !0),
                            this.dropdownMenuControl.active && !this.getDataFromSender && (this.dropdownMenuControl.addStuffLinks(), this.dropdownMenuControl.updatePatronBlock(), this.dropdownMenuControl.addPlan())),
                        (b = this.loadFromLocalStorage(this.siteUserSettingsName)),
                        b && b.chatSettingsVersion === this.CHAT_SETTINGS_VERSION)
                    )
                        for (d in b) this[d] = b[d];
                    (this.isSiteLogin = !(!(this.siteUserFullName || this.siteUserLastName || this.siteUserFirstName || this.siteUserScreenName) || !this.siteUserExternalId)), (this.isLoggedAsSiteUser = !1);
                    try {
                        this.siteUserExternalId
                            ? this.autoLoginViaSite && this.setSiteUser()
                            : this.siteUserFullName || this.siteUserLastName || this.siteUserFirstName || this.siteUserScreenName || this.userId
                            ? this.saveSiteUserToLocalStorage()
                            : this.NODES.chatDropdownMenuUserWrapper && (this.NODES.chatDropdownMenuUserWrapper.style.display = "none");
                    } catch (e) {
                        this.debug.error(e);
                    }
                    this.audioControl = new this.Audio();
                    try {
                        this.audioPlayer = new this.audioPlayer(this);
                    } catch (e) {}
                    switch (
                        ((this.isActiveTab = new this.IsActveTab()),
                        (this.events = new this.Events(this)),
                        this.createCustomEvents(),
                        this.isIE || this.containerDiv.appendChild(this.containerDivTest),
                        c.executeWhenChatWillBeVisible(function () {
                            c.widthHeightProcessing(), c.colorsCtrl.init(), c.conControl.isConnnected() || c.conControl.uipreload.show();
                        }),
                        document.dispatchEvent(this.customEvents.chatLoaded),
                        this.bindChatEvents(),
                        (this.modalWindowControl = new this.ModalWindowControl(this)),
                        (this.inputControl = new this.InputControl(this)),
                        this.NODES.chatSmilesMenuDiv && (this.smilesMenuControl = new this.SmilesMenuControl(this)),
                        this.NODES.chatOpenUploadButton && (this.fileUploadControl = new this.FileUploadControl(this)),
                        (this.alertControl = new this.AlertControl(this)),
                        this.allowMoveChat && this.isMobile && !this.isConstructorsChat && (this.chatState = this.STATES.MINIMIZED),
                        this.chatState)
                    ) {
                        case this.STATES.MAXIMIZED:
                            this.maximizeChat();
                            break;
                        case this.STATES.MINIMIZED:
                            this.minimizeChat();
                            break;
                        case this.STATES.CLOSED:
                            this.closeChat();
                    }
                    this.chatGreeting &&
                        !this.getDataFromSender &&
                        c.executeWhenChatWillBeVisible(function () {
                            c.alertControl.showGreeting(c.chatGreeting), c.alertControl.widthHeightProcessing();
                        }),
                        (this.attachmentCache = {}),
                        (this.fakeAttachmentCache = {}),
                        (this.messageAttachmentCount = 0),
                        (this.currentMediaAttachments = []),
                        (this.currentReplyAttachment = []),
                        (this.currentUploadedAttachments = []),
                        this.removeMessagesCount(),
                        (this.chatIdentificator = new Date().getTime() + "_" + this.containerDivId),
                        (window.chatBro = {}),
                        (this.lockSendMessage = this.inputControl.lockSendMessage),
                        (this.unLockSendMessage = this.inputControl.unLockSendMessage),
                        (this.showSystemMessage = this.showWarningMessage = this.alertControl.showWarningMessage);
                }.bind(this)
            );
    };
Chatbro.prototype = {
    constructor: Chatbro,
    enableConsole: !0,
    websocketMaxConnectionCount: 5,
    subbatches: {},
    MONTHS: {
        RU: ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
        EN: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        PT: ["jan", "fev", "mar", "abr", "maio", "jun", "jul", "ago", "set", "out", "Nov", "Dez"],
        FR: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "ao-t", "sept.", "oct.", "nov.", "déc."],
        ES: ["enero", "feb.", "marzo", "abr.", "mayo", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
        NL: ["jan.", "febr.", "marts", "april.", "maj", "juni", "juli", "aug.", "sept.", "okt.", "nov.", "dec."],
        DE: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
        RO: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iunie", "Iulie", "Aug.", "Sept.", "Okt.", "Noem.", "Dec."],
        TT: ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
        BG: ["яну", "февр", "март", "април", "май", "юни", "юли", "авг", "септ", "окт", "ноем", "дек"],
        AR: ["كَانُون الثَّانِي", "شُبَاط", "آذَار\t", "نَيْسَان", "أَيَّار", "حَزِيرَان", "تَمُّوز", "آب", "أَيْلُول", "تِشْرِين الْأَوَّل\t", "تِشْرِين الثَّانِي\t", "كَانُون الْأَوَّل\t"],
    },
    STATES: { MAXIMIZED: "maximized", MINIMIZED: "minimized", CLOSED: "closed" },
    GATEWAYS: { 1e3: "vk", 2e3: "fb", 3e3: "go", 4e3: "guid", 5e3: "tg", 6e3: "guest" },
    LOGIN_METHODS: { 1e3: "vk", 2e3: "fb", 3e3: "google", 5e3: "tg", 6e3: "guest" },
    MINIMUM_LEFT_DAYS_OF_TRIAL: 0,
    // 9999999999999999
    DAYS_OF_TRIAL: 0,
    NOTIFICATION_BLOCK_MAX_HEIGHT_PERCENT: 0.4,
    NOTIFICATION_BLOCK_MIN_HEIGHT_PX: 20,
    COUNT_OF_SOCKET_VIABILITY_CHECKS: 3,
    NEW_MESSAGE_COUNT: 0,
    NEW_MESSAGE_COUNT_NA: 0,
    STICKY_CHAT_VAL: 5,
    CHAT_SETTINGS_VERSION: 7,
    DOCUMENT_TITLE: document.title,
    PROTOCOL: window.location.protocol.slice(0, -1),
    DEFAULT_MESSAGE_FONT_SIZE: 13,
    DEFAULT_REPLIED_MESSAGE_FONT_SIZE: 12,
    DEFAULT_MESSAGE_DATE_FONT_SIZE: 11,
    DEFAULT_MESSAGE_USER_TYPE_FONT_SIZE: 10,
    DEFAULT_MESSAGE_ACTION_REPLY_FONT_SIZE: 11,
    DEFAULT_MESSAGE_ACTION_DELETE_SIZE: 11,
    DEFAULT_MESSAGE_ACTION_BAN_SIZE: 11,
    DEFAULT_MESSAGE_ACTION_MENU_FONT_SIZE: 18,
    DEFAULT_MESSAGE_AUTH_NAME_LINE_HEIGHT: 19,
    DEFAULT_MESSAGE_MESSAGE_ACTION_LINE_HEIGHT: 25,
    DEFAULT_MESSAGE_MESSAGE_LINE_HEIGHT: 17,
    DEFAULT_AUDIO_PLAYER_HEIGHT: 30,
    DEFAULT_AUDIO_PLAYER_TIMER_FONT_SIZE: 10,
    DEFAULT_INPUT_FONT_SIZE: 13,
    DEFAULT_HISTORY_PLUG_HEIGHT: 375,
    DEFAULT: { CHAT_MIN_HEIGHT: 238, CHAT_MIN_WIDTH: 290, CHAT_MIN_WIDTH_WITHOUT_AVATARS: 250 },
    COUNTER_NAMES: ["web", "vk", "telegram"],
    COLORS: {
        headBackgroundColor: "#556894",
        headTextColor: "#fff",
        bodyBackgroundColor: "#F7F8FC",
        bodyTextColor: "#121212",
        adminBodyTextColor: "#121212",
        moderBodyTextColor: "#121212",
        inputBackgroundColor: "#fff",
        inputTextColor: "#121212",
        linksBackgroundColor: "#fff",
        linksTextColor: "#2B6DAD",
        LIGHTEN: 0.2,
        DARKEN: -0.1,
    },
    MOBILE_SETTINGS: { HEAD_BUTTON_WIDTH: "37px", HEAD_HEIGHT: "40px" },
    FILE_LIMITS: { SIZE_LIMIT: 1024, COUNT_LIMIT: 10 },
    DATE: { DATE_TIME_ATTR_NAME: "datetime", M_SECS_IN_DAY: 864e5 },
    LOCK_SEND_MESSAGE: !1,
    LOGIN_CALLBACK: null,
    LOGOUT_CALLBACK: null,
    NODES_CLASSES: {
        RADIAL_BETWEEN_BLOCKS: "chatbro_message_radial",
        UNCHECKED_MESSAGE_CLASS: "unchecked_message",
        MESSAGE_CLASS: "chatbro_message",
        BLOCKED_MESSAGE_CLASS: "chatbro_message_blocked",
        UNCHECKED_SYSTEM_MESSAGE_CLASS: "unchecked_system_message",
        VIDEO_ATTACH_CLICK_CLASS: "chatbro_message_video_attachment_click",
        MEDIA_ATTACH_CLASS: "chatbro_message_media_attachment_preview",
        MESSAGE_ACTIONS_CLASS: "chatbro_message_actions",
        MESSAGE_ACTION_DIV_CLASS: "chatbro_message_action_div",
        MESSAGE_REPLY_CLASS: "chatbro_message_action_reply",
        MESSAGE_CLOSE: "chatbro_message_close",
        MESSAGE_BAN_CLASS: "chatbro_message_action_ban",
        MESSAGE_MENU_CLASS: "chatbro_message_action_menu",
        MESSAGE_DELETE_CLASS: "chatbro_message_action_delete",
        MESSAGE_TD: ".chatbro_messages .chatbro_message td",
        MESSAGE_TEXT: "chatbro_message_text",
        MESSAGE_AUTH_NAME: "chatbro_message_auth_name",
        MESSAGE_DATE: "chatbro_message_date",
        GO_TO_CHAT: "chatbro_goto_chat",
        DROPDOWN_DIVIDER: "chatbro_dropdown_divider",
        DROPDOWN_DIVIDER_BORDER: "chatbro_dropdown_menu_link",
        INVITE_BUTTON: "chatbro_invite_button",
        HEADER_ALARM: "chatbro_header_alarm",
        ALARM_ICON: "chatbro_alarm_ico",
        VK_LOGIN: "chatbro_vk_login",
        TG_LOGIN: "chatbro_tg_login",
        FB_LOGIN: "chatbro_fb_login",
        GO_LOGIN: "chatbro_go_login",
        LOGOUT: "chatbro_logout",
        CHANGE_PLAN: "chatbro_dropdown_menu_plan_change",
        DROPDOWN: "chatbro_dropdown_menu",
        SMILES: "chatbro_smiles_menu",
        COPYRIGHT_LINK: "chatbro_copyright_link",
        FRAMES: "chatbro_frame",
        MESSAGE_TEXT_WRAPPER: "chatbro_message_wrapped",
        MESSAGE_REPLY: "chatbro_message_attachment_reply",
        SMILE_BUTTON: "chatbro_open_smiles_button",
        SMILES_MENU: "chatbro_smiles_menu",
        SMILES_LIST: "chatbro_smiles",
        SMILE_WRAPPER: "chatbro_smile_wrapper",
        SMILE_TIPPY: "chatbro_open_smiles_button_tippy",
        SMILE: "emojione",
        MODAL_CLOSE: "chatbro_modal_close",
        FILE_ATTACH: "chatbro_message_attachment_file",
        MESSAGE_IMAGE: "chatbro_message_image",
        USER_MENU: "chatbro_dropdown_menu_user",
        USER_MENU_NAME: "chatbro_dropdown_menu_user_info_name",
        USER_MENU_AVATAR: "chatbro_dropdown_menu_user_avatar",
        USER_MENU_GATEWAY: "chatbro_dropdown_menu_user_info_gateway",
        USER_MENU_TYPE: "chatbro_dropdown_user_type",
        ALERT: "chatbro_alert",
        ADD_FUNDS: "chatbro_add_funds",
        EDIT_PLAN: "chatbro_plan_edit_icon",
        PLAN_NAME: "chatbro_dropdown_menu_plan_name",
        AVATAR_BLOCK: "chatbro_message_avatar_block",
    },
    USER_NAME_RE: /[^a-zA-Zа-яёА-ЯЁ0-9\u0600-\u06ff\s]/gi,
    URL_RE: /\b((http|ftp|https):\/\/)?(?:www\.)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi,
    PLAYERS_RE: {
        youtube: [
            /\b(?:https?:\/\/)?(?:www\.)?youtube\.(?:com|ru)\/watch\?(?:\w+?=\w+?&)*v=([\w\-]{11})(?:\w+?=\w+?&)*\b/gim,
            /\b(?:https?:\/\/)?youtu\.be\/([\w\-]{11})\b/gim,
            /\b(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([\w\-]{11})\b/gim,
        ],
        vimeo: [],
        photo: [/\b((?:https?:\/\/)?[\/\.\-\w]+\.(?:jpg|jpeg|gif|png|svg)(?:\?(?:\w+=\w*)*)?)\b/gim],
    },
    createDebugger: function () {
        var a = { log: function () {}, error: function () {}, assert: function () {} };
        try {
            if ("undefined" != typeof console) {
                if (!this.enableConsole) {
                    for (var b in console) a[b] = function () {};
                    return a;
                }
                for (var b in console) "function" == typeof console[b] && (a[b] = console[b].bind(window.console, "ChatBro debug: "));
            }
            return a;
        } catch (c) {
            return this.chatTools.onFail(c), a;
        }
    },
    createCustomEvents: function () {
        var a = this;
        try {
            var b = ["newMessage", "beforeSendMessage", "chatLoaded", "maximizeChat", "minimizeChat", "chatInputClick", "chatbroPtCountChanging"];
            (a.eventsCache = {}), (a.customEvents = {});
            for (var c in b)
                if (b.hasOwnProperty(c)) {
                    var d = b[c];
                    (a.eventsCache[d] = {}), (a.eventsCache[d].needCheck = !0);
                }
            (a.customEvents.newMessage = document.createEvent("Event")),
                a.customEvents.newMessage.initEvent("newMessage", !0, !0),
                (a.customEvents.newMessage.message = null),
                (a.customEvents.newMessage.messageDiv = null),
                (a.customEvents.newMessage.chat = a),
                (a.customEvents.beforeSendMessage = document.createEvent("Event")),
                a.customEvents.beforeSendMessage.initEvent("beforeSendMessage", !0, !0),
                (a.customEvents.beforeSendMessage.chat = a),
                (a.customEvents.beforeSendMessage.onSuccess = a.sendMessage.bind(a)),
                (a.customEvents.beforeSendMessage.onFail = function (b) {
                    a.alertControl.showWarningMessage(b);
                }),
                (a.customEvents.chatLoaded = document.createEvent("Event")),
                a.customEvents.chatLoaded.initEvent("chatLoaded", !0, !0),
                (a.customEvents.chatLoaded.chat = a),
                (a.customEvents.maximizeChat = document.createEvent("Event")),
                a.customEvents.maximizeChat.initEvent("maximizeChat", !0, !0),
                (a.customEvents.maximizeChat.chat = a),
                (a.customEvents.minimizeChat = document.createEvent("Event")),
                a.customEvents.minimizeChat.initEvent("minimizeChat", !0, !0),
                (a.customEvents.minimizeChat.chat = a),
                (a.customEvents.chatInputClick = document.createEvent("Event")),
                a.customEvents.chatInputClick.initEvent("chatInputClick", !0, !0),
                (a.customEvents.chatInputClick.chat = a),
                (a.customEvents.chatbroPtCountChanging = document.createEvent("Event")),
                a.customEvents.chatbroPtCountChanging.initEvent("chatbroPtCountChanging", !0, !0),
                (a.customEvents.chatbroPtCountChanging.chat = a),
                (a.customEvents.chatbroPtCountChanging.ptCount = null);
        } catch (e) {
            a.chatTools.onFail(e);
        }
    },
    oneTimeEvent: function (a, b, c, d) {
        var e = function (a) {
            return a.target.removeEventListener(a.type, e), c(a, d);
        };
        a.addEventListener(b, e);
    },
    bindChatEvents: function () {
        var a = this;
        try {
            document.addEventListener("mouseup", this.events.onChatActionMouseUp),
                (window.onorientationchange = function () {
                    setTimeout(a.events.onOrientationChange, 0);
                }),
                this.hideChatArea && (this.hideChatArea.addEventListener("mouseup", this.events.onHideChatAreaClick), this.hideChatArea.addEventListener("touchmove", this.events.onHideChatAreaClick)),
                document.addEventListener("beforeSendMessage", a.events.onSendMessage);
            var b = this.NODES.chatCaptionDiv[0],
                c = this.NODES.chatCaptionDiv[1];
            if (
                (this.allowMinimizeChat || (!this.allowMinimizeChat && this.isMobile)
                    ? ((c.style.cursor = "pointer"), (c.onclick = this.maximizeChat.bind(this)), this.NODES.chatMinimizeButton && (this.NODES.chatMinimizeButton.onclick = this.minimizeChat.bind(this)))
                    : ((b.style.cursor = "default"), (c.style.cursor = "default")),
                this.allowMoveChat
                    ? ((this.isDraggable = !1),
                      this.NODES.chatCaptionDiv[0] && ((this.NODES.chatCaptionDiv[0].style.cursor = "move"), (this.NODES.chatCaptionDiv[0].onmousedown = this.events.onChatHeaderMouseDown)),
                      document.addEventListener("mousemove", this.events.onChatHeaderMouseMove))
                    : window.addEventListener("resize", function () {
                          a.geometry.setChatMessagesWrapperHeight(), a.geometry.setChatNameWidth(), a.conControl.uipreload.reGenerate();
                      }),
                window.addEventListener("resize", this.events.onWindowResize),
                this.hideMessagesOverflow &&
                    this.NODES.chatMessagesWrapperDiv &&
                    ((this.NODES.chatMessagesWrapperDiv.onmousewheel = this.events.onMouseWheel),
                    (this.NODES.chatMessagesWrapperDiv.onwheel = this.events.onMouseWheel),
                    (this.touchStart = { y: 0 }),
                    this.NODES.chatMessagesWrapperDiv.addEventListener("touchstart", this.events.onMouseWheel),
                    this.NODES.chatMessagesWrapperDiv.addEventListener("touchmove", this.events.onMouseWheel),
                    this.isMobile && (this.NODES.chatMessagesWrapperDiv.style.overscrollBehavior = "contain")),
                this.NODES.chatMessagesWrapperDiv && (this.NODES.chatMessagesWrapperDiv.onscroll = this.events.onMessagesScroll.bind(this, !1)),
                this.NODES.chatMessagesScrollToLast &&
                    ((this.NODES.chatMessagesScrollToLast.onclick = this.events.onScrollToLastClick),
                    (this.NODES.chatMessagesScrollToLast.style.bottom = this.allowSendMessages || (this.allowSendMessagesForAdminOnly && this.uia) ? "50px" : "13px")),
                this.NODES.chatNewMessagesCountWrapperMaxDiv && (this.NODES.chatNewMessagesCountWrapperMaxDiv.onclick = this.events.onScrollToLastClick),
                this.allowResizeChat)
            ) {
                if (this.allowMoveChat) {
                    this.isResizable = !1;
                    for (var d = this.NODES.chatMaxDiv.getElementsByClassName(this.NODES_CLASSES.FRAMES), e = 0; e < d.length; e++) {
                        var f = d[e];
                        f && (f.onmousedown = this.events.onChatResizerMouseDown);
                    }
                }
                document.addEventListener("mousemove", this.events.onChatResizerMouseMove);
            }
        } catch (g) {
            a.chatTools.onFail(g);
        }
    },
    makeRequest: function (a) {
        function b() {
            (d.upload.onprogress = k), (d.onload = l), (d.abort = m);
        }
        var c,
            d,
            e = null,
            f = null,
            g = !0,
            h = !1,
            i = function () {},
            j = function () {},
            k = function () {},
            l = function () {},
            m = function () {};
        if ("undefined" == typeof a) return void this.debug.error("makeRequest: Не заданны параметры запроса");
        if (!a.hasOwnProperty("url")) return void this.debug.error("makeRequest: Не задан url запроса");
        c = a.url;
        var n = a.type && a.type.toUpperCase();
        if (
            (("POST" !== n && "GET" !== n) || (e = a.type.toUpperCase()),
            a.hasOwnProperty("data") && (f = a.data),
            a.hasOwnProperty("success") && (i = a.success),
            a.hasOwnProperty("error") && (j = a.error),
            a.hasOwnProperty("progress") && (k = a.progress),
            a.hasOwnProperty("load") && (l = a.load),
            a.hasOwnProperty("abort") && (m = a.abort),
            a.hasOwnProperty("async") && (g = a.async),
            a.hasOwnProperty("auth") && (h = a.auth),
            (d = a.hasOwnProperty("xhr") ? a.xhr : new XMLHttpRequest()),
            (d.withCredentials = !0),
            (d.onreadystatechange = function () {
                if (4 === d.readyState)
                    if (200 === d.status) {
                        var a = JSON.parse(d.responseText);
                        i.bind(d)(a);
                    } else j(d.status);
            }),
            "GET" === e)
        ) {
            if (null !== f) {
                h && (f.eo = this.NODES.chatTopBorder.title), (c += "?");
                var o = [];
                for (var p in f) f.hasOwnProperty(p) && o.push(encodeURIComponent(p) + "=" + encodeURIComponent(f[p]));
                c += o.join("&");
            }
            d.open("GET", c, g), b(), d.send(null);
        }
        "POST" === e && (d.open("POST", c, g), h && (f.eo = this.NODES.chatTopBorder.title), f instanceof FormData ? (b(), d.send(f)) : d.send(JSON.stringify(f)));
    },
    getCsrfToken: function (a) {
        var b = this;
        try {
            b.makeRequest({
                url: b.chatbroWwwHost + "/get_csrf_token/",
                type: "GET",
                async: !1,
                success: function (c) {
                    return a.bind(b)(c.csrfToken);
                },
                error: b.chatTools.onFail,
            });
        } catch (c) {
            b.chatTools.onFail(c);
        }
    },
    goTo: function (a, b, c, d, e) {
        var f = this;
        if ("undefined" != typeof b) {
            var g = Object.keys(b)
                .map(function (a) {
                    return a + "=" + encodeURIComponent(b[a]);
                })
                .join("&");
            a += "?" + g;
        }
        c
            ? ((e.location = a), (f.LOGIN_CALLBACK = d))
            : this.makeRequest({
                  url: a,
                  type: "GET",
                  success: function (a) {
                      if (a.success)
                          switch (a.type) {
                              case "login":
                                  a.user.isGuest && f.setLoggedUser(a.user, !0), d && "function" == typeof d && d();
                                  break;
                              case "logout":
                                  f.NODES.chatTopBorder.title = null;
                                  break;
                              default:
                                  f.chatTools.onFail("Unknow type " + a.type);
                          }
                      a.error && (f.modalWindowControl.hide(), f.alertControl.showWarningMessage("Failed to log in", 5e3));
                  },
                  error: function () {
                      f.modalWindowControl.hide(), f.alertControl.showWarningMessage("Failed to log in", 5e3);
                  },
              });
    },
    vkLogin: function (a) {
        var b = window.open("about:blank", "Chatbro Login", "width=650,height=450"),
            c = !0,
            d = window.location.href + Date.now(),
            e = btoa(unescape(encodeURIComponent(d)));
        this.getCsrfToken(function () {
            this.goTo(
                "https://oauth.vk.com/authorize",
                { client_id: 4943853, display: "page", response_type: "code", v: "5.45", redirect_uri: this.chatbroWwwHost + "/vk_login?clientId=" + this.clientId + "&chatId=" + this.chatId + "&cr=" + e },
                c,
                a,
                b
            );
        });
    },
    guestLogin: function (a, b) {
        var c = window.open("about:blank", "Chatbro Login", "width=650,height=450"),
            d = !0,
            e = window.location.href + Date.now(),
            f = btoa(unescape(encodeURIComponent(e)));
        this.getCsrfToken(function () {
            this.goTo(this.chatbroWwwHost + "/guest_login", { name: a, clientId: this.clientId, chatId: this.chatId, cr: f }, d, b, c);
        });
    },
    fbLogin: function (a) {
        var b = window.open("about:blank", "Chatbro Login", "width=650,height=450"),
            c = !0,
            d = window.location.href + Date.now(),
            e = btoa(unescape(encodeURIComponent(d)));
        this.getCsrfToken(function () {
            this.goTo(
                "https://www.facebook.com/dialog/oauth",
                { client_id: 0x59a3dd31f1420, response_type: "code", redirect_uri: this.chatbroWwwHost + "/fb_login?clientId=" + this.clientId + "&chatId=" + this.chatId + "&cr=" + e },
                c,
                a,
                b
            );
        });
    },
    goLogin: function (a) {
        var b = window.open("about:blank", "Chatbro Login", "width=650,height=450"),
            c = !0,
            d = window.location.href + Date.now(),
            e = btoa(unescape(encodeURIComponent(d)));
        this.getCsrfToken(function () {
            this.goTo(
                "https://accounts.google.com/o/oauth2/v2/auth",
                {
                    client_id: "1027644209181-q6v5v66sa5vblirih3lv9r347hi16j48.apps.googleusercontent.com",
                    redirect_uri: this.chatbroWwwHost + "/go_login",
                    response_type: "code",
                    state: this.clientId + "_" + this.chatId + "_" + e,
                    scope: "openid email profile",
                },
                c,
                a,
                b
            );
        });
    },
    tgLogin: function (a) {
        var b = window.open("about:blank", "Chatbro Login", "width=650,height=450"),
            c = !0,
            d = window.location.href + Date.now(),
            e = btoa(unescape(encodeURIComponent(d)));
        this.getCsrfToken(function () {
            this.goTo(this.chatbroWwwHost + "/tg_prelogin", { clientId: this.clientId, chatId: this.chatId, cr: e }, c, a, b);
        });
    },
    logout: function (a) {
        this.modalWindowControl.show(), this.dropdownMenuControl.active && this.dropdownMenuControl.hide(), this.goTo(this.chatbroWwwHost + "/logout", { clientId: this.clientId, chatId: this.chatId }, !1, a);
    },
    User: function (a) {
        (this.fullName = a),
            (this.setFullName = function (a) {
                this.fullName = a;
            });
    },
    MessageControl: function (a) {
        function b(a) {
            return (a = parseInt(a, 10)), d[a];
        }
        function c(a, b) {
            (a = parseInt(a, 10)), (d[a] = b);
        }
        var d = {};
        return { get: b, set: c };
    },
    SubbatchControl: function (a) {
        function b() {
            p.currentSubbatches = {};
        }
        function c() {
            return Object.keys(p.currentSubbatches).length;
        }
        function d() {
            var a = Object.keys(p.currentSubbatches).sort(function (a, b) {
                return parseInt(a, 10) - parseInt(b, 10);
            });
            return parseInt(a[0], 10) - i() || 0;
        }
        function e() {
            var a = Object.keys(p.currentSubbatches)
                .sort(function (a, b) {
                    return parseInt(a, 10) - parseInt(b, 10);
                })
                .reverse();
            return parseInt(a[0], 10) + i() || 0;
        }
        function f(a) {
            var b = Object.keys(p.currentSubbatches).sort().reverse();
            return b.slice(a - 1);
        }
        function g() {
            p.emptyCount += 1;
        }
        function h() {
            p.emptyCount = 0;
        }
        function i() {
            return p.emptyCount;
        }
        function j() {
            return o;
        }
        function k(a) {
            a && p.currentSubbatches.hasOwnProperty(a) && delete p.currentSubbatches[a];
        }
        function l(a) {
            a && (p.currentSubbatches[a] = p.currentSubbatches.hasOwnProperty(a) ? p.currentSubbatches[a] + 1 : 1);
        }
        function m() {}
        var n = a,
            o = n.isMobile ? 2 : 3,
            p = { emptyCount: 0 };
        return (
            (p.currentSubbatches = {}),
            {
                addCurrentSubbatches: l,
                deleteCurrentSubbatches: k,
                resetCurrentSubbatches: b,
                getTopSubbatchId: d,
                getBottomSubbatchId: e,
                getBottomSubbatchIds: f,
                getCurrentSubbatchCount: c,
                getEmptyCount: i,
                resetEmptyCount: h,
                incEmptyCount: g,
                getMaxSubbatchCount: j,
                log: m,
            }
        );
    },
    ConControl: function (a) {
        function b() {
            try {
                (C = new e(a)), (D = new d(a)), (E = new c(a));
            } catch (b) {
                console.error(b);
            }
            J.chatId &&
                n(function () {
                    J.messageReceivingChannels.indexOf("ws") !== -1 ? p() : q.bind(J, "/f")();
                });
        }
        function c(a) {
            function b() {
                d.chatTools.fadeIn(e);
            }
            function c() {
                d.chatTools.fadeOut(e, "bottom");
            }
            var d = a,
                e = d.chatTools.getChatElement("chatbro_messages_noconnection");
            return { show: b, hide: c };
        }
        function d(a) {
            function b() {
                var a = e(),
                    b = "";
                if ((f.chatTools.fadeIn(i, "bottom"), L !== a)) {
                    L = a;
                    for (
                        var c = f.colorsCtrl.lightOrDark(f.COLORS.bodyBackgroundColor, 0.3, -0.08),
                            d = f.colorsCtrl.lightOrDark(f.COLORS.bodyBackgroundColor, 0.5, -0.15),
                            g = "linear-gradient(to right, " + c + " 1%, " + d + " 18%," + c + " 33%)",
                            h = 0;
                        h < a;
                        h++
                    )
                        b += S.replace(new RegExp("%bg%", "g"), g).replace("%w_text%", f.chatTools.getRandomNumber(25, 216)).replace("%w_name%", f.chatTools.getRandomNumber(25, 100));
                    (j.innerHTML = b), (j.scrollTop = j.scrollHeight + 1e3);
                }
            }
            function c() {
                g && b();
            }
            function d() {
                f.chatTools.fadeOut(i, "center"), f.chatTools.fadeOut(f.NODES.chatMessageLoader), (g = !1);
            }
            function e() {
                var a = f.geometry.elementHeight(h);
                return Math.round(a / K);
            }
            var f = a,
                g = !0,
                h = f.chatTools.getChatElement("chatbro_messages_plug"),
                i = f.chatTools.getChatElement("chatbro_messages_preload"),
                j = f.chatTools.getChatElement("chatbro_fake_messages");
            return { show: b, reGenerate: c, hide: d };
        }
        function e(a) {
            function b() {
                try {
                    (m.style.visibility = "visible"), (m.style.opacity = 1);
                } catch (a) {}
            }
            function c() {
                try {
                    (m.style.visibility = "hidden"), (m.style.opacity = 0), clearInterval(k);
                } catch (a) {}
            }
            function d() {
                (n.style.display = "none"), (o.style.display = "none"), (p.style.display = "none"), (r.style.display = "none"), (q.style.display = "none"), (s.style.display = "none"), clearInterval(k);
            }
            function e(a) {
                a.style.display = t;
            }
            function f() {
                d(), e(s), e(n), b();
            }
            function g() {
                d(), e(o), e(q), b();
            }
            function h(a) {
                clearInterval(k);
                var b = ((a % 6e4) / 1e3).toFixed(0);
                (r.textContent = b + " sec"),
                    e(r),
                    (k = setInterval(function () {
                        b--, (r.textContent = b + " sec"), b <= 0 && clearInterval(k);
                    }, 1e3));
            }
            function i(a, c, g) {
                d(),
                    e(s),
                    e(p),
                    h(a),
                    e(q),
                    (q.onclick = function () {
                        clearTimeout(g), (F = 5e3), f(), c(), I && (I(), (I = null));
                    }),
                    b();
            }
            function j() {
                c();
            }
            var k,
                l = a,
                m = l.NODES.chatConnectingBottomDiv,
                n = l.NODES.chatConnectingBottomMessageConnectingDiv,
                o = l.NODES.chatConnectingBottomMessageNoconnectingDiv,
                p = l.NODES.chatConnectingBottomMessageReconnectDiv,
                q = l.NODES.chatConnectingBottomBtn,
                r = l.NODES.chatConnectingBottomMessageConnectingSecDiv,
                s = l.NODES.chatConnectingBottomLoader,
                t = "inline-block";
            return { connecting: f, noconnection: g, reconnecting: i, connected: j, hide: c };
        }
        function f() {
            l("connecting"), C.connecting();
        }
        function g() {
            l("connected"), C.connected(), E.hide();
        }
        function h(a, b, c) {
            l("reconnect"), C.reconnecting(a, b, c), E.hide();
        }
        function i() {
            l("noconnection"), D.hide(), E.show(), C.noconnection();
        }
        function j() {
            return P;
        }
        function k() {
            return j() == Q.connected;
        }
        function l(a) {
            if (void 0 === Q[a]) throw new Error("Unknown connection status");
            P = Q[a];
        }
        function m(a, b) {
            return (x = "wss://" + J.chatbroWwwSubdomain.replace(/www\./, "ws.") + "/ws" + b), (y = "https://" + J.chatbroWwwSubdomain.replace(/www\./, "lp" + (J.chatId % 16) + ".")), a.bind(J)();
        }
        function n(a) {
            f();
            var b = "?chatId=" + J.chatId + "&clientId=" + J.clientId;
            try {
                J.makeRequest({
                    url: "https://" + J.chatbroWwwSubdomain.replace(/www\./, "lpgs.") + "/g",
                    type: "POST",
                    data: { chatId: J.chatId },
                    success: function (c) {
                        var d = parseInt(c.lp, 10);
                        return isNaN(d) && (d = J.chatId % 16), (x = "wss://" + J.chatbroWwwSubdomain.replace(/www\./, "ws.") + "/ws" + b), (y = "https://" + J.chatbroWwwSubdomain.replace(/www\./, "lp" + d + ".")), a.bind(J)();
                    },
                    error: function (c) {
                        return J.chatTools.onFail(c), m.bind(J)(a, b);
                    },
                });
            } catch (c) {
                return J.chatTools.onFail(c), m.bind(J)(a, b);
            }
        }
        function o(a) {
            var b = Date.now() - G;
            if (b < (F || O)) {
                var c = 2e3 * J.chatTools.getRandomNumber(1, 10);
                F = F ? F + c : O;
                var d = F - b,
                    e = setTimeout(function () {
                        f(), a(), I && (I(), (I = null));
                    }, d);
                return void h(d, a, e);
            }
            f(), a();
        }
        function p() {
            if (((M += 1), J.webSocket))
                try {
                    (J.webSocket.onclose = null), J.webSocket.close();
                } catch (a) {}
            if (
                ((G = Date.now()),
                (J.webSocket = new WebSocket(x)),
                (J.webSocket.onopen = function () {
                    g(), (A = !0);
                }),
                (J.webSocket.onmessage = function (a) {
                    J.processServerResponse(JSON.parse(a.data));
                }),
                (J.webSocket.onclose = function (a) {
                    (B = !0), J.notAllowReConnect || o(A && J.messageReceivingChannels.indexOf("ws") !== -1 && M < J.websocketMaxConnectionCount ? p.bind(J) : q.bind(J, "/f"));
                }),
                !A && B)
            )
                var b = 0,
                    c = setInterval(function () {
                        (A || B) && clearInterval(c), b >= J.COUNT_OF_SOCKET_VIABILITY_CHECKS && (!A && B && J.webSocket && J.webSocket.close(), clearInterval(c)), b++;
                    }, 1e3);
            "undefined" == typeof J.webSocket.readyState && q("/f");
        }
        function q(a, b) {
            if (!R) {
                if (!a) var a = "/p";
                if (!b) var b = {};
                (b.chatId = J.chatId), (b.clientId = J.clientId), (b.rand = Math.random()), (J.isLpConnection = !0), (G = Date.now());
                var c = y + a;
                J.makeRequest({
                    url: c,
                    type: "POST",
                    data: b,
                    success: function (b) {
                        return g(), (H = !1), J.processServerResponse(b), (M = 0), (N = 0), (z = !0), "/f" === a ? q("/p") : void ("/m" !== a && "/u" !== a && "/tp" !== a && q());
                    },
                    error: function (c) {
                        return (
                            (N += 1), H ? void i() : N >= 3 && J.chatState === J.STATES.MINIMIZED ? void i() : void o(A && J.messageReceivingChannels.indexOf("ws") !== -1 && M < J.websocketMaxConnectionCount ? p.bind(J) : q.bind(J, a, b))
                        );
                    },
                });
            }
        }
        function r(a) {
            if (A) a();
            else
                var b = setInterval(function () {
                    if (J.isLpConnection) return clearInterval(b), a();
                    if (A) return clearInterval(b), a();
                }, 100);
        }
        function s(a) {
            var b = 300,
                c = 0;
            if (z) a(!0);
            else
                var d = setInterval(function () {
                    return c++, c >= b ? (clearInterval(d), a(!1)) : z ? (clearInterval(d), a(!0)) : void 0;
                }, 100);
        }
        function t(a) {
            (I = a), (H = !0);
        }
        function u() {
            (R = !0), i();
        }
        function v() {
            r(function () {
                J.isLpConnection
                    ? s(function (a) {
                          if (!a) return void t(v);
                          var b = { allowUploadMessages: J.allowUploadMessages };
                          J.batchId && (b.batchId = J.batchId), q("/m", b);
                      })
                    : ((I = v), J.webSocket.send(JSON.stringify({ type: "maximizeChat", batchId: J.batchId, allowUploadMessages: J.allowUploadMessages })));
            });
        }
        function w() {
            J.isLpConnection ? J.conControl.makeLongPollRequest("/tp") : J.webSocket.send(JSON.stringify({ type: "tp" }));
        }
        var x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J = a,
            K = 56,
            L = 0,
            M = 0,
            N = 0,
            O = 100,
            P = 0,
            Q = { connecting: 0, connected: 1, reconnect: 2, noconnection: 3 },
            R = !1,
            S =
                '<tr class="chatbro_fake_message"><td class="chatbro_fake_message_empty_block"></td>' +
                (J.showUsersAvatars ? '<td class="chatbro_fake_message_avatar_block"><span class="chatbro_fake_guest_avatar" style="background:%bg%;"></span></td>' : "") +
                '<td class="chatbro_fake_message_td_message"><div class="chatbro_fake_message_wrapped"><div class="chatbro_fake_message_auth_name"><span class="chatbro_fake_message_name" style="width:%w_name%px;background:%bg%;"></span><span class="chatbro_fake_message_info"><span class="chatbro_fake_message_user_type chatbro_fake_message_admin" style="background:%bg%;"></span><div class="chatbro_fake_message_date" style="background:%bg%;"></div></span></div><div class="chatbro_fake_message_text" style="width:%w_text%px;background:%bg%;"></div></div></td><td class="chatbro_fake_message_empty_block"></td></tr>';
        return (
            b(),
            {
                init: b,
                createWebSocket: p,
                makeLongPollRequest: q,
                checkWebsocketConnection: r,
                checkLongPollConnection: s,
                connecting: f,
                connected: g,
                reconnecting: h,
                noconnection: i,
                isConnnected: k,
                uipreload: D,
                stopLP: u,
                getSubbatchMessages: v,
                getPatrons: w,
            }
        );
    },
    ChatTools: function (a) {
        function b(a) {
            if (a)
                if (a.hasOwnProperty("type"))
                    switch (a.type) {
                        case "UserIsBanned":
                            var b = JSON.parse(a.error),
                                c = $.translatedText.banMessage + "&nbsp;<span>" + $.chatTools.getDateDDMMYY(b.duration) + "&nbsp;</span><span>" + $.chatTools.getTimeHHMM(b.duration) + "</span>";
                            b.reason && (c += "<br><span>" + b.reason + "</span>"), $.alertControl.showErrorMessage(c, 5e3);
                            break;
                        case "IncorrectSignature":
                            var c = "Incorrect signature.",
                                d = $.translatedText.moreInfo,
                                e = c + ' <a href="https://www.chatbro.com/documentation#errors">' + d + "</a>";
                            $.alertControl.showWarningMessage(e);
                            break;
                        case "MismatchDomain":
                            var c = $.translatedText.mismatchDomain,
                                f = JSON.parse(a.error),
                                g = f.wrongDomain,
                                h = f.correctDomain;
                            (c = c.replace("{wrongDomain}", g)), (c = c.replace("{correctDomain}", h)), $.alertControl.showWarningMessage(c);
                            break;
                        case "SiteUserException":
                            $.alertControl.showWarningMessage(a.error);
                            break;
                        case "UserInfo":
                            $.alertControl.showInfoMessage(a.error);
                            break;
                        case "BanError":
                            "You can't block administrator" === a.error
                                ? $.alertControl.showWarningMessage($.translatedText.cantBanAdmin)
                                : "You can't block other moderators" === a.error
                                ? $.alertControl.showWarningMessage($.translatedText.cantBanOtherModer)
                                : $.alertControl.showErrorMessage(a.error);
                            break;
                        case "RefererException":
                            $.alertControl.showErrorMessage($.translatedText.noReferralAlert);
                            break;
                        case "ChatLoginException":
                            var i = JSON.parse(a.error);
                            ($.allowedLoginMethods = JSON.parse(i.allowedLoginMethods)), ($.customLoginLink = i.customLoginLink || null);
                            var j = i.currentLoginMethod || !1;
                            $.modalWindowControl.setAllowedLoginStatus(), $.modalWindowControl.configurateLoginMenu();
                            var k = "Something went wrong. Please try again later";
                            j && (k = $.translatedText["loginIsNotAllowed_" + j]),
                                k
                                    ? ((k +=
                                          $.isGuestLoginAllowed || $.isSocialLoginAllowed || $.isCustomLinkLogin ? ' <a class="chatbro_system_messages_sign_in">' + $.translatedText.signIn + "</a>" : " " + $.translatedText.registeredOnly),
                                      $.alertControl.showWarningMessage(k))
                                    : console.error("Chatbro error:", a);
                            break;
                        case "TooOftenSending":
                            $.alertControl.showWarningMessage($.translatedText.tooOftenSending, 2e3);
                            break;
                        case "BlockedFrequentSend":
                            var l = parseInt(a.error, 10);
                            $.inputControl.showDelayIndicatorInSec.bind($, l)();
                            break;
                        case "OptionNotAvailableOnBasicPlan":
                            // var m = $.isItTrialPeriod && $.bp && $.insufficientFundsToDisableAd && $.showAd,
                            var m = $.isItTrialPeriod && $.bp && $.insufficientFundsToDisableAd && $.showAd,
                                n = $.showAd || m,
                                o = $.translatedText[m ? "disabledUploadingAlertInsuf" : "disabledUploadingAlertBasic"],
                                p = $.translatedText.disabledUploadingAlertPayBtn.replace("%enc%", $.encodedChatId);
                            $.alertControl.showWarningMessage(o + ($.hidePayForChatLink && !n ? "" : " " + p));
                            break;
                        case "OptionNotAvailableWithoutAdmin":
                            $.alertControl.showErrorMessage($.translatedText.optionNotAvailableWithoutAdmin);
                            break;
                        case "NotEnoughBalanceToUpload":
                            var q = $.translatedText.notEnoughBalanceToUpload.replace("%enc%", $.encodedChatId);
                            $.alertControl.showErrorMessage(q);
                            break;
                        case "MessageDeclined":
                        case "FilterFunctionException":
                        case "YouAreNotAllowed":
                        case "SsoException":
                        case "ValueIsExceeded":
                            $.alertControl.showErrorMessage(a.error);
                            break;
                        case 500:
                        case "UserException":
                            var k = $.translatedText.somethingWentWrong;
                            $.alertControl.showWarningMessage(k, 3e3);
                            break;
                        case "UserWarning":
                            $.alertControl.showWarningMessage(a.error);
                            break;
                        case 413:
                            $.alertControl.showWarningMessage("Payload Too Large");
                            break;
                        case 404:
                            $.alertControl.showErrorMessage("Not found");
                            break;
                        default:
                            console.error("Chatbro error:", a);
                    }
                else
                    switch (a) {
                        case 500:
                            var k = $.translatedText.somethingWentWrong;
                            $.alertControl.showWarningMessage(k, 3e3);
                            break;
                        case "UserWarning":
                            $.alertControl.showWarningMessage(a.error);
                            break;
                        case 413:
                            $.alertControl.showWarningMessage("Payload Too Large");
                            break;
                        case 404:
                            $.alertControl.showErrorMessage("Not found");
                            break;
                        default:
                            console.error("Chatbro error:", a);
                    }
            else console.error("Chatbro error: unknown error");
        }
        function c() {
            $.isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
        function d(a) {
            if ("undefined" != typeof a) {
                if ("string" != typeof a && "object" != typeof a) return d();
                var b = new Date([a]);
                return "Invalid Date" !== b ? b : d();
            }
            var b = Date.now();
            return new Date(b);
        }
        function e(a) {
            var b = d(a),
                c = ":";
            return "EN" === $.chatLanguage ? f(b) : h(b.getHours()) + c + h(b.getMinutes());
        }
        function f(a) {
            var b = a.getHours(),
                c = a.getMinutes(),
                d = b >= 12 ? "pm" : "am";
            (b %= 12), (b = b ? b : 12), (c = c < 10 ? "0" + c : c);
            var e = b + ":" + c + " " + d;
            return e;
        }
        function g(a) {
            var b,
                c = d(a),
                e = $.MONTHS[$.chatLanguage],
                f = c.getMonth() + 1,
                g = h(c.getMonth() + 1);
            e && (b = e[f - 1]);
            var i = c.getDate(),
                j = h(c.getDate()),
                k = h(c.getFullYear()),
                l = h(new Date().getFullYear());
            switch ($.chatLanguage) {
                case "RU":
                case "PT":
                case "ES":
                case "FR":
                case "TT":
                case "BG":
                case "RO":
                case "AR":
                case "DE":
                    var m = " ";
                    return i + m + b + (l !== k ? m + c.getFullYear() : "");
                case "NL":
                    var m = ". ";
                    return i + m + b + (l !== k ? " " + c.getFullYear() : "");
                case "EN":
                    var m = " ";
                    return b + m + j + (l !== k ? " " + c.getFullYear() : "");
                default:
                    var m = ".";
                    return j + m + g + m + k;
            }
        }
        function h(a) {
            var b = ("0" + a).slice(-2);
            return b.length < 2 ? "00" : b;
        }
        function i(a) {
            if (!a) return [];
            var b = a.match($.URL_RE);
            return b
                ? b
                      .filter(function (a) {
                          return a.indexOf("/libs/emojione/assets/png/") === -1;
                      })
                      .map(function (a) {
                          try {
                              var b = new URL(a);
                              return { host: b.host, protocol: b.protocol, url: a };
                          } catch (c) {
                              try {
                                  var b = new URL("http://" + a);
                                  return { host: b.host, protocol: b.protocol, url: a };
                              } catch (c) {
                                  return null;
                              }
                          }
                      })
                : [];
        }
        function j(a, b) {
            var c = a.getElementsByClassName(b);
            return Array.prototype.slice.call(c);
        }
        function k(a, b) {
            var c = a.getElementsByTagName(b);
            return Array.prototype.slice.call(c);
        }
        function l(a, b) {
            var c = new RegExp("\\s" + b + "\\b|\\b" + b + "\\b", "g");
            a.className = a.className.replace(c, "");
        }
        function m(a, b) {
            O(a, b) || (a.className += " " + b);
        }
        function n() {
            l($.body, "unselectable");
        }
        function o() {
            m($.body, "unselectable");
        }
        function p(a, b) {
            if (!$.eventsCache[a].needCheck) return !0;
            var c = 0,
                d = document.getEventListeners(a);
            for (var e in d) d.hasOwnProperty(e) && e && d[e].type === a && c++;
            var f = c == b + 1;
            return f && ($.eventsCache[a].needCheck = !1), f;
        }
        function q(a) {
            var b = 0,
                c = document.getEventListeners();
            for (var d in c) d && c[d].type === a && b++;
            return b;
        }
        function r() {
            return $.isScrolledToBottom;
        }
        function s() {
            var a = $.NODES.chatSystemMessagesWrapperDiv;
            return a.scrollTop + a.offsetHeight >= a.scrollHeight;
        }
        function t() {
            $.NODES.chatMessagesWrapperDiv.scrollTop = $.NODES.chatMessagesWrapperDiv.scrollHeight + 1e3;
        }
        function u() {
            ($.allowChatMessagesScrollToLast = !1), $.NODES.chatMessagesWrapperDiv.scrollTo({ top: $.NODES.chatMessagesWrapperDiv.scrollHeight + 1e3, behavior: "smooth" });
        }
        function v() {
            $.NODES.chatSystemMessagesWrapperDiv.scrollTop = $.NODES.chatSystemMessagesWrapperDiv.scrollHeight + 1e3;
        }
        function w(a) {
            return $.isIE ? $.containerDiv.getElementsByClassName(a) : $.containerDivTest.getElementsByClassName(a);
        }
        function x(a) {
            return a.parentNode.removeChild(a);
        }
        function y(a) {
            var b = w(a);
            return b ? b[0] : b;
        }
        function z(a) {
            var b,
                c,
                d = "";
            for (c = 0; c < a.length; c++) (b = a.charCodeAt(c).toString(16)), (d += ("000" + b).slice(-4));
            return d;
        }
        function A() {
            var a;
            try {
                var b = window.orientation;
                void 0 === typeof b && (b = window.screen.orientation.angle);
            } catch (c) {
                return "desktop";
            }
            if (void 0 === typeof b || !$.isMobile) return "desktop";
            switch (b) {
                case -90:
                case 90:
                    a = "landscape";
                    break;
                default:
                    a = "portrait";
            }
            return $.chatMobileOrientation || a;
        }
        function B() {
            return this;
        }
        function C() {
            try {
                return window.self !== window.top;
            } catch (a) {
                return !0;
            }
        }
        function D() {
            return $.isChatInIframe ? top.window.location : window.location;
        }
        function E() {
            void 0 === this.orig && (this.orig = this.src),
                (this.src = "https://www.chatbro.com/images/no_image.png"),
                void 0 === this.c ? (this.c = 1) : this.c++,
                this.c > 6 ||
                    setTimeout(
                        function () {
                            this.src = this.orig;
                        }.bind(this),
                        this.c * this.c * 1e3
                    );
        }
        function F() {
            return $.chatTools.getDomArrayByClass($.NODES.chatMessagesTbody, $.NODES_CLASSES.UNCHECKED_MESSAGE_CLASS);
        }
        function G() {
            return $.chatTools.getDomArrayByClass($.NODES.chatMessagesTbody, $.NODES_CLASSES.MESSAGE_CLASS);
        }
        function H() {
            return $.chatTools.getDomArrayByClass($.NODES.chatMessagesTbody, $.NODES_CLASSES.BLOCKED_MESSAGE_CLASS);
        }
        function I(a) {
            $.chatTools.removeClass(a, $.NODES_CLASSES.UNCHECKED_MESSAGE_CLASS);
        }
        function J(a) {
            try {
                var b = $.chatTools.getDomArrayByClass(a, $.NODES_CLASSES.MESSAGE_ACTIONS_CLASS)[0];
                if (b) {
                    var c = $.chatTools.getDomArrayByClass(b, $.NODES_CLASSES.MESSAGE_ACTION_DIV_CLASS)[0];
                    c && b.removeChild(c);
                }
            } catch (d) {}
        }
        function K(a) {
            try {
                var b = $.chatTools.getDomArrayByClass(a, $.NODES_CLASSES.MESSAGE_ACTIONS_CLASS)[0];
                if (!b) return;
                var c = $.chatTools.getDomArrayByClass(a, "chatbro_message_name")[0],
                    d = $.chatTools.getDomArrayByClass(b, $.NODES_CLASSES.MESSAGE_MENU_CLASS)[0];
                if (!d && ($.uia || $.uim || 0 !== $.permissions.length)) {
                    var e = a.getAttribute("isadmin"),
                        f = a.getAttribute("ismoderator"),
                        g = a.getAttribute("canbemoder"),
                        h = !!e && ("true" === e || "isAdmin" === e),
                        i = !!f && ("true" === f || "isModerator" === f),
                        j = !!g && ("true" === g || "canBeModer" === g),
                        k = a.getAttribute("owner_id"),
                        l = a.getAttribute("message_id"),
                        m = document.createElement("div");
                    (m.className = $.NODES_CLASSES.MESSAGE_ACTION_DIV_CLASS), $.colorsCtrl.setColor(m, "border-color", $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 0.1, -0.05));
                    var n = document.createElement("div");
                    (n.className = $.NODES_CLASSES.MESSAGE_MENU_CLASS), (n.title = $.translatedText.menu);
                    var o = document.createElement("div");
                    (o.className = $.NODES_CLASSES.MESSAGE_BAN_CLASS), (o.title = $.translatedText.ban);
                    var p = document.createElement("div");
                    (p.className = $.NODES_CLASSES.MESSAGE_DELETE_CLASS),
                        (p.title = $.translatedText["delete"]),
                        m.appendChild(p),
                        m.appendChild(o),
                        m.appendChild(n),
                        b.appendChild(m),
                        0 === $.permissions.length || $.uia || $.uim || ($.permissions.indexOf("ban") === -1 && (o.style.display = "none"), $.permissions.indexOf("delete") === -1 && (p.style.display = "none")),
                        (n.onclick = function () {
                            $.modalWindowControl.show("menu", { adminsMessage: h, modersMessage: i, canBeModer: j, messageId: l, userId: k, userName: c ? c.textContent.trim() : "Menu" }, null);
                        }),
                        (o.onclick = function () {
                            $.modalWindowControl.show("ban", { messageId: l, chatId: $.chatId, userId: k });
                        }),
                        (p.onclick = function () {
                            (a.style.opacity = "0.5"),
                                $.makeRequest({
                                    url: $.chatbroWwwHost + "/delete_message/",
                                    type: "POST",
                                    auth: !0,
                                    data: {
                                        messageId: l,
                                        siteDomain: $.siteDomain,
                                        siteUserFullName: $.siteUserFullName,
                                        siteUserExternalId: $.siteUserExternalId,
                                        siteUserAvatarUrl: $.siteUserAvatarUrl,
                                        siteUserFullNameColor: $.siteUserFullNameColor,
                                        signature: $.signature,
                                        siteUserProfileUrl: $.siteUserProfileUrl,
                                        permissions: $.permissions,
                                    },
                                    success: function (a) {
                                        if (a.error) return $.chatTools.onFail(a);
                                    },
                                    error: $.chatTools.onFail,
                                });
                        });
                }
            } catch (q) {}
        }
        function L(a) {
            return !0;
        }
        function M(a, b) {
            a && (b && (a.style.transformOrigin = b), O(a, "chatbro_fade_in") || (a.className += " chatbro_fade_in"), O(a, "chatbro_fade_out") && l(a, "chatbro_fade_out"));
        }
        function N(a, b) {
            a && (b && (a.style.transformOrigin = b), O(a, "chatbro_fade_out") || (a.className += " chatbro_fade_out"), O(a, "chatbro_fade_in") && l(a, "chatbro_fade_in"));
        }
        function O(a, b) {
            return new RegExp("(\\s|^)" + b + "(\\s|$)").test(a.className);
        }
        function P(a, b) {
            return parseInt(Math.random() * (b - a) + a, 10);
        }
        function Q(a) {
            for (var b = $.topPatronsList, c = a && a.length ? a : $.chatTools.getDomArrayByClass(document, "chatbro_patron_block_top_table_wrapper"), d = 0; d < c.length; d++)
                !(function (a) {
                    if (a) {
                        var c,
                            d = "",
                            e = $.translatedText.noPatrons,
                            f =
                                '<div class="chatbro_patron_load_progress"><div style=" border-color: ' +
                                $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 0.8, -0.2) +
                                "; border-left-color: " +
                                $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 1.6, -0.5) +
                                ';" class="chatbro_patron_load_progress_radial"></div></div>';
                        if (b) {
                            if (Array.isArray(b) && !b.length) c = e;
                            else if (Array.isArray(b) && b.length) {
                                c = "<table class = chatbro_patron_block_top_table>";
                                for (var g = 0; g < 3; g++) {
                                    var h = b[g];
                                    h &&
                                        (c +=
                                            '<tr><td style="width:1%;padding-right: 5px!important;">' +
                                            (g + 1) +
                                            '.</td><td style="">' +
                                            h.fullName +
                                            '</td><td style="width:1%;text-align:right;font-size: 12px;">$' +
                                            h.tAmount +
                                            "</td></tr>");
                                }
                                (c += "</table>"),
                                    $.lastPatronIndex > 3 && (d = '<a class="chatbro_patron_block_top_button"  target="_blank" href="https://www.chatbro.com/patrons/' + $.encodedChatId + '">' + $.translatedText.list + "</a>");
                            }
                        } else c = f;
                        a.innerHTML = d + c;
                    }
                })(c[d]);
        }
        function R(a) {
            if (a) {
                var b;
                $.costs && $.costs.hasOwnProperty("cost") && (b = $.costs.cost);
                var c = $.showAd ? $.translatedText.changePlan : $.translatedText.addFunds,
                    d = $.showAd ? "https://www.chatbro.com/edit/" + $.encodedChatId + "#changePlan" : "https://www.chatbro.com/ru/account/#myFinanceAddFunds",
                    e =
                        '<a style="display:inline-flex;border-radius: 4px;opacity: 0.7; background:' +
                        $.COLORS.bodyTextColor +
                        "; color:" +
                        $.COLORS.bodyBackgroundColor +
                        ';" href="' +
                        d +
                        '" target="_blank" class="chatbro_patron_block_button_p">' +
                        c +
                        "</a>",
                    f =
                        '<div class="chatbro_patron_block">' +
                        ('<div class="chatbro_patron_block_button_wrapper">' + e + "</div>") +
                        (b ? '<div class="chatbro_patron_block_aproxcost">' + $.translatedText.approxCosts + ": " + b + "$</div>" : "") +
                        "</div>";
                (a.innerHTML = f), (a.style.display = "block");
            }
        }
        function S(a, b) {
            if (a)
                try {
                    var c = !$.isItTrialPeriod && !$.bp && $.insufficientFundsToDisableAd && !$.showAd,
                        d = $.showAd || c,
                        e = $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 0.3, -0.019),
                        f = $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 0.1, -0.05),
                        g = "" + ($.hidePayForChatLink && !d ? "" : "margin-top: 20px;") + "position:relative;padding: 5px 8px;border-radius: 4px;background:" + e + ";",
                        h =
                            '<div class="chatbro_patron_block_wr" style="' +
                            g +
                            '"><div class="chatbro_patron_block_top_title_divider" style="background:' +
                            $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor) +
                            '"></div><span class="chatbro_patron_block_top_title" style="background: ' +
                            e +
                            '">' +
                            $.translatedText.topPatrons +
                            '</span><div class="chatbro_patron_block_top_table_wrapper"></div></div>',
                        i = $.uip ? $.translatedText.supportThisChat : $.translatedText.becomeAPatron,
                        j = $.translatedText.payDescPremium,
                        k = $.translatedText.payDescBasic,
                        l =
                            '<a style="display:inline-flex;border-radius: 4px;opacity: 0.7; background:' +
                            $.COLORS.bodyTextColor +
                            "; color:" +
                            $.COLORS.bodyBackgroundColor +
                            ';" href="https://www.chatbro.com/p/' +
                            $.encodedChatId +
                            '" target="_blank" class="chatbro_patron_block_button_p">' +
                            i +
                            "</a>",
                        m =
                            ('<span style="display:inline-flex;border-radius: 4px;opacity: 0.7; background:' + $.COLORS.bodyTextColor + "; color:" + $.COLORS.bodyBackgroundColor + ';" class="chatbro_patron_block_button">' + i + "</span>",
                            '<div class="chatbro_patron_block">' +
                                ($.uip || ($.hidePayForChatLink && !d)
                                    ? ""
                                    : '<div style="height: 0;" class="chatbro_fade_out chatbro_patron_block_feat">' +
                                      (b ? '<div class="chatbro_patron_block_desc">' + ($.showAd ? k : j) + "</div>" : "") +
                                      '<ul class="chatbro_patron_block_features">' +
                                      ($.allowUploadFile ? '<li style="border-color:' + f + '" class="chatbro_patron_block_feature chatbro_patron_block_feature_files">' + $.translatedText.featChatUploading + "</li>" : "") +
                                      '<li style="border-color:' +
                                      f +
                                      '" class="chatbro_patron_block_feature chatbro_patron_block_feature_sync ">' +
                                      $.translatedText.featChatSync +
                                      '</li><li style="border-color:' +
                                      f +
                                      '" class="chatbro_patron_block_feature chatbro_patron_block_feature_history">' +
                                      $.translatedText.featChatHistory +
                                      '</li><li style="border-color:' +
                                      f +
                                      '" class="chatbro_patron_block_feature chatbro_patron_block_feature_mark">' +
                                      $.translatedText.featChatMark +
                                      "</li></div></ul>") +
                                (!$.hidePayForChatLink || d ? '<div class="chatbro_patron_block_button_wrapper">' + l + "</div>" : "") +
                                h +
                                "</div>");
                    (a.innerHTML = m), (a.style.display = "block"), Q(a.getElementsByClassName("chatbro_patron_block_top_table_wrapper"));
                } catch (n) {}
        }
        function T(a) {
            if (!a) return 0;
            try {
                var b = a.offsetHeight,
                    c = parseInt(a.style.lineHeight, 10),
                    d = b / c;
                return d;
            } catch (e) {
                return 0;
            }
        }
        function U() {
            $.inputControl.ifUserBlocked(W, X)();
        }
        function V(a) {
            if (a) {
                var b = $.chatTools.getDomArrayByClass(a, $.NODES_CLASSES.MESSAGE_TEXT)[0];
                if (b) {
                    var c = a.getAttribute("message_id"),
                        d = a.getAttribute("gatewayId");
                    $.messageFontSise = parseInt($.messageFontSise, 10);
                    var e = isNaN($.messageFontSise) ? $.DEFAULT_MESSAGE_FONT_SIZE : $.messageFontSise,
                        f = e - $.DEFAULT_MESSAGE_FONT_SIZE;
                    c && $.messageControl.set(c, b.innerHTML);
                    var g = "Telegram";
                    "vk" === d && (g = "VK"), "tg" === d && (g = "Telegram");
                    var h = false,
                        i = false,
                        j = b.innerHTML,
                        k = '';
                    if (((b.innerHTML = "<span>" + j + ($.hidePayForChatLink && !i ? "" : " " + k) + "</span>"), $.chatTools.addClass(a, "chatbro_message_blocked"), f)) {
                        var l = $.DEFAULT_MESSAGE_FONT_SIZE + f - 1;
                        b.style.fontSize = $.geometry.correctSizeValue(l);
                    }
                }
            }
        }
        function W() {
            var a = G();
            if (a.length)
                for (var b = 0; b < a.length; b++)
                    !(function (b) {
                        var c = a[b],
                            d = c.getAttribute("issyncedmessage"),
                            e = !!d && ("true" === d || "isSyncedMessage" === d),
                            f = $.chatTools.hasClass(c, "chatbro_message_blocked");
                        e && !f && V(c);
                    })(b);
        }
        function X() {
            var a = H();
            if (a.length)
                for (var b = 0; b < a.length; b++)
                    !(function (b) {
                        var c = a[b],
                            d = c.getAttribute("message_id"),
                            e = $.chatTools.getDomArrayByClass(c, $.NODES_CLASSES.MESSAGE_TEXT)[0],
                            f = $.messageControl.get(d);
                        if (f && e) {
                            (e.innerHTML = f), $.chatTools.removeClass(c, "chatbro_message_blocked"), ($.messageFontSise = parseInt($.messageFontSise, 10));
                            var g = isNaN($.messageFontSise) ? $.DEFAULT_MESSAGE_FONT_SIZE : $.messageFontSise,
                                h = g - $.DEFAULT_MESSAGE_FONT_SIZE;
                            if (h) {
                                var i = $.DEFAULT_MESSAGE_FONT_SIZE + h;
                                e.style.fontSize = $.geometry.correctSizeValue(i);
                            }
                        }
                    })(b);
        }
        function Y(a) {
            var b = $.chatTools.getAllMessages();
            if (b.length) {
                $.subbatchControl.resetCurrentSubbatches();
                for (var c = 0; c < b.length; c++)
                    !(function (c, d) {
                        var e = b[d],
                            f = e.getAttribute("subbatch");
                        if (parseInt(f, 10) === parseInt(a, 10)) {
                            var g = e.parentNode;
                            g.removeChild(e), c.geometry.setChatMessagesWrapperHeight();
                        } else c.subbatchControl.addCurrentSubbatches(f);
                    })($, c);
                $.subbatchControl.log(), (b = $.chatTools.getAllMessages()), 0 === b.length && (($.NODES.chatMessagesEmptyTd.style.display = "table-row"), $.geometry.setChatMessagesWrapperHeight());
            }
        }
        function Z() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) {
                return (a ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (a / 4)))).toString(16);
            });
        }
        var $ = a;
        return (
            (B.prototype.createLoader = function (a, b) {
                var b = b || !1,
                    a = a || "",
                    c = b ? "display: table-row;" : "display: none;";
                return (
                    '<tr id="chatbroMessageRadial' +
                    a +
                    '" style="' +
                    c +
                    '" class="chatbro_message chatbro_message_radial"><td colspan="4"><div style="padding: 8px 2px;"><div style="border-color: ' +
                    $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 0.8, -0.2) +
                    "; border-left-color: " +
                    $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 1.6, -0.5) +
                    '; " class="chatbro_messages_load_progress_radial"></div></div></td></tr>'
                );
            }),
            (B.prototype.deleteOldLoaders = function (a) {
                var b = $.chatTools.getDomArrayByClass($.NODES.chatMessagesTbody, $.NODES_CLASSES.RADIAL_BETWEEN_BLOCKS);
                ($.HISTORY_PLUG_DIV = null), ($.HISTORY_PLUG_DIV_TD = null);
                for (var c in b)
                    try {
                        if (b.hasOwnProperty(c))
                            if (!$.uploadIsBlocked) {
                                var d,
                                    e = $.COLORS.bodyTextColor,
                                    f = $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, -0.25, -0.18),
                                    g = $.colorsCtrl.lightOrDark($.COLORS.bodyBackgroundColor, 0.3, -0.019),
                                    h =
                                        "display: block;position: absolute;left: 0;right: 0;top: -1px;z-index: 10;height: " +
                                        (!$.milc || $.milc >= 10 || !$.mil ? $.DEFAULT_HISTORY_PLUG_HEIGHT + "px;" : "100%;") +
                                        "padding: 5px 2px 0px!important;background:" +
                                        $.COLORS.bodyBackgroundColor +
                                        ";background: linear-gradient(0deg, " +
                                        $.colorsCtrl.hexToRGB($.COLORS.bodyBackgroundColor, 0.58) +
                                        " 0%, " +
                                        $.COLORS.bodyBackgroundColor +
                                        " 84%)!important;";
                                d = $.uia ? ($.showAd ? $.translatedText.disabledChatHistoryBasicDescAdmin : $.translatedText.disabledChatHistoryPremDescAdmin) : $.translatedText.disabledChatHistoryDesc;
                                var i =
                                    '<td class="chatbro_messages_history_plug_td" colspan="4" style="' +
                                    h +
                                    '"><div class="chatbro_messages_history_plug" style="background: ' +
                                    g +
                                    "; color:" +
                                    e +
                                    "; max-height:" +
                                    ($.geometry.elementHeight($.NODES.chatMessagesWrapperDiv) - 30) +
                                    "px; border-color:" +
                                    f +
                                    ';"><div class="chatbro_messages_history_plug_header">' +
                                    $.translatedText.disabledChatHistory +
                                    '</div><div style="font-size: 13px;">' +
                                    d +
                                    '</div><div class="chatbro_messages_history_plug_patrons"></div></div></td>';
                                (b[c].innerHTML = i), (b[c].style.display = "block");
                                var j = b[c].getElementsByClassName("chatbro_messages_history_plug_patrons")[0];
                                $.uia ? $.chatTools.generateAdminPayBlock(j) : $.chatTools.generateTopPatronsBlock(j),
                                    ($.HISTORY_PLUG_DIV = b[c].getElementsByClassName("chatbro_messages_history_plug")[0]),
                                    ($.HISTORY_PLUG_DIV_TD = b[c].getElementsByClassName("chatbro_messages_history_plug_td")[0]);
                            } else
                                b[c].id === "chatbroMessageRadial" + a
                                    ? (b[c].style.display = "table-row")
                                    : (($.isBlocked && $.advertisingBlocks && $.advertisingBlocks.hasOwnProperty("IN_CHAT_BETWEEN_MESSAGES")) || $.chatTools.removeElement(b[c]), (b[c].className = "chatbro_message"));
                    } catch (k) {}
            }),
            {
                onFail: b,
                checkMobile: c,
                createDateType: d,
                getTimeHHMM: e,
                getDateDDMMYY: g,
                set2Digit: h,
                getArrayUrlsFromMessage: i,
                getDomArrayByClass: j,
                getDomArrayByTagName: k,
                removeClass: l,
                addClass: m,
                selectify: n,
                unselectify: o,
                existUserDocumentEvents: p,
                debugEventCount: q,
                getChatElements: w,
                getChatElement: y,
                isScrolledToBottom: r,
                isNotificationBlockScrolledToBottom: s,
                scrollToBottom: t,
                scrollToBottomSmooth: u,
                scrollNotificationBlockToBottom: v,
                hexEncode: z,
                getWindowOrintation: A,
                LoadMsgIndicator: B,
                checkWhereChatLoad: C,
                getRedirectUrl: D,
                reloadImageOnError: E,
                addMenuOfMessage: K,
                removeMenuOfMessage: J,
                getUncheckedMessages: F,
                getAllMessages: G,
                removeElement: x,
                isImageURLValid: L,
                removeUncheckedStatus: I,
                getRandomNumber: P,
                fadeIn: M,
                fadeOut: N,
                blockSyncedMessage: V,
                unBlockSyncedMessages: X,
                blockSyncedMessages: W,
                generateTopPatronsBlock: S,
                generateAdminPayBlock: R,
                renderTopPatrons: Q,
                countLines: T,
                syncedMessagesProcessing: U,
                hasClass: O,
                deleteSubbatch: Y,
                uuidv4: Z,
            }
        );
    },
    ChatColors: function (a) {
        function b(a) {
            return (
                (a = a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)),
                a && 4 === a.length ? "#" + ("0" + parseInt(a[1], 10).toString(16)).slice(-2) + ("0" + parseInt(a[2], 10).toString(16)).slice(-2) + ("0" + parseInt(a[3], 10).toString(16)).slice(-2) : ""
            );
        }
        function c(a, b) {
            var c = parseInt(a.slice(1, 3), 16),
                d = parseInt(a.slice(3, 5), 16),
                e = parseInt(a.slice(5, 7), 16);
            return b ? "rgba(" + c + ", " + d + ", " + e + ", " + b + ")" : "rgb(" + c + ", " + d + ", " + e + ")";
        }
        function d(a) {
            if ("" === a) return !1;
            if ("inherit" === a) return !1;
            if ("transparent" === a) return !1;
            var b = !1,
                c = document.createElement("img");
            return (
                document.getElementsByTagName("body")[0].appendChild(c),
                c.setAttribute("style", "color:rgb(0, 0, 0)!important"),
                c.setAttribute("style", "color:" + a + "!important"),
                "rgb(0, 0, 0)" !== c.style.color && (b = h(c, "color")),
                c.setAttribute("style", "color:rgb(255, 255, 255)!important"),
                c.setAttribute("style", "color:" + a + "!important"),
                "rgb(255, 255, 255)" !== c.style.color && (b = h(c, "color")),
                document.getElementsByTagName("body")[0].removeChild(c),
                b
            );
        }
        function e(a, b) {
            try {
                var c = String(a.toLocaleLowerCase()).replace(/[^0-9a-f]/gi, "");
                c = ("000000" + c).substr(c.length);
                for (var d, b = b || 0, e = "#", f = 0; f < 3; f++) (d = parseInt(c.substr(2 * f, 2), 16)), (d = Math.round(Math.min(Math.max(0, d + d * b), 255)).toString(16)), (e += ("00" + d).substr(d.length));
                return e;
            } catch (g) {
                return "#283b41";
            }
        }
        function f(a, b, c) {
            var d = parseInt(a.substr(1), 16),
                f = 8388607,
                g = b || j.COLORS.LIGHTEN,
                h = c || j.COLORS.DARKEN,
                i = d > f ? h : g;
            return e(Number(d).toString(16), i);
        }
        function g(a, b, c, d) {
            if (a) {
                var f = d || 0 === d;
                if (Array.isArray(a))
                    for (var g = 0; g < a.length; g++)
                        try {
                            var h = a[g];
                            if (!h) continue;
                            a[g].style[b] = f ? e(c, d) : c;
                        } catch (i) {
                            j.debug.error(i);
                            continue;
                        }
                else
                    try {
                        a.style[b] = f ? e(c, d) : c;
                    } catch (i) {
                        j.debug.error(i);
                    }
            }
        }
        function h(a, c) {
            var d = getComputedStyle(a, null),
                e = d.getPropertyValue(c);
            return b(e);
        }
        function i() {
            g(
                [
                    j.NODES.chatDropdownMenuUserWrapper,
                    j.NODES.chatDropdownMenuPlanDiv,
                    j.NODES.chatDropdownMenuPatronDiv,
                    j.NODES.chatDropdownMenuLinkDiv,
                    j.NODES.chatDropdownAdminStuffWrapperDiv,
                    j.NODES.chatDropdownMenuLoadProgressWrapper,
                    j.NODES.chatDropdownMenuCopyright,
                ],
                "background",
                j.COLORS.bodyBackgroundColor,
                0.1
            ),
                g(
                    [
                        j.NODES.chatDropdownMenuUserWrapper,
                        j.NODES.chatDropdownMenuPlanDiv,
                        j.NODES.chatDropdownMenuPatronDiv,
                        j.NODES.chatDropdownMenuLinkDiv,
                        j.NODES.chatDropdownAdminStuffWrapperDiv,
                        j.NODES.chatDropdownMenuLoadProgressWrapper,
                        j.NODES.chatDropdownMenuCopyright,
                    ],
                    "border-color",
                    f(j.COLORS.bodyBackgroundColor)
                ),
                g(
                    [
                        j.NODES.chatDropdownMenuUserWrapper,
                        j.NODES.chatDropdownMenuPlanDiv,
                        j.NODES.chatDropdownMenuPatronDiv,
                        j.NODES.chatDropdownMenuLinkDiv,
                        j.NODES.chatDropdownAdminStuffWrapperDiv,
                        j.NODES.chatDropdownMenuLoadProgressWrapper,
                        j.NODES.chatDropdownMenuCopyright,
                    ],
                    "color",
                    j.COLORS.bodyTextColor
                );
        }
        var j = a,
            k = {
                bodyBackgroundColor: j.chatBodyBackgroundColor,
                bodyTextColor: j.chatBodyTextColor,
                adminBodyTextColor: j.chatAdminBodyTextColor,
                moderBodyTextColor: j.chatModerBodyTextColor,
                headBackgroundColor: j.chatHeaderBackgroundColor,
                headTextColor: j.chatHeaderTextColor,
                inputBackgroundColor: j.chatInputBackgroundColor,
                inputTextColor: j.chatInputTextColor,
                linksBackgroundColor: j.chatLinksBackgroundColor,
                linksTextColor: j.chatLinksTextColor,
            },
            l = function () {
                var a = [];
                ["headBackgroundColor", "headTextColor", "bodyBackgroundColor", "bodyTextColor", "moderBodyTextColor", "adminBodyTextColor", "inputBackgroundColor", "inputTextColor", "linksBackgroundColor", "linksTextColor"].map(function (
                    a
                ) {
                    j.COLORS[a] = d(k[a]) || j.COLORS[a];
                }),
                    g([j.NODES.chatDropdownMenuHeaderAlarm], "background", j.COLORS.headTextColor, null),
                    g([j.NODES.chatDropdownMenuHeaderAlarm], "border-color", j.COLORS.headBackgroundColor, null),
                    g([j.NODES.chatDropdownMenuHeaderAlarm], "color", j.COLORS.headBackgroundColor, null),
                    g([j.NODES.chatMaxHeaderDiv, j.NODES.chatMinHeaderDiv], "background", j.COLORS.headBackgroundColor, null),
                    g([j.NODES.chatBodyDiv, j.NODES.chatSystemMessagesBlock], "border-color", j.COLORS.headBackgroundColor, null),
                    g([j.NODES.chatMaxHeaderTitle, j.NODES.chatMinHeaderTitle, j.NODES.chatMovableMinHeaderTitle, j.NODES.chatMinHeaderDiv, j.NODES.chatMaxHeaderDiv], "color", j.COLORS.headTextColor, null),
                    g(
                        [
                            j.NODES.chatMessagesBlockDiv,
                            j.NODES.chatMessagesSpace,
                            j.NODES.chatModalLoginBlock,
                            j.NODES.chatModalBanBlock,
                            j.NODES.chatModalMenuBlock,
                            j.NODES.chatModalPatronBlock,
                            j.NODES.chatModalBanReason,
                            j.NODES.chatInfoBlock,
                            j.NODES.chatModalUploadBtn,
                            j.NODES.chatModalUploadOKBtn,
                            j.NODES.chatModalBanInput,
                            j.NODES.chatModalUploadInput,
                            j.NODES.chatSystemMessagesBlock,
                            j.NODES.chatInChatTop,
                            j.NODES.chatbroLink,
                            j.NODES.chatModalLoginInput,
                            j.NODES.chatInfoBlock,
                        ],
                        "background",
                        j.COLORS.bodyBackgroundColor,
                        null
                    ),
                    g([j.NODES.chatModalBanOkBtn, j.NODES.chatModalLoginOkBtn], "color", j.COLORS.bodyBackgroundColor, null),
                    g(
                        [
                            j.NODES.chatDropdownMenuUserWrapper,
                            j.NODES.chatDropdownMenuDiv,
                            j.NODES.chatDropdownMenuPlanDiv,
                            j.NODES.chatDropdownMenuPatronDiv,
                            j.NODES.chatDropdownMenuLinkDiv,
                            j.NODES.chatDropdownAdminStuffWrapperDiv,
                            j.NODES.chatDropdownMenuLoadProgressWrapper,
                            j.NODES.chatDropdownMenuCopyright,
                        ],
                        "background",
                        j.COLORS.bodyBackgroundColor,
                        0.1
                    ),
                    g(
                        [
                            j.NODES.chatDropdownMenuUserWrapper,
                            j.NODES.chatDropdownMenuPlanDiv,
                            j.NODES.chatDropdownMenuPatronDiv,
                            j.NODES.chatDropdownMenuLinkDiv,
                            j.NODES.chatDropdownAdminStuffWrapperDiv,
                            j.NODES.chatDropdownMenuLoadProgressWrapper,
                            j.NODES.chatDropdownMenuCopyright,
                            j.NODES.chatModalMenuDeleteMessagesFromUser,
                            j.NODES.chatModalMenuDeleteMessage,
                            j.NODES.chatModalMenuBanUser,
                            j.NODES.chatModalMenuSetModer,
                            j.NODES.chatModalMenuDeleteModer,
                        ],
                        "border-color",
                        f(j.COLORS.bodyBackgroundColor)
                    ),
                    g([j.NODES.chatMessagesScrollToLast], "background", f(j.COLORS.bodyBackgroundColor)),
                    g([j.NODES.chatSendBlock, j.NODES.chatSendPreviewDiv, j.NODES.chatSmilesMenuDiv, j.NODES.chatConnectingBottomDiv, j.NODES.chatDropdownMenuDiv, j.NODES.chatInfoBlock], "border-color", f(j.COLORS.bodyBackgroundColor)),
                    g([j.NODES.chatSmilesMenuDiv, j.NODES.chatConnectingBottomDiv], "background-color", j.COLORS.bodyBackgroundColor, 0.1),
                    g([j.NODES.chatConnectingBottomWrapperDiv], "background-color", f(j.COLORS.bodyBackgroundColor, 0.2, -0.02));
                var b = f(j.COLORS.bodyBackgroundColor, 1.5, -0.4);
                f(j.COLORS.bodyBackgroundColor, 0.5, -0.06);
                g([j.NODES.chatModalLoginBottomDiv, j.NODES.chatModalLoginCloseSpan, j.NODES.chatModalBanCloseSpan, j.NODES.chatModalMenuCloseSpan, j.NODES.chatModalLoginTosDiv], "color", b),
                    g([j.NODES.chatFileSelectWrapperDiv], "background", b),
                    g([j.NODES.chatMessagesWrapperDiv, j.NODES.chatMessagesWrapperPreloadDiv], "background", j.COLORS.bodyBackgroundColor),
                    g([j.NODES.chatModalLoginInputDiv], "border-color", f(j.COLORS.bodyBackgroundColor, 0.8, -0.2)),
                    g([j.NODES.chatbroDropdownLoadProgress, j.NODES.chatConnectingBottomLoader], "border-color", f(j.COLORS.bodyBackgroundColor, 0.8, -0.2)),
                    g([j.NODES.chatbroDropdownLoadProgress, j.NODES.chatConnectingBottomLoader], "border-left-color", f(j.COLORS.bodyBackgroundColor, 1.6, -0.5));
                try {
                    var c = f(j.COLORS.bodyBackgroundColor);
                    g(j.NODES.chatMessagesScrollToLast, "border-color", c);
                } catch (e) {}
                g(
                    [
                        j.NODES.chatModalLoginHeadSocialDiv,
                        j.NODES.chatModalLoginHeadGuestVar1Div,
                        j.NODES.chatModalLoginHeadGuestVar2Div,
                        j.NODES.chatModalBanHeadDiv,
                        j.NODES.chatModalMenuHeadDiv,
                        j.NODES.chatModalPatronHeadDiv,
                        j.NODES.chatModalBanBlock,
                        j.NODES.chatModalMenuBlock,
                        j.NODES.chatModalPatronBlock,
                        j.NODES.chatModalUploadBtn,
                        j.NODES.chatModalUploadOKBtn,
                        j.NODES.chatDropdownMenuUserWrapper,
                        j.NODES.chatDropdownMenuPlanDiv,
                        j.NODES.chatDropdownMenuPatronDiv,
                        j.NODES.chatDropdownMenuLinkDiv,
                        j.NODES.chatDropdownAdminStuffWrapperDiv,
                        j.NODES.chatDropdownMenuLoadProgressWrapper,
                        j.NODES.chatDropdownMenuCopyright,
                        j.NODES.chatMessagesEmptyTd,
                        j.NODES.chatMessagesErrorTd,
                        j.NODES.chatMessagesScrollToLast,
                        j.NODES.chatConnectingBottomWrapperDiv,
                        j.NODES.chatConnectingBottomDiv,
                        j.NODES.chatSmilesDiv,
                        j.NODES.chatInfoBlock,
                    ],
                    "color",
                    j.COLORS.bodyTextColor
                ),
                    g([j.NODES.chatModalBanOkBtn, j.NODES.chatSendIndicator, j.NODES.chatModalLoginOkBtn], "background", j.COLORS.bodyTextColor),
                    g([j.NODES.chatModalLoginInputDiv, j.NODES.chatModalBanReason], "border-color", f(j.COLORS.bodyBackgroundColor)),
                    g([j.NODES.chatModalLoginInput], "color", f(j.COLORS.bodyTextColor, 0.2, -0.2)),
                    g([j.NODES.chatSendPreviewDiv, j.NODES.chatSendInput, j.NODES.chatSendDiv, j.NODES.chatInChatBottom, j.NODES.chatPaginatorTable, j.NODES.chatSendIndicatorWrapper], "background", j.COLORS.inputBackgroundColor),
                    g([j.NODES.chatOpenSmilesButton, j.NODES.chatOpenUploadButton, j.NODES.chatSendButton], "background-color", j.COLORS.inputBackgroundColor),
                    g([j.NODES.chatSendInput, j.NODES.chatOpenSmilesButton, j.NODES.chatOpenUploadButton, j.NODES.chatSendButton, j.NODES.chatSendPreviewDiv], "color", j.COLORS.inputTextColor),
                    g(j.NODES.chatSendLoaderDiv, "border-color", f(j.COLORS.inputTextColor, 1.6, -0.5)),
                    g(j.NODES.chatSendLoaderDiv, "border-left-color", j.COLORS.inputTextColor);
                try {
                    j.showChatBorder ||
                        ((j.NODES.chatBodyDiv.style.borderLeft = "1px solid"),
                        (j.NODES.chatBodyDiv.style.borderRight = "1px solid"),
                        (j.NODES.chatBodyDiv.style.borderBottom = "1px solid"),
                        g([j.NODES.chatBodyDiv], "border-color", f(j.COLORS.bodyBackgroundColor)));
                } catch (e) {}
                try {
                    j.showChatShadow && (j.NODES.chatMaxDiv.style.boxShadow = "2px 3px 7px 0 rgba(0,0,0,.1)");
                } catch (e) {}
                if (j.NODES.chatMinimizeButton) {
                    a.push(j.NODES.chatMinimizeButton);
                    try {
                        j.NODES.chatMaxParticipantsWrapperDiv && (j.NODES.chatMaxParticipantsWrapperDiv.style.marginRight = "5px");
                    } catch (e) {}
                }
                j.NODES.chatMaxInviteButton && a.push(j.NODES.chatMaxInviteButton, j.NODES.chatMinInviteButton);
                for (var h = 0; h < a.length; h++) {
                    var i = a[h];
                    if (!i) return;
                    !(function (a, b) {
                        g(a, "color", j.COLORS.headTextColor, null),
                            g(a, "background", j.COLORS.headBackgroundColor, null),
                            (a.onmouseenter = function () {
                                g(a, "background", b, j.COLORS.DARKEN);
                            }),
                            (a.onmouseleave = function () {
                                g(a, "background", b);
                            });
                    })(i, j.COLORS.headBackgroundColor);
                }
            };
        return { init: l, getColor: h, setColor: g, rgbToHex: b, hexToRGB: c, lightOrDark: f, validTextColour: d, colorLuminance: e, colorDropdown: i };
    },
    AlertControl: function (a) {
        function b() {
            (p.NODES.chatNotificationsIco.onclick = g), p.NODES.chatMaxNeedToUpdateCodeDiv && (p.NODES.chatNotificationsIco.style.display = "block"), c();
        }
        function c() {
            (p.NODES.chatSystemMessagesWrapperDiv.style.maxHeight = p.geometry.elementHeight(p.NODES.chatMessagesWrapperDiv) * p.NOTIFICATION_BLOCK_MAX_HEIGHT_PERCENT + 10 + "px"),
                (p.NODES.chatSystemMessagesWrapperDiv.style.height = "auto");
        }
        function d() {
            try {
                var a = p.DOCUMENT_TITLE,
                    b = p.translatedText.newMessage + " (" + p.NEW_MESSAGE_COUNT_NA + ")",
                    c = function () {
                        clearInterval(window.chatBro.timeoutId), (window.chatBro.timeoutId = null), (document.title = a), (window.onmousemove = null), p.saveToLocalStorage("blinkNewMsg", { isblink: !1 });
                    },
                    d = function () {
                        var d = p.loadFromLocalStorage("blinkNewMsg");
                        d && d.isblink ? (document.title = document.title === b ? a : b) : c();
                    };
                c(),
                    p.isActiveTab() ||
                        (p.saveToLocalStorage("blinkNewMsg", { isblink: !0 }),
                        (window.chatBro.timeoutId = setInterval(d, 1e3)),
                        (window.onmousemove = function () {
                            c(), (p.NEW_MESSAGE_COUNT_NA = 0);
                        }));
            } catch (e) {}
        }
        function e(a) {
            try {
                var b,
                    c = !1,
                    d = p.colorsCtrl.lightOrDark(p.COLORS.bodyBackgroundColor, 0.5, -0.06);
                switch (a.type) {
                    case "info":
                        (b = "chatbro_system_message_info"), (iconClass = "chatbro_system_message_info_icon");
                        break;
                    case "warning":
                        (b = "chatbro_system_message_warning"), (iconClass = "chatbro_system_message_warning_icon");
                        break;
                    case "error":
                        (b = "chatbro_system_message_error"), (iconClass = "chatbro_system_message_error_icon");
                        break;
                    case "success":
                        (b = "chatbro_system_message_success"), (iconClass = "chatbro_system_message_success_icon");
                        break;
                    default:
                        (c = !0), (b = "chatbro_system_message_common"), (iconClass = "chatbro_system_message_common_icon");
                }
                var e = "chatbroSystemMessage_" + (a.id ? a.id : new Date().getTime()),
                    h = !!a.id;
                a.hideIco && (iconClass = ""), (p.messageFontSise = parseInt(p.messageFontSise, 10));
                var i = isNaN(p.messageFontSise) ? p.DEFAULT_MESSAGE_FONT_SIZE : p.messageFontSise,
                    j = p.messageFontSise - p.DEFAULT_MESSAGE_FONT_SIZE;
                "undefined" == typeof p.Emojione && (p.Emojione = new Emojione(p));
                var k =
                        '<div id="' +
                        e +
                        '"  class="chatbro_system_message_wrapped ' +
                        b +
                        '" style="border-left: 5px solid; position: relative;"><div class="chatbro_system_message_fade"></div><div class="chatbro_system_message"><div class="chatbro_message_text" style="' +
                        (j ? "font-size:" + i + "px;" : "") +
                        '">' +
                        p.Emojione.toImage(a.body.text) +
                        '</div><div sysmesid="' +
                        e +
                        '" class="chatbro_system_message_close"><div></div></div>',
                    l = document.createElement("div");
                if (((l.innerHTML = k), h)) {
                    var m = document.getElementById(e);
                    m && m.parentNode ? ((l = m.parentNode), (l.innerHTML = k)) : p.NODES.chatSystemMessagesDiv.appendChild(l);
                } else p.NODES.chatSystemMessagesDiv.appendChild(l);
                var n = p.chatTools.getDomArrayByClass(l, b);
                p.colorsCtrl.setColor(n, "background-color", d), p.colorsCtrl.setColor(n, "color", p.COLORS.bodyTextColor);
                try {
                    var o = p.chatTools.getDomArrayByClass(p.NODES.chatSystemMessagesDiv, "chatbro_system_messages_sign_in");
                    for (var q in o)
                        o[q].onclick = function () {
                            p.inputControl.loginUser();
                        };
                } catch (r) {
                    console.error(r);
                }
                try {
                    var s = p.chatTools.getDomArrayByClass(l, "chatbro_system_message_close")[0];
                    s.onclick = function () {
                        var a = s.getAttribute("sysmesid");
                        f(a);
                    };
                } catch (r) {}
                g(), a.delay && f(e, a.delay), c && (p.NODES.chatSystemMessagesWrapperDiv.scrollTop = 0);
            } catch (r) {}
        }
        function f(a, b) {
            try {
                if (b) {
                    var c = document.getElementById(a),
                        d = c.getElementsByClassName("chatbro_system_message_fade")[0],
                        e = c.offsetWidth || 0,
                        f = 0,
                        g = 10,
                        i = (e / b) * g;
                    r[a] && (clearInterval(r[a]), delete r[a]),
                        (r[a] = setInterval(function () {
                            (f += i),
                                (d.style.width = f + "px"),
                                f >= e - 10 &&
                                    (clearInterval(r[a]),
                                    delete r[a],
                                    document.getElementById(a) && p.NODES.chatSystemMessagesDiv.removeChild(document.getElementById(a).parentNode),
                                    "" === p.NODES.chatSystemMessagesDiv.innerHTML && h(),
                                    p.geometry.setMessagesSpaceHeight(),
                                    p.geometry.setHistoryPlugHeightTop());
                        }, g));
                } else
                    document.getElementById(a) && p.NODES.chatSystemMessagesDiv.removeChild(document.getElementById(a).parentNode),
                        "" === p.NODES.chatSystemMessagesDiv.innerHTML && h(),
                        p.geometry.setMessagesSpaceHeight(),
                        p.geometry.setHistoryPlugHeightTop();
            } catch (j) {}
        }
        function g() {
            (p.NODES.chatSystemMessagesBlock.style.display = "block"),
                !p.alreadyShowedUpdateCodeWarning && this.className && this.className.indexOf("chatbro_need_to_update_code") !== -1 && (p.events.onAlarmClick(), (p.alreadyShowedUpdateCodeWarning = !0)),
                p.geometry.setMessagesSpaceHeight(),
                p.geometry.setHistoryPlugHeightTop(),
                p.chatTools.scrollNotificationBlockToBottom();
        }
        function h() {
            (p.NODES.chatSystemMessagesDiv.innerHTML = ""), (p.NODES.chatSystemMessagesBlock.style.display = "none"), (p.alreadyShowedUpdateCodeWarning = !1), (localStorage["chatbroGreeting_" + p.encodedChatId] = p.chatGreeting);
        }
        function i(a, b, c) {
            e({ type: "warning", body: { text: a }, delay: b, id: c });
        }
        function j(a, b) {
            e({ type: "error", body: { text: a }, delay: b });
        }
        function k(a, b) {
            var c = decodeURIComponent(a.fullName) + " was banned." + (a.reason ? "<br>Reason: " + decodeURIComponent(a.reason) : "");
            e({ type: "error", body: { text: c }, delay: b });
        }
        function l(a, b, c) {
            e({ type: "info", body: { text: a }, delay: b, hideIco: c });
        }
        function m(a, b) {
            e({ type: "success", body: { text: a }, delay: b });
        }
        function n(a, b) {
            (q = !0), (a = a.replace(/\b(https?:\/\/\S+)/gi, '<a href="$1">$1</a>')), e({ type: "greeting", body: { text: a }, delay: b });
        }
        function o() {
            return !!q;
        }
        var p = a;
        b();
        var q = !1,
            r = {};
        return { showGreeting: n, showClientMessage: e, showWarningMessage: i, showErrorMessage: j, showInfoMessage: l, showSuccessMessage: m, showBanMessage: k, showInBrowserTitle: d, widthHeightProcessing: c, isGreetingAlreadyShowed: o };
    },
    FileUploadControl: function (a) {
        function b() {
            k.chatTools.existUserDocumentEvents("chatInputClick", 0)
                ? (l.onclick = function (a) {
                      a.preventDefault();
                  })
                : j(),
                k.isMobile && k.NODES.chatFileSelectInput.removeAttribute("multiple");
        }
        function c(a) {
            "...." === a.innerHTML ? (a.innerHTML = ".") : (a.innerHTML += ".");
        }
        function d(a, b, c) {
            var d = 0;
            b(function e() {
                ++d < a.length ? b(e, a[d]) : c();
            }, a[d]);
        }
        function e(a, b) {
            f(b, a);
        }
        function f(a, b) {
            try {
                var d,
                    e = new FormData(),
                    f = a.name,
                    g = new XMLHttpRequest(),
                    h = !1,
                    i = k.fakeAttachmentCache[a.key],
                    j = i.elem,
                    l = j.getElementsByClassName("chatbro_send_input_preview_attachment_progress")[0],
                    m = j.getElementsByClassName("chatbro_send_input_preview_attachment_close")[0];
                (m.onclick = function () {
                    (h = !0), g.abort();
                }),
                    e.append("file", a, f),
                    k.makeRequest({
                        url: k.chatbroWwwHost + "/upload_file?chatId=" + k.chatId,
                        type: "POST",
                        data: e,
                        xhr: g,
                        auth: !0,
                        success: function (a) {
                            if (a.type && ("ChatbroException" === a.type || "YouAreNotAllowed" === a.type || "OptionNotAvailableWithoutAdmin" === a.type))
                                return k.removeAttachmentPreview(i, !1, null), k.chatTools.onFail(a), b();
                            var c = a.attachment;
                            switch (((c.fakeElem = i.elem), c.type)) {
                                case "AUDIO":
                                    c.player = "audio";
                                    break;
                                case "FILE":
                                    c.player = "file";
                                    break;
                                case "VIDEO":
                                    c.player = "html5";
                                    break;
                                default:
                                    c.player = "photo";
                            }
                            (c.code = c.fileUrl),
                                h ||
                                    (k.processAttachment(c, new Date().getTime(), !0, function () {
                                        k.currentUploadedAttachments.push(c);
                                    }),
                                    k.inputControl.setFocusToEnd());
                        },
                        progress: function (a) {
                            if (a.lengthComputable) {
                                var b = a.loaded / a.total,
                                    e = parseInt(100 * b.toFixed(2), 10);
                                (l.innerHTML = e + "%"),
                                    100 === e &&
                                        (d && clearInterval(d),
                                        (l.innerHTML = "."),
                                        (d = setInterval(function () {
                                            c(l);
                                        }, 1e3)));
                            } else
                                d && clearInterval(d),
                                    (l.innerHTML = "."),
                                    (d = setInterval(function () {
                                        c(l);
                                    }, 1e3));
                        },
                        load: function () {
                            clearInterval(d), b();
                        },
                        abort: function () {
                            k.removeAttachmentPreview(i, !1, null), b();
                        },
                        error: function (a) {
                            a && k.chatTools.onFail(a), k.removeAttachmentPreview(i, !1, null);
                        },
                    });
            } catch (n) {
                k.debug.error(n), b();
            }
        }
        function g() {
            var a = k.NODES.chatFileSelectInput.files,
                b = [];
            if (k.messageAttachmentCount >= k.FILE_LIMITS.COUNT_LIMIT)
                return k.alreadyShowMessage || ((k.alreadyShowMessage = !0), k.alertControl.showWarningMessage(k.translatedText.limitFileCount)), void (k.NODES.chatFileSelectInput.value = "");
            for (var c = 0; b.length < k.FILE_LIMITS.COUNT_LIMIT && k.messageAttachmentCount < k.FILE_LIMITS.COUNT_LIMIT && c < a.length; c++) {
                var f = a[c],
                    g = f.name,
                    h = f.size / 1024 / 1024;
                h > k.FILE_LIMITS.SIZE_LIMIT ? k.alertControl.showWarningMessage(f.name + " - " + k.translatedText.limitFileSize) : b.push(f);
            }
            for (var i = 0; i < b.length; i++) {
                var f = b[i],
                    j = new Date().getTime();
                f.key = "preFile_" + f.name + j;
                var l = { player: "preFile", code: "_" + f.name + j, title: g };
                k.processAttachment(l, j, !0, function () {
                    i === b.length - 1 &&
                        d(b, e, function (a) {
                            a || (k.NODES.chatFileSelectInput.value = "");
                        });
                });
            }
        }
        function h() {
            return !k.isBlocked ? ((k.NODES.chatFileSelectInput.disabled = !0), k.chatTools.onFail({ type: "OptionNotAvailableOnBasicPlan" })) : ((k.NODES.chatFileSelectInput.disabled = !1), void (k.NODES.chatFileSelectInput.onchange = g));
        }
        function i() {
            (k.NODES.chatFileSelectInput.disabled = !0), !k.inputControl.isUserLogged() && k.chatTools.onFail({ type: "OptionNotAvailableOnBasicPlan" });
        }
        function j() {
            return !k.allowUploadFile ? void (l && (l.onmousedown = k.inputControl.ifUserBlocked(i, h))) : ((l.style.display = "none"), (k.NODES.chatSendWrapper.style.paddingLeft = "13px"), void (k.NODES.chatFileSelectInput.disabled = !0));
        }
        var k = a,
            l = k.NODES.chatOpenUploadButton;
        try {
            b();
        } catch (m) {
            k.debug.error(m);
        }
    },
    SmilesMenuControl: function (a) {
        function b() {
            try {
                return q;
            } catch (a) {
                return !1;
            }
        }
        function c() {
            var a = j.NODES.chatMessagesWrapperDiv.offsetWidth,
                b = j.NODES.chatMessagesWrapperDiv.offsetHeight,
                c = Math.round((a * r) / 100 / t) * t + t,
                d = Math.round((b * s) / 100 / t) * t + t;
            return (k.style.right = "25px"), (k.style.bottom = j.NODES.chatSendWrapper.offsetHeight + "px"), (l.style.width = c - 10 + "px"), (l.style.height = d + "px"), { width: c, height: d };
        }
        function d() {
            e();
            try {
                var a = c(),
                    b = a.width,
                    d = a.height;
                j.chatTools.fadeIn(k, "bottom right"), (q = !0), "undefined" == typeof j.Emojione && (j.Emojione = new Emojione(j));
                var g = 2,
                    i = (d / t + g) * (b / t - 1),
                    m = 2 * (b / t - 1);
                if (!j.isOpenedSmilesList) {
                    for (var r = j.Emojione.shortnames.split("|"), s = "", u = "", v = 0; v < i * o; v++) s += '<div class="chatbro_smile_wrapper">' + j.Emojione.shortnameToImage(r[v]) + "</div>";
                    var w = [];
                    for (var x in n) w.push([x, n[x]]);
                    w.sort(function (a, b) {
                        return b[1] - a[1];
                    }),
                        (m = Math.min(w.length, m));
                    for (var v = 0; v < m; v++) {
                        var y = j.Emojione.shortnameToImage(w[v][0]);
                        y && (u += '<div class="chatbro_smile_wrapper">' + y + "</div>");
                    }
                    var z = '<div class="chatbro_frequently_used_smiles"><div class="chatbro_frequently_used_smiles_title">' + j.translatedText.frequentlyUsed + "</div>" + u + "</div>";
                    (l.innerHTML = (m ? z : "") + s),
                        h(l),
                        (l.onwheel = f),
                        (l.onmousewheel = f),
                        (l.onscroll = function () {
                            if (l.scrollTop >= l.scrollHeight - l.offsetHeight - 10 && !j.isOpenedSmilesList && !p) {
                                for (p = !0, o += 1, s = "", v = i * (o - 1); v < i * o; v++) {
                                    if (r.length - 1 === v) {
                                        j.isOpenedSmilesList = !0;
                                        break;
                                    }
                                    s += '<div class="chatbro_smile_wrapper">' + j.Emojione.shortnameToImage(r[v]) + "</div>";
                                }
                                (l.innerHTML += s), h(l), (p = !1);
                            }
                        });
                }
            } catch (A) {
                j.debug.error(A);
            }
        }
        function e() {
            for (var a = j.chatTools.getDomArrayByClass(document, j.NODES_CLASSES.SMILES), b = 0; b < a.length; b++) a[b] && (j.chatTools.fadeOut(a[b], "bottom right"), (q = !1));
        }
        function f(a) {
            var b = a.deltaY || a.detail || a.wheelDelta,
                c = l;
            ((b < 0 && 0 === c.scrollTop) || (b > 0 && c.scrollHeight - c.clientHeight - c.scrollTop <= 1)) && a.preventDefault();
        }
        function g(a) {
            n.hasOwnProperty(a) ? (n[a] = n[a] + 1) : (n[a] = 1), j.saveToLocalStorage(j.freqUsedSmilesSettingName, n);
        }
        function h(a) {
            var b = j.chatTools.getDomArrayByClass(a, "chatbro_smile_wrapper");
            for (var c in b)
                b.hasOwnProperty(c) &&
                    !(function (a) {
                        var b = a.getElementsByTagName("img")[0];
                        a.onclick = function () {
                            "undefined" == typeof j.Emojione && (j.Emojione = new Emojione(j)), g(b.getAttribute("data"));
                            var a = j.Emojione.toImage(b.alt);
                            j.inputControl.insertNodeAtCursor(a), j.geometry.setChatMessagesWrapperHeight();
                        };
                    })(b[c]);
        }
        function i() {
            if (
                (e(),
                !j.chatTools.existUserDocumentEvents("chatInputClick", 0) &&
                    ((m.onclick = j.inputControl.ifUserLogged(function () {
                        b() || d(), j.isMobile && j.inputControl.setFocusToEnd();
                    })),
                    !j.isMobile))
            ) {
                var a = null,
                    c = null,
                    f = null;
                (m.onmouseover = function () {
                    j.inputControl.isUserLogged() &&
                        (b() ||
                            (a = setTimeout(function () {
                                d();
                            }, 100)));
                }),
                    (m.onmouseout = function (d) {
                        j.inputControl.isUserLogged() &&
                            (clearTimeout(a),
                            b() &&
                                ((c = setTimeout(e.bind(j), 400)),
                                (k.onmouseleave = function (a) {
                                    a.preventDefault(), (f = setTimeout(e.bind(j), 400));
                                }),
                                (k.onmouseenter = function () {
                                    clearTimeout(f), clearTimeout(c);
                                })));
                    });
            }
            document.addEventListener("mousedown", function (a) {
                var b = a.target.className;
                return (
                    (!b ||
                        "string" != typeof b ||
                        (b.indexOf(j.NODES_CLASSES.SMILES_MENU) === -1 &&
                            b.indexOf(j.NODES_CLASSES.SMILES_LIST) === -1 &&
                            b.indexOf(j.NODES_CLASSES.SMILE_BUTTON) === -1 &&
                            b.indexOf(j.NODES_CLASSES.SMILE_WRAPPER) === -1 &&
                            b.indexOf(j.NODES_CLASSES.SMILE_TIPPY) === -1 &&
                            b.indexOf(j.NODES_CLASSES.SMILE) === -1)) &&
                    void e()
                );
            });
        }
        var j = a,
            k = j.NODES.chatSmilesMenuDiv,
            l = j.NODES.chatSmilesDiv,
            m = j.NODES.chatOpenSmilesButton;
        if (k && l && m) {
            var n = j.loadFromLocalStorage(j.freqUsedSmilesSettingName) || {},
                o = 1;
            j.isOpenedSmilesList = !1;
            var p = !1,
                q = !1,
                r = 65,
                s = 50,
                t = 30;
            try {
                i();
            } catch (u) {
                j.chatTools.onFail(u);
            }
            return { smileButton: m, menu: k, isOpen: b, show: d, hide: e, setPosition: c };
        }
    },
    DropdownMenuControl: function (a) {
        function b(a, b) {
            var c = q.uia ? '<div class="chatbro_dropdown_menu_footnote"><a class="chatbro_goto_chat" href="https://www.chatbro.com/edit/' + q.encodedChatId + "#" + a + '">' + u + b + "</a></div>" : "";
            return c;
        }
        function c() {
            q.NODES.chatDropdownMenuHeaderAlarm.style.display = "block";
        }
        function d() {
            q.NODES.chatDropdownMenuHeaderAlarm.style.display = "none";
        }
        function e(a) {
            if (a < 1) return Math.round(60 * a) + " " + q.translatedText.minutes;
            if (a >= 1 && a < 24) return Math.round(a) + " " + q.translatedText.hours;
            if (a >= 24 && a < 168) return Math.round(a / 24) + " " + q.translatedText.days;
            if (a >= 168 && a < 730) return Math.round(a / 24 / 7) + " " + q.translatedText.weeks;
            if (a >= 730 && a < 8760) return Math.round(a / 24 / 31) + " " + q.translatedText.months;
            if (a >= 8760) {
                var b = Math.round(a / 24 / 31 / 12);
                return (b > 10 ? "10+" : b) + " " + q.translatedText.years;
            }
        }
        function f(a) {
            try {
                return 24 * parseInt(a, 10);
            } catch (b) {
                return 0;
            }
        }
        function g() {
            try {
                if (!q.uia) return;
                var a = !q.showAd && q.isItTrialPeriod && q.leftTrialDays <= q.MINIMUM_LEFT_DAYS_OF_TRIAL,
                    d = !q.isItTrialPeriod && !q.bp && q.insufficientFundsToDisableAd && !q.showAd,
                    g = q.showAd || d;
                (d || a) && c();
                var h = '<li class="chatbro_plan_alert ' + (a ? "chatbro_plan_alert_danger" : "") + '">' + (a ? t : "") + q.leftTrialDays + " " + q.translatedText.trialPeriod + "</li>",
                    i = '<li class="chatbro_plan_alert chatbro_plan_alert_danger">' + t + q.translatedText.insufficientFunds + "</li>",
                    j = '<li class="chatbro_plan_alert">' + q.translatedText.disabledSyncs + "</li>",
                    k = '<li class="chatbro_plan_alert">' + q.translatedText.chatHistoryIsBlocked + "</li>",
                    l = '<li class="chatbro_plan_alert">' + q.translatedText.disabledUploading + "</li>",
                    m =
                        (q.uia ? '<a href="https://www.chatbro.com/edit/' + q.encodedChatId + '#changePlan">' : "<span>") +
                        '<span class="chatbro_dropdown_header" style="font-weight: 600; ' +
                        (d ? "text-decoration: line-through;" : "") +
                        '">' +
                        (q.showAd ? q.translatedText.basicPlan : q.translatedText.premiumPlan) +
                        "</span>" +
                        (q.uia ? "</a>" : "</span>");
                m = q.uia ? (q.hidePlanNameForAdmin && !g ? "" : m) : q.hidePlanNameForUsers && !g ? "" : m;
                var n = 0;
                if ((q.isItTrialPeriod && q.leftTrialDays && (n += f(q.leftTrialDays)), q.costs)) {
                    var o = q.costs.wt;
                    o && (n += parseInt(o, 10));
                }
                var p = '<span class="chatbro_dropdown_menu_plan_costs_awork"' + ("" === m ? 'style="float:none;"' : "") + ">" + e(n) + "</span>";
                (p = q.uia ? (q.hidePlanLeftApproxTimeForAdmin && !g ? "" : p) : q.hidePlanLeftApproxTimeForUsers && !g ? "" : p), (p = q.showAd ? "" : p);
                var r = "";
                if (
                    ((d || q.showAd) &&
                        (r = '<ul class="chatbro_dropdown_menu_plan_alarms">' + (d ? i : "") + (q.showAd || d ? j : "") + (q.showAd || d ? l : "") + (q.showAd || d ? k : "") + (!q.showAd && q.isItTrialPeriod ? h : "") + "</ul>"),
                    (r = q.uia ? (q.hidePlanDetailForAdmin && !g ? "" : r) : q.hidePlanDetailForUsers && !g ? "" : r),
                    q.NODES.chatDropdownMenuPlanDiv)
                )
                    if ("" !== m || "" !== p || "" !== r) {
                        var s = '<div class="chatbro_dropdown_menu_plan">' + ("" === m && "" === p ? "" : '<div class="chatbro_dropdown_menu_plan_name">' + m + p + "</div>") + r + "</div>";
                        (q.NODES.chatDropdownMenuPlanDiv.innerHTML = s + b("menuPlan", q.translatedText.onlyYouSeeThisBlock)), (q.NODES.chatDropdownMenuPlanDiv.style.display = "block");
                    } else (q.NODES.chatDropdownMenuPlanDiv.innerHTML = ""), (q.NODES.chatDropdownMenuPlanDiv.style.display = "none");
                q.colorsCtrl.colorDropdown();
            } catch (u) {
                q.chatTools.onFail(u);
            }
        }
        function h() {
            try {
                q.NODES.chatDropdownMenuPlanDiv && ((q.NODES.chatDropdownMenuPlanDiv.innerHTML = ""), (q.NODES.chatDropdownMenuPlanDiv.style.display = "none"));
            } catch (a) {
                q.chatTools.onFail(a);
            }
        }
        function i() {
            h(), g();
        }
        function j() {
            var a = !q.isItTrialPeriod && !q.bp && q.insufficientFundsToDisableAd && !q.showAd,
                c = q.showAd || a;
            if (q.NODES.chatDropdownMenuPatronDiv)
                if (!q.hidePatronsInChatMenu || c) {
                    q.chatTools.generateTopPatronsBlock(q.NODES.chatDropdownMenuPatronDiv);
                    var d = '<div style="font-size: 13px;margin-top: 10px;">' + q.translatedText.payDescPremium + "</div>";
                    if ((q.NODES.chatDropdownMenuPatronDiv.insertAdjacentHTML("afterbegin", d), q.uia)) {
                        var e = document.createElement("div");
                        (e.innerHTML = b("menuPatron", q.translatedText.editThisBlock)), q.NODES.chatDropdownMenuPatronDiv.appendChild(e);
                    }
                } else q.NODES.chatDropdownMenuPatronDiv.style.display = "none";
        }
        function k() {
            try {
                q.NODES.chatDropdownMenuPatronDiv && ((q.NODES.chatDropdownMenuPatronDiv.innerHTML = ""), (q.NODES.chatDropdownMenuPatronDiv.style.display = "none"));
            } catch (a) {
                q.chatTools.onFail(a);
            }
        }
        function l() {
            k(), j();
        }
        function m(a) {
            if (a)
                try {
                    if (q.NODES.chatDropdownMenuUserWrapper) {
                        if (!a.avatarUrl)
                            var b = a.fullName.substr(0, 2),
                                c = a.id % 10,
                                d = "chatbro_guest_bg_" + c;
                        var e = document.createElement("div");
                        (e.innerHTML = a.fullName), (a.fullName = e.textContent);
                        var f = q.GATEWAYS[a.siteId],
                            g = q.uim ? '<span style="display: inline-block;" title="' + q.translatedText.moder + '" class="chatbro_dropdown_user_type chatbro_dropdown_moder"></span>' : "",
                            h = q.uia ? '<span style="display: inline-block;" title="' + q.translatedText.admin + '" class="chatbro_dropdown_user_type chatbro_dropdown_admin"></span>' : "",
                            i = f ? '<span class="chatbro_dropdown_menu_user_info_gateway chatbro_' + f + '_ico"></span>' : "",
                            j = q.isGuest ? '<span style="display: block;" class="chatbro_dropdown_user_type chatbro_dropdown_guest">(' + q.translatedText.guest + ")</span>" : "",
                            k = q.uip
                                ? '<span style="display: inline-block;" title="' + q.translatedText.patron + '" class="chatbro_dropdown_user_type chatbro_dropdown_patron chatbro_dropdown_patron_lvl' + (parseInt(q.upl, 10) + 1) + '"></span>'
                                : "",
                            l =
                                '<div class="chatbro_dropdown_menu_user"><div class="chatbro_dropdown_menu_user_avatar_block">' +
                                (a.avatarUrl
                                    ? '<img class="chatbro_dropdown_menu_user_avatar" alt="avatar" data-id="' + a.id + '" data-name="' + a.fullName + '" src="' + a.avatarUrl + '">'
                                    : '<span class="chatbro_dropdown_menu_user_avatar chatbro_guest_avatar ' + d + '" data-id="' + a.id + '" data-name="' + b + '">') +
                                '</div><div class="chatbro_dropdown_menu_user_info"><div class="chatbro_dropdown_menu_user_info_name chatbro_dropdown_header">' +
                                a.fullName +
                                "</div>" +
                                i +
                                h +
                                g +
                                k +
                                j +
                                '<a class="chatbro_goto_chat chatbro_dropdown_menu_link_sign_out chatbro_logout" target="_blank">' +
                                q.translatedText.signout +
                                "</a></div></div>";
                        (q.NODES.chatDropdownMenuUserWrapper.innerHTML = l),
                            (q.NODES.chatDropdownMenuUserWrapper.style.display = "block"),
                            (q.NODES.chatDropdownMenuUser = q.chatTools.getChatElement("chatbro_dropdown_menu_user")),
                            (q.NODES.chatDropdownMenuUserWrapper = q.chatTools.getChatElement("chatbro_dropdown_menu_user_wrapper")),
                            (q.NODES.chatDropdownMenuUserGuestAvatar = q.chatTools.getChatElement("chatbro_dropdown_menu_user_avatar")),
                            (q.NODES.chatDropdownMenuUserGuestName = q.chatTools.getChatElement("chatbro_dropdown_menu_user_info_name"));
                        var m = q.NODES.chatDropdownMenuUserGuestAvatar;
                        m && !q.autoLoginViaSite && (m.onerror = q.events.onHttpAvatarLoadError), q.colorsCtrl.colorDropdown();
                    }
                } catch (n) {
                    q.chatTools.onFail(n);
                }
        }
        function n() {
            try {
                var a = "https://www.chatbro.com/moderators/" + (q.parentEncodedChatId || q.encodedChatId),
                    b = "https://www.chatbro.com/bans/" + (q.parentEncodedChatId || q.encodedChatId),
                    c = "https://www.chatbro.com/edit/" + q.encodedChatId,
                    d = q.chatAlias ? "https://" + q.chatAlias + ".chatbro.com" : "https://www.chatbro.com/" + q.encodedChatId;
                if (((q.NODES.chatDropdownMenuLoadProgressWrapper.style.display = "none"), q.inputControl && q.inputControl.isUserLogged(), !q.NODES.chatDropdownAdminStuffWrapperDiv)) return;
                if ((!q.showChatOnChatbro || q.isLoggedAsSiteUser) && !q.uia && !q.uim) return;
                if (((q.NODES.chatDropdownAdminStuffDiv.innerHTML = ""), q.showChatOnChatbro && !q.isLoggedAsSiteUser)) {
                    var e = document.createElement("a");
                    (e.className = q.NODES_CLASSES.GO_TO_CHAT),
                        (e.className += " chatbro_dropdown_menu_link_new_window"),
                        (e.innerHTML = q.translatedText.newWindowChat),
                        q.NODES.chatDropdownAdminStuffDiv.appendChild(e),
                        (e.onclick = function () {
                            window.open(d, q.chatTitle, "width=440,height=580");
                        }),
                        (q.NODES.chatDropdownAdminStuffWrapperDiv.style.display = "block");
                }
                if (q.uia) {
                    var f = document.createElement("a");
                    (f.className = q.NODES_CLASSES.GO_TO_CHAT),
                        (f.className += " chatbro_dropdown_menu_link_edit"),
                        (f.href = c),
                        (f.innerHTML = q.isChildChat ? q.translatedText.editParentChat : q.translatedText.editChat),
                        (f.target = "_blank"),
                        q.NODES.chatDropdownAdminStuffDiv.appendChild(f);
                    var g = document.createElement("a");
                    (g.className = q.NODES_CLASSES.GO_TO_CHAT),
                        (g.className += " chatbro_dropdown_menu_ban_list"),
                        (g.href = b),
                        (g.innerHTML = q.translatedText.banList),
                        (g.target = "_blank"),
                        q.NODES.chatDropdownAdminStuffDiv.appendChild(g);
                    var h = document.createElement("a");
                    (h.className = q.NODES_CLASSES.GO_TO_CHAT),
                        (h.className += " chatbro_dropdown_menu_moder_list"),
                        (h.href = a),
                        (h.innerHTML = q.translatedText.moderList),
                        (h.target = "_blank"),
                        q.NODES.chatDropdownAdminStuffDiv.appendChild(h),
                        (q.NODES.chatDropdownAdminStuffWrapperDiv.style.display = "block");
                } else if (q.uim) {
                    var g = document.createElement("a");
                    (g.className = q.NODES_CLASSES.GO_TO_CHAT),
                        (g.className += " chatbro_dropdown_menu_ban_list"),
                        (g.href = b),
                        (g.innerHTML = q.translatedText.banList),
                        (g.target = "_blank"),
                        q.NODES.chatDropdownAdminStuffDiv.appendChild(g),
                        (q.NODES.chatDropdownAdminStuffWrapperDiv.style.display = "block");
                }
            } catch (i) {
                q.chatTools.onFail(i);
            }
        }
        function o(a) {
            p();
            var b = a.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
                c = q.chatState === q.STATES.MINIMIZED ? q.NODES.chatMinHeaderDiv : q.NODES.chatMaxHeaderDiv,
                d = q.chatState === q.STATES.MINIMIZED ? 0 : 1,
                e = q.showChatBorder ? 1 : 0;
            q.chatTools.fadeIn(r, "top left"), (r.style.top = b.offsetTop + c.offsetHeight + "px"), (r.style.bottom = ""), (r.style.left = d + e + b.offsetLeft + "px");
        }
        function p() {
            for (var a = q.chatTools.getDomArrayByClass(document, q.NODES_CLASSES.DROPDOWN), b = 0; b < a.length; b++) a[b] && q.chatTools.fadeOut(a[b], "top left");
        }
        var q = a,
            r = q.NODES.chatDropdownMenuDiv,
            s = [],
            t = '<span class="chatbro_plan_warning_icon"></span>',
            u = '<span class="chatbro_plan_edit_icon"></span>';
        s.push(q.NODES.chatMaxInviteButton, q.NODES.chatMinInviteButton, q.NODES.chatDropdownMenuHeaderAlarm);
        var v = function () {
            p();
            for (var a = 0; a < s.length; a++)
                s[a] &&
                    !(function (a) {
                        a.onclick = function () {
                            q.chatTools.hasClass(r, "chatbro_fade_out") ? o(a) : p();
                        };
                    })(s[a]);
            r && (r.style.maxWidth = q.showUsersAvatars ? "290px" : "250px"),
                r.addEventListener("mouseover", function (a) {
                    var b = a.target.className;
                    b.indexOf(q.NODES_CLASSES.GO_TO_CHAT) !== -1 && q.colorsCtrl.setColor(a.target, "background-color", q.colorsCtrl.lightOrDark(q.COLORS.bodyBackgroundColor, 0.01, -0.02));
                }),
                r.addEventListener("mouseout", function (a) {
                    var b = a.target.className;
                    b.indexOf(q.NODES_CLASSES.GO_TO_CHAT) !== -1 && q.colorsCtrl.setColor(a.target, "background-color", q.COLORS.bodyBackgroundColor, 0.1);
                }),
                document.addEventListener("mousedown", function (a) {
                    var b = a.target.className,
                        c = a.target.parentNode ? a.target.parentNode.className : null,
                        d = [
                            q.NODES_CLASSES.INVITE_BUTTON,
                            q.NODES_CLASSES.DROPDOWN,
                            q.NODES_CLASSES.GO_TO_CHAT,
                            q.NODES_CLASSES.COPYRIGHT_LINK,
                            q.NODES_CLASSES.USER_MENU,
                            q.NODES_CLASSES.USER_MENU_NAME,
                            q.NODES_CLASSES.USER_MENU_AVATAR,
                            q.NODES_CLASSES.USER_MENU_GATEWAY,
                            q.NODES_CLASSES.USER_MENU_TYPE,
                            q.NODES_CLASSES.DROPDOWN_DIVIDER,
                            q.NODES_CLASSES.PLAN_NAME,
                            q.NODES_CLASSES.HEADER_ALARM,
                            q.NODES_CLASSES.ALARM_ICON,
                            q.NODES_CLASSES.ALERT,
                            q.NODES_CLASSES.EDIT_PLAN,
                            q.NODES_CLASSES.ADD_FUNDS,
                            "chatbro_patron_block_button",
                            "chatbro_patron_block_feat",
                            "chatbro_patron_block_top_button",
                            "chatbro_patron_block_top_title",
                            "chatbro_patron_block",
                            "chatbro_patron_block_top_table",
                            "chatbro_patron_block_wr",
                        ];
                    for (var e in d) if (d.hasOwnProperty(e) && b && "string" == typeof b && b.indexOf(d[e]) !== -1) return !1;
                    return (!c || "string" != typeof c || c.indexOf(q.NODES_CLASSES.GO_TO_CHAT) === -1) && void p();
                });
            try {
                q.disableCopyrightBlock &&
                    q.NODES.chatDropdownMenuCopyright &&
                    q.NODES.chatDropdownMenuCopyrightLink &&
                    q.NODES.chatDropdownMenuCopyrightLinkDomain &&
                    (q.chatTools.removeElement(q.NODES.chatDropdownMenuCopyrightLinkDomain),
                    q.NODES.chatDropdownMenuCopyrightLink.removeAttribute("href"),
                    q.NODES.chatDropdownMenuCopyrightLink.removeAttribute("target"),
                    (q.NODES.chatDropdownMenuCopyrightLink.style.cursor = "default"));
            } catch (b) {
                q.chatTools.onFail(b);
            }
        };
        try {
            v();
        } catch (w) {
            q.chatTools.onFail(w);
        }
        return { hide: p, show: o, init: v, addStuffLinks: n, addLoggedUser: m, addPlan: g, removePlan: h, updatePlan: i, addPatronBlock: j, updatePatronBlock: l, removePatronBlock: k, showAlarm: c, hideAlarm: d };
    },
    Geometry: function (a) {
        function b() {
            var a = window,
                b = document.documentElement,
                c = document.getElementsByTagName("body")[0];
            return { width: a.innerWidth || b.clientWidth || c.clientWidth, height: a.innerHeight || b.clientHeight || c.clientHeight };
        }
        function c() {
            try {
                (u.NODES.chatMaxHeaderDiv.style.borderRadius = q(u.chatTopLeftBorderRadius) + " " + q(u.chatTopRightBorderRadius) + " 0px 0px"),
                    (u.NODES.chatBodyDiv.style.borderRadius = "0px 0px " + q(u.chatBottomRightBorderRadius) + " " + q(u.chatBottomLeftBorderRadius));
            } catch (a) {}
        }
        function d(a, b) {
            var c = u.initChatLeft + a,
                d = u.initChatTop + b,
                e = u.documentWidth - u.chatWidth - u.STICKY_CHAT_VAL,
                f = u.documentHeight - u.chatHeight - u.STICKY_CHAT_VAL;
            (c = Math.max(c, 0 + u.STICKY_CHAT_VAL)),
                (c = Math.min(c, e)),
                (d = Math.max(d, 0 + u.STICKY_CHAT_VAL)),
                (d = Math.min(d, f)),
                d === u.STICKY_CHAT_VAL ? (d = 0) : d === f && (d = f + u.STICKY_CHAT_VAL),
                c === u.STICKY_CHAT_VAL ? (c = 0) : c === e && (c = e + u.STICKY_CHAT_VAL),
                (u.chatTop = d),
                (u.chatLeft = c),
                u.allowMoveChat || ((d = 0), (c = 0)),
                u.isMobile || ((u.NODES.chatMaxDiv.style.top = d + "px"), (u.NODES.chatMaxDiv.style.left = c + "px"));
        }
        function e() {
            try {
                (u.initChatWidth = u.chatWidth), (u.initChatHeight = u.chatHeight), (u.initChatLeft = u.chatLeft), (u.initChatTop = u.chatTop), u.geometry.setChatRelativeSize(0, 0), u.geometry.setChatRelativePosition(0, 0);
            } catch (a) {
                u.chatTools.onFail(a);
            }
        }
        function f(a, b) {
            var c = u.initChatWidth + a,
                d = u.initChatHeight + b;
            return (
                (c = Math.max(c, u.DEFAULT.CHAT_MIN_WIDTH)),
                (d = Math.max(d, u.DEFAULT.CHAT_MIN_HEIGHT)),
                (c = Math.min(c, u.documentWidth)),
                (d = Math.min(d, u.documentHeight)),
                (u.chatWidth = c),
                (u.chatHeight = d),
                (u.NODES.chatMaxDiv.style.width = c + "px"),
                (u.NODES.chatMaxDiv.style.height = d + "px"),
                { x: c - u.initChatWidth, y: d - u.initChatHeight }
            );
        }
        function g(a) {
            var b = u.NODES.chatSystemMessagesWrapperDiv,
                c = u.initNotificationBlockHeight + a;
            (c = Math.max(c, u.NOTIFICATION_BLOCK_MIN_HEIGHT_PX)),
                (c = Math.min(c, o(u.NODES.chatMessagesWrapperDiv) * u.NOTIFICATION_BLOCK_MAX_HEIGHT_PERCENT)),
                (c = Math.min(c, o(u.NODES.chatSystemMessagesDiv))),
                (c += 6),
                (b.style.maxHeight = c + "px"),
                (b.style.height = c + "px");
        }
        function h() {
            return { width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight };
        }
        function i() {
            u.hideChatArea &&
                ("landscape" === u.orientation
                    ? ((u.hideChatArea.style.width = u.geometry.correctSizeValue(u.windowWidth - u.windowWidth * u.mobileWidthPercent)),
                      (u.hideChatArea.style.left = u.geometry.correctSizeValue(-u.windowWidth + u.windowWidth * u.mobileWidthPercent)),
                      (u.hideChatArea.style.height = u.geometry.correctSizeValue(u.windowHeight)),
                      (u.hideChatArea.style.top = u.geometry.correctSizeValue(0)))
                    : ((u.hideChatArea.style.height = u.geometry.correctSizeValue(u.windowHeight - u.windowHeight * u.mobileHeightPercent)),
                      (u.hideChatArea.style.width = u.geometry.correctSizeValue(u.windowWidth)),
                      (u.hideChatArea.style.top = u.geometry.correctSizeValue(-u.windowHeight + u.windowHeight * u.mobileHeightPercent)),
                      (u.hideChatArea.style.left = u.geometry.correctSizeValue(0))));
        }
        function j() {
            var a = u.MOBILE_SETTINGS.HEAD_HEIGHT,
                b = u.MOBILE_SETTINGS.HEAD_BUTTON_WIDTH;
            u.NODES.chatMaxHeaderDiv.style.height = a;
            var c = u.chatTools.getDomArrayByClass(u.NODES.chatMaxHeaderDiv, "chatbro_header_table")[0];
            c.style.height = a;
            for (var d = u.chatTools.getDomArrayByClass(u.NODES.chatMaxHeaderDiv, "chatbro_header_button"), e = 0; e < d.length; e++) (d[e].style.height = a), (d[e].style.width = b);
        }
        function k() {
            if (u.hideMessagesOverflow) {
                var a =
                    u.NODES.chatMaxDiv.clientHeight -
                    o(u.NODES.chatMaxHeaderDiv) -
                    o(u.NODES.chatbroLink) -
                    o(u.NODES.chatSendDiv) -
                    o(u.NODES.chatInfoBlock) -
                    (o(u.NODES.chatBottomBorder) || 1) -
                    o(u.NODES.chatInChatBottom) -
                    o(u.NODES.chatOutOfChatTop) -
                    o(u.NODES.chatInChatTop) -
                    o(u.NODES.chatOutOfChatBottom) -
                    o(u.NODES.chatPaginatorTable) +
                    "px";
                (u.NODES.chatMessagesWrapperDiv.style.height = a),
                    u.NODES.chatMessagesWrapperPreloadDiv && ((u.NODES.chatMessagesWrapperPreloadDiv.style.height = a), (u.NODES.chatMessagesWrapperPreloadDiv.scrollTop = u.NODES.chatMessagesWrapperPreloadDiv.scrollHeight + 1e3)),
                    (u.NODES.chatModalBlock.style.height = u.NODES.chatMaxDiv.clientHeight - o(u.NODES.chatMaxHeaderDiv) - o(u.NODES.chatBottomBorder) + "px"),
                    o(u.NODES.chatModalBlock) < o(u.NODES.chatModalWrapper) ? (u.NODES.chatModalFadeBlock.style.height = o(u.NODES.chatModalWrapper) + "px") : (u.NODES.chatModalFadeBlock.style.height = "100%");
            } else (u.NODES.chatMessagesWrapperDiv.style.height = "auto"), (u.NODES.chatModalBlock.style.height = "auto");
            var b = p(u.NODES.chatMessagesWrapperDiv);
            if (
                ((u.NODES.chatMessagesBlockDiv.style.width = b + "px"),
                u.NODES.chatMessagesEmptyTd && (u.NODES.chatMessagesEmptyTd.style.width = b + "px"),
                u.NODES.chatMessagesErrorTd && (u.NODES.chatMessagesErrorTd.style.width = b + "px"),
                u.NODES.chatSendIndicatorWrapper && (u.NODES.chatSendIndicatorWrapper.style.width = b + "px"),
                u.alertControl && u.alertControl.widthHeightProcessing(),
                l(),
                m(),
                u.NODES.chatDropdownMenuDiv)
            ) {
                (u.NODES.chatDropdownMenuDiv.className += " chatbro_dropdown_menu_hack"), (u.NODES.chatDropdownMenuDiv.style.height = "auto");
                var c = o(u.NODES.chatDropdownMenuDiv),
                    d = o(u.NODES.chatBodyDiv);
                d <= c && (u.NODES.chatDropdownMenuDiv.style.height = d + (u.showChatBorder ? -2 : 0) + "px"), u.chatTools.removeClass(u.NODES.chatDropdownMenuDiv, "chatbro_dropdown_menu_hack");
                try {
                } catch (e) {}
            }
            n();
        }
        function l() {
            var a = o(u.NODES.chatMessagesWrapperDiv) - o(u.NODES.chatMessagesBlockDiv);
            (a = a > 0 ? a : 0), u.HISTORY_PLUG_DIV && a < o(u.NODES.chatSystemMessagesBlock) && (a = o(u.NODES.chatSystemMessagesBlock)), (u.NODES.chatMessagesSpace.style.height = q(a));
        }
        function m() {
            if (u.HISTORY_PLUG_DIV) {
                u.HISTORY_PLUG_DIV.style.maxHeight = q(o(u.NODES.chatMessagesWrapperDiv) - 30 - o(u.NODES.chatSystemMessagesWrapperDiv));
                var a = u.NODES.chatMessagesWrapperDiv,
                    b = parseInt(u.NODES.chatMessagesWrapperDiv.style.height, 10),
                    c = o(u.HISTORY_PLUG_DIV),
                    d = (o(u.HISTORY_PLUG_DIV_TD), o(u.NODES.chatMessagesSpace)),
                    e = (a.scrollHeight, 10);
                !u.milc || u.milc >= e || !u.mil ? (u.HISTORY_PLUG_DIV.style.top = Math.min(a.scrollTop, u.DEFAULT_HISTORY_PLUG_HEIGHT - 200) + "px") : (u.HISTORY_PLUG_DIV.style.top = q(a.scrollTop + b - c - 30 - d));
            }
        }
        function n() {
            try {
                for (var a = u.chatTools.getChatElements("chatbro_chat_name"), b = 0; b < a.length; b++) {
                    var c =
                        (p(u.NODES.chatMaxHeaderDiv) || p(u.NODES.chatMinHeaderDiv)) -
                        p(u.NODES.chatMinimizeButton) -
                        (p(u.NODES.chatMaxInviteButton) || p(u.NODES.chatMinInviteButton)) -
                        (p(u.NODES.chatMaxParticipantsWrapperDiv) || p(u.NODES.chatMinParticipantsWrapperDiv));
                    u.NODES.chatMaxNeedToUpdateCodeDiv && (c -= p(u.NODES.chatMaxNeedToUpdateCodeDiv)), (a[b].style.width = c ? 0.75 * c + "px" : "75%");
                }
            } catch (d) {
                u.chatTools.onFail(d);
            }
        }
        function o(a) {
            return (a && a.offsetHeight) || 0;
        }
        function p(a) {
            return (a && a.offsetWidth) || 0;
        }
        function q(a) {
            return isNaN(a) ? a : a + "px";
        }
        function r() {
            if (u.allowMoveChat) {
                (u.NODES.chatMinDiv.style.right = "0px"), (u.NODES.chatMinDiv.style.left = null), (u.NODES.chatMinDiv.style.display = "inline-block"), (u.NODES.chatMinHeaderDiv.style.width = null);
                var a = u.NODES.chatHeaderMinCaption,
                    b = u.NODES.chatHeaderMinIco,
                    c = q((a.offsetWidth || a.clientWidth) + (b ? b.offsetWidth || b.clientWidth : 0) + 10);
                if (((u.NODES.chatMinDiv.style.display = "block"), (u.NODES.chatMinHeaderDiv.style.width = c), u.allowMoveChat)) {
                    if (u.minimizedChatPosition) {
                        var d = "chatbro_header_rotare_to_" + u.minimizedChatPosition;
                        u.NODES.chatMinDiv.className.indexOf(d) === -1 && (u.NODES.chatMinDiv.className += " " + d);
                    }
                    var e = parseInt(c, 10) * -1;
                    switch (u.minimizedChatPosition) {
                        case "left":
                            (u.NODES.chatMinDiv.style.right = "auto"),
                                (u.NODES.chatMinDiv.style.left = u.geometry.correctSizeValue(e)),
                                (u.NODES.chatMinDiv.style.bottom = u.geometry.correctSizeValue(u.minimizedChatBottom || 20)),
                                s(u.minimizedChatBorderRadius, !1);
                            break;
                        case "right":
                            (u.NODES.chatMinDiv.style.left = "auto"),
                                (u.NODES.chatMinDiv.style.right = u.geometry.correctSizeValue(e)),
                                (u.NODES.chatMinDiv.style.bottom = u.geometry.correctSizeValue(u.minimizedChatBottom || 20)),
                                s(u.minimizedChatBorderRadius, !1);
                            break;
                        case "bottom":
                            u.minimizedChatLeft
                                ? ((u.NODES.chatMinDiv.style.left = u.geometry.correctSizeValue(u.minimizedChatLeft)), (u.NODES.chatMinDiv.style.right = "auto"))
                                : u.minimizedChatRight && (u.NODES.chatMinDiv.style.right = u.geometry.correctSizeValue(u.minimizedChatRight)),
                                (u.NODES.chatMinDiv.style.bottom = u.geometry.correctSizeValue(u.minimizedChatBottom)),
                                s(u.minimizedChatBorderRadius, !!u.minimizedChatBottom);
                    }
                }
            }
        }
        function s(a, b) {
            if (a) {
                var c = u.geometry.correctSizeValue(a);
                b
                    ? ((u.NODES.chatMinHeaderDiv.style.borderRadius = c), (u.NODES.chatMinHeaderDivTable.style.borderRadius = c))
                    : ((u.NODES.chatMinHeaderDiv.style.borderTopLeftRadius = c),
                      (u.NODES.chatMinHeaderDiv.style.borderTopRightRadius = c),
                      (u.NODES.chatMinHeaderDivTable.style.borderTopLeftRadius = c),
                      (u.NODES.chatMinHeaderDivTable.style.borderTopRightRadius = c));
            }
        }
        function t(a) {
            var b = a.getElementsByTagName("td"),
                c = b[0].offsetWidth || 0,
                d = b[1].offsetWidth || 0,
                e = b[3].offsetWidth || 0,
                f = a.getElementsByClassName(u.NODES_CLASSES.MESSAGE_TEXT_WRAPPER)[0];
            f.style.width = u.NODES.chatMessagesTable.offsetWidth - 2 * c - d - e + "px";
        }
        var u = a;
        return (
            c(),
            {
                setChatRelativeSize: f,
                setChatRelativeSizeAndPosition: e,
                setNotificationBlockRelativeSize: g,
                elementHeight: o,
                elementWidth: p,
                setChatMessagesWrapperHeight: k,
                getViewportGeometry: b,
                setChatRelativePosition: d,
                correctSizeValue: q,
                getWindowSize: h,
                setMobileHeadGeometry: j,
                setMinChatHeaderWidth: r,
                setChatNameWidth: n,
                setHistoryPlugHeightTop: m,
                setMessagesSpaceHeight: l,
                setChatMessageTableWidth: t,
                setHideChatArea: i,
                setBorderRadius: c,
            }
        );
    },
    ModalWindowControl: function (a) {
        function b() {
            try {
                o();
            } catch (a) {
                s.chatTools.onFail(a);
            }
        }
        function c() {
            var a = s.allowedLoginMethods;
            (s.isGuestLoginAllowed = a.indexOf("guest") !== -1),
                (s.isSocialLoginAllowed = a.indexOf("vk") !== -1 || a.indexOf("tg") !== -1 || a.indexOf("fb") !== -1 || a.indexOf("google") !== -1),
                (s.isCustomLinkLogin = !!s.customLoginLink);
        }
        function d() {
            if (
                ((s.NODES.chatModalLoginInputBlock.style.display = "block"),
                (s.NODES.chatModalLoginHeadSocialDiv.style.display = "block"),
                (s.NODES.chatModalLoginSocialDiv.style.display = "block"),
                (s.NODES.chatModalLoginHeadGuestVar1Div.style.display = "block"),
                (s.NODES.chatModalLoginHeadGuestVar2Div.style.display = "block"),
                (s.NODES.chatModalLoginCustomLinkDiv.style.display = "block"),
                (s.NODES.chatModalLoginSocialDiv.style.marginBottom = "20px"),
                (s.NODES.chatModalLoginCustomLinkDiv.style.marginTop = "20px"),
                s.isGuestLoginAllowed &&
                    !s.isSocialLoginAllowed &&
                    ((s.NODES.chatModalLoginHeadGuestVar1Div.style.display = "none"), (s.NODES.chatModalLoginHeadSocialDiv.style.display = "none"), (s.NODES.chatModalLoginSocialDiv.style.display = "none")),
                s.isGuestLoginAllowed && s.isSocialLoginAllowed && (s.NODES.chatModalLoginHeadGuestVar2Div.style.display = "none"),
                !s.isGuestLoginAllowed &&
                    s.isSocialLoginAllowed &&
                    ((s.NODES.chatModalLoginHeadGuestVar1Div.style.display = "none"), (s.NODES.chatModalLoginHeadGuestVar2Div.style.display = "none"), (s.NODES.chatModalLoginSocialDiv.style.marginBottom = "0px")),
                s.isGuestLoginAllowed || (s.NODES.chatModalLoginInputBlock.style.display = "none"),
                s.isSocialLoginAllowed)
            ) {
                var a = s.allowedLoginMethods;
                (F.style.display = a.indexOf("vk") !== -1 ? "inline" : "none"),
                    (G.style.display = a.indexOf("tg") !== -1 ? "inline" : "none"),
                    (H.style.display = a.indexOf("fb") !== -1 ? "inline" : "none"),
                    (I.style.display = a.indexOf("google") !== -1 ? "inline" : "none");
            } else (F.style.display = "none"), (G.style.display = "none"), (H.style.display = "none"), (I.style.display = "none");
            s.isCustomLinkLogin ? (s.NODES.chatModalLoginCustomLink.href = s.customLoginLink) : (s.NODES.chatModalLoginCustomLinkDiv.style.display = "none"),
                s.isGuestLoginAllowed ||
                    s.isSocialLoginAllowed ||
                    !s.isCustomLinkLogin ||
                    ((s.NODES.chatModalLoginHeadGuestVar1Div.style.display = "none"),
                    (s.NODES.chatModalLoginHeadGuestVar2Div.style.display = "none"),
                    (s.NODES.chatModalLoginSocialDiv.style.display = "none"),
                    (s.NODES.chatModalLoginHeadSocialDiv.style.display = "none"),
                    (s.NODES.chatModalLoginCustomLinkDiv.style.marginTop = "0px"));
            try {
                if (!s.isSiteLogin || s.autoLoginViaSite) (s.NODES.chatModalLoginHeadSiteDiv.style.display = "none"), (s.NODES.chatModalLoginSiteDiv.style.display = "none");
                else {
                    (s.NODES.chatModalLoginSiteDiv.onmouseover = function () {
                        s.NODES.chatModalLoginSiteDiv.style.background = s.colorsCtrl.lightOrDark(s.COLORS.bodyBackgroundColor, 0.1, -0.023);
                    }),
                        (s.NODES.chatModalLoginSiteDiv.onmouseout = function () {
                            s.NODES.chatModalLoginSiteDiv.style.background = s.COLORS.bodyBackgroundColor;
                        });
                    var b = s.siteUserFullName || (s.siteUserFirstName || "") + " " + (s.siteUserLastName || "") || s.siteUserScreenName;
                    s.siteUserAvatarUrl && (s.NODES.chatModalLoginSiteAvatar.src = s.siteUserAvatarUrl), (s.NODES.chatModalLoginSiteName.textContent = b), (s.NODES.chatModalLoginSiteDiv.onclick = s.setSiteUser.bind(s));
                }
            } catch (c) {
                s.chatTools.onFail(c);
            }
        }
        function e(a) {
            var b, c;
            return (
                a < 60
                    ? ((b = 0), (c = a))
                    : 60 <= a && a < 1440
                    ? ((b = 1), (c = a / 60))
                    : 1440 <= a && a < 10080
                    ? ((b = 2), (c = a / 1440))
                    : 10080 <= a && a < 43800
                    ? ((b = 3), (c = a / 10080))
                    : 43800 <= a && a < 525600
                    ? ((b = 4), (c = a / 43800))
                    : 525600 <= a && a < 10512e3
                    ? ((b = 5), (c = a / 525600))
                    : (b = 6),
                (c ? c : "") + V[b]
            );
        }
        function f() {
            var a = x.offsetHeight,
                b = w.offsetHeight,
                c = (a - b) / 2,
                d = 20,
                e = c - d;
            (w.style.top = e < 0 ? "0px" : e + "px"), A && (A.style.top = e + b / 2 - 20 + "px");
        }
        function g() {
            (v.style.visibility = "hidden"), (v.style.opacity = 0);
        }
        function h() {
            s.NODES.chatModalLoginBlock.style.display = "none";
        }
        function i(a, b, c) {
            switch (((v.style.visibility = "visible"), (v.style.opacity = 1), j(), a)) {
                case "login":
                    (s.NODES.chatModalLoginBlock.style.display = "block"),
                        setTimeout(function () {
                            s.isGuestLoginAllowed && (s.isMobile || (C.focus(), C.click()));
                        }, 300),
                        q(c);
                    break;
                case "ban":
                    (s.NODES.chatModalBanBlock.style.display = "block"), (M.value = T), (N.checked = !1), (O.checked = !1), (P.value = ""), (Q.checked = !0), (R.checked = !1);
                    try {
                        0 !== s.permissions.length && s.permissions.indexOf("delete") === -1 && ((O.parentNode.parentNode.style.display = "none"), (s.NODES.chatModalBanBlock.style.height = "222px"));
                    } catch (d) {
                        s.chatTools.onFail(d);
                    }
                    r(b);
                    break;
                case "patron":
                    s.chatTools.generateTopPatronsBlock(s.NODES.chatModalPatronBodyBlock);
                    var e = '<div style="font-size: 13px;margin-bottom: 10px;line-height: 19.8714px;">' + s.translatedText.payDescPremium + "</div>";
                    s.NODES.chatModalPatronBodyBlock.insertAdjacentHTML("afterbegin", e), (s.NODES.chatModalPatronBlock.style.display = "block");
                    break;
                case "menu":
                    if (!s.uim && !s.uia && 0 === s.permissions.length) return;
                    (s.NODES.chatModalMenuBlock.style.display = "block"), (s.NODES.chatModalMenuSetModer.style.display = "flex"), (s.NODES.chatModalMenuDeleteModer.style.display = "flex");
                    var g = s.chatTools.getDomArrayByClass(v, "chatbro_modal_menu_title")[0];
                    g && (g.textContent = b.userName),
                        b.modersMessage ? (s.NODES.chatModalMenuSetModer.style.display = "none") : (s.NODES.chatModalMenuDeleteModer.style.display = "none"),
                        b.adminsMessage && (s.NODES.chatModalMenuSetModer.style.display = "none"),
                        (!s.uim && b.canBeModer) || ((s.NODES.chatModalMenuSetModer.style.display = "none"), (s.NODES.chatModalMenuDeleteModer.style.display = "none")),
                        0 !== s.permissions.length &&
                            ((s.NODES.chatModalMenuDeleteMessagesFromUser.style.display = "none"),
                            s.permissions.indexOf("ban") !== -1,
                            s.permissions.indexOf("delete") !== -1 && (s.NODES.chatModalMenuDeleteMessagesFromUser.style.display = "flex")),
                        p(b.messageId, b.userId);
            }
            u.setChatMessagesWrapperHeight(), f(a);
        }
        function j() {
            [s.NODES.chatModalBanBlock, s.NODES.chatModalLoginBlock, s.NODES.chatModalMenuBlock, s.NODES.chatModalPatronBlock].map(function (a) {
                return a && (a.style.display = "none"), a;
            });
        }
        function k() {
            s.isGuestLoginAllowed && ((E.style.display = "block"), s.colorsCtrl.setColor(E, "color", t), s.colorsCtrl.setColor(D, "border-color", t));
        }
        function l() {
            s.isGuestLoginAllowed && ((E.style.display = "none"), K && s.colorsCtrl.setColor(E, "color", K), J && s.colorsCtrl.setColor(D, "border-color", J));
        }
        function m(a) {
            return a.substr(0, 30);
        }
        function n(a) {
            return 0 !== a.length;
        }
        function o() {
            document.addEventListener("keyup", function (a) {
                var b = window.event ? a.which : a.keyCode;
                if (27 === b) {
                    g();
                    try {
                        s.imagePreviewWrapper && (s.chatTools.removeElement(s.imagePreviewWrapper), (s.imagePreviewWrapper = null));
                    } catch (c) {}
                }
            }),
                (x.onclick = g),
                (y.onclick = g);
            for (var a in z)
                if (z.hasOwnProperty(a)) {
                    var b = z[a];
                    b.onclick = g;
                }
        }
        function p(a, b) {
            (s.NODES.chatModalMenuDeleteMessagesFromUser.onclick = function () {
                g(),
                    s.makeRequest({
                        url: s.chatbroWwwHost + "/delete_messages_from_user/",
                        type: "POST",
                        auth: !0,
                        data: {
                            userId: b,
                            chatId: s.chatId,
                            siteDomain: s.siteDomain,
                            siteUserFullName: s.siteUserFullName,
                            siteUserExternalId: s.siteUserExternalId,
                            siteUserAvatarUrl: s.siteUserAvatarUrl,
                            siteUserFullNameColor: s.siteUserFullNameColor,
                            signature: s.signature,
                            siteUserProfileUrl: s.siteUserProfileUrl,
                            permissions: s.permissions,
                        },
                        success: function (a) {
                            if (a.error) return s.chatTools.onFail(a);
                        },
                        error: s.chatTools.onFail,
                    }),
                    (s.NODES.chatModalMenuDeleteMessagesFromUser.onclick = null);
            }),
                (s.NODES.chatModalMenuDeleteModer.onclick = function () {
                    g(),
                        s.makeRequest({
                            url: s.chatbroWwwHost + "/delete_moder/",
                            type: "GET",
                            auth: !0,
                            data: { userId: b, encodedChatId: s.encodedChatId },
                            success: function (a) {
                                return a.error ? s.chatTools.onFail(a.error) : void window.location.reload();
                            },
                            error: s.chatTools.onFail,
                        }),
                        (s.NODES.chatModalMenuDeleteModer.onclick = null);
                }),
                (s.NODES.chatModalMenuSetModer.onclick = function () {
                    g(),
                        s.makeRequest({
                            url: s.chatbroWwwHost + "/set_moder/",
                            type: "GET",
                            auth: !0,
                            data: { userId: b, encodedChatId: s.encodedChatId },
                            success: function (a) {
                                return a.error ? s.chatTools.onFail(a.error) : void window.location.reload();
                            },
                            error: s.chatTools.onFail,
                        }),
                        (s.NODES.chatModalMenuSetModer.onclick = null);
                });
        }
        function q(a) {
            function b() {
                var b = m(C.value.trim());
                n(b)
                    ? (h(), s.guestLogin(b, a))
                    : (k(),
                      setTimeout(function () {
                          C.focus();
                      }, 0));
            }
            s.isSocialLoginAllowed &&
                (F &&
                    (F.onclick = function () {
                        h(), s.vkLogin.bind(s)(a);
                    }),
                G &&
                    (G.onclick = function () {
                        h(), s.tgLogin.bind(s)(a);
                    }),
                H &&
                    (H.onclick = function () {
                        h(), s.fbLogin.bind(s)(a);
                    }),
                I &&
                    (I.onclick = function () {
                        h(), s.goLogin.bind(s)(a);
                    })),
                s.isGuestLoginAllowed &&
                    ((B.onclick = b),
                    (C.onkeyup = function (a) {
                        var c = window.event ? a.which : a.keyCode;
                        l(), 13 === c && b();
                    }));
        }
        function r(a) {
            function b(a) {
                s.NODES.chatModalBanLabelDiv.innerHTML = a;
            }
            function c() {
                var a = this.value || T,
                    c = X[a / U];
                (d = W[a / U]), b(c);
            }
            var d;
            c(),
                (M.onchange = c),
                (M.oninput = c),
                (L.onclick = function () {
                    try {
                        var b = O.checked;
                        b &&
                            s.makeRequest({
                                url: s.chatbroWwwHost + "/delete_messages_from_user/",
                                type: "POST",
                                auth: !0,
                                data: {
                                    userId: parseInt(a.userId, 10),
                                    chatId: s.chatId,
                                    siteDomain: s.siteDomain,
                                    siteUserFullName: s.siteUserFullName,
                                    siteUserExternalId: s.siteUserExternalId,
                                    siteUserAvatarUrl: s.siteUserAvatarUrl,
                                    siteUserFullNameColor: s.siteUserFullNameColor,
                                    signature: s.signature,
                                    siteUserProfileUrl: s.siteUserProfileUrl,
                                    permissions: s.permissions,
                                },
                                success: function (a) {
                                    if (a.error) return s.chatTools.onFail(a);
                                },
                                error: s.chatTools.onFail,
                            }),
                            s.makeRequest({
                                url: s.chatbroWwwHost + "/ban_user/",
                                type: "POST",
                                auth: !0,
                                data: {
                                    chatId: a.chatId,
                                    messageId: parseInt(a.messageId, 10),
                                    isShadow: N.checked,
                                    reason: P.value,
                                    type: Q.checked ? "IP" : "ID",
                                    duration: d,
                                    siteDomain: s.siteDomain,
                                    siteUserFullName: s.siteUserFullName,
                                    siteUserExternalId: s.siteUserExternalId,
                                    siteUserAvatarUrl: s.siteUserAvatarUrl,
                                    siteUserFullNameColor: s.siteUserFullNameColor,
                                    signature: s.signature,
                                    siteUserProfileUrl: s.siteUserProfileUrl,
                                    permissions: s.permissions,
                                },
                                success: function (a) {
                                    return a.error
                                        ? s.chatTools.onFail(a)
                                        : void (a.isBanned ? s.alertControl.showSuccessMessage(a.fullName + " " + s.translatedText.hasBeenBanned, 5e3) : s.alertControl.showErrorMessage(s.translatedText.cantBanUser));
                                },
                                error: s.chatTools.onFail,
                            });
                    } catch (c) {
                        s.chatTools.onFail(c);
                    }
                    g();
                });
        }
        var s = a,
            t = "red",
            u = s.geometry,
            v = s.NODES.chatModalBlock,
            w = s.NODES.chatModalWrapper,
            x = s.NODES.chatModalFadeBlock,
            y = s.NODES.chatModalFadeSideBlock,
            z = s.chatTools.getDomArrayByClass(v, s.NODES_CLASSES.MODAL_CLOSE),
            A = s.NODES.chatModalFadeBlockRadial,
            B = s.NODES.chatModalLoginOkBtn,
            C = s.NODES.chatModalLoginInput,
            D = s.NODES.chatModalLoginInputWrapperDiv,
            E = s.NODES.chatModalLoginBottomDiv,
            F = s.chatTools.getDomArrayByClass(v, s.NODES_CLASSES.VK_LOGIN)[0],
            G = s.chatTools.getDomArrayByClass(v, s.NODES_CLASSES.TG_LOGIN)[0],
            H = s.chatTools.getDomArrayByClass(v, s.NODES_CLASSES.FB_LOGIN)[0],
            I = s.chatTools.getDomArrayByClass(v, s.NODES_CLASSES.GO_LOGIN)[0];
        if ((c(), s.isGuestLoginAllowed)) {
            if (D) var J = s.colorsCtrl.getColor(D, "border-bottom-color");
            if (E) var K = s.colorsCtrl.getColor(E, "color");
        }
        d();
        var L = s.NODES.chatModalBanOkBtn,
            M = s.NODES.chatModalBanInput,
            N = s.NODES.chatModalBanIsShadow,
            O = s.NODES.chatModalBanDeleteAllMessages,
            P = s.NODES.chatModalBanReason,
            Q = (s.NODES.chatModalBanbanByIp, s.NODES.chatModalBanbanByUserId, s.NODES.chatModalBanbanByIpRadio),
            R = s.NODES.chatModalBanbanByUserIdRadio,
            S = parseInt(M.getAttribute("max"), 10),
            T = parseInt(M.getAttribute("value"), 10),
            U = parseInt(M.getAttribute("step"), 10),
            V = M.getAttribute("dimension").split("|");
        M.removeAttribute("dimension");
        var W = [1, 5, 10, 15, 20, 25, 30, 40, 50, 60, 120, 180, 360, 720, 1440, 2880, 10080, 43800, 525600, 11037600];
        W.length = S;
        var X = W.map(function (a) {
            return e(a);
        });
        return b(), { setTopPosition: f, show: i, hide: g, loginButtons: { vkLoginBtn: F, tgLoginBtn: G, fbLoginBtn: H, goLoginBtn: I, loginOKBtn: B }, configurateLoginMenu: d, setAllowedLoginStatus: c };
    },
    InputControl: function (a) {
        function b() {
            var a = { texts: { writeMessage: F.getAttribute("writeMessage"), writeName: F.getAttribute("writeName") } };
            F.removeAttribute("writeMessage"),
                F.removeAttribute("writeName"),
                (F.onblur = function () {
                    var a = p(),
                        b = a.replace(/(\&nbsp;|\s)*$/gi, "").trim();
                    "" === b && q(b);
                }),
                E.chatTools.existUserDocumentEvents("chatInputClick", 0) ? E.oneTimeEvent(H, "mousedown", E.events.onChatInputClick) : (H.onmousedown = f),
                l(a.texts.writeMessage);
            try {
                var b = isNaN(parseInt(E.messageFontSise, 10)) ? E.DEFAULT_MESSAGE_FONT_SIZE : E.messageFontSise,
                    c = b - E.DEFAULT_MESSAGE_FONT_SIZE;
                if (c && F) {
                    var d = E.DEFAULT_INPUT_FONT_SIZE + c - 1,
                        e = d <= 16 ? d / 16 : 1;
                    (d = d <= 16 ? 16 : d), (F.style.fontSize = E.geometry.correctSizeValue(d)), (F.style.transform = "scale(" + e + ")");
                }
            } catch (g) {}
        }
        function c() {
            if (E.NODES.chatSendDiv) {
                var a = E.chatTools.isScrolledToBottom();
                (E.NODES.chatSendDiv.style.display = "none"), E.geometry.setChatMessagesWrapperHeight(), a && E.chatTools.scrollToBottom();
            }
        }
        function d() {
            if (E.NODES.chatSendDiv) {
                var a = E.chatTools.isScrolledToBottom();
                (E.NODES.chatSendDiv.style.display = "block"), E.geometry.setChatMessagesWrapperHeight(), a && E.chatTools.scrollToBottom();
            }
        }
        function e() {
            return (
                E.NODES.chatMessagesScrollToLast && (E.NODES.chatMessagesScrollToLast.style.bottom = !E.allowSendMessages || (E.allowSendMessagesForAdminOnly && !E.uia) ? "13px" : "50px"),
                E.allowSendMessages ? (E.allowSendMessagesForAdminOnly && !E.uia ? c() : void d()) : c()
            );
        }
        function f() {
            y() || j(), (E.getDataFromSender && !E.isConnectedWithSender) || (y() ? g() : (document.activeElement.blur(), j(), z()));
        }
        function g() {
            k(),
                E.inputControl.setFocusToEnd(),
                E.allowSendMessages &&
                    ((G.onclick = E.events.onSendButtonClick),
                    (F.oninput = E.events.onSendInput),
                    (F.onkeydown = E.events.onSendInputKeyDown),
                    (F.onkeypress = E.events.onSendInputKeyPress),
                    E.LOCK_SEND_MESSAGE && (E.LOCK_SEND_MESSAGE = !1));
        }
        function h() {
            (E.NODES.chatSendLoaderDiv.style.display = "block"), E.colorsCtrl.setColor(G, "color", E.COLORS.inputBackgroundColor);
        }
        function i() {
            (E.NODES.chatSendLoaderDiv.style.display = "none"), E.colorsCtrl.setColor(G, "color", E.COLORS.inputTextColor);
        }
        function j() {
            (E.LOCK_SEND_MESSAGE = !0), F && (F.contentEditable = !1);
        }
        function k() {
            (E.LOCK_SEND_MESSAGE = !1), F && (F.contentEditable = !0);
        }
        function l(a) {
            F && F.setAttribute("data-ph", a);
        }
        function m(a) {
            if (!a) return "";
            var a = a
                .replace(/(<br>){3,}/g, "||br||||br||")
                .replace(/<br>/g, "||br||")
                .replace(/<img class=\"emojione\" alt=\"(.*?)\"[^>]*>/g, "$1")
                .replace(/<span data-key=\"(.*?)\"[^>]*>[^>]*>/g, "$1")
                .replace(/\&nbsp\;/g, " ")
                .replace(/\&lt\;/g, "<")
                .replace(/\&gt\;/g, ">")
                .replace(/\&amp\;/g, "&")
                .replace(/<[^>]*>/g, "")
                .replace(/\|\|br\|\|/g, "\n");
            return a;
        }
        function n() {
            q("");
        }
        function o() {
            var a = m(p());
            return a;
        }
        function p() {
            return F ? F.innerHTML : "";
        }
        function q(a) {
            F && (F.innerHTML = a);
        }
        function r(a) {
            q(p() + a);
        }
        function s(a) {
            q(a + p());
        }
        function t() {
            if (E.allowSendMessages) {
                var a, b;
                F.focus();
                try {
                    document.createRange
                        ? ((a = document.createRange()), a.selectNodeContents(F), a.collapse(!1), (b = window.getSelection()), b.removeAllRanges(), b.addRange(a))
                        : document.selection && ((a = document.body.createTextRange()), a.moveToElementText(F), a.collapse(!1), a.select());
                } catch (c) {}
            }
        }
        function u(a, b) {
            if (null !== a)
                if (a.createTextRange) {
                    var c = a.createTextRange();
                    c.move("character", b), c.select();
                } else a.selectionStart ? (a.focus(), a.setSelectionRange(b, b)) : a.focus();
        }
        function v(a) {
            return function () {
                return y() ? a.apply(this, arguments) : z(a);
            };
        }
        function w() {
            return !E.uip && (E.showAd || (!E.showAd && E.insufficientFundsToDisableAd && !E.bp));
        }
        function x(a, b) {
            return (
                (E.isBlocked = w()),
                (a = a && "function" == typeof a ? a : function () {}),
                (b = b && "function" == typeof b ? b : function () {}),
                function () {
                    return E.isBlocked ? a.apply(this, arguments) : b.apply(this, arguments);
                }
            );
        }
        function y() {
            var a = "undefined" != typeof E.userId;
            E.isGuestLoginAllowed || !E.isGuest || E.uia || E.uim || (a = !1), E.uia || E.uim || (E.userCurrentLoginMethod && E.allowedLoginMethods.indexOf(E.userCurrentLoginMethod) === -1 && ((a = !1), (E.userId = void 0)));
            var b = !(!a && !E.isLoggedAsSiteUser);
            return b || A(), b;
        }
        function z(a) {
            (E.getDataFromSender && !E.isConnectedWithSender) || E.modalWindowControl.show("login", {}, a);
        }
        function A() {
            if (E.NODES.chatDropdownMenuUserWrapper && ((E.NODES.chatDropdownMenuUserWrapper.innerHTML = ""), E.inputControl && E.modalWindowControl && E.NODES.chatDropdownMenuUserWrapper))
                if (E.isGuestLoginAllowed || E.isSocialLoginAllowed || E.isCustomLinkLogin) {
                    var a = document.createElement("a");
                    (a.className = E.NODES_CLASSES.GO_TO_CHAT),
                        (a.className += " chatbro_dropdown_menu_link_sign_in"),
                        (a.innerHTML = E.translatedText.signIn),
                        E.NODES.chatDropdownMenuUserWrapper.appendChild(a),
                        (E.NODES.chatDropdownMenuUserWrapper.style.display = "block"),
                        E.colorsCtrl.colorDropdown(),
                        (a.onclick = function () {
                            E.dropdownMenuControl.hide(), E.inputControl.loginUser();
                        });
                } else if (E.allowSSO) {
                    var a = document.createElement("a");
                    (a.className = E.NODES_CLASSES.GO_TO_CHAT),
                        (a.className += " chatbro_dropdown_menu_link_sign_in"),
                        (a.innerHTML = E.translatedText.registeredOnly),
                        (a.style.cursor = "default"),
                        E.NODES.chatDropdownMenuUserWrapper.appendChild(a),
                        (E.NODES.chatDropdownMenuUserWrapper.style.display = "block"),
                        E.colorsCtrl.colorDropdown();
                }
        }
        function B(a) {
            var b, c;
            if (window.getSelection) {
                if (((b = window.getSelection()), b.focusNode != F && b.focusNode.parentNode != F)) {
                    var d = p();
                    (d = d.replace(/(<br>(?:<br>))$/g, "<br>")), q(d + a), t();
                } else if (b.getRangeAt && b.rangeCount) {
                    (c = b.getRangeAt(0)), c.deleteContents();
                    var e = document.createElement("div");
                    e.innerHTML = a;
                    for (var f, g, h = document.createDocumentFragment(); (f = e.firstChild); ) g = h.appendChild(f);
                    c.insertNode(h), g && ((c = c.cloneRange()), c.setStartAfter(g), c.collapse(!0), b.removeAllRanges(), b.addRange(c));
                }
            } else document.selection && "Control" != document.selection.type && document.selection.createRange().pasteHTML(a);
        }
        function C(a) {
            var b = !E.isItTrialPeriod && !E.bp && E.insufficientFundsToDisableAd && !E.showAd,
                c = E.showAd || b;
            if (!c) {
                var d = a,
                    e = E.GATEWAYS[E.userSiteId];
                if (E.chatRestrictions && E.chatRestrictions.isSlowMode && !E.uia && !E.uim) {
                    if (!a) {
                        if (
                            !E.chatRestrictions ||
                            "undefined" == typeof E.chatRestrictions.slowModeDelayCommon ||
                            "undefined" == typeof E.chatRestrictions.slowModeDelayGuest ||
                            "undefined" == typeof E.chatRestrictions.slowModeDelaySocial ||
                            "undefined" == typeof E.chatRestrictions.slowModeDelaySite ||
                            "undefined" == typeof E.chatRestrictions.slowModeDelayPatron ||
                            "undefined" == typeof E.chatRestrictions.slowModeDelayCustom
                        )
                            return;
                        (d = E.chatRestrictions.slowModeDelayCommon),
                            E.uip && (d = E.chatRestrictions.slowModeDelayPatron),
                            E.isLoggedAsSiteUser && (d = E.chatRestrictions.slowModeDelaySite),
                            (E.isGuest || "guest" === e) && (d = E.chatRestrictions.slowModeDelayGuest),
                            ("vk" !== e && "fb" !== e && "go" !== e && "tg" !== e) || (d = E.chatRestrictions.slowModeDelaySocial);
                    }
                    if (0 !== d)
                        try {
                            if (E.NODES.chatSendIndicatorWrapper && E.NODES.chatSendIndicator) {
                                I && clearInterval(I);
                                var f = E.NODES.chatSendIndicatorWrapper,
                                    g = E.NODES.chatSendIndicator;
                                (f.style.height = "2px"), (E.blockSendingByDelay = !0), (E.sendingDelayLeft = 1e3 * d);
                                var h = f.offsetWidth || 0,
                                    i = h,
                                    j = 500,
                                    k = (h / (1e3 * d)) * j;
                                I = setInterval(function () {
                                    (i -= k), (g.style.width = i + "px"), (E.sendingDelayLeft -= j), i <= 0 && D();
                                }, j);
                            }
                        } catch (l) {
                            console.log(l);
                        }
                }
            }
        }
        function D() {
            var a = E.NODES.chatSendIndicatorWrapper,
                b = E.NODES.chatSendIndicator;
            clearInterval(I),
                (a.style.height = "0px"),
                (E.sendingDelayLeft = 0),
                setTimeout(function () {
                    (b.style.width = "100%"), (E.blockSendingByDelay = !1);
                }, 300);
        }
        var E = a,
            F = E.NODES.chatSendInput,
            G = E.NODES.chatSendButton,
            H = E.NODES.chatSendBlock,
            I = null;
        E.uia ||
            E.uim ||
            E.isGuestLoginAllowed ||
            E.isSocialLoginAllowed ||
            E.isCustomLinkLogin ||
            y() ||
            document.addEventListener("chatInputClick", function (a) {
                var b = a.chat;
                E.chatIdentificator === a.chat.chatIdentificator && (b.lockSendMessage(), b.showWarningMessage(E.translatedText.registeredOnly));
            });
        try {
            E.allowSendMessages && b();
        } catch (J) {
            E.chatTools.onFail(J);
        }
        return {
            getValue: o,
            getDirtyValue: p,
            setValue: q,
            clearInput: n,
            setValueToEnd: r,
            setValueToBegin: s,
            setFocusToEnd: t,
            setCaretPosition: u,
            insertNodeAtCursor: B,
            showGifBtn: h,
            hideGifBtn: i,
            lockSendMessage: j,
            unLockSendMessage: k,
            showDelayIndicatorInSec: C,
            removeDelayIndicator: D,
            isUserLogged: y,
            ifUserLogged: v,
            ifUserBlocked: x,
            isBlocked: w,
            loginUser: z,
            removeUser: A,
            bindMessageEvent: g,
            hideInput: c,
            showInput: d,
            inputProcess: e,
        };
    },
    Events: function (a) {
        var b = a,
            c = b.geometry;
        return {
            onAlarmClick: function () {
                var a = b.translatedText.needToUpdateCode + "\n" + b.translatedText.whereGetCode + ' <a href="https://www.chatbro.com/documentation/#embedCode">' + b.translatedText.fromDocumentation + "</a>.";
                b.alertControl.showWarningMessage(a);
            },
            onSendMessage: function (a) {
                if (b.chatIdentificator === a.chat.chatIdentificator) {
                    var c = a.message;
                    a.onSuccess(c);
                }
            },
            onDeleteMessage: function (a) {
                var d = b.chatTools.getAllMessages();
                if (d.length) {
                    b.subbatchControl.resetCurrentSubbatches();
                    for (var e = 0; e < d.length; e++)
                        !(function (b, e) {
                            var f = d[e],
                                g = f.getAttribute("message_id"),
                                h = f.getAttribute("subbatch");
                            if (parseInt(g, 10) === parseInt(a, 10)) {
                                var i = f.parentNode;
                                i.removeChild(f), c.setChatMessagesWrapperHeight();
                            } else b.subbatchControl.addCurrentSubbatches(h);
                        })(b, e);
                    b.subbatchControl.log(), (d = b.chatTools.getAllMessages()), 0 === d.length && ((b.NODES.chatMessagesEmptyTd.style.display = "table-row"), c.setChatMessagesWrapperHeight());
                }
            },
            onDeleteMessagesFromUser: function (a) {
                var d = b.chatTools.getAllMessages();
                if (d.length) {
                    (b._delMsgCount = 0), (d = d.reverse()), b.subbatchControl.resetCurrentSubbatches();
                    for (var e = 0; e < d.length; e++)
                        !(function (b, e) {
                            var f = d[e],
                                g = f.getAttribute("owner_id"),
                                h = f.getAttribute("subbatch");
                            if (parseInt(g, 10) === parseInt(a, 10)) {
                                if (b._delMsgCount >= 15) return;
                                var i = f.parentNode;
                                i.removeChild(f), c.setChatMessagesWrapperHeight(), b._delMsgCount++;
                            } else b.subbatchControl.addCurrentSubbatches(h);
                        })(b, e);
                    b.subbatchControl.log(), (d = b.chatTools.getAllMessages()), 0 === d.length && ((b.NODES.chatMessagesEmptyTd.style.display = "table-row"), c.setChatMessagesWrapperHeight());
                }
            },
            onDeleteMessages: function () {
                (b.lastSubbatchId = 0), (b.subbatches.uploadedSubbatchCount = 1);
                var a = b.chatTools.getAllMessages();
                if (a.length) {
                    b.subbatchControl.resetCurrentSubbatches();
                    for (var d = 0; d < a.length; d++)
                        !(function (b) {
                            var c = a[b],
                                d = c.parentNode;
                            d.removeChild(c);
                        })(d);
                    (b.NODES.chatMessagesEmptyTd.style.display = "table-row"), c.setChatMessagesWrapperHeight(), b.subbatchControl.log();
                }
            },
            onMessageReceiving: function (a, d) {
                b.NODES.chatMessagesEmptyTd && (b.NODES.chatMessagesEmptyTd.style.display = "none");
                var e = {};
                d && d.hasOwnProperty("disableAudio") ? (e.disableAudio = d.disableAudio) : (e.disableAudio = !1),
                    d && d.hasOwnProperty("hasError") ? (e.hasError = d.hasError) : (e.hasError = !1),
                    d && d.hasOwnProperty("showGreeting") ? (e.showGreeting = d.showGreeting) : (e.showGreeting = !1),
                    d && d.hasOwnProperty("hideAd") ? (e.hideAd = d.hideAd) : (e.hideAd = !1),
                    d && d.hasOwnProperty("showLoader") ? (e.showLoader = d.showLoader) : (e.showLoader = !1);
                var f = b.chatTools.isScrolledToBottom();
                b.setMessagesCount(),
                    b.showTitleNotification && b.alertControl.showInBrowserTitle(),
                    a.html
                        ? (b.NODES.chatMessagesTbody.insertAdjacentHTML("beforeend", a.html),
                          setTimeout(function () {
                              b.getDataFromSender && b.conControl.uipreload.hide();
                          }, 1))
                        : setTimeout(function () {
                              e.hasError ? (b.NODES.chatMessagesErrorTd.style.display = "table-row") : (b.NODES.chatMessagesEmptyTd.style.display = "table-row"), b.geometry.setChatMessagesWrapperHeight(), b.conControl.uipreload.hide();
                          }, 1),
                    b.messagesProcessing(function () {
                        for (var a = b.chatTools.getUncheckedMessages(), d = 0; d < a.length; d++)
                            !(function (c) {
                                var d = a[c];
                                if ((b.chatTools.removeUncheckedStatus(d), b.subbatchControl.addCurrentSubbatches(d.getAttribute("subbatch")), !e.disableAudio)) {
                                    var f = b.chatTools.getDomArrayByClass(d, b.NODES_CLASSES.MESSAGE_TEXT)[0];
                                    b.chatTools.existUserDocumentEvents("newMessage", 0) && ((b.customEvents.newMessage.message = f.innerHTML), (b.customEvents.newMessage.messageDiv = f), document.dispatchEvent(b.customEvents.newMessage));
                                }
                            })(d);
                        b.subbatchControl.log(),
                            b.chatGreeting &&
                                b.getDataFromSender &&
                                e.showGreeting &&
                                localStorage["chatbroGreeting_" + b.encodedChatId] !== b.chatGreeting &&
                                b.executeWhenChatWillBeVisible(function () {
                                    b.alertControl.showGreeting(b.chatGreeting), b.alertControl.widthHeightProcessing();
                                }),
                            (f || b.needToScrollToBottom) && (b.isSingleMessageReceived ? b.chatTools.scrollToBottomSmooth() : b.chatTools.scrollToBottom(), (b.needToScrollToBottom = !1));
                        var g = new Date().getTime();
                        if (
                            (e.showGreeting || (b.uploadIsBlocked && b.isFakeFirstLoad)) &&
                            b.allowUploadMessages &&
                            b.subbatchControl.getTopSubbatchId() > 0 &&
                            0 !== b.subbatchControl.getBottomSubbatchId() &&
                            b.subbatches.uploadedSubbatchCount !== b.lastSubbatchId + 1
                        ) {
                            var h = new b.chatTools.LoadMsgIndicator();
                            b.NODES.chatMessagesTbody.insertAdjacentHTML("afterbegin", h.createLoader(g, e.showLoader)), b.uploadIsBlocked && new b.chatTools.LoadMsgIndicator().deleteOldLoaders(g), (b.isFakeFirstLoad = !1);
                        }
                        c.setChatMessagesWrapperHeight();
                    }, a.subbatchId);
                try {
                    if (a.subbatchId && ((b.lastSubbatchId = a.subbatchId), b.subbatchControl.getBottomSubbatchId() !== a.subbatchId)) {
                        b.subbatches.uploadedSubbatchCount++;
                        var g = b.subbatchControl.getCurrentSubbatchCount() + 1,
                            h = (b.subbatchControl.getBottomSubbatchId(), b.subbatchControl.getTopSubbatchId());
                        b.subbatchControl.resetCurrentSubbatches(), (b.currentSubbatchId = a.subbatchId);
                        for (var i = b.chatTools.getAllMessages(), j = 0; j < i.length; j++)
                            !(function (a, b, c) {
                                var d = i[b],
                                    e = d.getAttribute("subbatch");
                                if ((a.subbatchControl.addCurrentSubbatches(e), g > a.subbatchControl.getMaxSubbatchCount() && e == c)) {
                                    var f = d.parentNode;
                                    a.chatTools.hasClass(d, "chatbro_message_radial") || f.removeChild(d), a.geometry.setChatMessagesWrapperHeight(), a.subbatchControl.deleteCurrentSubbatches(e);
                                }
                            })(b, j, h);
                        b.subbatchControl.log();
                    }
                } catch (k) {
                    console.error(k);
                }
            },
            onWindowResize: function () {
                b.dropdownMenuControl.active && b.dropdownMenuControl.hide(), b.endResizeTimeout && clearInterval(b.endResizeTimeout), (b.orientation = b.chatTools.getWindowOrintation());
                try {
                    b.smilesMenuControl.setPosition();
                } catch (a) {}
                var d = b.documentWidth,
                    e = b.documentHeight,
                    f = c.getViewportGeometry();
                (b.documentWidth = f.width), (b.documentHeight = f.height);
                var g, h, g, h;
                if (
                    (b.allowMoveChat ||
                        ((b.NODES.chatMaxDiv.style.width = b.NODES.chatMinDiv.style.width = b.geometry.correctSizeValue(b.originWidth)),
                        (b.NODES.chatMaxDiv.style.height = b.geometry.correctSizeValue(b.originHeight)),
                        (g = b.NODES.chatMaxDiv.offsetWidth),
                        (h = b.NODES.chatMinDiv.offsetWidth),
                        (k = b.NODES.chatMaxDiv.offsetHeight),
                        g <= b.DEFAULT.CHAT_MIN_WIDTH ? ((g = b.geometry.correctSizeValue(b.DEFAULT.CHAT_MIN_WIDTH)), (b.takeOriginWidthMax = !1)) : (b.takeOriginWidthMax = !0),
                        h <= b.DEFAULT.CHAT_MIN_WIDTH ? ((h = b.geometry.correctSizeValue(b.DEFAULT.CHAT_MIN_WIDTH)), (b.takeOriginWidthMin = !1)) : (b.takeOriginWidthMin = !0),
                        k <= b.DEFAULT.CHAT_MIN_HEIGHT ? ((k = b.geometry.correctSizeValue(b.DEFAULT.CHAT_MIN_HEIGHT)), (b.takeOriginHeight = !1)) : (b.takeOriginHeight = !0),
                        (b.NODES.chatMaxDiv.style.width = b.geometry.correctSizeValue(b.takeOriginWidthMax ? b.originWidth : g)),
                        (b.NODES.chatMinDiv.style.width = b.geometry.correctSizeValue(b.takeOriginWidthMin ? b.originWidth : h)),
                        (b.NODES.chatMaxDiv.style.height = b.hideMessagesOverflow ? b.geometry.correctSizeValue(b.takeOriginHeight ? b.originHeight : k) : "auto")),
                    b.isMobile && b.allowMoveChat)
                ) {
                    var i,
                        j = c.getWindowSize();
                    if (((b.windowHeight = j.height), (b.windowWidth = j.width), b.windowWidth > 500 && b.windowHeight > 500)) (i = 20), (b.windowWidth = 500), (b.windowHeight = 500);
                    else {
                        i = 0;
                        try {
                            b.geometry.setHideChatArea();
                        } catch (a) {}
                    }
                    if (
                        ((b.NODES.chatMaxDiv.style.top = null),
                        (b.NODES.chatMaxDiv.style.left = null),
                        (b.NODES.chatMaxDiv.style.bottom = b.geometry.correctSizeValue(i)),
                        (b.NODES.chatMaxDiv.style.right = b.geometry.correctSizeValue(i)),
                        b.hideMessagesOverflow)
                    ) {
                        var k = c.correctSizeValue(b.windowHeight),
                            g = c.correctSizeValue(b.windowWidth);
                        b.nonAdaptMobile || ("portrait" === b.orientation ? (k = c.correctSizeValue(b.windowHeight * b.mobileHeightPercent)) : (g = c.correctSizeValue(b.windowWidth * b.mobileWidthPercent))),
                            (b.chatWidth = g),
                            (b.chatHeight = k),
                            (b.NODES.chatMaxDiv.style.height = k),
                            (b.NODES.chatMaxDiv.style.width = g);
                    }
                    c.setChatMessagesWrapperHeight();
                }
                var l, m;
                b.chatWidth > b.documentWidth ? ((l = 0), (m = 0)) : ((l = b.chatLeft), (m = b.documentWidth - b.chatLeft - b.chatWidth));
                var n, o;
                b.chatHeight > b.documentHeight ? (n = o = 0) : ((n = b.chatTop), (o = b.documentHeight - b.chatTop - b.chatHeight));
                var p = m < l ? b.documentWidth - d : 0,
                    q = o < n ? b.documentHeight - e : 0;
                (0 === p && 0 === q) || ((b.initChatLeft = b.chatLeft), (b.initChatTop = b.chatTop), c.setChatRelativePosition(p, q)),
                    b.allowMoveChat &&
                        (b.endResizeTimeout = setTimeout(function () {
                            b.geometry.setChatRelativeSizeAndPosition(), b.geometry.setChatNameWidth(), c.setChatMessagesWrapperHeight();
                        }, 200));
            },
            onParticipantCountChanging: function (a) {
                try {
                    for (
                        var c = a.counters,
                            d = c.reduce(function (a, b) {
                                return a + b;
                            }),
                            e = [],
                            f = {},
                            g = 0;
                        g < c.length;
                        g++
                    )
                        c[g] > 0 && (e.push(c[g] + " " + b.COUNTER_NAMES[g]), (f[b.COUNTER_NAMES[g]] = c[g]));
                    for (var h = e.join(", "), g = 0; g < b.NODES.chatParticipantCountSpans.length; g++) {
                        var i = b.NODES.chatParticipantCountSpans[g];
                        (i.style.display = "inline"),
                            (i.textContent = d),
                            i.hasAttribute("data-tippy-disable") || (i.setAttribute("data-tippy", "Online: " + h), i.setAttribute("data-tippy-pos", "left"), i.setAttribute("data-tippy-animate", "slide"), (i.style.cursor = "help"));
                    }
                    b.allowMoveChat && b.geometry.setMinChatHeaderWidth(),
                        b.geometry.setChatNameWidth(),
                        b.chatTools.existUserDocumentEvents("chatbroPtCountChanging", 0) && ((b.customEvents.chatbroPtCountChanging.ptCount = f), document.dispatchEvent(b.customEvents.chatbroPtCountChanging));
                } catch (j) {
                    b.chatTools.onFail(j);
                }
            },
            onChatHeaderMouseDown: function (a) {
                (b.isDraggable = !0), (b.initChatLeft = b.chatLeft), (b.initChatTop = b.chatTop), (b.initMouseLeft = a.clientX), (b.initMouseTop = a.clientY), b.chatTools.unselectify();
            },
            onHideChatAreaClick: function () {
                b.minimizeChat();
            },
            onOrientationChange: function () {
                b.orientation = b.chatTools.getWindowOrintation();
            },
            onChatActionMouseUp: function () {
                (b.isDraggable = !1), (b.isResizable = !1), b.chatTools.selectify(), (b.isResized || b.isDragged) && b.saveGeometryToLocalStorage();
            },
            onChatResizerMouseDown: function (a) {
                (b.isResizable = !0),
                    (b.resizerClass = a.target.className.split(" ")[0]),
                    (b.initChatWidth = b.chatWidth),
                    (b.initChatHeight = b.chatHeight),
                    (b.initNotificationBlockHeight = b.geometry.elementHeight(b.NODES.chatSystemMessagesWrapperDiv)),
                    (b.initChatLeft = b.chatLeft),
                    (b.initChatTop = b.chatTop),
                    (b.initMouseLeft = a.clientX),
                    (b.initMouseTop = a.clientY),
                    b.chatTools.unselectify();
            },
            onMessagesScroll: function (a) {
                var c = b.NODES.chatMessagesWrapperDiv,
                    d = parseInt(b.NODES.chatMessagesWrapperDiv.style.height, 10),
                    e = c.scrollHeight - d;
                return (
                    (b.oldScrollTopValue = b.oldScrollTopValue || c.scrollTop),
                    (b.isScrollToTop = a || b.oldScrollTopValue > c.scrollTop),
                    (b.oldScrollTopValue = c.scrollTop),
                    0.9 * e <= c.scrollTop && (b.allowChatMessagesScrollToLast = !0),
                    b.HISTORY_PLUG_DIV && a
                        ? b.uploadMessages()
                        : (b.geometry.setHistoryPlugHeightTop(),
                          b.allowUploadMessages && !b.uploadIsBlocked && !b.messagesIsUploadedNow && b.subbatchControl.getTopSubbatchId() > 0 && 0 !== b.subbatchControl.getBottomSubbatchId() && b.isScrollToTop && 0.15 * e >= c.scrollTop
                              ? ((b.messagesIsUploadedNow = !0), (b.messagesUploadToBottom = !1), b.uploadMessages())
                              : void (0.9 * e <= c.scrollTop
                                    ? ((b.NODES.chatMessagesScrollToLast.style.display = "none"), (b.NODES.chatNewMessagesCountWrapperMaxDiv.style.display = "none"), (b.subbatchControl.isLastBottomSubbatchUploaded = !0))
                                    : b.allowChatMessagesScrollToLast && !b.HISTORY_PLUG_DIV && ((b.NODES.chatMessagesScrollToLast.style.display = "block"), (b.subbatchControl.isLastBottomSubbatchUploaded = !1))))
                );
            },
            onChatResizerMouseMove: function (a) {
                if (b.isResizable) {
                    b.isResized = !0;
                    var d = b.chatTools.isScrolledToBottom(),
                        e = Math.max(a.clientX, 0);
                    e = Math.min(e, b.documentWidth);
                    var f = Math.max(a.clientY, 0);
                    f = Math.min(f, b.documentHeight);
                    var g,
                        h = e - b.initMouseLeft,
                        i = f - b.initMouseTop;
                    switch (b.resizerClass) {
                        case "chatbro_frame_left_top":
                            (g = c.setChatRelativeSize(-h, -i)), c.setChatRelativePosition(-g.x, -g.y);
                            break;
                        case "chatbro_frame_top":
                            if (0 === b.chatTop && (-i > 0 || -i >= b.STICKY_CHAT_VAL * -1)) return;
                            (g = c.setChatRelativeSize(0, -i)), c.setChatRelativePosition(0, -g.y);
                            break;
                        case "chatbro_frame_right_top":
                            (g = c.setChatRelativeSize(h, -i)), c.setChatRelativePosition(0, -g.y);
                            break;
                        case "chatbro_frame_right":
                            c.setChatRelativeSize(h, 0);
                            break;
                        case "chatbro_frame_right_bottom":
                            c.setChatRelativeSize(h, i);
                            break;
                        case "chatbro_resizer":
                        case "chatbro_frame_bottom":
                            c.setChatRelativeSize(0, i);
                            break;
                        case "chatbro_frame_left_bottom":
                            (g = c.setChatRelativeSize(-h, i)), c.setChatRelativePosition(-g.x, 0);
                            break;
                        case "chatbro_frame_left":
                            if (0 === b.chatLeft && (-h > 0 || -h >= b.STICKY_CHAT_VAL * -1)) return;
                            (g = c.setChatRelativeSize(-h, 0)), c.setChatRelativePosition(-g.x, 0);
                    }
                    c.setChatMessagesWrapperHeight(), b.modalWindowControl.setTopPosition(), b.conControl.uipreload.reGenerate(), d && b.chatTools.scrollToBottom(), a.preventDefault();
                }
            },
            onMouseWheel: function (a) {
                var c = b.NODES.chatMessagesWrapperDiv;
                if (((b.isScrolledToBottom = c.scrollTop + c.offsetHeight >= c.scrollHeight - 20), b.allowMoveChat)) {
                    var d = a.deltaY || a.detail || a.wheelDelta,
                        e = b.NODES.chatMessagesWrapperDiv;
                    "touchstart" === a.type && (b.touchStart.y = a.touches[0].pageY),
                        "touchmove" === a.type && (d = b.touchStart.y - a.touches[0].pageY),
                        ((d < 0 && 0 === e.scrollTop) || (d > 0 && e.scrollHeight - e.clientHeight - e.scrollTop <= 1)) && a.preventDefault();
                }
            },
            onChatHeaderMouseMove: function (a) {
                b.isDraggable && ((b.isDragged = !0), c.setChatRelativePosition(a.clientX - b.initMouseLeft, a.clientY - b.initMouseTop), a.preventDefault());
            },
            onChatInputClick: function () {
                b.chatTools.existUserDocumentEvents("chatInputClick", 0) && document.dispatchEvent(b.customEvents.chatInputClick);
            },
            onSendButtonClick: function () {
                b.LOCK_SEND_MESSAGE || b.checkAttachments(!1, b.beforeSendMessage.bind(b));
            },
            onSendInputKeyPress: function (a) {
                var c = window.event ? a.which : a.keyCode;
                if (13 === c && !a.shiftKey && !b.LOCK_SEND_MESSAGE) return b.checkAttachments(!1, b.beforeSendMessage.bind(b)), !1;
            },
            onSendInputKeyDown: function (a) {
                var c = window.event ? a.which : a.keyCode;
                if (13 === c && b.LOCK_SEND_MESSAGE) return !1;
                if ((13 === c && a.shiftKey && b.inputControl.setFocusToEnd(), 9 === c))
                    try {
                        b.smilesMenuControl.isOpen() ? b.smilesMenuControl.hide() : b.smilesMenuControl.show(), a.preventDefault();
                    } catch (d) {}
                b.geometry.setChatMessagesWrapperHeight();
            },
            onSendInput: function () {
                b.geometry.setChatMessagesWrapperHeight(), b.checkAttachments(!0, null), b.isScrolledToBottom && b.chatTools.scrollToBottom();
            },
            onVideoAttachmentClick: function (a) {
                var b = a.target.parentNode,
                    c = document.createElement("iframe"),
                    d = document.createElement("video"),
                    e = b.firstChild.getAttribute("player_url");
                e.indexOf("youtu") !== -1 || e.indexOf("vk.com") !== -1 || e.indexOf("vimeo") !== -1
                    ? ((e += (e.indexOf("?") === -1 ? "?" : "&") + "autoplay=1"),
                      (c.src = e),
                      (c.className = "chatbro_message_video_attachment"),
                      c.setAttribute("frameborder", "0"),
                      c.setAttribute("webkitallowfullscreen", "webkitallowfullscreen"),
                      c.setAttribute("allowfullscreen", "allowfullscreen"),
                      b.appendChild(c))
                    : ((d.src = e), (d.className = "chatbro_message_video_attachment"), d.setAttribute("controls", "controls"), d.setAttribute("autoplay", "autoplay"), b.appendChild(d));
            },
            onVideoPreviewImageOver: function (a) {
                var c = a.target.parentNode,
                    d = c.getElementsByClassName(b.NODES_CLASSES.MEDIA_ATTACH_CLASS)[0],
                    e = d.getAttribute("src"),
                    f = 1;
                try {
                    var g = JSON.parse(d.getAttribute("thumbnail_photo_urls")),
                        h = g.length;
                } catch (i) {
                    return void b.debug.error(i);
                }
                e &&
                    e.indexOf(b.chatbroVideoFilePath) !== -1 &&
                    (b.shoPreviewInterval && clearInterval(b.shoPreviewInterval),
                    (b.shoPreviewInterval = setInterval(function () {
                        f === h && (f = 0), (thumbnailPhotoUrl = g[f]), (f += 1), (d.src = thumbnailPhotoUrl);
                    }, 1e3)),
                    (a.target.onmouseout = b.events.onVideoPreviewImageOut));
            },
            onVideoPreviewImageOut: function (a) {
                clearInterval(b.shoPreviewInterval);
                var c = a.target.parentNode,
                    d = c.getElementsByClassName(b.NODES_CLASSES.MEDIA_ATTACH_CLASS)[0],
                    e = JSON.parse(d.getAttribute("thumbnail_photo_urls"));
                d.src = e[0];
            },
            onReplyMessage: function (a) {
                try {
                    if ((b.inputControl.bindMessageEvent(), b.simpleReplies)) {
                        var c = b.chatTools.getDomArrayByClass(a, "chatbro_message_name")[0].textContent.trim();
                        c = c.replace(/\'|\"/g, "");
                        var d = a.getAttribute("owner_id"),
                            e = "[" + d + "|'" + c + "']";
                        b.inputControl.setValue('<span data-key="' + e + '">' + c + "</span>,&nbsp; "), b.inputControl.setFocusToEnd();
                    } else {
                        var c = b.chatTools.getDomArrayByClass(a, "chatbro_message_name")[0].textContent.trim(),
                            f = b.chatTools.getDomArrayByClass(a, "chatbro_message_text")[0],
                            g = f.childNodes,
                            h = a.getAttribute("message_id"),
                            i = g[3 === g.length ? 1 : 0],
                            j = i.textContent.trim();
                        if ("" === j) {
                            var k = b.chatTools.getDomArrayByClass(i, "emojione");
                            if (k.length)
                                k.forEach(function (a) {
                                    !(function (a) {
                                        j += a.getAttribute("alt");
                                    })(a);
                                });
                            else {
                                var l = g[3 === g.length ? 2 : 1];
                                if (l && l.firstChild && l.firstChild.nodeType !== Node.TEXT_NODE) j = "Attachment(s)";
                                else {
                                    var m = g[0],
                                        n = b.chatTools.getDomArrayByClass(m, "chatbro_message_attachment_reply")[0];
                                    (h = n.getAttribute("data-mid")), (j = "Reply");
                                }
                            }
                        }
                        var n = { type: "reply", player: "reply", userName: c, text: j, code: h };
                        b.currentReplyAttachment.push(n),
                            this.processAttachment(n, new Date().getTime(), !0, function () {
                                b.inputControl.setFocusToEnd();
                            });
                    }
                } catch (o) {
                    b.chatTools.onFail(o);
                }
            },
            onHttpAvatarLoadError: function () {
                try {
                    this.src = b.chatbroWwwHost + "/images/logo/favicon.png";
                    var a = this.getAttribute("data-id"),
                        c = this.getAttribute("data-name"),
                        d = document.createElement("span");
                    d.className = "chatbro_guest_avatar";
                    var e,
                        f = c.substr(0, 2);
                    d.setAttribute("data-name", f),
                        (e = a ? a % 10 : (f.charCodeAt(0) + "").slice(-1)),
                        (d.className += " chatbro_guest_bg_" + e),
                        this.className.indexOf("dropdown") !== -1 && (d.className += " chatbro_dropdown_menu_user_avatar"),
                        this.parentNode && this.parentNode.replaceChild(d, this);
                } catch (g) {
                    b.debug.error(g);
                }
            },
            onScrollToLastClick: function () {
                if (((this.style.display = "none"), (b.messagesIsUploadedNow = !0), (b.isScrolledToBottom = !0), (b.isFakeFirstLoad = !0), (b.uploadIsBlocked = !1), !b.allowUploadMessages)) return void b.chatTools.scrollToBottom();
                b.conControl.uipreload.show();
                var a = b.chatTools.getAllMessages();
                if (a.length) {
                    for (var d = 0; d < a.length; d++)
                        !(function (b) {
                            var c = a[b],
                                d = c.parentNode;
                            d.removeChild(c);
                        })(d);
                    if ((c.setChatMessagesWrapperHeight(), b.subbatchControl.resetCurrentSubbatches(), b.removeMessagesCount(), b.isLpConnection)) {
                        var e = { allowUploadMessages: b.allowUploadMessages };
                        b.conControl.makeLongPollRequest("/m", e);
                    } else b.webSocket.send(JSON.stringify({ type: "maximizeChat", batchId: b.batchId, allowUploadMessages: b.allowUploadMessages }));
                }
            },
        };
    },
    setMessagesCount: function () {
        try {
            var a = this;
            (this.NODES.chatNewMessagesCountWrapperDiv.style.display = "inline-block"),
                this.isActiveTab() || (this.NEW_MESSAGE_COUNT_NA += 1),
                this.chatState === this.STATES.MINIMIZED &&
                    ((this.NEW_MESSAGE_COUNT += 1),
                    this.NODES.chatNewMessagesCountDivs[0] && (this.NODES.chatNewMessagesCountDivs[0].textContent = "+" + a.NEW_MESSAGE_COUNT),
                    this.NODES.chatNewMessagesCountDivs[1] && (this.NODES.chatNewMessagesCountDivs[1].textContent = "+" + a.NEW_MESSAGE_COUNT)),
                this.chatState !== this.STATES.MAXIMIZED ||
                    this.subbatchControl.isLastBottomSubbatchUploaded ||
                    ((this.NODES.chatNewMessagesCountWrapperMaxDiv.style.display = "inline-block"),
                    (this.NEW_MESSAGE_COUNT += 1),
                    this.NODES.chatNewMessagesCountDivs[0] && (this.NODES.chatNewMessagesCountDivs[0].textContent = "+" + a.NEW_MESSAGE_COUNT),
                    this.NODES.chatNewMessagesCountDivs[1] && (this.NODES.chatNewMessagesCountDivs[1].textContent = "+" + a.NEW_MESSAGE_COUNT)),
                this.allowMoveChat && this.geometry.setMinChatHeaderWidth();
        } catch (b) {}
    },
    removeMessagesCount: function () {
        try {
            this.NODES.chatNewMessagesCountDivs[0] && (this.NODES.chatNewMessagesCountDivs[0].textContent = ""),
                this.NODES.chatNewMessagesCountDivs[1] && (this.NODES.chatNewMessagesCountDivs[1].textContent = ""),
                (this.NODES.chatNewMessagesCountWrapperDiv.style.display = "none"),
                (this.NODES.chatNewMessagesCountWrapperMaxDiv.style.display = "none"),
                (this.NEW_MESSAGE_COUNT = 0),
                this.allowMoveChat && this.geometry.setMinChatHeaderWidth();
        } catch (a) {}
    },
    messagesProcessing: function (a, b) {
        var c = this;
        c.messageFontSise = parseInt(c.messageFontSise, 10);
        for (var d = isNaN(c.messageFontSise) ? c.DEFAULT_MESSAGE_FONT_SIZE : c.messageFontSise, e = c.messageFontSise - c.DEFAULT_MESSAGE_FONT_SIZE, f = this.chatTools.getUncheckedMessages(), g = 0; g < f.length; g++)
            !(function (a, c) {
                var g = f[c],
                    h = g.getAttribute("owner_id");
                isNaN(parseInt(b, 10)) || g.setAttribute("subbatch", b);
                var i = g.getAttribute("isadmin"),
                    j = g.getAttribute("ismoderator"),
                    k = g.getAttribute("issyncedmessage"),
                    l = (g.getAttribute("gatewayId"), !!i && ("true" === i || "isAdmin" === i)),
                    m = !!j && ("true" === j || "isModerator" === j),
                    n = !!k && ("true" === k || "isSyncedMessage" === k);
                (a._sameOwnerIdWithLastMessage = !!a._messageOwnerIdCache && a._messageOwnerIdCache === h), (a._messageOwnerIdCache = h);
                var o = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_TEXT)[0];
                try {
                    if (o) {
                        "undefined" == typeof a.Emojione && (a.Emojione = new Emojione(a));
                        var p = o.innerHTML;
                        (p = a.Emojione.toImage(p)), (o.innerHTML = p);
                    }
                } catch (q) {
                    a.debug.error("Can't convert smiles", q);
                }
                var r = !1;
                try {
                    if (
                        (o &&
                            (o.innerHTML = o.innerHTML.replace(/\[(.*?)\|\'(.*?)\'[^\]]*\]/gi, function (a, b, c) {
                                return (r = !0), '<span class="rpl' + b + '">' + c + "</span>";
                            })),
                        o && a.userId && r && a.highlightReplies)
                    ) {
                        var s = a.chatTools.getDomArrayByClass(o, "rpl" + a.userId)[0];
                        s && g.setAttribute("style", "background: " + a.colorsCtrl.lightOrDark(a.COLORS.bodyBackgroundColor, 0.1, -0.023) + " !important");
                    }
                } catch (q) {
                    a.debug.error("can't convert msg reply", q);
                }
                var t = a.colorsCtrl.lightOrDark(a.COLORS.bodyBackgroundColor, 0.3, -0.015),
                    u = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_REPLY);
                u.forEach(function (b) {
                    !(function (b) {
                        var c = b.getAttribute("data-color") || !1,
                            d = b.getAttribute("data-id") || !1;
                        (b.style.background = t),
                            a.chatTools.addClass(b, "chatbro_message_attachment_reply_cutted"),
                            (b.onclick = function () {
                                a.chatTools.hasClass(this, "chatbro_message_attachment_reply_cutted")
                                    ? a.chatTools.removeClass(this, "chatbro_message_attachment_reply_cutted")
                                    : a.chatTools.addClass(this, "chatbro_message_attachment_reply_cutted");
                            }),
                            c && a.colorsCtrl.validTextColour(c) ? a.colorsCtrl.setColor(b, "color", c) : a.coloredUserNames && (b.className += " chatbro_message_name_color_" + (d % 10));
                        var f = a.chatTools.getDomArrayByClass(b, "chatbro_message_replied_text")[0];
                        if (f) {
                            var h = b.getAttribute("isadmin"),
                                i = b.getAttribute("ismoderator"),
                                j = !!h && ("true" === h || "isAdmin" === h),
                                k = !!i && ("true" === i || "isModerator" === i),
                                l = a.COLORS.bodyTextColor;
                            j ? (l = a.COLORS.adminBodyTextColor) : k && (l = a.COLORS.moderBodyTextColor), (f.style.fontSize = a.geometry.correctSizeValue(a.DEFAULT_REPLIED_MESSAGE_FONT_SIZE + e)), a.colorsCtrl.setColor(f, "color", l);
                        }
                        try {
                            if (o && a.userId && a.userId == d && a.highlightReplies) {
                                var m = a.colorsCtrl.lightOrDark(a.COLORS.bodyBackgroundColor, 0.1, -0.023);
                                try {
                                    var n = a.chatTools.getDomArrayByTagName(g, "td")[0];
                                    n && n.setAttribute("style", "background: " + a.colorsCtrl.lightOrDark(m, 0.5, -0.093) + " !important");
                                } catch (p) {}
                                g.setAttribute("style", "background: " + m + " !important");
                            }
                        } catch (p) {
                            a.debug.error("can't convert msg reply", p);
                        }
                    })(b);
                });
                try {
                    if (e) {
                        o && (o.style.fontSize = a.geometry.correctSizeValue(d));
                        var v = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_AUTH_NAME);
                        v.forEach(function (b) {
                            !(function (b) {
                                b && ((b.style.fontSize = a.geometry.correctSizeValue(d - 1)), (b.style.lineHeight = a.geometry.correctSizeValue(a.DEFAULT_MESSAGE_AUTH_NAME_LINE_HEIGHT + e)));
                            })(b);
                        });
                        var w = a.chatTools.getDomArrayByClass(g, "chatbro_message_user_type");
                        w.forEach(function (b) {
                            !(function (b) {
                                b.style.fontSize = a.geometry.correctSizeValue(a.DEFAULT_MESSAGE_USER_TYPE_FONT_SIZE + e);
                            })(b);
                        });
                    }
                } catch (q) {}
                try {
                    var x = a.chatTools.getDomArrayByTagName(g, "a");
                    x.forEach(function (b) {
                        !(function (b) {
                            a.colorsCtrl.setColor(b, "color", a.COLORS.linksTextColor), e && (b.style.fontSize = a.geometry.correctSizeValue(d));
                        })(b);
                    });
                } catch (q) {}
                try {
                    var y = a.chatTools.getDomArrayByClass(g, "chatbro_message_name");
                    y.forEach(function (b) {
                        !(function (b) {
                            var c = b.getAttribute("data-color") || !1,
                                d = b.getAttribute("data-id") || !1,
                                e = a.chatTools.getDomArrayByTagName(b, "a")[0];
                            e && (b = e);
                            var f = 35,
                                g = b.textContent.replace(/(<([^>]+)>)/gi, "");
                            "undefined" == typeof a.Emojione && (a.Emojione = new Emojione(a)),
                                (g = a.Emojione.unescapeHTML(g)),
                                g.length > f && (g = g.substr(0, f)),
                                (b.textContent = g),
                                c && a.colorsCtrl.validTextColour(c) ? a.colorsCtrl.setColor(b, "color", c) : a.coloredUserNames && (b.className += " chatbro_message_name_color_" + ((d || h) % 10));
                        })(b);
                    });
                } catch (q) {}
                try {
                    var z = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.AVATAR_BLOCK)[0],
                        A = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_IMAGE)[0];
                    if (a.showUsersAvatars) {
                        if (A) {
                            A.setAttribute("data-id", h);
                            var B = a.chatTools.getDomArrayByClass(g, "chatbro_message_name")[0],
                                C = B.textContent;
                            A.setAttribute("data-name", C), (A.onerror = a.events.onHttpAvatarLoadError), a.avatarBorderRadius && (A.style.borderRadius = a.geometry.correctSizeValue(a.avatarBorderRadius));
                            var D = A.getAttribute("src_attr").trim();
                            if (a.chatTools.isImageURLValid(D)) A.src = D;
                            else {
                                var E = document.createElement("span");
                                E.className = "chatbro_guest_avatar";
                                var F,
                                    G = C.substr(0, 2);
                                E.setAttribute("data-name", G), (F = h ? h % 10 : (G.charCodeAt(0) + "").slice(-1)), (E.className += " chatbro_guest_bg_" + F), A.parentNode && A.parentNode.replaceChild(E, A);
                            }
                        }
                    } else z && (z.style.display = "none");
                } catch (q) {}
                try {
                    var H = a.chatTools.getDomArrayByClass(g, "chatbro_message_admin"),
                        I = a.chatTools.getDomArrayByClass(g, "chatbro_message_moder"),
                        J = a.chatTools.getDomArrayByClass(g, "chatbro_message_spsr"),
                        K = a.chatTools.getDomArrayByClass(g, "chatbro_message_vk"),
                        L = a.chatTools.getDomArrayByClass(g, "chatbro_message_tg"),
                        M = a.chatTools.getDomArrayByClass(g, "chatbro_message_guest");
                    I.forEach(function (b) {
                        !(function (b) {
                            b.title = a.translatedText.moder;
                        })(b);
                    }),
                        J.forEach(function (b) {
                            !(function (b) {
                                try {
                                    (b.title = a.translatedText.patron), (b.onauxclick = a.modalWindowControl.show.bind(a, "patron", {}, null)), (b.onclick = a.modalWindowControl.show.bind(a, "patron", {}, null));
                                } catch (c) {}
                            })(b);
                        }),
                        H.forEach(function (b) {
                            !(function (b) {
                                b.title = a.translatedText.admin;
                            })(b);
                        }),
                        K.forEach(function (b) {
                            !(function (b) {
                                b.title = a.translatedText.sendFromVk;
                            })(b);
                        }),
                        L.forEach(function (b) {
                            !(function (b) {
                                b.title = a.translatedText.sendFromTg;
                            })(b);
                        }),
                        M.forEach(function (b) {
                            !(function (b) {
                                b.innerHTML = a.translatedText.guest;
                            })(b);
                        });
                } catch (q) {}
                try {
                    var E = a.chatTools.getDomArrayByClass(g, "chatbro_guest_avatar")[0];
                    if (a.showUsersAvatars && E) {
                        var F,
                            G = E.getAttribute("data-name").substr(0, 2);
                        E.setAttribute("data-name", G),
                            (F = h ? h % 10 : (G.charCodeAt(0) + "").slice(-1)),
                            (E.className += " chatbro_guest_bg_" + F),
                            a.avatarBorderRadius && (E.style.borderRadius = a.geometry.correctSizeValue(a.avatarBorderRadius));
                    }
                } catch (q) {}
                try {
                    o && a.messageBoldFontWeight && (o.style.fontWeight = "bold");
                } catch (q) {}
                var N = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.VIDEO_ATTACH_CLICK_CLASS);
                N && N.length && a.videoPlayButtonsProcessing(N), a.chatTools.addMenuOfMessage(g);
                var O = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_DATE);
                O.forEach(function (b) {
                    !(function (b) {
                        try {
                            if (b && a.showDateOfMessage) {
                                var c = b.getAttribute(a.DATE.DATE_TIME_ATTR_NAME);
                                c &&
                                    (c = c
                                        .replace(/(\-{1})/, "/")
                                        .replace(/(\-{1})/, "/")
                                        .replace(/\T/, " ")
                                        .replace(/\+/, " GMT+")
                                        .replace(/\.\d{2}/, ""));
                                var d,
                                    f = new Date(Date.now()).getDate(),
                                    g = new Date(Date.parse(c)).getDate();
                                if (
                                    ((d =
                                        f === g && new Date(Date.now()).getTime() - new Date(Date.parse(c)).getTime() < 3 * a.DATE.M_SECS_IN_DAY
                                            ? a.chatTools.getTimeHHMM(c)
                                            : a.chatTools.getDateDDMMYY(c) + " / " + a.chatTools.getTimeHHMM(c)),
                                    (b.innerHTML = d),
                                    e)
                                ) {
                                    var h = a.DEFAULT_MESSAGE_DATE_FONT_SIZE + e - 1;
                                    b.style.fontSize = a.geometry.correctSizeValue(h);
                                }
                                a.messageBoldFontWeight && (b.style.fontWeight = "bold");
                            }
                        } catch (i) {
                            a.debug.error("can't convert date", i);
                        }
                    })(b);
                });
                var P = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_ACTIONS_CLASS)[0],
                    Q = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_ACTION_DIV_CLASS)[0];
                if (P)
                    try {
                        var R = a.chatTools.getDomArrayByClass(P, a.NODES_CLASSES.MESSAGE_REPLY_CLASS)[0];
                        try {
                            // !a.NODES.chatSendInput || !R || (n && a.isBlocked)
                            !a.NODES.chatSendInput || !R || (n && !a.isBlocked)
                                ? R && P.removeChild(R)
                                : ((R.title = a.translatedText.reply),
                                  a.chatTools.existUserDocumentEvents("chatInputClick", 0) ? (R.onmousedown = a.events.onChatInputClick) : (R.onclick = a.inputControl.ifUserLogged(a.events.onReplyMessage.bind(a, g))));
                        } catch (q) {
                            a.chatTools.onFail(q);
                        }
                        var S = a.chatTools.getDomArrayByClass(P, a.NODES_CLASSES.MESSAGE_MENU_CLASS)[0],
                            T = a.chatTools.getDomArrayByClass(P, a.NODES_CLASSES.MESSAGE_BAN_CLASS)[0],
                            U = a.chatTools.getDomArrayByClass(P, a.NODES_CLASSES.MESSAGE_DELETE_CLASS)[0];
                        if (((P.style.lineHeight = a.geometry.correctSizeValue(a.DEFAULT_MESSAGE_MESSAGE_ACTION_LINE_HEIGHT + e)), R && e)) {
                            var V = a.DEFAULT_MESSAGE_ACTION_REPLY_FONT_SIZE + e;
                            R.style.fontSize = a.geometry.correctSizeValue(V);
                        }
                        if ((R && a.messageBoldFontWeight && (R.style.fontWeight = "bold"), S && e)) {
                            var V = a.DEFAULT_MESSAGE_ACTION_MENU_FONT_SIZE + e;
                            S.style.fontSize = a.geometry.correctSizeValue(V);
                        }
                        if (T && e) {
                            var V = a.DEFAULT_MESSAGE_ACTION_BAN_SIZE + e;
                            T.style.fontSize = a.geometry.correctSizeValue(V);
                        }
                        if (U && e) {
                            var V = a.DEFAULT_MESSAGE_ACTION_DELETE_SIZE + e;
                            U.style.fontSize = a.geometry.correctSizeValue(V);
                        }
                        (g.onmouseover = function () {
                            "" !== P.innerHTML && ((P.style.visibility = "visible"), (P.style.opacity = 1));
                        }),
                            (g.onmouseout = function () {
                                "" !== P.innerHTML && ((P.style.visibility = "hidden"), (P.style.opacity = 0));
                            });
                    } catch (q) {}
                try {
                    var W = a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.FILE_ATTACH),
                        X = a.COLORS.bodyTextColor;
                    l ? (X = a.COLORS.adminBodyTextColor) : m && (X = a.COLORS.moderBodyTextColor),
                        a.colorsCtrl.setColor([g, o], "color", X),
                        a.colorsCtrl.setColor(W, "color", a.COLORS.bodyTextColor),
                        a.colorsCtrl.setColor(P, "color", a.COLORS.bodyTextColor, 0.5, -0.2),
                        a.colorsCtrl.setColor([P, Q], "border-color", a.colorsCtrl.lightOrDark(a.COLORS.bodyBackgroundColor, 0.1, -0.05)),
                        a.colorsCtrl.setColor(P, "background-color", a.COLORS.bodyBackgroundColor),
                        a.colorsCtrl.setColor(O, "color", a.colorsCtrl.lightOrDark(a.COLORS.bodyTextColor, 0.5, -0.2)),
                        a.colorsCtrl.setColor(a.chatTools.getDomArrayByClass(g, a.NODES_CLASSES.MESSAGE_AUTH_NAME), "color", a.colorsCtrl.lightOrDark(a.COLORS.bodyTextColor, -0.1, 0.1)),
                        a.showBorderBetweenMessages &&
                            a.chatTools.getDomArrayByTagName(g, "td").map(function (b) {
                                if ("chatbro_message_empty_block" !== b.className && "chatbro_message_avatar_block" !== b.className && "" !== b.className) {
                                    var c = a.COLORS.bodyBackgroundColor;
                                    (b.style.borderTopWidth = "1px"), (b.style.borderTopStyle = "solid"), (b.style["border-top-color"] = a.colorsCtrl.lightOrDark(c, 0.1, -0.05));
                                }
                            });
                } catch (q) {
                    a.chatTools.onFail(q);
                }
                try {
                    n && a.isBlocked && a.chatTools.blockSyncedMessage(g);
                } catch (q) {
                    a.chatTools.onFail(q);
                }
                var Y = new Date().getTime();
                a.chatTools.getDomArrayByClass(o, "chatbro_audio_player").forEach(function (b) {
                    (Y += 1),
                        (function (b, c) {
                            try {
                                a.audioPlayer.init(b, c);
                            } catch (d) {}
                        })(b, Y);
                }),
                    a.chatTools.getDomArrayByTagName(o, "img").forEach(function (b) {
                        !(function (b) {
                            try {
                                a.allowFullScreenImage &&
                                    b.className.indexOf("emojione") === -1 &&
                                    (b.parentNode.removeAttribute("href"),
                                    b.parentNode.removeAttribute("target"),
                                    (b.parentNode.parentNode.style.display = "inline-block"),
                                    (b.onclick = function () {
                                        a.imagePreviewWrapper && (a.chatTools.removeElement(a.imagePreviewWrapper), (a.imagePreviewWrapper = null)),
                                            (a.imagePreviewWrapper = document.createElement("div")),
                                            (a.imagePreviewWrapper.className = "chatbro_modal_image_wrapper"),
                                            (a.imagePreviewWrapper.innerHTML = '<img class="chatbro_modal_image_image" src="' + (this.getAttribute("origsrc") || this.src) + '"><span class="chatbro_modal_image_close">x</span>'),
                                            a.body.insertAdjacentElement("afterbegin", a.imagePreviewWrapper),
                                            (a.imagePreviewWrapper.onclick = function () {
                                                a.chatTools.removeElement(a.imagePreviewWrapper), (a.imagePreviewWrapper = null);
                                            });
                                    }));
                            } catch (c) {}
                            b.onerror = a.chatTools.reloadImageOnError.bind(b);
                        })(b);
                    });
            })(this, g);
        if (c.hideMessagesOverflow) {
            var h = new this.UTILS.ImagesLoaded(c.NODES.chatMessagesWrapperDiv);
            h.on("always", function () {
                a && "function" == typeof a && a();
            });
        } else a && "function" == typeof a && a();
    },
    videoPlayButtonsProcessing: function (a) {
        for (var b = 0; b < a.length; b++) a[b].onclick = this.events.onVideoAttachmentClick;
    },
    checkAttachments: function (a, b) {
        var c,
            d = this.inputControl.getValue(),
            e = new Date().getTime(),
            f = [];
        if (!this.disableImages)
            for (var g in this.PLAYERS_RE)
                if (this.PLAYERS_RE.hasOwnProperty(g))
                    for (var h = this.PLAYERS_RE[g], i = 0; i < h.length; i++)
                        for (var j = h[i]; ; ) {
                            var k = j.exec(d);
                            if (null === k) break;
                            var l = k[1];
                            "photo" === g && (l = l.replace(/(^\w+:|^)/, "")), f.push({ player: g, code: l });
                        }
        var m = 0,
            n = function () {
                ++m === f.length && "function" == typeof b && ((this.currentMediaAttachments = f), b());
            }.bind(this),
            o = f.concat(this.currentUploadedAttachments);
        o = o.concat(this.currentReplyAttachment);
        for (var p in this.attachmentCache)
            if (this.attachmentCache.hasOwnProperty(p)) {
                for (var q = !1, r = 0; r < o.length; r++) {
                    var c = o[r];
                    c.player + c.code === p && (q = !0);
                }
                if (q) continue;
                var c = this.attachmentCache[p];
                if (!c.elem || c.ts >= e) continue;
                this.removeAttachmentPreview(c, !1, null);
            }
        if (f.length) for (p in f) (c = f[p]), this.processAttachment(c, e, a, n);
        else "function" == typeof b && ((this.currentMediaAttachments = f), b());
    },
    processAttachment: function (a, b, c, d) {
        var e,
            f = a.player,
            g = a.code,
            h = f + g,
            i = this;
        if (this.messageAttachmentCount >= this.FILE_LIMITS.COUNT_LIMIT && !a.fakeElem) return this.alreadyShowMessage || ((this.alreadyShowMessage = !0), this.alertControl.showWarningMessage(i.translatedText.limitFileCount)), d(!0);
        if (h in this.attachmentCache) return (e = this.attachmentCache[h]), e.elem || e.error ? d() : c ? ((e.elem = this.createPreview(e, h, c)), (e.ts = b), this.showAttachmentPreview(e, d)) : d();
        switch (f) {
            case "photo":
                return (
                    (e = { type: "photo", ts: b, originalPhotoUrl: a.originalPhotoUrl || g, thumbnailPhotoUrl: a.thumbnailPhotoUrl || g, fakeElem: a.fakeElem || null, uploadedAttachment: a.uploadedAttachment }),
                    (e.elem = this.createPreview(e, h, c)),
                    this.showAttachmentPreview(e, d, !0, h)
                );
            case "file":
                return (
                    (e = {
                        type: "file",
                        ts: b,
                        fileUrl: g,
                        fileName: a.fileName,
                        fileSize: a.fileSize,
                        title: a.fileName,
                        fakeElem: a.fakeElem || null,
                        uploadedAttachment: a.uploadedAttachment,
                        thumbnailPhotoUrl: this.chatbroWwwHost + "/images/chat/file.png",
                    }),
                    (e.elem = this.createPreview(e, h, c)),
                    this.showAttachmentPreview(e, d, !0, h)
                );
            case "preFile":
                return (
                    (e = { type: "preFile", ts: b, title: a.title, thumbnailPhotoUrl: this.chatbroWwwHost + "/images/chat/file.png" }),
                    (e.elem = this.createPreview(e, h, c)),
                    (this.fakeAttachmentCache[h] = e),
                    this.showAttachmentPreview(e, d)
                );
            case "reply":
                return (e = { type: "reply", ts: b, messageId: a.code, userName: a.userName, text: a.text, uploadedAttachment: a.uploadedAttachment }), (e.elem = this.createPreview(e, h, c)), i.showAttachmentPreview(e, d, !0, h);
            case "html5":
                return (
                    (e = a),
                    (e.ts = b),
                    (e.type = "video"),
                    (e.fakeElem = a.fakeElem || null),
                    (e.uploadedAttachment = a.uploadedAttachment),
                    (e.elem = this.createPreview(e, h, c)),
                    (this.attachmentCache[h] = e),
                    this.getPlayerUrl(f, g, e, d)
                );
            case "audio":
                (e = {
                    type: "audio",
                    ts: b,
                    fileUrl: g,
                    fileSize: a.fileSize,
                    title: a.fileName,
                    players: a.players,
                    player: a.player,
                    fakeElem: a.fakeElem || null,
                    uploadedAttachment: a.uploadedAttachment,
                    thumbnailPhotoUrl: this.chatbroWwwHost + "/images/chat/music.png",
                }),
                    (e.elem = this.createPreview(e, h, c));
                for (var j = document.createElement("audio"), k = 0; k < e.players.length; k++) {
                    var l = document.createElement("source"),
                        f = e.players[k];
                    (l.src = f.playerUrl), (l.type = f.mimeType), j.appendChild(l);
                }
                j.onloadedmetadata = function () {
                    (e.duration = parseInt(j.duration, 10)), i.showAttachmentPreview(e, d, !0, h);
                };
                break;
            default:
                return (e = { type: "video", ts: b, fakeElem: a.fakeElem || null, uploadedAttachment: a.uploadedAttachment }), (e.elem = this.createPreview(e, h, c)), (this.attachmentCache[h] = e), this.getPlayerUrl(f, g, e, d);
        }
    },
    createPreview: function (a, b, c) {
        var d,
            e = this;
        a.fakeElem ? ((d = a.fakeElem), (d.innerHTML = "")) : (d = document.createElement("div"));
        var f = document.createElement("img"),
            g = document.createElement("div");
        if ((a.title && (f.title = a.title), "reply" !== a.type && d.appendChild(f), d.appendChild(g), "preFile" === a.type || "file" === a.type || "audio" === a.type)) {
            var h = document.createElement("div"),
                i = "file" === a.type || "audio" === a.type ? a.title : "0%";
            (h.className = "chatbro_send_input_preview_attachment_progress"), (h.innerHTML = i), (h.title = i), d.appendChild(h);
        }
        if ("reply" === a.type) {
            var j = a.userName,
                k = a.text,
                l = isNaN(e.messageFontSise) ? e.DEFAULT_MESSAGE_FONT_SIZE : e.messageFontSise;
            l -= 1;
            var m = e.colorsCtrl.lightOrDark(e.COLORS.bodyBackgroundColor, 0.3, -0.019),
                n = document.createElement("div");
            n.className = "chatbro_send_input_preview_attachment_reply";
            var o = '<div class="chatbro_send_input_preview_attachment_reply_name" style="font-size:' + l + 'px;">' + j + '</div><div class="chatbro_send_input_preview_attachment_reply_text" style="font-size:' + l + 'px;">' + k + "</div>";
            (n.innerHTML = o), d.appendChild(n), (n.style.background = m);
        }
        return (
            (d.className = "chatbro_send_input_preview_attachment"),
            (f.className = "chatbro_send_input_preview_attachment_img"),
            (g.className = "chatbro_send_input_preview_attachment_close"),
            (g.onclick = function () {
                e.removeAttachment(a, b);
            }),
            (f.onerror = function () {
                e.removeAttachmentPreview(a, !0, null);
            }),
            (f.src = e.chatbroWwwHost + "/images/chat/chatbro_image_bar.gif"),
            c && !a.fakeElem && (0 === this.NODES.chatSendPreviewDiv.childNodes.length && this.toggleInputMessagePreview(!0), (this.messageAttachmentCount += 1), this.NODES.chatSendPreviewDiv.appendChild(d)),
            d
        );
    },
    removeAttachmentPreview: function (a, b, c) {
        a.elem && null !== a.elem.parentNode && this.NODES.chatSendPreviewDiv.removeChild(a.elem),
            0 === this.NODES.chatSendPreviewDiv.childNodes.length && this.toggleInputMessagePreview(!1),
            (a.elem = void 0),
            b && (a.error = b),
            "function" == typeof c && c();
    },
    removeAttachment: function (a, b) {
        this.attachmentCache.hasOwnProperty(b) && (this.attachmentCache[b].isDeleted = !0), (this.messageAttachmentCount -= 1), this.removeAttachmentPreview(a, !1, null);
    },
    removeAllAttachments: function () {
        var a = this.currentMediaAttachments.concat(this.currentUploadedAttachments);
        a = a.concat(this.currentReplyAttachment);
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = c.player + c.code;
            this.removeAttachment(this.attachmentCache[d], d);
        }
        (this.messageAttachmentCount = 0), (this.currentUploadedAttachments = []), (this.currentReplyAttachment = []), this.checkAttachments(!0, null), this.geometry.setChatMessagesWrapperHeight();
    },
    toggleInputMessagePreview: function (a) {
        var b = this.chatTools.isScrolledToBottom(),
            c = this.NODES.chatSendPreviewDiv.offsetHeight;
        this.NODES.chatSendPreviewDiv.style.display = a ? "block" : "none";
        var d = this.NODES.chatSendPreviewDiv.offsetHeight,
            e = Math.max(c, d);
        (this.NODES.chatMessagesWrapperDiv.style.height = this.NODES.chatMessagesWrapperDiv.offsetHeight + e * (a ? -1 : 1) + "px"), a && b && this.chatTools.scrollToBottomSmooth();
    },
    showAttachmentPreview: function (a, b, c, d) {
        var e = this;
        if (a.thumbnailPhotoUrl) {
            var f = a.elem.getElementsByClassName("chatbro_send_input_preview_attachment_img")[0];
            f.src = a.thumbnailPhotoUrl;
        }
        "preFile" === a.type ? b() : (c && (e.attachmentCache[d] = a), b());
    },
    getPlayerUrl: function (a, b, c, d) {
        switch (a) {
            case "youtube":
                c.playerUrl = "https://www.youtube.com/embed/" + b;
                break;
            case "vimeo":
                c.playerUrl = "https://player.vimeo.com/video/" + b;
                break;
            case "html5":
                c.playerUrl = c.fileUrl;
        }
        return this.getPreviewUrl(a, b, c, d);
    },
    getPreviewUrl: function (a, b, c, d) {
        var e = this;
        switch (a) {
            case "youtube":
                return (c.originalPhotoUrl = "https://img.youtube.com/vi/" + b + "/0.jpg"), (c.thumbnailPhotoUrl = "https://img.youtube.com/vi/" + b + "/1.jpg"), this.showAttachmentPreview(c, d);
            case "vimeo":
                return this.makeRequest({
                    type: "GET",
                    url: "https://vimeo.com/api/v2/video/" + b + ".json",
                    success: function (a) {
                        (c.originalPhotoUrl = a[0].thumbnail_large), (c.thumbnailPhotoUrl = a[0].thumbnail_small), e.showAttachmentPreview(c, d);
                    },
                    error: function () {
                        e.removeAttachmentPreview(c, !0, d);
                    },
                });
            case "html5":
                return this.showAttachmentPreview(c, d);
        }
    },
    makeMessage: function () {
        var a = { text: "", attachments: [], links: [] };
        (a.text = this.inputControl.getValue()), (a.links = this.chatTools.getArrayUrlsFromMessage(a.text));
        var b = this.currentMediaAttachments.concat(this.currentUploadedAttachments);
        if (((b = b.concat(this.currentReplyAttachment)), b.length)) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e,
                    f = b[d],
                    g = f.player + f.code;
                if (c.indexOf(g) === -1) {
                    var h = this.attachmentCache[g];
                    if (h && (!h.hasOwnProperty("isDeleted") || !h.isDeleted)) {
                        switch (h.type) {
                            case "photo":
                                e = { type: "photo", title: "", thumbnailPhotoUrl: h.thumbnailPhotoUrl, originalPhotoUrl: h.originalPhotoUrl, fileUrl: h.fileUrl, uploadedAttachment: h.uploadedAttachment };
                                break;
                            case "video":
                                e = {
                                    type: "video",
                                    title: "",
                                    thumbnailPhotoUrl: h.thumbnailPhotoUrl,
                                    thumbnailPhotoUrls: h.thumbnailPhotoUrls,
                                    originalPhotoUrl: h.originalPhotoUrl,
                                    playerUrl: h.playerUrl,
                                    uploadedAttachment: h.uploadedAttachment,
                                };
                                break;
                            case "file":
                                e = { type: "file", fileUrl: h.fileUrl, fileName: h.fileName, fileSize: h.fileSize, uploadedAttachment: h.uploadedAttachment };
                                break;
                            case "audio":
                                e = { type: "audio", title: h.title, duration: h.duration, fileName: h.fileName, fileSize: h.fileSize, players: h.players, uploadedAttachment: h.uploadedAttachment };
                                break;
                            case "reply":
                                e = { type: "reply", messageId: h.messageId };
                                break;
                            default:
                                this.chatTools.onFail("Incorrect attachment type" + JSON.stringify(h));
                        }
                        this.removeAttachmentPreview(h, !1, null), c.push(g), a.attachments.push(e);
                    }
                }
            }
            (this.currentUploadedAttachments = []), (this.currentReplyAttachment = []);
        }
        return a;
    },
    beforeSendMessage: function () {
        var a = this;
        a.chatTools.existUserDocumentEvents("beforeSendMessage", 1) && document.removeEventListener("beforeSendMessage", a.events.onSendMessage),
            (a.customEvents.beforeSendMessage.message = a.makeMessage()),
            document.dispatchEvent(a.customEvents.beforeSendMessage);
    },
    sendMessage: function (a) {
        var b = this;
        if (((a.text = a.text.trim()), (a.text = a.text.replace(/[\u200B-\u200D\uFEFF]/g, "")), b.NODES.chatSendInput.focus(), a.text.length || a.attachments.length)) {
            if (b.sendingDelayLeft && b.sendingDelayLeft > 0) {
                var c = Math.round(b.sendingDelayLeft / 1e3);
                b.alertControl.showWarningMessage("Slow mode is enabled. You can send your next message in %s sec.".replace(/%s/g, c), 2e3, "slowMode");
            }
            if (!b.LOCK_SEND_MESSAGE && !b.blockSendingByDelay) {
                a.attachments.length > b.FILE_LIMITS.COUNT_LIMIT && (a.attachments.length = b.FILE_LIMITS.COUNT_LIMIT), (b.LOCK_SEND_MESSAGE = !0), b.inputControl.showGifBtn(), (b.needToScrollToBottom = !0), delete a.links;
                var d = {
                    chatPath: b.chatPath,
                    encodedChatId: b.encodedChatId,
                    body: a,
                    chatLanguage: b.chatLanguage,
                    siteDomain: b.siteDomain,
                    timestamp: new Date().getTime(),
                    userAgent: navigator.userAgent,
                    mobile: b.isMobile,
                    connType: b.isLpConnection ? "lp" : "ws",
                    authorChatClientId: b.clientId,
                    signature: b.signature,
                };
                (d.siteUserExternalId = b.siteUserExternalId),
                    (d.siteUserFirstName = b.siteUserFirstName),
                    (d.siteUserLastName = b.siteUserLastName),
                    (d.siteUserFullName = b.siteUserFullName),
                    (d.siteUserFullNameColor = b.siteUserFullNameColor),
                    (d.siteUserAvatarUrl = b.siteUserAvatarUrl),
                    (d.siteUserProfileUrl = b.siteUserProfileUrl),
                    (d.permissions = b.permissions),
                    b.makeRequest({
                        url: b.chatbroWwwHost + "/send_message/",
                        type: "POST",
                        data: d,
                        auth: !0,
                        success: function (a) {
                            b.inputControl.hideGifBtn(),
                                (b.LOCK_SEND_MESSAGE = !1),
                                (b.messageAttachmentCount = 0),
                                a && ((a.error && (b.chatTools.onFail(a), a.type && "UserInfo" !== a.type)) || (b.inputControl.showDelayIndicatorInSec.bind(b)(), b.inputControl.clearInput(), b.geometry.setChatMessagesWrapperHeight()));
                        },
                        error: function (a) {
                            b.geometry.setChatMessagesWrapperHeight(), (b.messageAttachmentCount = 0), (b.LOCK_SEND_MESSAGE = !1), b.inputControl.hideGifBtn(), b.chatTools.onFail(a);
                        },
                    });
            }
        }
    },
    uploadMessagesSuccessCallback: function (a) {
        var b = this;
        if ((a.showPlug && ((b.uploadIsBlocked = !0), (b.isBlocked = !0)), a.error)) return b.chatTools.onFail(a.error);
        if ((b.subbatches.uploadedSubbatchCount++, a.lastSubbatchId && (b.lastSubbatchId = a.lastSubbatchId), a.subbatchId && (b.currentSubbatchId = parseInt(a.subbatchId, 10)), b.subbatches.uploadedSubbatchCount > 150))
            return void b.alertControl.showWarningMessage("Too much uploaded message packs. Please reload the page.");
        var c = b.subbatchControl.getCurrentSubbatchCount() + 1,
            d = (b.subbatchControl.getBottomSubbatchId(), b.subbatchControl.getTopSubbatchId());
        b.subbatchControl.resetCurrentSubbatches();
        for (var e = b.chatTools.getAllMessages(), f = 0; f < e.length; f++)
            !(function (a, b, d) {
                var f = e[b],
                    g = f.getAttribute("subbatch");
                a.subbatchControl.addCurrentSubbatches(g),
                    c > a.subbatchControl.getMaxSubbatchCount()
                        ? g == d && (a.chatTools.hasClass(f, "chatbro_message_radial") || a.chatTools.removeElement(f), a.subbatchControl.deleteCurrentSubbatches(g), a.geometry.setChatMessagesWrapperHeight())
                        : a.mil && ((a.mil = !1), g == a.currentSubbatchId && (a.chatTools.hasClass(f, "chatbro_message_radial") || a.chatTools.removeElement(f), a.geometry.setChatMessagesWrapperHeight()));
            })(b, f, b.messagesUploadToBottom ? d : null);
        if ("" === a.html && !a.showPlug) {
            var g = b.messagesUploadToBottom ? b.subbatchControl.getBottomSubbatchId() + 1 : b.subbatchControl.getTopSubbatchId();
            if ((new b.chatTools.LoadMsgIndicator().deleteOldLoaders(j), !(g < 0 && g >= b.lastSubbatchId))) return b.subbatchControl.incEmptyCount(), b.uploadMessages();
        }
        var h = b.NODES.chatMessagesTbody.offsetHeight,
            i = b.messagesUploadToBottom ? "beforeend" : "afterbegin";
        b.NODES.chatMessagesTbody.insertAdjacentHTML(i, a.html);
        var j = new Date().getTime();
        if (b.allowUploadMessages && !b.uploadIsBlocked) {
            var k = new b.chatTools.LoadMsgIndicator();
            b.subbatchControl.getTopSubbatchId() - 1 > 0 && 0 !== b.subbatchControl.getBottomSubbatchId() && b.NODES.chatMessagesTbody.insertAdjacentHTML("afterbegin", k.createLoader(j)),
                b.subbatchControl.getBottomSubbatchId() + 1 < b.lastSubbatchId && b.NODES.chatMessagesTbody.insertAdjacentHTML("beforeend", k.createLoader(j));
        }
        b.messagesProcessing(function () {
            var a = b.NODES.chatMessagesWrapperDiv.scrollTop;
            new b.chatTools.LoadMsgIndicator().deleteOldLoaders(j);
            for (var c = b.chatTools.getUncheckedMessages(), d = 0; d < c.length; d++)
                !(function (a) {
                    var d = c[a].getAttribute("subbatch");
                    b.subbatchControl.addCurrentSubbatches(d), b.chatTools.removeUncheckedStatus(c[a]);
                })(d);
            b.messagesUploadToBottom ? (b.NODES.chatMessagesWrapperDiv.scrollTop = a) : (b.NODES.chatMessagesWrapperDiv.scrollTop = b.NODES.chatMessagesBlockDiv.scrollHeight - h + a),
                b.subbatchControl.resetEmptyCount(),
                (b.messagesIsUploadedNow = !1),
                b.geometry.setChatMessagesWrapperHeight(),
                b.subbatchControl.log(),
                (b.subbatchControl.isLastBottomSubbatchUploaded = !1),
                b.NODES.chatMessagesScrollToLast && b.subbatchControl.isLastBottomSubbatchUploaded && (b.NODES.chatMessagesScrollToLast.style.display = "none");
        });
    },
    uploadMessages: function () {
        var a = this,
            b = a.messagesUploadToBottom ? a.subbatchControl.getBottomSubbatchId() + 1 : a.subbatchControl.getTopSubbatchId() - (a.mil ? 0 : 1);
        return b < 0
            ? void (a.messagesIsUploadedNow = !1)
            : b > a.lastSubbatchId
            ? ((a.subbatchControl.isLastBottomSubbatchUploaded = !0), (a.NODES.chatMessagesScrollToLast.style.display = "none"), void (a.messagesIsUploadedNow = !1))
            : void a.conControl.checkWebsocketConnection(function () {
                  a.isLpConnection ? a.conControl.makeLongPollRequest("/u", { subbatchId: b }) : a.webSocket.send(JSON.stringify({ type: "getMessages", subbatchId: b }));
              });
    },
    processServerResponse: function (a) {
        switch (((this.isConnectedWithSender = !0), a.type)) {
            case "deleteMessage":
                return this.events.onDeleteMessage(a.messageId);
            case "deleteAllMessages":
                return this.events.onDeleteMessages();
            case "deleteMessagesFromUser":
                return this.events.onDeleteMessagesFromUser(a.userId);
            case "embedParamsVersion":
                return (this.embedParamsVersion = a.embedParamsVersion), void (localStorage.embedParamsVersion = this.embedParamsVersion);
            case "messageReceived":
                return (this.messagesUploadToBottom = !0), (this.isSingleMessageReceived = !0), this.events.onMessageReceiving(a);
            case "chatbroScriptVerionChanged":
                return void (localStorage.chatbroScriptVersion = a.chatbroScriptVersion);
            case "count":
                var b = this;
                if (a.adv)
                    try {
                        (b.advertisingBlocks = null),
                            (b.showAd = a.adv.sa),
                            (b.insufficientFundsToDisableAd = a.adv["if"]),
                            (b.bp = a.adv.bp),
                            a.adv.ev && ((b.embedParamsVersion = a.embedParamsVersion), (localStorage.embedParamsVersion = b.embedParamsVersion));
                    } catch (c) {}
                return a.cvs && a.cvs != localStorage.chatbroScriptVersion && (localStorage.chatbroScriptVersion = a.cvs), this.events.onParticipantCountChanging(a);
            case "subbatchMessages":
                var b = this;
                (b.messagesIsUploadedNow = !1),
                    (b.isFistMessagesBlockLoaded = !0),
                    (b.isSingleMessageReceived = !1),
                    (b.lastSubbatchId = a.lastSubbatchId),
                    (b.subbatches.uploadedSubbatchCount = a.uploadedSubbatchCount),
                    (b.uia = a.uia),
                    (b.uip = a.uip),
                    (b.uim = a.uim),
                    (b.upl = a.upl),
                    (b.uploadIsBlocked = a.muib),
                    (b.mil = a.mil),
                    (b.milc = a.milc),
                    b.conControl.getPatrons(),
                    (b.isBlocked = b.inputControl.isBlocked()),
                    (b.embedParamsVersion = a.embedParamsVersion),
                    (localStorage.embedParamsVersion = b.embedParamsVersion),
                    // 99999999999999
                    (b.leftTrialDays = 0),
                    (b.isItTrialPeriod = true),
                    (b.bp = a.bp),
                    (b.bpdl = a.bpdl),
                    (b.costs = a.costs);
                var d = a.batchId,
                    e = a.lastBatchId;
                if ((this.inputControl.inputProcess(), "undefined" != typeof d && null !== d && "undefined" != typeof e && null !== e && (this.NODES.chatPaginatorPrev || this.NODES.chatPaginatorNext))) {
                    var d = parseInt(a.batchId, 10),
                        e = parseInt(a.lastBatchId, 10),
                        f = this.chatTools.getDomArrayByTagName(this.NODES.chatPaginatorPrev, "a")[0],
                        g = this.chatTools.getDomArrayByTagName(this.NODES.chatPaginatorNext, "a")[0];
                    d > 0 ? f && (f.href = this.paginatorUrlPrefix + (d - 1)) : (this.NODES.chatPaginatorPrev.style.display = "none"),
                        d < e ? g && (g.href = this.paginatorUrlPrefix + (d + 1)) : (this.NODES.chatPaginatorNext.style.display = "none");
                }
                return (
                    a.user && this.setLoggedUser(a.user, !1),
                    this.dropdownMenuControl.active && (this.dropdownMenuControl.addStuffLinks(), this.dropdownMenuControl.updatePatronBlock(), this.dropdownMenuControl.addPlan()),
                    (this.subbatchControl.isLastBottomSubbatchUploaded = !0),
                    this.events.onMessageReceiving(a, { disableAudio: !0, showGreeting: !b.alertControl.isGreetingAlreadyShowed(), hideAd: !0, showLoader: !this.useStandardHistoryWidgetSettings })
                );
            case "getMessages":
                return this.uploadMessagesSuccessCallback.bind(this)(a);
            case "logoutMe":
                if (this.isLoggedAsSiteUser) return;
                return (
                    this.removeLoggedUser(),
                    this.modalWindowControl.hide(),
                    (this.isBlocked = this.inputControl.isBlocked()),
                    (this.uploadIsBlocked = !1),
                    this.events.onMessagesScroll(!0),
                    this.chatTools.syncedMessagesProcessing(),
                    this.LOGOUT_CALLBACK && "function" == typeof this.LOGOUT_CALLBACK && (this.LOGOUT_CALLBACK(), (this.LOGOUT_CALLBACK = null)),
                    this.alertControl.showSuccessMessage(this.translatedText.youAreLoggedOut, 5e3),
                    void this.inputControl.inputProcess()
                );
            case "tp":
                return (this.topPatronsList = a.res.p), (this.lastPatronIndex = a.res.l), void this.chatTools.renderTopPatrons();
            case "loginMe":
                return (
                    (this.uia = a.uia),
                    (this.uip = a.uip),
                    (this.uim = a.uim),
                    (this.upl = a.upl),
                    (this.isBlocked = this.inputControl.isBlocked()),
                    (this.uploadIsBlocked = !1),
                    this.events.onMessagesScroll(!0),
                    this.chatTools.syncedMessagesProcessing(),
                    (this.NODES.chatTopBorder.title = a.eo),
                    a.user ? this.setLoggedUser.bind(this)(a.user, !0) : (this.modalWindowControl.hide(), this.alertControl.showWarningMessage("Failed to log in", 5e3)),
                    (this.LOGIN_CALLBACK && "function" == typeof this.LOGIN_CALLBACK) || this.inputControl.setFocusToEnd(),
                    void this.inputControl.inputProcess()
                );
            case "banInfo":
                return;
            case "error":
                return this.events.onMessageReceiving({}, { hasError: !0 });
        }
    },
    IsActveTab: function () {
        var a,
            b,
            c = { hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange" };
        for (a in c)
            if (a in document) {
                b = c[a];
                break;
            }
        return function (c) {
            return c && document.addEventListener(b, c), !document[a];
        };
    },
    Audio: function () {
        function a(a) {
            c.audio = new window.Audio(a);
        }
        function b() {
            (c.audio || c.audio.play) && c.audio.play();
        }
        var c = this;
        return { loadSoundFile: a, play: b };
    },
    widthHeightProcessing: function () {
        (this.mobileHeightPercent = (parseInt(this.chatMobileHeightPercent, 10) || 100) / 100), (this.mobileWidthPercent = (parseInt(this.chatMobileWidthPercent, 10) || 100) / 100);
        var a = this.geometry.getViewportGeometry();
        (this.documentHeight = a.height), (this.documentWidth = a.width);
        var b = this.geometry.getWindowSize();
        if (((this.windowHeight = b.height), (this.windowWidth = b.width), (this.orientation = this.chatTools.getWindowOrintation()), this.isMobile && this.allowMoveChat)) {
            this.geometry.setMobileHeadGeometry();
            var c, d;
            this.windowWidth > 500 && this.windowHeight > 500
                ? ((this.windowWidth = 500), (this.windowHeight = 500), (this.nonAdaptMobile = !0), (d = 20), (c = 20))
                : ((this.hideChatArea = document.createElement("div")), (this.hideChatArea.className = "hideChatArea"), this.NODES.chatMaxHeaderDiv.appendChild(this.hideChatArea), this.geometry.setHideChatArea(), (d = 0), (c = 0)),
                (this.chatTop = void 0),
                (this.chatLeft = void 0),
                (this.chatBottom = c),
                (this.chatRight = d);
        }
        if (((this.originHeight = this.chatHeight), (this.takeOriginHeight = !this.allowMoveChat), this.hideMessagesOverflow)) {
            var e;
            this.isMobile && this.allowMoveChat
                ? ((e = this.geometry.correctSizeValue(this.windowHeight)), this.nonAdaptMobile || "portrait" !== this.orientation || (e = this.geometry.correctSizeValue(this.windowHeight * this.mobileHeightPercent)))
                : ((this.NODES.chatMessagesWrapperDiv.style.maxHeight = this.geometry.correctSizeValue(100)),
                  (e = this.geometry.correctSizeValue(this.chatHeight)),
                  (this.NODES.chatMaxDiv.style.height = e),
                  (e = this.NODES.chatMaxDiv.offsetHeight),
                  e < this.DEFAULT.CHAT_MIN_HEIGHT && ((e = this.geometry.correctSizeValue(this.DEFAULT.CHAT_MIN_HEIGHT)), (this.takeOriginHeight = !1)));
            var f;
            (f = this.allowMoveChat ? e : this.takeOriginHeight ? this.originHeight : e), (this.NODES.chatMaxDiv.style.height = this.geometry.correctSizeValue(f));
        } else this.NODES.chatMaxDiv.style.height = "auto";
        var g;
        (this.originWidth = this.chatWidth),
            (this.takeOriginWidth = !this.allowMoveChat),
            this.isMobile && this.allowMoveChat
                ? ((g = this.geometry.correctSizeValue(this.windowWidth)), this.nonAdaptMobile || "landscape" !== this.orientation || (g = this.geometry.correctSizeValue(this.windowWidth * this.mobileWidthPercent)))
                : ((g = this.geometry.correctSizeValue(this.chatWidth)),
                  (this.NODES.chatMaxDiv.style.width = g),
                  (g = this.NODES.chatMaxDiv.offsetWidth),
                  g < this.DEFAULT.CHAT_MIN_WIDTH && ((g = this.geometry.correctSizeValue(this.DEFAULT.CHAT_MIN_WIDTH)), (this.takeOriginWidth = !1)));
        var h;
        (h = this.allowMoveChat ? g : this.takeOriginWidth ? this.originWidth : g),
            (this.NODES.chatMaxDiv.style.width = this.geometry.correctSizeValue(h)),
            (this.NODES.chatMessagesWrapperDiv.style.maxHeight = null),
            (this.chatHeight = this.NODES.chatMaxDiv.offsetHeight),
            (this.chatWidth = this.NODES.chatMaxDiv.offsetWidth),
            "undefined" == typeof this.chatTop &&
                ((this.NODES.chatMaxDiv.style.top = this.geometry.correctSizeValue(this.chatBottom)),
                (this.chatBottom = this.isMobile && this.allowMoveChat ? this.chatBottom : this.NODES.chatMaxDiv.offsetTop),
                (this.chatTop = this.documentHeight - this.chatBottom - this.chatHeight)),
            "undefined" == typeof this.chatLeft &&
                ((this.NODES.chatMaxDiv.style.left = this.geometry.correctSizeValue(this.chatRight)),
                (this.chatRight = this.isMobile && this.allowMoveChat ? this.chatRight : this.NODES.chatMaxDiv.offsetLeft),
                (this.chatLeft = this.documentWidth - this.chatRight - this.chatWidth)),
            this.isMobile && this.allowMoveChat
                ? ((this.NODES.chatMaxDiv.style.top = null),
                  (this.NODES.chatMaxDiv.style.left = null),
                  (this.NODES.chatMaxDiv.style.bottom = this.geometry.correctSizeValue(this.chatBottom)),
                  (this.NODES.chatMaxDiv.style.right = this.geometry.correctSizeValue(this.chatRight)))
                : ((this.NODES.chatMaxDiv.style.bottom = null),
                  (this.NODES.chatMaxDiv.style.right = null),
                  (this.NODES.chatMaxDiv.style.top = this.geometry.correctSizeValue(this.chatTop)),
                  (this.NODES.chatMaxDiv.style.left = this.geometry.correctSizeValue(this.chatLeft))),
            (this.chatTop = this.isMobile && this.allowMoveChat ? this.chatTop : this.NODES.chatMaxDiv.offsetTop),
            (this.chatLeft = this.isMobile && this.allowMoveChat ? this.chatLeft : this.NODES.chatMaxDiv.offsetLeft),
            (this.initChatLeft = this.chatLeft),
            (this.initChatTop = this.chatTop),
            this.geometry.setChatRelativePosition(0, 0),
            this.geometry.setChatMessagesWrapperHeight();
    },
    removeLoggedUser: function () {
        try {
            this.inputControl.removeUser(),
                (this.userId = void 0),
                (this.isGuest = void 0),
                (this.userSiteId = void 0),
                (this.userCurrentLoginMethod = void 0),
                (this.uia = !1),
                (this.upl = null),
                (this.uip = !1),
                (this.uim = !1),
                this.dropdownMenuControl.active && (this.dropdownMenuControl.addStuffLinks(), this.dropdownMenuControl.updatePlan(), this.dropdownMenuControl.updatePatronBlock()),
                this.lockSendMessage(),
                this.inputControl.clearInput(),
                this.removeAllAttachments(),
                this.inputControl.removeDelayIndicator();
            for (var a = this.chatTools.getAllMessages(), b = 0; b < a.length; b++)
                !(function (b, c) {
                    b.chatTools.removeMenuOfMessage(a[c]);
                })(this, b);
        } catch (c) {
            this.chatTools.onFail(c);
        }
    },
    setLoggedUser: function (a, b) {
        var c = this;
        try {
            if (c.isLoggedAsSiteUser) return;
            if (!a) return;
            if (
                ((c.userId = a.id),
                (c.isGuest = a.isGuest),
                (c.userSiteId = a.siteId),
                c.isGuest ? (c.userCurrentLoginMethod = c.LOGIN_METHODS[6e3]) : (c.userCurrentLoginMethod = c.LOGIN_METHODS[c.userSiteId] || null),
                this.dropdownMenuControl.active)
            ) {
                c.dropdownMenuControl.addLoggedUser(a), c.dropdownMenuControl.addStuffLinks(), c.dropdownMenuControl.updatePlan(), c.dropdownMenuControl.updatePatronBlock();
                var d = c.chatTools.getDomArrayByClass(c.NODES.chatDropdownMenuDiv, c.NODES_CLASSES.LOGOUT)[0];
                d && (d.onclick = c.logout.bind(c));
            }
            if (b) {
                c.modalWindowControl.hide(), c.inputControl.bindMessageEvent(), c.alertControl.showSuccessMessage(c.translatedText.youAreLoggedAs + " " + a.fullName, 5e3);
                for (var e = c.chatTools.getAllMessages(), f = 0; f < e.length; f++)
                    !(function (a) {
                        c.chatTools.addMenuOfMessage(e[a]);
                    })(f);
            }
            c.geometry.setChatMessagesWrapperHeight();
        } catch (g) {
            c.chatTools.onFail(g);
        }
    },
    setSiteUser: function () {
        var a = this;
        this.isLoggedAsSiteUser = !0;
        var b = this.siteUserFullName || (this.siteUserFirstName || "") + " " + (this.siteUserLastName || "") || this.siteUserScreenName;
        a.autoLoginViaSite ||
            (a.modalWindowControl.hide(), a.inputControl.bindMessageEvent(), a.inputControl.setFocusToEnd(), a.geometry.setChatMessagesWrapperHeight(), a.alertControl.showSuccessMessage(a.translatedText.youAreLoggedAs + " " + b, 5e3));
        try {
            if (!this.isSiteLogin) return void (this.NODES.chatDropdownMenuUserWrapper && (this.NODES.chatDropdownMenuUserWrapper.style.display = "none"));
            if (this.NODES.chatDropdownMenuUserWrapper && this.dropdownMenuControl.active) {
                a.dropdownMenuControl.addLoggedUser({ fullName: b, avatarUrl: a.siteUserAvatarUrl }), a.dropdownMenuControl.addStuffLinks();
                var c = a.chatTools.getDomArrayByClass(a.NODES.chatDropdownMenuDiv, a.NODES_CLASSES.LOGOUT)[0];
                c &&
                    (a.autoLoginViaSite
                        ? a.chatTools.removeElement(c)
                        : (c.onclick = function () {
                              (a.isLoggedAsSiteUser = !1), a.removeLoggedUser(), a.dropdownMenuControl.hide(), a.alertControl.showSuccessMessage(a.translatedText.youAreLoggedOut, 5e3);
                          }));
                for (var d = a.chatTools.getAllMessages(), e = 0; e < d.length; e++)
                    !(function (b) {
                        a.chatTools.addMenuOfMessage(d[b]);
                    })(e);
            }
        } catch (f) {}
    },
    audioPlayer: function (a) {
        function b(a) {
            var b = ("0" + a).slice(-2);
            return b.length < 2 ? "00" : b;
        }
        function c(a) {
            var c = parseInt(a, 10),
                d = Math.floor(c / 86400);
            c -= 3600 * d * 24;
            var e = Math.floor(c / 3600);
            c -= 3600 * e;
            var f = Math.floor(c / 60);
            return (c -= 60 * f), (0 !== e ? e + ":" + b(f) : f) + ":" + b(c);
        }
        function d(a) {
            function b(b) {
                var c = b.offsetX / this.offsetWidth;
                (a.player.currentTime = c * a.player.duration), (a.progressbar.value = parseFloat(c / 100));
            }
            if (!k.currentAudioPlayer || k.currentAudioPlayer.id === a.id) {
                var d = a.player.duration,
                    e = a.player.currentTime,
                    f = c(d);
                a.endTime.textContent = f;
                var h = c(e);
                (a.startTime.textContent = h + " / "),
                    (a.progressbar.value = parseFloat(a.player.currentTime / a.player.duration)),
                    a.progressbar.addEventListener("click", b),
                    a.player.currentTime === a.player.duration && g(a),
                    (titleWidth = k.geometry.elementWidth(a.titleWrap)),
                    (timeWrapWidth = k.geometry.elementWidth(a.timeWrap)),
                    (a.title.style.width = titleWidth - timeWrapWidth - 5 + "px");
            }
        }
        function e(a) {
            var b = parseFloat(this.value);
            (a.player.volume = b), (k.audioVolume = b), k.saveToLocalStorage("chatbro_audio_volume_settings", k.audioVolume);
        }
        function f() {
            for (var a = 0; a < k.audioPlayers.length; a++)
                !(function (a, b) {
                    g(a.audioPlayers[b]);
                })(k, a);
        }
        function g(a) {
            a.player.pause(),
                (a.playBtn.className = "chatbro_audio_player_play_btn chatbro_audio_player_play_btn_start"),
                k.currentAudioPlayer &&
                    k.currentAudioPlayer.id !== a.id &&
                    ((a.player.currentTime = 0),
                    (a.progressbar.value = 0),
                    (a.startTime.textContent = ""),
                    (a.titleWrap.style.margin = "5px 0"),
                    (a.progressbar.style.visibility = "hidden"),
                    (a.volumebar.style.visibility = "hidden"),
                    (a.title.style.width = "auto"));
        }
        function h(a) {
            (k.currentAudioPlayer = a),
                f(),
                (a.volumebar.value = k.audioVolume),
                (a.player.volume = k.audioVolume),
                (a.progressbar.style.visibility = "visible"),
                (a.volumebar.style.visibility = "visible"),
                (a.titleWrap.style.margin = "0"),
                a.player.play(),
                (a.playBtn.className = "chatbro_audio_player_play_btn chatbro_audio_player_play_btn_stop");
        }
        function i(a) {
            k.messageFontSise = parseInt(k.messageFontSise, 10);
            var b = isNaN(k.messageFontSise) ? k.DEFAULT_MESSAGE_FONT_SIZE : k.messageFontSise,
                c = b - k.DEFAULT_MESSAGE_FONT_SIZE;
            (a.playerWrap.style.height = k.geometry.correctSizeValue(k.DEFAULT_AUDIO_PLAYER_HEIGHT + 1.5 * c)), (a.timeWrap.style.fontSize = k.geometry.correctSizeValue(k.DEFAULT_AUDIO_PLAYER_TIMER_FONT_SIZE + 0.5 * c));
        }
        function j(a, b) {
            function f() {
                j.player.paused === !1 ? g(j) : h(j);
            }
            if (a) {
                var j = {
                    playerWrap: a,
                    player: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_source")[0],
                    playBtn: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_play_btn")[0],
                    timeWrap: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_time")[0],
                    endTime: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_time_end")[0],
                    startTime: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_time_start")[0],
                    progressbar: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_bar_progress")[0],
                    volumebar: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_bar_volume")[0],
                    titleWrap: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_title_wrap")[0],
                    title: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_title")[0],
                    name: k.chatTools.getDomArrayByClass(a, "chatbro_audio_player_controls_title_name")[0],
                    id: b || new Date().getTime(),
                };
                k.audioPlayers.push(j),
                    j.player.setAttribute("id", "chatbroPlayer-" + j.id),
                    (j.player.volume = j.volumebar.value),
                    (j.endTime.textContent = c(j.player.getAttribute("duration"))),
                    (j.player.ontimeupdate = d.bind(j.player, j)),
                    (j.volumebar.onchange = e.bind(j.volumebar, j)),
                    (j.volumebar.oninput = e.bind(j.volumebar, j)),
                    (j.playBtn.onclick = f),
                    (j.name.onclick = f),
                    i(j);
            }
        }
        var k = a;
        return (k.audioPlayers = []), (k.currentAudioPlayer = null), (k.audioVolume = parseFloat(k.loadFromLocalStorage("chatbro_audio_volume_settings") || 0.35)), { init: j };
    },
    initChatContainer: function (a) {
        function b(a) {
            return document.getElementById(a);
        }
        function c() {
            return (f = document.createElement("div")), (f.id = e.containerDivId), f;
        }
        function d() {
            if (((e.containerDivId = "container_auto_" + (e.allowMoveChat ? "movable" : "static") + "_" + e.chatTools.hexEncode(e.chatPivot)), e.body || (e.body = document.getElementsByTagName("body")[0]), e.allowMoveChat))
                return (f = c()), e.body.appendChild(f), f;
            for (var a = document.getElementsByTagName("head")[0].getElementsByTagName("script"), b = 0; b < a.length; b++) if ("chatBroEmbedCode" === a[b].id) return (isFindinHead = !0), (f = c()), e.body.appendChild(f), f;
            for (var d = document.getElementsByTagName("body")[0].getElementsByTagName("script"), b = 0; b < d.length; b++) if ("chatBroEmbedCode" === d[b].id) return (isFindinBody = !0), (f = c()), e.body.insertBefore(f, d[b]), f;
            return (f = c()), e.body.appendChild(f), f;
        }
        var e = this;
        if (((e.body = document.getElementsByTagName("body")[0]), !e.containerDivId || ("chatbro" === e.containerDivId && e.allowMoveChat)))
            if (e.allowMoveChat) {
                if (e.body) return (e.containerDiv = d()), a();
                document.onreadystatechange = function () {
                    if (("interactive" === document.readyState || "complete" === document.readyState) && !e.containerDiv) return (e.containerDiv = d()), a();
                };
            } else {
                if ("complete" === document.readyState) return (e.containerDiv = d()), a();
                document.onreadystatechange = function () {
                    if (("interactive" === document.readyState || "complete" === document.readyState) && !e.containerDiv) return (e.containerDiv = d()), a();
                };
            }
        else {
            var f = b(e.containerDivId);
            if (f) return (e.containerDiv = f), a();
            if ("complete" === document.readyState) return (f = b(e.containerDivId)), f ? ((e.containerDiv = f), a()) : ((e.containerDiv = d()), a());
            var g = setInterval(function () {
                if ((f = b(e.containerDivId))) return clearInterval(g), (e.containerDiv = f), a();
            }, 100);
            document.onreadystatechange = function () {
                if (("interactive" === document.readyState || "complete" === document.readyState) && !e.containerDiv) return clearInterval(g), (f = b(e.containerDivId)), f ? ((e.containerDiv = f), a()) : ((e.containerDiv = d()), a());
            };
        }
    },
    minimizeChat: function () {
        if (
            ((this.chatState = this.STATES.MINIMIZED),
            this.saveGeometryToLocalStorage(),
            this.chatTools.removeClass(this.NODES.chatMaxDiv, "chatbro_opacity"),
            (this.NODES.chatMinHeaderDiv.className += " chatbro_opacity"),
            (this.NODES.chatMaxDiv.style.display = "none"),
            (this.NODES.chatMinHeaderDiv.style.display = "block"),
            (this.NODES.chatMinDiv.style.display = "block"),
            this.allowMoveChat)
        )
            this.NODES.chatMinInviteButton && (this.NODES.chatMinInviteButton.style.display = "none"), (this.NODES.chatMinHeaderDiv.style.height = "40px"), this.geometry.setMinChatHeaderWidth();
        else
            try {
                this.events.onWindowResize();
            } catch (a) {}
        this.removeMessagesCount(), document.dispatchEvent(this.customEvents.minimizeChat);
    },
    executeWhenChatWillBeVisible: function (a) {
        var b = document.getElementById(this.containerDivId);
        if ("undefined" !== b) {
            var c = b.offsetParent;
            try {
                if ("fixed" === getComputedStyle(b).position) return a();
            } catch (d) {}
            if (null === c)
                var e = setInterval(function () {
                    null !== b.offsetParent && (a(), clearInterval(e));
                }, 100);
            else a();
        }
    },
    maximizeChat: function () {
        var a = this;
        if (
            (a.needToLoadSubbatchMessages && ((a.needToLoadSubbatchMessages = !1), a.conControl.getSubbatchMessages()),
            (a.chatState = a.STATES.MAXIMIZED),
            a.saveGeometryToLocalStorage(),
            (a.NODES.chatMaxDiv.style.display = "block"),
            (a.NODES.chatMaxDiv.className += " chatbro_opacity"),
            a.chatTools.removeClass(a.NODES.chatMinHeaderDiv, "chatbro_opacity"),
            (a.NODES.chatMinHeaderDiv.style.display = "none"),
            (a.NODES.chatMinDiv.style.display = "none"),
            a.removeMessagesCount(),
            this.events.onWindowResize(),
            a.isNotFirstMaximize)
        )
            a.chatTools.scrollToBottom();
        else {
            a.executeWhenChatWillBeVisible(function () {
                a.NODES.chatMessagesWrapperDiv.scrollTop = a.NODES.chatMessagesBlockDiv.offsetHeight + 1e3;
            }),
                (a.messagesIsUploadedNow = !0),
                a.hideMessagesOverflow && (a.NODES.chatMessagesTable.style.display = "none");
            var b = new Date().getTime();
            a.messagesProcessing(function () {
                a.getDataFromSender ? (a.NODES.chatMessagesEmptyTd.style.display = "none") : a.conControl.uipreload.hide();
                for (var c = a.chatTools.getUncheckedMessages(), d = 0; d < c.length; d++)
                    !(function (b) {
                        a.chatTools.removeUncheckedStatus(c[b]);
                    })(d);
                new a.chatTools.LoadMsgIndicator().deleteOldLoaders(b),
                    (a.NODES.chatMessagesTable.style.display = "table-cell"),
                    (a.NODES.chatMessagesWrapperDiv.scrollTop = a.NODES.chatMessagesBlockDiv.offsetHeight + 1e3),
                    (a.isNotFirstMaximize = !0),
                    (a.messagesIsUploadedNow = !1),
                    (a.messagesUploadToBottom = !1),
                    a.geometry.setChatMessagesWrapperHeight();
            });
        }
        a.allowMoveChat && a.geometry.setChatRelativeSizeAndPosition(), a.geometry.setChatMessagesWrapperHeight(), document.dispatchEvent(a.customEvents.maximizeChat);
    },
    loadFromLocalStorage: function (a) {
        var b = localStorage[a];
        return b ? JSON.parse(b) : void 0;
    },
    saveToLocalStorage: function (a, b) {
        localStorage[a] = JSON.stringify(b);
    },
    saveGeometryToLocalStorage: function () {
        if (this.allowMoveChat) {
            var a = { chatLeft: this.chatLeft, chatTop: this.chatTop, chatWidth: this.chatWidth, chatHeight: this.chatHeight, chatState: this.chatState, chatSettingsVersion: this.CHAT_SETTINGS_VERSION };
            this.saveToLocalStorage(this.chatGeometrySettingsName, a);
        }
    },
    saveSiteUserToLocalStorage: function () {
        var a = { chatSettingsVersion: this.CHAT_SETTINGS_VERSION };
        this.saveToLocalStorage(this.siteUserSettingsName, a);
    },
    destroy: function (a) {
        this.webSocket && ((this.notAllowReConnect = !0), this.webSocket.close()), this.conControl.stopLP(), a && (this.containerDiv.innerHTML = "");
    },
};
(function () {
    var css =
        ".chatbro_data_tippy [data-tippy]{position:absolute;height:inherit;width:inherit;top:0;left:0}.chatbro_data_tippy [data-tippy]:before,.chatbro_data_tippy [data-tippy]:after{position:absolute;display:block;opacity:0;transition:all .18s ease-out;font-family:sans-serif;transform:translate3d(-50%, 0, 0);transform-origin:top;top:100%;left:50%;pointer-events:none;font-weight:100}.chatbro_data_tippy [data-tippy]:before{content:attr(data-tippy);color:#fff;font-size:13px;background-color:#000;z-index:1;padding:3px 6px;border-radius:3px;white-space:nowrap;margin-top:10px}.chatbro_data_tippy [data-tippy]:after{content:'';border:5px solid transparent;border-bottom-color:#000}.chatbro_data_tippy [data-tippy]:hover:before,.chatbro_data_tippy [data-tippy]:hover:after{transform:translate3d(-50%, 0, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos]:before{top:auto;left:auto;margin-top:auto;transform:none}.chatbro_data_tippy [data-tippy][data-tippy-pos]:after{top:auto;left:auto;margin-top:auto;border-bottom-color:transparent;transform:none}.chatbro_data_tippy [data-tippy][data-tippy-pos='up']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='up']:after,.chatbro_data_tippy [data-tippy][data-tippy-pos='down']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='down']:after{left:0}.chatbro_data_tippy [data-tippy][data-tippy-pos='topLeft']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='topLeft']:after{left:50%}.chatbro_data_tippy [data-tippy][data-tippy-pos='topRight']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='topRight']:after{left:50%}.chatbro_data_tippy [data-tippy][data-tippy-pos='up']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='up']:after{bottom:100%;transform:translate3d(-50%, 0, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='topLeft']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='topLeft']:after{bottom:100%;transform:translate3d(-15%, 0, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='topRight']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='topRight']:after{bottom:100%;transform:translate3d(-75%, 0, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='up']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='topRight']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='topLeft']:before{margin-bottom:10px}.chatbro_data_tippy [data-tippy][data-tippy-pos='up']:after,.chatbro_data_tippy [data-tippy][data-tippy-pos='topRight']:after,.chatbro_data_tippy [data-tippy][data-tippy-pos='topLeft']:after{border-top-color:#000;border-bottom-color:transparent}.chatbro_data_tippy [data-tippy][data-tippy-pos='down']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='down']:after{top:100%;transform:translate3d(-90%, 0, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='down']:before{margin-top:10px}.chatbro_data_tippy [data-tippy][data-tippy-pos='down']:after{border-bottom-color:#000;border-top-color:transparent}.chatbro_data_tippy [data-tippy][data-tippy-pos='left']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='left']:after,.chatbro_data_tippy [data-tippy][data-tippy-pos='right']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='right']:after{top:50%}.chatbro_data_tippy [data-tippy][data-tippy-pos='left']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='left']:after{right:100%;transform:translate3d(0, -50%, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='left']:before{margin-right:10px}.chatbro_data_tippy [data-tippy][data-tippy-pos='left']:after{border-left-color:#000}.chatbro_data_tippy [data-tippy][data-tippy-pos='right']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='right']:after{left:100%;transform:translate3d(0, -50%, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='right']:before{margin-left:10px}.chatbro_data_tippy [data-tippy][data-tippy-pos='right']:after{border-right-color:#000}.chatbro_data_tippy [data-tippy]:hover:before,.chatbro_data_tippy [data-tippy]:hover:after{opacity:1}.chatbro_data_tippy [data-tippy][data-tippy-animate='slide']:before,.chatbro_data_tippy [data-tippy][data-tippy-animate='slide']:after{transform:translate3d(-50%, -10px, 0)}.chatbro_data_tippy [data-tippy][data-tippy-animate='slide']:hover:before,.chatbro_data_tippy [data-tippy][data-tippy-animate='slide']:hover:after{transform:translate3d(-50%, 0, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:after{transform:translate3d(-50%, 10px, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:after{transform:translate3d(-50%, -10px, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:hover:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:hover:after,.chatbro_data_tippy [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:hover:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:hover:after{transform:translate3d(-50%, 0, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:after{transform:translate3d(10px, -50%, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:after{transform:translate3d(-10px, -50%, 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:hover:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:hover:after,.chatbro_data_tippy [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:hover:before,.chatbro_data_tippy [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:hover:after{transform:translate3d(0, -50%, 0)}.chatbro_data_tippy [data-tippy][data-tippy-animate='bubble']:before,.chatbro_data_tippy [data-tippy][data-tippy-animate='bubble']:after{opacity:1;visibility:hidden}.chatbro_data_tippy [data-tippy][data-tippy-animate='bubble']:hover:before,.chatbro_data_tippy [data-tippy][data-tippy-animate='bubble']:hover:after{visibility:visible}.chatbro_data_tippy [data-tippy][data-tippy-animate='bubble']:before{clip-path:circle(10% at 50% 0)}.chatbro_data_tippy [data-tippy][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_data_tippy [data-tippy][data-tippy-pos='up'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 50% 100%)}.chatbro_data_tippy [data-tippy][data-tippy-pos='up'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_data_tippy [data-tippy][data-tippy-pos='down'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 50% 0)}.chatbro_data_tippy [data-tippy][data-tippy-pos='down'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_data_tippy [data-tippy][data-tippy-pos='left'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 100% 50%)}.chatbro_data_tippy [data-tippy][data-tippy-pos='left'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_data_tippy [data-tippy][data-tippy-pos='right'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 0 50%)}.chatbro_data_tippy [data-tippy][data-tippy-pos='right'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_image_delete-ico{background-image:url(https://www.chatbro.com/images/sprites.png) !important;background-position:-74px -14px !important;width:10px;height:10px}.chatbro_image_ok{background-image:url(https://www.chatbro.com/images/sprites.png) !important;background-position:0 0 !important;width:32px;height:32px}.chatbro_image_question{background-image:url(https://www.chatbro.com/images/sprites.png) !important;background-position:-37px 0 !important;width:32px;height:32px}.chatbro_image_reply_ico{background-image:url(https://www.chatbro.com/images/sprites.png) !important;background-position:-74px 0 !important;width:12px;height:9px}.chatbro_image_send{background-image:url(https://www.chatbro.com/images/sprites.png) !important;background-position:0 -37px !important;width:32px;height:32px}.chatbro_image_smile{background-image:url(https://www.chatbro.com/images/sprites.png) !important;background-position:-37px -37px !important;width:32px;height:32px}.sprite-icon{display:inline-block}.chatbro_opacity{visibility:hidden}.chatbro_fade_out{visibility:hidden !important;opacity:0 !important;transform:scale(.8);transition:visibility 0s linear 100ms,opacity 100ms,transform .2s}.chatbro_fade_in{visibility:visible !important;opacity:1 !important;transition:visibility 0s linear 0s,opacity 100ms,transform .2s;transform:scale(1)}.chatbro_opacity{animation-name:chatbroopacity;-webkit-animation-name:chatbroopacity;animation-duration:.1s;-webkit-animation-duration:.1s;animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;visibility:visible !important}@keyframes chatbroopacity{0%{opacity:0}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8}90%{opacity:.9}100%{opacity:1}}.chatbro_new_scroll{overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_new_scroll::-webkit-scrollbar{width:4px;height:8px}.chatbro_new_scroll::-webkit-scrollbar *{background:transparent}.chatbro_new_scroll::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_new_scroll_narrow{overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_new_scroll_narrow::-webkit-scrollbar{width:4px;height:4px}.chatbro_new_scroll_narrow::-webkit-scrollbar *{background:transparent}.chatbro_new_scroll_narrow::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_new_scroll_horizontal::-webkit-scrollbar{height:4px}.chatbro_new_scroll_horizontal::-webkit-scrollbar *{background:transparent}.chatbro_new_scroll_horizontal::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_new_scroll_horizontal_narrow::-webkit-scrollbar{height:4px}.chatbro_new_scroll_horizontal_narrow::-webkit-scrollbar *{background:transparent}.chatbro_new_scroll_horizontal_narrow::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}@keyframes chatbro_scroll_last_msg{0%{transform:translate(0, 0)}100%{transform:translate(-100%, 0)}}@font-face{font-display:swap;font-family:\"chatbro\";src:url(\"https://www.chatbro.com/fonts/chatbro.eot?10\");src:url(\"https://www.chatbro.com/fonts/chatbro.eot?#iefix?10\") format(\"embedded-opentype\"),url(\"https://www.chatbro.com/fonts/chatbro.woff?10\") format(\"woff\"),url(\"https://www.chatbro.com/fonts/chatbro.ttf?10\") format(\"truetype\"),url(\"https://www.chatbro.com/fonts/chatbro.svg?10#chatbro\") format(\"svg\");font-weight:normal;font-style:normal}@font-face{font-display:swap;font-family:'glyphicons-halflings-regular';src:url('https://www.chatbro.com/fonts/glyphicons-halflings-regular.eot');src:url('https://www.chatbro.com/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('https://www.chatbro.com/fonts/glyphicons-halflings-regular.woff2') format('woff2'),url('https://www.chatbro.com/fonts/glyphicons-halflings-regular.woff') format('woff'),url('https://www.chatbro.com/fonts/glyphicons-halflings-regular.ttf') format('truetype'),url('https://www.chatbro.com/fonts/glyphicons-halflings-regular.svg#svgFontName') format('svg')}.chatbro_ico{font-family:\"chatbro\",serif !important}.chatbro_slide_from_right{right:-6000px;animation:chatbroslr .2s forwards}@keyframes chatbroslr{100%{right:0}}.chatbro_slide_from_left{left:-6000px;animation:chatbrosll .2s forwards}@keyframes chatbrosll{100%{left:0}}.chatbro_container{font-size:12px;position:relative}.chatbro_container [data-tippy]{position:absolute;height:inherit;width:inherit;top:0;left:0}.chatbro_container [data-tippy]:before,.chatbro_container [data-tippy]:after{position:absolute;display:block;opacity:0;transition:all .18s ease-out;font-family:sans-serif;transform:translate3d(-50%, 0, 0);transform-origin:top;top:100%;left:50%;pointer-events:none;font-weight:100}.chatbro_container [data-tippy]:before{content:attr(data-tippy);color:#fff;font-size:13px;background-color:#000;z-index:1;padding:3px 6px;border-radius:3px;white-space:nowrap;margin-top:10px}.chatbro_container [data-tippy]:after{content:'';border:5px solid transparent;border-bottom-color:#000}.chatbro_container [data-tippy]:hover:before,.chatbro_container [data-tippy]:hover:after{transform:translate3d(-50%, 0, 0)}.chatbro_container [data-tippy][data-tippy-pos]:before{top:auto;left:auto;margin-top:auto;transform:none}.chatbro_container [data-tippy][data-tippy-pos]:after{top:auto;left:auto;margin-top:auto;border-bottom-color:transparent;transform:none}.chatbro_container [data-tippy][data-tippy-pos='up']:before,.chatbro_container [data-tippy][data-tippy-pos='up']:after,.chatbro_container [data-tippy][data-tippy-pos='down']:before,.chatbro_container [data-tippy][data-tippy-pos='down']:after{left:0}.chatbro_container [data-tippy][data-tippy-pos='topLeft']:before,.chatbro_container [data-tippy][data-tippy-pos='topLeft']:after{left:50%}.chatbro_container [data-tippy][data-tippy-pos='topRight']:before,.chatbro_container [data-tippy][data-tippy-pos='topRight']:after{left:50%}.chatbro_container [data-tippy][data-tippy-pos='up']:before,.chatbro_container [data-tippy][data-tippy-pos='up']:after{bottom:100%;transform:translate3d(-50%, 0, 0)}.chatbro_container [data-tippy][data-tippy-pos='topLeft']:before,.chatbro_container [data-tippy][data-tippy-pos='topLeft']:after{bottom:100%;transform:translate3d(-15%, 0, 0)}.chatbro_container [data-tippy][data-tippy-pos='topRight']:before,.chatbro_container [data-tippy][data-tippy-pos='topRight']:after{bottom:100%;transform:translate3d(-75%, 0, 0)}.chatbro_container [data-tippy][data-tippy-pos='up']:before,.chatbro_container [data-tippy][data-tippy-pos='topRight']:before,.chatbro_container [data-tippy][data-tippy-pos='topLeft']:before{margin-bottom:10px}.chatbro_container [data-tippy][data-tippy-pos='up']:after,.chatbro_container [data-tippy][data-tippy-pos='topRight']:after,.chatbro_container [data-tippy][data-tippy-pos='topLeft']:after{border-top-color:#000;border-bottom-color:transparent}.chatbro_container [data-tippy][data-tippy-pos='down']:before,.chatbro_container [data-tippy][data-tippy-pos='down']:after{top:100%;transform:translate3d(-90%, 0, 0)}.chatbro_container [data-tippy][data-tippy-pos='down']:before{margin-top:10px}.chatbro_container [data-tippy][data-tippy-pos='down']:after{border-bottom-color:#000;border-top-color:transparent}.chatbro_container [data-tippy][data-tippy-pos='left']:before,.chatbro_container [data-tippy][data-tippy-pos='left']:after,.chatbro_container [data-tippy][data-tippy-pos='right']:before,.chatbro_container [data-tippy][data-tippy-pos='right']:after{top:50%}.chatbro_container [data-tippy][data-tippy-pos='left']:before,.chatbro_container [data-tippy][data-tippy-pos='left']:after{right:100%;transform:translate3d(0, -50%, 0)}.chatbro_container [data-tippy][data-tippy-pos='left']:before{margin-right:10px}.chatbro_container [data-tippy][data-tippy-pos='left']:after{border-left-color:#000}.chatbro_container [data-tippy][data-tippy-pos='right']:before,.chatbro_container [data-tippy][data-tippy-pos='right']:after{left:100%;transform:translate3d(0, -50%, 0)}.chatbro_container [data-tippy][data-tippy-pos='right']:before{margin-left:10px}.chatbro_container [data-tippy][data-tippy-pos='right']:after{border-right-color:#000}.chatbro_container [data-tippy]:hover:before,.chatbro_container [data-tippy]:hover:after{opacity:1}.chatbro_container [data-tippy][data-tippy-animate='slide']:before,.chatbro_container [data-tippy][data-tippy-animate='slide']:after{transform:translate3d(-50%, -10px, 0)}.chatbro_container [data-tippy][data-tippy-animate='slide']:hover:before,.chatbro_container [data-tippy][data-tippy-animate='slide']:hover:after{transform:translate3d(-50%, 0, 0)}.chatbro_container [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:before,.chatbro_container [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:after{transform:translate3d(-50%, 10px, 0)}.chatbro_container [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:before,.chatbro_container [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:after{transform:translate3d(-50%, -10px, 0)}.chatbro_container [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:hover:before,.chatbro_container [data-tippy][data-tippy-pos='up'][data-tippy-animate='slide']:hover:after,.chatbro_container [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:hover:before,.chatbro_container [data-tippy][data-tippy-pos='down'][data-tippy-animate='slide']:hover:after{transform:translate3d(-50%, 0, 0)}.chatbro_container [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:before,.chatbro_container [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:after{transform:translate3d(10px, -50%, 0)}.chatbro_container [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:before,.chatbro_container [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:after{transform:translate3d(-10px, -50%, 0)}.chatbro_container [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:hover:before,.chatbro_container [data-tippy][data-tippy-pos='left'][data-tippy-animate='slide']:hover:after,.chatbro_container [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:hover:before,.chatbro_container [data-tippy][data-tippy-pos='right'][data-tippy-animate='slide']:hover:after{transform:translate3d(0, -50%, 0)}.chatbro_container [data-tippy][data-tippy-animate='bubble']:before,.chatbro_container [data-tippy][data-tippy-animate='bubble']:after{opacity:1;visibility:hidden}.chatbro_container [data-tippy][data-tippy-animate='bubble']:hover:before,.chatbro_container [data-tippy][data-tippy-animate='bubble']:hover:after{visibility:visible}.chatbro_container [data-tippy][data-tippy-animate='bubble']:before{clip-path:circle(10% at 50% 0)}.chatbro_container [data-tippy][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_container [data-tippy][data-tippy-pos='up'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 50% 100%)}.chatbro_container [data-tippy][data-tippy-pos='up'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_container [data-tippy][data-tippy-pos='down'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 50% 0)}.chatbro_container [data-tippy][data-tippy-pos='down'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_container [data-tippy][data-tippy-pos='left'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 100% 50%)}.chatbro_container [data-tippy][data-tippy-pos='left'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_container [data-tippy][data-tippy-pos='right'][data-tippy-animate='bubble']:before{clip-path:circle(10% at 0 50%)}.chatbro_container [data-tippy][data-tippy-pos='right'][data-tippy-animate='bubble']:hover:before{clip-path:circle(100% at 50%)}.chatbro_container .chatbro_unmovable_chat{position:relative}.chatbro_container .chatbro_movable_chat{position:fixed;z-index:4999}.chatbro_container .chatbro_minimized_chat.chatbro_movable_chat{bottom:0;z-index:5000}.chatbro_container .chatbro_minimized_chat.chatbro_unmovable_chat{display:none}.chatbro_container .chatbro_minimized_chat.chatbro_unmovable_chat .chatbro_minimized_caption{width:100%}.chatbro_container *{box-sizing:border-box;font-family:Tahoma,Helvetica,sans-serif;letter-spacing:.2px}.chatbro_container .emojione{font-size:inherit;height:18px;width:18px;min-height:18px;min-width:18px;display:inline-block;margin:-0.2ex .15em 0;line-height:normal;vertical-align:middle}.chatbro_container img.emojione{width:auto}.chatbro_container table{border:none !important;background-color:inherit}.chatbro_container table tr,.chatbro_container table td,.chatbro_container table tbody{border:none;background:none !important}.chatbro_container button,.chatbro_container input{border:0 !important;padding:0 !important;box-shadow:none !important;border-radius:0 !important;min-height:0 !important;font-weight:normal !important;text-shadow:none !important;outline:none !important;text-transform:none !important;min-width:1px;line-height:normal}.chatbro_container button{font-family:\"chatbro\",serif !important;text-align:center !important}.chatbro_container label{text-transform:none}.chatbro_add_funds{display:inline;padding:0;color:#0096cf;text-decoration:underline}.chatbro_add_funds:hover{color:#0096cf}.chatbro_alert{margin:0;margin-top:10px;margin-right:10px;padding:0 10px;opacity:.9;display:inline-block;font-size:13px;border:1px solid transparent;border-radius:3px}.chatbro_alert:last-child{margin-right:0}.chatbro_alert.chatbro_alert_danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.chatbro_alert.chatbro_alert_info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.chatbro_clearfix{content:\" \";display:table}.chatbro_chat_wrapper{width:100%;height:inherit;display:block}.chatbro_chat{display:block;-webkit-user-select:auto;-ms-user-select:auto;user-select:auto}.chatbro_chat table{display:table;height:auto;border-collapse:initial !important}.chatbro_chat a{color:#2b6dad;text-decoration:none;cursor:pointer;font-size:inherit;word-wrap:normal;border-bottom:none;display:inline}.chatbro_chat a:hover{border-bottom:0;color:#2b6dad;text-decoration:underline}.chatbro_chat .chatbro_ok:before{content:\"\\41\";vertical-align:bottom;font-family:\"chatbro\",serif !important}.chatbro_header_rotare_to_right{transform:rotate(-90deg);transform-origin:left bottom 0}.chatbro_header_rotare_to_left{transform:rotate(90deg);transform-origin:right bottom 0}.chatbro_header{position:relative;z-index:6;width:100%;height:37px;overflow:hidden}.chatbro_header tbody,.chatbro_header tr,.chatbro_header td{height:inherit}.chatbro_header .hideChatArea{position:absolute;width:100%;background:black;opacity:.5}.chatbro_header table{width:100%;height:100% !important;table-layout:auto !important;border-spacing:0 !important;margin:0}.chatbro_header table td{padding:0 !important;margin:0;display:table-cell;vertical-align:middle !important;border:none !important}.chatbro_header .chatbro_header_caption_td{width:100%}.chatbro_header .chatbro_header_caption_td .chatbro_minimized_caption{display:inline}.chatbro_header .chatbro_header_alarm{position:absolute;width:20px;height:20px;background:white;border:2px solid;border-radius:10px;top:14px;color:#474d5b;left:12px;font-weight:bold;font-size:14px;text-align:center;cursor:pointer;padding:0;margin:0;line-height:17px;display:none}.chatbro_header .chatbro_header_alarm .chatbro_alarm_ico{top:0;padding:0;font-size:12px;font-weight:100}.chatbro_header .chatbro_header_button{width:35px;height:100%;padding:0;margin:0;font-size:14px;background:none;transition:.1s ease-out}.chatbro_header .chatbro_header_button span{display:none}.chatbro_header .chatbro_caption{-webkit-user-select:none;-ms-user-select:none;user-select:none}.chatbro_header .chatbro_chat_name{padding:3px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;float:left;font-size:13px;height:100%;line-height:31px}.chatbro_header .chatbro_movable_minimized_last_message{display:block;width:125px;white-space:nowrap;overflow:hidden}.chatbro_header .chatbro_movable_minimized_last_message span{display:inline-block;padding-left:100%;animation:chatbro_scroll_last_msg 5s infinite linear}.chatbro_header .chatbro_title,.chatbro_header .chatbro_movable_minimized_title,.chatbro_header .chatbro_movable_minimized_last_message{font-size:13px;font-weight:bold;padding:0;text-align:left}.chatbro_header .chatbro_title>*,.chatbro_header .chatbro_movable_minimized_title>*,.chatbro_header .chatbro_movable_minimized_last_message>*{display:inline-block}.chatbro_header .chatbro_title,.chatbro_header .chatbro_movable_minimized_title{text-overflow:ellipsis}.chatbro_header .chatbro_movable_minimized_title,.chatbro_header .chatbro_movable_minimized_last_message{display:inline-block;font-size:13px}.chatbro_header .chatbro_participant_wrapper_max{margin-right:9px}.chatbro_header .chatbro_participant_wrapper_max,.chatbro_header .chatbro_participant_wrapper_min,.chatbro_header .chatbro_notifications{float:right;padding:5px 1px;font-size:13px;height:100%;line-height:27px}.chatbro_header .chatbro_notifications{cursor:pointer;padding:3px 0;display:none}.chatbro_header .chatbro_participant_count{display:none;position:relative}.chatbro_header .chatbro_movable_minimized_ico_wrapper{display:inline-block;margin-right:3px !important;height:23px;width:23px;text-align:left}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_0{display:none}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_1,.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_2,.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_3,.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_4,.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_5,.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_6,.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_7{font-size:20px;top:1px;left:0;position:relative}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_1:before{font-family:\"chatbro\",serif !important;content:\"\\25\"}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_2{top:0}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_2:before{font-family:\"chatbro\",serif !important;content:\"\\23\"}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_3:before{font-family:\"chatbro\",serif !important;content:\"\\26\"}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_4{top:0}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_4:before{font-family:\"chatbro\",serif !important;content:\"\\4a\"}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_5:before{font-family:\"chatbro\",serif !important;content:\"\\21\"}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_6{top:0}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_6:before{font-family:\"chatbro\",serif !important;content:\"\\24\"}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_7{top:0}.chatbro_header .chatbro_movable_minimized_ico_wrapper .chatbro_movable_minimized_icon_7:before{font-family:\"chatbro\",serif !important;content:\"\\27\"}.chatbro_header .chatbro_participant_ico{font-size:9px;top:0;margin-right:3px;position:relative}.chatbro_header .chatbro_participant_ico:before{content:'\\7a';font-family:\"chatbro\",serif !important}.chatbro_header .chatbro_minimized_chat_ico{font-size:20px;margin-left:10px;color:white}.chatbro_header .chatbro_minimized_chat_ico:before{content:'\\56';font-family:\"chatbro\",serif !important}.chatbro_header .chatbro_alarm_ico{font-size:9px}.chatbro_header .chatbro_alarm_ico:before{font-family:\"chatbro\",serif !important;content:'\\6c'}.chatbro_header .chatbro_bell_ico{font-size:12px;top:2px;position:relative;margin-right:7px;cursor:pointer}.chatbro_header .chatbro_bell_ico:before{font-family:\"chatbro\",serif !important;content:'\\31'}.chatbro_header .chatbro_minimized_invite_button,.chatbro_header .chatbro_maximized_invite_button{float:left}.chatbro_header .chatbro_minimized_invite_button:before,.chatbro_header .chatbro_maximized_invite_button:before{font-family:\"chatbro\",serif !important;content:\"\\79\"}.chatbro_header .chatbro_minimize_button{float:right}.chatbro_header .chatbro_minimize_button:before{font-family:\"chatbro\",serif !important;content:\"\\34\";display:inline;font-weight:normal;font-size:14px;position:relative;top:1px}.chatbro_header .chatbro_header_minimized_movable{margin:0 10px;display:inline-block;font-weight:bold}.chatbro_header .chatbro_header_minimized_movable div{margin-right:5px}.chatbro_header .chatbro_header_minimized_movable div:last-child{margin-right:0 !important}.chatbro_header .chatbro_header_minimized_movable .chatbro_participant_count{font-size:13px;margin-left:0}.chatbro_header .chatbro_header_minimized_movable *{vertical-align:middle;line-height:normal !important}.chatbro_header .chatbro_header_minimized_movable .new_messages_count{font-size:13px}.chatbro_header .chatbro_header_minimized_movable .chatbro_participant_ico,.chatbro_header .chatbro_header_minimized_movable .new_messages_count_wrapper,.chatbro_header .chatbro_alarm_ico{font-size:10px}.chatbro_header .chatbro_alarm_ico{cursor:pointer;position:relative;top:2px;padding:3px 0;font-size:12px;font-weight:100}.chatbro_header .chatbro_participant_ico,.chatbro_header .new_messages_ico,.chatbro_header .new_messages_count_wrapper,.chatbro_header .new_messages_count_wrapper_max,.chatbro_header .chatbro_alarm_ico,.chatbro_header .chatbro_bell_ico,.chatbro_header .chatbro_minimized_chat_ico{font-family:\"chatbro\",serif !important}.chatbro_minimized_header{z-index:1;transition:background 1s;transition:opacity 1s ease-in-out}.chatbro_movable_chat .chatbro_minimized_header{min-width:47px;max-width:300px;text-align:center;border-top-left-radius:3px;border-top-right-radius:3px}.chatbro_movable_chat .chatbro_minimized_header table,.chatbro_movable_chat .chatbro_minimized_header td{text-align:center}.chatbro_movable_chat .chatbro_minimized_header div:before{content:none !important}.chatbro_body{border:2px solid;border-top:none !important;position:relative;overflow:hidden}.chatbro_body .chatbro_system_messages{transition:padding-top 1s}.chatbro_body .chatbro_system_messages_block{position:absolute;z-index:5;top:0;background-clip:padding-box;border:none;font-size:12px;width:100%;display:none}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_close{position:absolute;right:13px;top:9px;cursor:pointer;opacity:.8}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_close:before{content:\"\\34\";display:inline;font-weight:normal;font-size:15px;position:relative;top:-2px;right:-5px;font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_messages_wrapper{overflow-y:auto;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0);overflow-y:overlay;line-height:18.3429px;padding:0}.chatbro_body .chatbro_system_messages_block .chatbro_system_messages_wrapper::-webkit-scrollbar{width:4px;height:8px}.chatbro_body .chatbro_system_messages_block .chatbro_system_messages_wrapper::-webkit-scrollbar *{background:transparent}.chatbro_body .chatbro_system_messages_block .chatbro_system_messages_wrapper::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_fade{height:100%;width:0;position:absolute;background:rgba(0,0,0,0.56);top:0;left:0;opacity:.1}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_info{border-color:#5895e0 !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_warning{border-color:#e0dc58 !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_error{border-color:#e05867 !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_success{border-color:#6de058 !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_common{border-color:#bfc1c6 !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_wrapped{padding:7px 0 8px 0;border-radius:0;box-shadow:0 0 1px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_wrapped:last-of-type{margin-bottom:0}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_wrapped .chatbro_system_message{padding:0 12px;color:inherit;white-space:pre-wrap;word-wrap:break-word;word-break:break-all;word-break:break-word;font-weight:normal}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_wrapped .chatbro_system_message .chatbro_message_text{padding-right:13px}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_info_icon,.chatbro_body .chatbro_system_messages_block .chatbro_system_message_warning_icon,.chatbro_body .chatbro_system_messages_block .chatbro_system_message_error_icon,.chatbro_body .chatbro_system_messages_block .chatbro_system_message_success_icon,.chatbro_body .chatbro_system_messages_block .chatbro_system_message_common_icon{font-size:15px;position:relative;top:3px;left:-3px;padding-right:5px;font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_warning_icon:before{content:\"\\6c\";font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_error_icon:before{content:\"\\70\";font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_success_icon:before{content:\"\\41\";font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_system_messages_block .chatbro_system_message_info_icon:before,.chatbro_body .chatbro_system_messages_block .chatbro_system_message_common_icon:before{content:\"\\43\";font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block{position:absolute;font-size:13px;width:100%;top:0;left:0;z-index:5;overflow:auto;visibility:hidden;opacity:0;transition:visibility .3s,opacity .3s linear;overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_body .chatbro_modal_block::-webkit-scrollbar{width:4px;height:8px}.chatbro_body .chatbro_modal_block::-webkit-scrollbar *{background:transparent}.chatbro_body .chatbro_modal_block::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_body .chatbro_modal_block button{font-family:Tahoma,Helvetica,sans-serif !important}.chatbro_body .chatbro_modal_block .chatbro_fade_side_block,.chatbro_body .chatbro_modal_block .chatbro_fade_block{width:100%;height:100%;position:absolute;top:0;left:0;cursor:pointer}.chatbro_body .chatbro_modal_block .chatbro_fade_block{opacity:1;background-color:rgba(0,0,0,0.55);-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px)}.chatbro_body .chatbro_modal_block .chatbro_fade_block .chatbro_login_progress_radial{display:block;position:relative;top:40%;margin:0 auto;text-indent:-9999em;border:3px solid rgba(120,120,120,0.35);border-left-color:#ffffff;border-right-color:#ffffff;transform:translateZ(0);animation:chatbro_loader_radial 1.1s infinite linear}.chatbro_body .chatbro_modal_block .chatbro_fade_block .chatbro_login_progress_radial,.chatbro_body .chatbro_modal_block .chatbro_fade_block .chatbro_login_progress_radial:after{border-radius:50%;width:45px;height:45px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper{position:relative;transition:all .1s ease-in-out 0s}.chatbro_body .chatbro_modal_block .chatbro_modal{position:relative;width:85%;min-width:200px;padding:20px;box-shadow:0 0 1px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border:none;margin:0 auto;border-radius:4px}.chatbro_body .chatbro_modal_block .chatbro_modal *{text-align:left;line-height:normal}.chatbro_body .chatbro_modal_block .chatbro_modal .chatbro_modal_button{cursor:pointer;outline:none;box-shadow:none;background-size:auto !important;text-align:right;font-size:12px;font-weight:bold !important;border-radius:3px !important;padding:4px 8px !important;opacity:.7;position:absolute;right:20px;bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal .chatbro_modal_button:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal .chatbro_modal_head{font-size:13px;font-weight:bold;color:#3F4549;margin-bottom:12px}.chatbro_body .chatbro_modal_block .chatbro_modal span.chatbro_modal_close{font-family:\"chatbro\",serif !important;float:right;cursor:pointer}.chatbro_body .chatbro_modal_block .chatbro_modal span.chatbro_modal_close:before{content:\"\\63\";display:inline;font-weight:normal;top:-1px;font-size:15px;position:relative;font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron{max-width:300px;position:relative;width:85%;min-width:200px;padding:20px;box-shadow:0 0 1px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border:none;margin:0 auto;border-radius:4px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron *{text-align:left;line-height:normal}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_modal_button{cursor:pointer;outline:none;box-shadow:none;background-size:auto !important;text-align:right;font-size:12px;font-weight:bold !important;border-radius:3px !important;padding:4px 8px !important;opacity:.7;position:absolute;right:20px;bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_modal_button:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_modal_head{font-size:13px;font-weight:bold;color:#3F4549;margin-bottom:12px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron span.chatbro_modal_close{font-family:\"chatbro\",serif !important;float:right;cursor:pointer}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron span.chatbro_modal_close:before{content:\"\\63\";display:inline;font-weight:normal;top:-1px;font-size:15px;position:relative;font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_modal_patron_title{font-size:16px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_modal_menu_plan_alarms{margin:0;padding:5px 0 10px 18px;position:relative}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_modal_menu_plan_alarms li{padding:0;margin:0;font-size:13px;opacity:.7}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_patron_block{padding:0 !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_patron .chatbro_patron_block *{line-height:19.8714px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu{max-width:220px;position:relative;width:85%;min-width:200px;padding:20px;box-shadow:0 0 1px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border:none;margin:0 auto;border-radius:4px;padding:0}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu *{text-align:left;line-height:normal}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_button{cursor:pointer;outline:none;box-shadow:none;background-size:auto !important;text-align:right;font-size:12px;font-weight:bold !important;border-radius:3px !important;padding:4px 8px !important;opacity:.7;position:absolute;right:20px;bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_button:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_head{font-size:13px;font-weight:bold;color:#3F4549;margin-bottom:12px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu span.chatbro_modal_close{font-family:\"chatbro\",serif !important;float:right;cursor:pointer}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu span.chatbro_modal_close:before{content:\"\\63\";display:inline;font-weight:normal;top:-1px;font-size:15px;position:relative;font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_head{padding:10px 10px;text-align:center;margin-bottom:0}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_set_moder,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_moder,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_giveprem,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_messages_from_user{cursor:pointer;font-size:13px;padding:10px 10px;border-top:1px solid #e5e5e5;margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_set_moder:hover,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_moder:hover,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_giveprem:hover,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_messages_from_user:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_set_moder_ico:before,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_moder_ico:before,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_giveprem_ico:before,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_messages_from_user_ico:before{font-family:\"chatbro\",serif !important;font-size:16px;top:0;position:relative;opacity:.8;padding:0 10px 0 5px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_messages_from_user_ico:before{content:'\\2b';font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_set_moder_ico:before{content:'\\58';font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_delete_moder_ico:before{content:'\\58';font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_menu .chatbro_modal_menu_body .chatbro_modal_menu_giveprem_ico:before{content:'\\58';font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban{max-width:300px;height:257px;position:relative;width:85%;min-width:200px;padding:20px;box-shadow:0 0 1px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border:none;margin:0 auto;border-radius:4px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban *{text-align:left;line-height:normal}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_button{cursor:pointer;outline:none;box-shadow:none;background-size:auto !important;text-align:right;font-size:12px;font-weight:bold !important;border-radius:3px !important;padding:4px 8px !important;opacity:.7;position:absolute;right:20px;bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_button:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_head{font-size:13px;font-weight:bold;color:#3F4549;margin-bottom:12px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban span.chatbro_modal_close{font-family:\"chatbro\",serif !important;float:right;cursor:pointer}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban span.chatbro_modal_close:before{content:\"\\63\";display:inline;font-weight:normal;top:-1px;font-size:15px;position:relative;font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_reason{width:100% !important;resize:none;font-size:13px;margin:0 !important;display:block;-webkit-appearance:none;-moz-appearance:none;height:30px;border-bottom:1px solid;transition:border .3s;padding:0 !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info_delete_messages{vertical-align:5px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info_shadow{cursor:help;border-bottom:1px dotted;vertical-align:5px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_is_shadow,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_delete_all_messages_form_user{margin-left:10px;opacity:1 !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info_duration{font-size:14px;vertical-align:super;opacity:.9;margin-left:10px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info{font-size:13px;margin-bottom:12px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info:last-of-type{margin-bottom:0}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info input{width:auto}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info .chatbro_ban_by_ip,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info .chatbro_ban_by_user_id{display:inline-block}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info .chatbro_ban_by_ip *,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info .chatbro_ban_by_user_id *{cursor:pointer}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info .chatbro_ban_by_ip label,.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info .chatbro_ban_by_user_id label{margin-right:7px;margin-bottom:0;vertical-align:2px;font-weight:normal}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_info .chatbro_ban_by_ip{margin-right:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_input_block *{display:inline-block}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_input_block input.chatbro_modal_ban_input{width:60%;margin-bottom:12px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_btn{cursor:pointer;outline:none;box-shadow:none;background-size:auto !important;text-align:right;font-size:12px;font-weight:bold !important;border-radius:3px !important;padding:4px 8px !important;opacity:.7;position:absolute;right:20px;bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_ban .chatbro_modal_ban_btn:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login{max-width:300px;position:relative;width:85%;min-width:200px;padding:20px;box-shadow:0 0 1px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border:none;margin:0 auto;border-radius:4px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login *{text-align:left;line-height:normal}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_button{cursor:pointer;outline:none;box-shadow:none;background-size:auto !important;text-align:right;font-size:12px;font-weight:bold !important;border-radius:3px !important;padding:4px 8px !important;opacity:.7;position:absolute;right:20px;bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_button:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_head{font-size:13px;font-weight:bold;color:#3F4549;margin-bottom:12px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login span.chatbro_modal_close{font-family:\"chatbro\",serif !important;float:right;cursor:pointer}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login span.chatbro_modal_close:before{content:\"\\63\";display:inline;font-weight:normal;top:-1px;font-size:15px;position:relative;font-family:\"chatbro\",serif !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_or{height:23px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_or .chatbro_modal_login_or_hr{border-color:#565B5F}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_or .chatbro_modal_login_or_span{text-align:center;position:relative;top:-32px;background:#FFF;width:32px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_site{vertical-align:middle;margin-bottom:20px;cursor:pointer;border-radius:3px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_site:hover{background:#efefef}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_site img.chatbro_modal_login_site_avatar{height:33px;margin-right:10px;vertical-align:middle;border-radius:3px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_social{margin-bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_social a+a{margin-left:10px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_social img{height:32px;display:inline;border-radius:3px;box-shadow:none;background:#fff}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_custom_login_link{font-size:13px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_termsofuse{font-size:12px;margin-top:15px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block .chatbro_modal_login_input_wrapper{padding-right:50px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block .chatbro_modal_login_input_wrapper .chatbro_modal_login_input_div{border-bottom:1px solid}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block .chatbro_modal_login_input_wrapper .chatbro_modal_login_input_div input[type=\"text\"]{margin:0 !important;display:block;appearance:none;box-shadow:none;height:30px;width:100%;border:none;transition:border .3s;padding:0 !important}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block .chatbro_modal_login_input_wrapper .chatbro_modal_login_input_div input[type=\"text\"]::-webkit-input-placeholder{color:inherit}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block .chatbro_modal_login_input_wrapper .chatbro_modal_login_input_div input[type=\"text\"]::-moz-placeholder{color:inherit}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block .chatbro_modal_login_input_wrapper .chatbro_modal_login_input_div input[type=\"text\"]:-moz-placeholder{color:inherit}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block .chatbro_modal_login_input_wrapper .chatbro_modal_login_input_div input[type=\"text\"]:-ms-input-placeholder{color:inherit}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block button.chatbro_modal_login_btn{cursor:pointer;outline:none;box-shadow:none;background-size:auto !important;text-align:right;font-size:12px;font-weight:bold !important;border-radius:3px !important;padding:4px 8px !important;opacity:.7;position:absolute;right:20px;bottom:20px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block button.chatbro_modal_login_btn:hover{opacity:.8}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_input_block button.chatbro_modal_login_btn span{padding:0}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_model_login_label{margin-bottom:5px}.chatbro_body .chatbro_modal_block .chatbro_modal_wrapper_login .chatbro_modal_login .chatbro_modal_login_bot{font-size:12px;margin-top:7px;display:none}.chatbro_body .chatbro_messages_noconnection_wrapper{display:block;position:relative;top:18%;margin:0 auto;max-width:250px;padding:10px;border-radius:3px;background:#ececec}.chatbro_body .chatbro_messages_noconnection_wrapper .chatbro_messages_noconnection_img{height:50px;display:block;width:50px;float:left}.chatbro_body .chatbro_messages_noconnection_wrapper .chatbro_messages_noconnection_text{display:block;padding-left:0;margin-left:70px;font-size:13px}.chatbro_body .chatbro_messages_plug,.chatbro_body .chatbro_messages_noconnection{background-color:transparent;position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:10}.chatbro_body .chatbro_messages_preload{width:100%;position:absolute !important;top:0;height:auto;left:0;z-index:1;visibility:hidden;background:transparent !important;overflow:hidden !important}@keyframes placeholderAnimate{0%{background-position:-650px 0}100%{background-position:650px 0}}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages{display:block !important;width:100% !important}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message{height:56px}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message td{padding:10px 2px 8px !important}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_name,.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_text,.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_admin,.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_guest_avatar,.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_date{animation-duration:2s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:placeholderAnimate;background:#f6f7f8;background:linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);background-size:1300px !important;color:#e6e6e6;border-radius:3px;opacity:1;line-height:15px}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_date{line-height:10px;width:55px;height:10px}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_guest_avatar{margin-top:0}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_name{width:80px;height:16px}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_wrapped{line-height:1px}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_auth_name{line-height:normal}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_user_type{border:none;color:transparent}.chatbro_body .chatbro_messages_preload .chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_text{display:inline-block;margin-top:5px;width:150px;height:15px}.chatbro_body .chatbro_messages_load_progress_radial{display:block;position:relative;top:40%;margin:0 auto;text-indent:-9999em;border:3px solid rgba(120,120,120,0.2);border-left-color:#6594C6;transform:translateZ(0);animation:chatbro_loader_radial 1.1s infinite linear}.chatbro_body .chatbro_messages_load_progress_radial,.chatbro_body .chatbro_messages_load_progress_radial:after{border-radius:50%;width:45px;height:45px}.chatbro_body .chatbro_messages_load_progress{background-color:transparent;width:100%;height:100%;position:absolute;visibility:hidden;top:0;left:0;z-index:1}.chatbro_body .chatbro_messages_wrapper,.chatbro_body .chatbro_messages_preload{position:relative;overflow-x:hidden;background:#e8e8e8;transform:translate3d(0, 0, 0);overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_body .chatbro_messages_wrapper::-webkit-scrollbar,.chatbro_body .chatbro_messages_preload::-webkit-scrollbar{width:4px;height:8px}.chatbro_body .chatbro_messages_wrapper::-webkit-scrollbar *,.chatbro_body .chatbro_messages_preload::-webkit-scrollbar *{background:transparent}.chatbro_body .chatbro_messages_wrapper::-webkit-scrollbar-thumb,.chatbro_body .chatbro_messages_preload::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_body .chatbro_messages_wrapper .chatbro_messages_space,.chatbro_body .chatbro_messages_preload .chatbro_messages_space{background-color:#ffffff}.chatbro_body .chatbro_messages_wrapper .chatbro_message_replies .chatbro_message_attachment_reply,.chatbro_body .chatbro_messages_preload .chatbro_message_replies .chatbro_message_attachment_reply{border-left:3px solid;margin:0 7px 6px 0;opacity:1;border-radius:3px;padding:2px 10px 5px 10px;display:inline-block;cursor:pointer}.chatbro_body .chatbro_messages_wrapper .chatbro_message_replies .chatbro_message_attachment_reply .chatbro_message_replied_text,.chatbro_body .chatbro_messages_preload .chatbro_message_replies .chatbro_message_attachment_reply .chatbro_message_replied_text{min-width:187px}.chatbro_body .chatbro_messages_wrapper .chatbro_message_replies .chatbro_message_attachment_reply:hover,.chatbro_body .chatbro_messages_preload .chatbro_message_replies .chatbro_message_attachment_reply:hover{opacity:1}.chatbro_body .chatbro_messages_wrapper .chatbro_message_replies .chatbro_message_attachment_reply_cutted .chatbro_message_replied_text,.chatbro_body .chatbro_messages_preload .chatbro_message_replies .chatbro_message_attachment_reply_cutted .chatbro_message_replied_text{height:auto;max-width:187px;min-width:187px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chatbro_body .chatbro_messages_wrapper .chatbro_messages_block,.chatbro_body .chatbro_messages_preload .chatbro_messages_block{display:table-cell;vertical-align:bottom;position:relative;z-index:2;background-color:#ffffff}.chatbro_message_avatar_block a,.chatbro_fake_message_avatar_block a{text-decoration:none !important}.chatbro_guest_avatar,.chatbro_fake_guest_avatar{width:32px;height:32px;margin:4px 2px 0 7px;display:block;border-radius:3px;color:#fff;font-weight:bold;font-size:13px;line-height:32px;text-transform:uppercase;text-align:center;background:#D65C5C}.chatbro_guest_avatar:before,.chatbro_fake_guest_avatar:before{content:attr(data-name);text-shadow:0 1px 4px #848484}.chatbro_guest_bg_1{background:#cc90e2 !important}.chatbro_guest_bg_2{background:#80d066 !important}.chatbro_guest_bg_3{background:#ecd074 !important}.chatbro_guest_bg_4{background:#6fb1e4 !important}.chatbro_guest_bg_5{background:#e57979 !important}.chatbro_guest_bg_6{background:#f98bae !important}.chatbro_guest_bg_7{background:#73cdd0 !important}.chatbro_guest_bg_8{background:#fba76f !important}.chatbro_guest_bg_9{background:#953b39 !important}.chatbro_message_name_color_0{color:#b72e2e !important}.chatbro_message_name_color_1{color:#b053d2 !important}.chatbro_message_name_color_2{color:#55b337 !important}.chatbro_message_name_color_3{color:#e3b931 !important}.chatbro_message_name_color_4{color:#2f8ed8 !important}.chatbro_message_name_color_5{color:#d93939 !important}.chatbro_message_name_color_6{color:#f5427b !important}.chatbro_message_name_color_7{color:#3eb5b9 !important}.chatbro_message_name_color_8{color:#f97a25 !important}.chatbro_message_name_color_9{color:#5e2524 !important}.chatbro_messages,.chatbro_fake_messages{overflow:hidden;width:inherit !important;height:auto;margin:0;line-height:18.3429px;border-spacing:0 !important}.chatbro_messages tr:nth-child(3) .chatbro_message_actions,.chatbro_fake_messages tr:nth-child(3) .chatbro_message_actions{top:-6px}.chatbro_messages .chatbro_messages_history_plug,.chatbro_fake_messages .chatbro_messages_history_plug{font-size:13px;max-width:331px;width:85%;min-width:200px;margin:10px auto;border:1px solid #f2f2f2;padding:15px;border-radius:5px;position:relative;overflow:auto;overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_messages .chatbro_messages_history_plug::-webkit-scrollbar,.chatbro_fake_messages .chatbro_messages_history_plug::-webkit-scrollbar{width:4px;height:4px}.chatbro_messages .chatbro_messages_history_plug::-webkit-scrollbar *,.chatbro_fake_messages .chatbro_messages_history_plug::-webkit-scrollbar *{background:transparent}.chatbro_messages .chatbro_messages_history_plug::-webkit-scrollbar-thumb,.chatbro_fake_messages .chatbro_messages_history_plug::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_messages .chatbro_messages_history_plug *,.chatbro_fake_messages .chatbro_messages_history_plug *{line-height:19.8714px}.chatbro_messages .chatbro_messages_history_plug .chatbro_patron_block,.chatbro_fake_messages .chatbro_messages_history_plug .chatbro_patron_block{padding:10px 0 0 0}.chatbro_messages .chatbro_messages_history_plug .chatbro_patron_block_wr,.chatbro_fake_messages .chatbro_messages_history_plug .chatbro_patron_block_wr{padding:0 !important}.chatbro_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_header,.chatbro_fake_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_header{font-weight:600;margin-bottom:10px;font-size:16px}.chatbro_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc,.chatbro_fake_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc{font-size:13px}.chatbro_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc a,.chatbro_fake_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc a{text-decoration:underline}.chatbro_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc .chatbro_messages_history_plug_body_alarms,.chatbro_fake_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc .chatbro_messages_history_plug_body_alarms{margin:0 !important;padding:5px 0 10px 18px !important;position:relative}.chatbro_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc .chatbro_messages_history_plug_body_alarms li,.chatbro_fake_messages .chatbro_messages_history_plug .chatbro_messages_history_plug_body .chatbro_messages_history_plug_desc .chatbro_messages_history_plug_body_alarms li{padding:0 !important;margin:0 !important;font-size:13px;opacity:.7}.chatbro_messages tbody,.chatbro_fake_messages tbody{display:block;overflow:hidden;width:100%}.chatbro_messages .unchecked_message,.chatbro_fake_messages .unchecked_message{display:none}.chatbro_messages .chatbro_message,.chatbro_fake_messages .chatbro_message,.chatbro_messages .chatbro_fake_message,.chatbro_fake_messages .chatbro_fake_message{font-size:13px;padding:0;margin:0;text-decoration:none;text-shadow:none;background:none}.chatbro_messages .chatbro_message .chatbro_message_wrapped,.chatbro_fake_messages .chatbro_message .chatbro_message_wrapped,.chatbro_messages .chatbro_fake_message .chatbro_message_wrapped,.chatbro_fake_messages .chatbro_fake_message .chatbro_message_wrapped,.chatbro_messages .chatbro_message .chatbro_fake_message_wrapped,.chatbro_fake_messages .chatbro_message .chatbro_fake_message_wrapped,.chatbro_messages .chatbro_fake_message .chatbro_fake_message_wrapped,.chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_wrapped{padding:0 7px;position:relative}.chatbro_messages .chatbro_message .chatbro_message_block,.chatbro_fake_messages .chatbro_message .chatbro_message_block,.chatbro_messages .chatbro_fake_message .chatbro_message_block,.chatbro_fake_messages .chatbro_fake_message .chatbro_message_block{line-height:18px}.chatbro_messages .chatbro_message td,.chatbro_fake_messages .chatbro_message td,.chatbro_messages .chatbro_fake_message td,.chatbro_fake_messages .chatbro_fake_message td{padding:5px 2px 6px !important;vertical-align:top;border-top:1px solid transparent;border-left:none;border-right:none;border-bottom:none}.chatbro_messages .chatbro_message .chatbro_message_empty_block,.chatbro_fake_messages .chatbro_message .chatbro_message_empty_block,.chatbro_messages .chatbro_fake_message .chatbro_message_empty_block,.chatbro_fake_messages .chatbro_fake_message .chatbro_message_empty_block,.chatbro_messages .chatbro_message .chatbro_fake_message_empty_block,.chatbro_fake_messages .chatbro_message .chatbro_fake_message_empty_block,.chatbro_messages .chatbro_fake_message .chatbro_fake_message_empty_block,.chatbro_fake_messages .chatbro_fake_message .chatbro_fake_message_empty_block{width:4px}.chatbro_messages .chatbro_message .chatbro_message_image_block,.chatbro_fake_messages .chatbro_message .chatbro_message_image_block,.chatbro_messages .chatbro_fake_message .chatbro_message_image_block,.chatbro_fake_messages .chatbro_fake_message .chatbro_message_image_block{width:53px}.chatbro_messages .chatbro_message .chatbro_message_image,.chatbro_fake_messages .chatbro_message .chatbro_message_image,.chatbro_messages .chatbro_fake_message .chatbro_message_image,.chatbro_fake_messages .chatbro_fake_message .chatbro_message_image{width:32px;height:32px;margin:6px 2px 0 7px;max-width:none;border-radius:3px;max-width:none !important}.chatbro_messages .chatbro_message .chatbro_message_date_block,.chatbro_fake_messages .chatbro_message .chatbro_message_date_block,.chatbro_messages .chatbro_fake_message .chatbro_message_date_block,.chatbro_fake_messages .chatbro_fake_message .chatbro_message_date_block{width:56px;line-height:18.3429px;transition:visibility 0s,opacity .5s linear}.chatbro_messages .chatbro_message_radial td,.chatbro_fake_messages .chatbro_message_radial td{padding-bottom:30px}.chatbro_messages .chatbro_message_radial td .chatbro_messages_load_progress_radial,.chatbro_fake_messages .chatbro_message_radial td .chatbro_messages_load_progress_radial,.chatbro_messages .chatbro_message_radial td .chatbro_messages_load_progress_radial:after,.chatbro_fake_messages .chatbro_message_radial td .chatbro_messages_load_progress_radial:after{border-radius:50%;width:25px;height:25px}.chatbro_messages .chatbro_messages_empty,.chatbro_fake_messages .chatbro_messages_empty,.chatbro_messages .chatbro_messages_error,.chatbro_fake_messages .chatbro_messages_error{font-size:13px;text-align:center;margin-bottom:10px;line-height:35px}.chatbro_messages .chatbro_messages_empty td,.chatbro_fake_messages .chatbro_messages_empty td,.chatbro_messages .chatbro_messages_error td,.chatbro_fake_messages .chatbro_messages_error td{display:block;width:inherit;text-align:center}.chatbro_messages .chatbro_messages_error,.chatbro_fake_messages .chatbro_messages_error{display:none}.chatbro_messages .chatbro_message_td_message,.chatbro_fake_messages .chatbro_message_td_message,.chatbro_messages .chatbro_fake_message_td_message,.chatbro_fake_messages .chatbro_fake_message_td_message,.chatbro_messages .chatbro_messages_upload_td,.chatbro_fake_messages .chatbro_messages_upload_td{width:100%}.chatbro_messages .chatbro_messages_upload,.chatbro_fake_messages .chatbro_messages_upload{width:100%;height:20px;background:url(https://www.chatbro.com/images/upload.gif) no-repeat 50% 50%}.chatbro_messages .chatbro_message_auth_name,.chatbro_fake_messages .chatbro_message_auth_name,.chatbro_messages .chatbro_fake_message_auth_name,.chatbro_fake_messages .chatbro_fake_message_auth_name,.chatbro_messages .chatbro_message_reply_auth_name,.chatbro_fake_messages .chatbro_message_reply_auth_name{text-align:left;font-weight:bold;overflow:hidden;text-overflow:ellipsis;-ms-word-break:break-all;word-break:break-all;font-size:12px;line-height:19px;position:relative;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.chatbro_messages .chatbro_message_auth_name a,.chatbro_fake_messages .chatbro_message_auth_name a,.chatbro_messages .chatbro_fake_message_auth_name a,.chatbro_fake_messages .chatbro_fake_message_auth_name a,.chatbro_messages .chatbro_message_reply_auth_name a,.chatbro_fake_messages .chatbro_message_reply_auth_name a{font-weight:bold;text-decoration:none;line-height:inherit}.chatbro_messages .chatbro_message_user_type,.chatbro_fake_messages .chatbro_message_user_type,.chatbro_messages .chatbro_fake_message_user_type,.chatbro_fake_messages .chatbro_fake_message_user_type,.chatbro_messages .chatbro_dropdown_user_type,.chatbro_fake_messages .chatbro_dropdown_user_type{font-size:10px;margin-left:6px;opacity:.4}.chatbro_messages .chatbro_message_admin,.chatbro_fake_messages .chatbro_message_admin,.chatbro_messages .chatbro_message_spsr,.chatbro_fake_messages .chatbro_message_spsr,.chatbro_messages .chatbro_fake_message_admin,.chatbro_fake_messages .chatbro_fake_message_admin,.chatbro_messages .chatbro_message_moder,.chatbro_fake_messages .chatbro_message_moder{top:1px;position:relative;cursor:help;font-weight:bold;border:1px solid;opacity:1;border-radius:3px;text-transform:uppercase;color:white}.chatbro_messages .chatbro_message_admin,.chatbro_fake_messages .chatbro_message_admin,.chatbro_messages .chatbro_message_moder,.chatbro_fake_messages .chatbro_message_moder{padding:1px 5px 0 2px}.chatbro_messages .chatbro_message_moder,.chatbro_fake_messages .chatbro_message_moder{border-color:#358ad7;background:#358ad7}.chatbro_messages .chatbro_message_admin,.chatbro_fake_messages .chatbro_message_admin{border-color:#d73535;background:#d73535}.chatbro_messages .chatbro_message_admin:after,.chatbro_fake_messages .chatbro_message_admin:after,.chatbro_messages .chatbro_fake_message_admin:after,.chatbro_fake_messages .chatbro_fake_message_admin:after{content:'admin'}.chatbro_messages .chatbro_message_moder:after,.chatbro_fake_messages .chatbro_message_moder:after{content:'moder'}.chatbro_messages .chatbro_message_spsr:after,.chatbro_fake_messages .chatbro_message_spsr:after{content:'patron'}.chatbro_messages .chatbro_message_admin:before,.chatbro_fake_messages .chatbro_message_admin:before,.chatbro_messages .chatbro_message_moder:before,.chatbro_fake_messages .chatbro_message_moder:before{font-family:\"chatbro\",serif !important;position:relative;content:'\\58';font-size:11px;margin-right:2px;top:2px}.chatbro_messages .chatbro_message_spsr,.chatbro_fake_messages .chatbro_message_spsr{cursor:pointer;padding:2px 4px 1px 4px;border:none;color:inherit;opacity:1}.chatbro_messages .chatbro_message_spsr_lvl1,.chatbro_fake_messages .chatbro_message_spsr_lvl1,.chatbro_messages .chatbro_message_spsr_lvl2,.chatbro_fake_messages .chatbro_message_spsr_lvl2,.chatbro_messages .chatbro_message_spsr_lvl3,.chatbro_fake_messages .chatbro_message_spsr_lvl3{opacity:1}.chatbro_messages .chatbro_message_spsr_lvl1,.chatbro_fake_messages .chatbro_message_spsr_lvl1{border-color:#fff1aa;color:#001F28;background:#fff1aa}.chatbro_messages .chatbro_message_spsr_lvl2,.chatbro_fake_messages .chatbro_message_spsr_lvl2{border-color:#e8f1ff;color:#001016;background:#e8f1ff}.chatbro_messages .chatbro_message_spsr_lvl3,.chatbro_fake_messages .chatbro_message_spsr_lvl3{border-color:#ffe8c6;color:#002F3B;background:#ffe8c6}.chatbro_messages .chatbro_message_vk,.chatbro_fake_messages .chatbro_message_vk{top:3px;position:relative;cursor:help;font-size:11px;font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_vk:before,.chatbro_fake_messages .chatbro_message_vk:before{content:'\\54';font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_tg,.chatbro_fake_messages .chatbro_message_tg{top:2px;position:relative;cursor:help;font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_tg:before,.chatbro_fake_messages .chatbro_message_tg:before{content:'\\45';font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_actions,.chatbro_fake_messages .chatbro_message_actions{display:inline-block;line-height:25px;position:absolute;top:-11px;right:6px;visibility:hidden;border-radius:3px;border:1px solid}.chatbro_messages .chatbro_message_actions:first-child,.chatbro_fake_messages .chatbro_message_actions:first-child{top:0}.chatbro_messages .chatbro_message_actions div,.chatbro_fake_messages .chatbro_message_actions div{cursor:pointer;display:inline-block;margin-left:8px;font-size:11px}.chatbro_messages .chatbro_message_actions div:last-child,.chatbro_fake_messages .chatbro_message_actions div:last-child{border-right:none}.chatbro_messages .chatbro_message_actions .chatbro_message_action_reply,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_reply,.chatbro_messages .chatbro_message_actions .chatbro_message_action_delete,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_delete,.chatbro_messages .chatbro_message_actions .chatbro_message_action_menu,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_menu,.chatbro_messages .chatbro_message_actions .chatbro_message_action_ban,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_ban{opacity:.9;border:none;border-right:1px solid;border-color:inherit}.chatbro_messages .chatbro_message_actions .chatbro_message_action_reply:hover,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_reply:hover,.chatbro_messages .chatbro_message_actions .chatbro_message_action_delete:hover,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_delete:hover,.chatbro_messages .chatbro_message_actions .chatbro_message_action_menu:hover,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_menu:hover,.chatbro_messages .chatbro_message_actions .chatbro_message_action_ban:hover,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_ban:hover{opacity:1}.chatbro_messages .chatbro_message_actions .chatbro_message_action_div,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_div{margin:0;vertical-align:top}.chatbro_messages .chatbro_message_actions .chatbro_message_action_div div,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_div div{vertical-align:top}.chatbro_messages .chatbro_message_actions .chatbro_message_action_reply,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_reply{font-family:\"chatbro\",serif !important;font-size:12px;margin-left:0;padding:0 10px;font-weight:100}.chatbro_messages .chatbro_message_actions .chatbro_message_action_reply:before,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_reply:before{content:'\\65';font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_actions .chatbro_message_action_menu,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_menu{font-family:\"chatbro\",serif !important;font-size:20px;margin-left:0;padding:0;font-weight:100;padding:0 2px}.chatbro_messages .chatbro_message_actions .chatbro_message_action_menu:before,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_menu:before{content:'\\30';font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_actions .chatbro_message_action_ban,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_ban{font-family:\"chatbro\",serif !important;font-size:13px;margin-left:0;padding:0 10px;font-weight:100}.chatbro_messages .chatbro_message_actions .chatbro_message_action_ban:before,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_ban:before{content:'\\66';font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_actions .chatbro_message_action_delete,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_delete{font-family:\"chatbro\",serif !important;font-size:13px;margin-left:0;padding:0 10px;font-weight:100}.chatbro_messages .chatbro_message_actions .chatbro_message_action_delete:before,.chatbro_fake_messages .chatbro_message_actions .chatbro_message_action_delete:before{content:'\\34';font-family:\"chatbro\",serif !important}.chatbro_messages .chatbro_message_info,.chatbro_fake_messages .chatbro_message_info,.chatbro_messages .chatbro_fake_message_info,.chatbro_fake_messages .chatbro_fake_message_info{display:inline-block}.chatbro_messages .chatbro_message_name,.chatbro_fake_messages .chatbro_message_name,.chatbro_messages .chatbro_fake_message_name,.chatbro_fake_messages .chatbro_fake_message_name,.chatbro_messages .chatbro_message_reply_name,.chatbro_fake_messages .chatbro_message_reply_name{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:normal;vertical-align:middle;max-width:40%;line-height:inherit}.chatbro_messages .chatbro_message_name a,.chatbro_fake_messages .chatbro_message_name a,.chatbro_messages .chatbro_fake_message_name a,.chatbro_fake_messages .chatbro_fake_message_name a,.chatbro_messages .chatbro_message_reply_name a,.chatbro_fake_messages .chatbro_message_reply_name a{font-size:inherit !important}.chatbro_messages .chatbro_message_reply_name,.chatbro_fake_messages .chatbro_message_reply_name{max-width:70%}.chatbro_messages .chatbro_message_text,.chatbro_fake_messages .chatbro_message_text,.chatbro_messages .chatbro_fake_message_text,.chatbro_fake_messages .chatbro_fake_message_text{text-align:left;font-size:13px;line-height:150%;margin:2px 0 0;white-space:pre-line;word-wrap:break-word;word-break:break-all;word-break:break-word;padding:0;font-weight:400;color:inherit;overflow:hidden}.chatbro_messages .chatbro_message_text .chatbro_message_attachments,.chatbro_fake_messages .chatbro_message_text .chatbro_message_attachments,.chatbro_messages .chatbro_fake_message_text .chatbro_message_attachments,.chatbro_fake_messages .chatbro_fake_message_text .chatbro_message_attachments{white-space:pre-line}.chatbro_messages .chatbro_message_text .chatbro_message_replies .chatbro_message_date,.chatbro_fake_messages .chatbro_message_text .chatbro_message_replies .chatbro_message_date,.chatbro_messages .chatbro_fake_message_text .chatbro_message_replies .chatbro_message_date,.chatbro_fake_messages .chatbro_fake_message_text .chatbro_message_replies .chatbro_message_date{display:inline-block;position:relative}.chatbro_messages .chatbro_message_date,.chatbro_fake_messages .chatbro_message_date,.chatbro_messages .chatbro_fake_message_date,.chatbro_fake_messages .chatbro_fake_message_date{font-size:11px;color:inherit;opacity:.7;margin-left:8px;font-weight:100;position:absolute;top:1px;right:0}.chatbro_messages .chatbro_message_close,.chatbro_fake_messages .chatbro_message_close{cursor:pointer;font-family:\"chatbro\",serif !important;right:-8px !important;position:absolute;top:-1px !important;border-left:1px solid;border-bottom:1px solid;border-color:#ccc;border-bottom-left-radius:4px;width:20px;text-align:center}.chatbro_messages .chatbro_message_close:before,.chatbro_fake_messages .chatbro_message_close:before{content:\"\\63\";display:inline;font-weight:normal;font-size:15px;font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu.chatbro_movable_chat{position:fixed}.chatbro_dropdown_menu.chatbro_unmovable_chat{position:absolute;z-index:15;text-align:left}.chatbro_smiles_menu{position:absolute !important;z-index:5;background-clip:padding-box;visibility:hidden;font-size:13px;padding:10px 0 10px 10px;background:white;-webkit-user-select:none;-ms-user-select:none;user-select:none;border-radius:3px;border:1px solid #ccc}.chatbro_smiles_menu:before{position:absolute;bottom:-6px;right:35px;z-index:-3;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:6px solid #999;color:#404040;content:\"\"}.chatbro_smiles_menu .chatbro_frequently_used_smiles{margin-bottom:10px}.chatbro_smiles_menu .chatbro_frequently_used_smiles_title{font-weight:600;font-size:12px}.chatbro_smiles_menu .chatbro_smiles{position:relative;overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_smiles_menu .chatbro_smiles::-webkit-scrollbar{width:4px;height:4px}.chatbro_smiles_menu .chatbro_smiles::-webkit-scrollbar *{background:transparent}.chatbro_smiles_menu .chatbro_smiles::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_smiles_menu .chatbro_smiles .chatbro_smile_wrapper{display:inline-block;cursor:pointer;padding:5px}.chatbro_smiles_menu .chatbro_smiles .chatbro_smile_wrapper:hover{background-color:#DEDEDE;border-radius:3px}.chatbro_smiles_menu .chatbro_smiles .chatbro_smile_wrapper img{margin:0 !important;padding:0 !important;height:20px;width:20px}.chatbro_dropdown_menu_hack{position:fixed !important;left:-9999px !important;display:inline !important}.chatbro_patron_block{padding:10px 0}.chatbro_patron_block .chatbro_patron_block_top_title_divider{background:#ccc;width:100%;height:1px;position:relative;top:10px;z-index:1}.chatbro_patron_block .chatbro_patron_block_aproxcost{margin-top:20px}.chatbro_patron_block .chatbro_patron_block_top_title{font-weight:bold;text-transform:uppercase;font-size:11px;z-index:2;background:#fafafa;position:relative;padding:0 5px;left:-5px}.chatbro_patron_block .chatbro_patron_block_desc{margin-bottom:5px;font-weight:600}.chatbro_patron_block .chatbro_patron_block_desc_title{margin:0;font-size:inherit;color:inherit;font-weight:600;text-transform:uppercase;font-size:13px}.chatbro_patron_block .chatbro_patron_block_features{display:-ms-flexbox;display:flex;position:relative;padding:0 0 0 15px !important;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch;margin:0 0 10px 0}.chatbro_patron_block .chatbro_patron_block_top_table_wrapper{font-size:12px;position:relative}.chatbro_patron_block .chatbro_patron_block_top_table_wrapper .chatbro_patron_block_top_table{width:100%;margin-top:0;font-size:12px;opacity:1;color:inherit}.chatbro_patron_block .chatbro_patron_block_top_table_wrapper .chatbro_patron_block_top_table td{padding:0 !important;height:18px;line-height:17px}.chatbro_patron_block .chatbro_patron_block_button,.chatbro_patron_block .chatbro_patron_block_button_p{display:inline-block;color:inherit;background:inherit;padding:3px 10px;font-size:13px;border-radius:4px;font-weight:bold;text-decoration:none !important;box-shadow:rgba(0,0,0,0.42) 2px 2px 4px 0;box-sizing:border-box;cursor:pointer;outline:0;text-align:center;transform:translateY(0);transition:opacity 150ms,box-shadow 150ms;-webkit-user-select:none;-ms-touch-action:manipulation;touch-action:manipulation}.chatbro_patron_block .chatbro_patron_block_button:hover,.chatbro_patron_block .chatbro_patron_block_button_p:hover{color:inherit;background:inherit;opacity:.6 !important}.chatbro_patron_block .chatbro_patron_block_button{display:inline-block}.chatbro_patron_block .chatbro_patron_block_button:after{font-family:\"chatbro\",serif !important;top:1px;position:relative;content:'\\5e';font-size:10px;padding:0 0 0 6px}.chatbro_patron_block .chatbro_patron_block_top_button{position:absolute;font-size:11px;opacity:1;top:-20px;right:0;padding:0;padding-left:10px;color:inherit;text-decoration:none;background:#fafafa;z-index:10;line-height:17px}.chatbro_patron_block .chatbro_patron_block_feature{padding:1px 2px;margin:0 3px !important;font-size:12px;opacity:1;display:list-item;border:0;border-radius:4px}.chatbro_patron_block .chatbro_patron_block_feature_history:before,.chatbro_patron_block .chatbro_patron_block_feature_files:before,.chatbro_patron_block .chatbro_patron_block_feature_sync:before{font-family:\"chatbro\",serif !important;position:relative;font-size:17px;display:inline-block;opacity:.5;float:right;margin-right:0 !important;padding:0 15px}.chatbro_patron_block .chatbro_patron_block_feature_mark:before{content:'PATRON';top:0;position:relative;font-weight:bold;opacity:.5;height:10px;border-radius:3px;text-transform:uppercase;color:inherit;padding:1px 5px 1px 5px;font-size:9px;line-height:19px;display:inline;float:right}.chatbro_patron_block .chatbro_patron_block_feature_history:before{content:'\\7e';font-family:\"chatbro\",serif !important}.chatbro_patron_block .chatbro_patron_block_feature_files:before{content:'\\29';font-family:\"chatbro\",serif !important}.chatbro_patron_block .chatbro_patron_block_feature_sync:before{content:'\\75';font-family:\"chatbro\",serif !important}.chatbro_patron_block .chatbro_patron_load_progress{padding:6px 0}.chatbro_patron_block .chatbro_patron_load_progress .chatbro_patron_load_progress_radial{display:block;position:relative;margin:0;text-indent:-9999em;border:2px solid rgba(120,120,120,0.2);transform:translateZ(0);animation:chatbro_loader_radial 1.1s infinite linear}.chatbro_patron_block .chatbro_patron_load_progress .chatbro_patron_load_progress_radial,.chatbro_patron_block .chatbro_patron_load_progress .chatbro_patron_load_progress_radial:after{border-radius:50%;width:20px;height:20px}.chatbro_dropdown_menu{font-size:14px;display:block;visibility:visible;min-width:160px;max-width:286px;list-style:none;background-color:#FFFFFF;background-clip:padding-box;box-shadow:none;text-align:left;z-index:20;top:0;padding:0 10px;border-right:1px solid;border-bottom:1px solid;border-bottom-right-radius:3px;overflow-x:hidden;overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_dropdown_menu::-webkit-scrollbar{width:4px;height:4px}.chatbro_dropdown_menu::-webkit-scrollbar *{background:transparent}.chatbro_dropdown_menu::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_dropdown_menu .chatbro_dropdown_block{background:white;border-bottom:1px solid}.chatbro_dropdown_menu .chatbro_dropdown_block:last-child{border-bottom:none}.chatbro_dropdown_menu *{line-height:19.8714px}.chatbro_dropdown_menu a.chatbro_logout{background:inherit !important;line-height:14px;font-size:12px}.chatbro_dropdown_menu .chatbro_dropdown_header{text-transform:uppercase}.chatbro_dropdown_menu .chatbro_menu_link_ico{top:5px;position:relative;font-family:\"chatbro\",serif !important;margin-right:8px;left:0;font-size:20px;line-height:0}.chatbro_dropdown_menu .chatbro_menu_link_ico:before{content:\"\\57\";font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu div a{font-weight:400;line-height:1.42857143;display:block;clear:both;padding:6px 5px;cursor:pointer;white-space:nowrap;text-decoration:none;color:inherit;overflow:hidden;text-overflow:ellipsis;border-radius:4px;transition:.2s ease-out}.chatbro_dropdown_menu div a:hover{color:inherit}.chatbro_dropdown_menu div a img{display:inline;width:20px;height:20px;margin:0 7px 0 0;vertical-align:sub;top:2px;position:relative}.chatbro_dropdown_menu .chatbro_copyright_link{line-height:1.6}.chatbro_dropdown_menu .chatbro_copyright_link div{line-height:12px}.chatbro_dropdown_menu .chatbro_dropdown_menu_link_new_window:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_link_sign_out:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_link_sign_in:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_ban_list:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_moder_list:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_link_edit:before{font-family:\"chatbro\",serif !important;top:3px;position:relative;font-size:15px;opacity:.8;padding:0 10px 0 0}.chatbro_dropdown_menu .chatbro_dropdown_menu_link_sign_in:before{content:'\\7b';font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_link_new_window:before{content:'\\60';font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_link_sign_out:before{padding:0 5px 0 0;content:'\\7c';font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_link_edit:before{content:'\\38';font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_ban_list:before{content:'\\66';font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_moder_list:before{content:'\\58';font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_load_progress_wrapper{font-size:13px;display:none;border:none}.chatbro_dropdown_menu .chatbro_dropdown_menu_load_progress_wrapper .chatbro_dropdown_load_progress{padding:11px 15px}.chatbro_dropdown_menu .chatbro_dropdown_menu_load_progress_wrapper .chatbro_dropdown_load_progress .chatbro_dropdown_load_progress_radial{display:block;position:relative;margin:0 auto;text-indent:-9999em;border:2px solid rgba(120,120,120,0.2);transform:translateZ(0);animation:chatbro_loader_radial 1.1s infinite linear}.chatbro_dropdown_menu .chatbro_dropdown_menu_load_progress_wrapper .chatbro_dropdown_load_progress .chatbro_dropdown_load_progress_radial,.chatbro_dropdown_menu .chatbro_dropdown_menu_load_progress_wrapper .chatbro_dropdown_load_progress .chatbro_dropdown_load_progress_radial:after{border-radius:50%;width:25px;height:25px}.chatbro_dropdown_menu .chatbro_dropdown_menu_footnote{font-size:11px;font-style:italic;margin-top:0;text-align:right;opacity:.8}.chatbro_dropdown_menu .chatbro_dropdown_menu_footnote a{padding:0 10px;background:inherit !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_admin_stuff_wrapper{display:none}.chatbro_dropdown_menu .chatbro_dropdown_menu_admin_stuff_wrapper .chatbro_dropdown_menu_admin_stuff{padding:5px 0}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper{font-size:13px;display:none}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron{padding:10px 0}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan.chatbro_dropdown_menu_plan_name_basic,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan.chatbro_dropdown_menu_plan_name_basic,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron.chatbro_dropdown_menu_plan_name_basic,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron.chatbro_dropdown_menu_plan_name_basic{color:#666;background-color:rgba(241,241,241,0.7)}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan.chatbro_dropdown_menu_plan_name_premium,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan.chatbro_dropdown_menu_plan_name_premium,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron.chatbro_dropdown_menu_plan_name_premium,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron.chatbro_dropdown_menu_plan_name_premium{color:#3c763d;background-color:rgba(223,240,216,0.7)}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_name,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_name,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_name,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_name{line-height:10px}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_name a,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_name a,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_name a,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_name a{display:inline-block;padding:0}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_costs,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_costs,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_costs,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_costs{padding-top:10px}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_costs_awork,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_costs_awork,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_costs_awork,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_costs_awork{float:right}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_alarms,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_alarms,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_alarms,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_alarms{margin:0 !important;position:relative}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_alarms,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_plan .chatbro_dropdown_menu_plan_alarms,.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_alarms,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_dropdown_menu_patron .chatbro_dropdown_menu_plan_alarms{padding:5px 0 0 15px !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_plan_warning_icon,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_plan_warning_icon{font-size:14px;position:absolute;top:5px;padding-right:0;margin:0;left:-2px;font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_plan_edit_icon,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_plan_edit_icon{font-size:14px;padding-right:0;margin:0;vertical-align:middle;padding-right:5px;opacity:.8;font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_plan_edit_icon:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_plan_edit_icon:before{content:\"\\38\";font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper .chatbro_plan_warning_icon:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper .chatbro_plan_warning_icon:before{content:\"\\6c\";font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper ul,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper ul{float:none !important;list-style-type:disc}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper li.chatbro_plan_alert,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper li.chatbro_plan_alert{padding:0 !important;margin:0 !important;font-size:12px}.chatbro_dropdown_menu .chatbro_dropdown_menu_plan_wrapper li.chatbro_plan_alert.chatbro_plan_alert_danger,.chatbro_dropdown_menu .chatbro_dropdown_menu_patron_wrapper li.chatbro_plan_alert.chatbro_plan_alert_danger{list-style-type:none}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper{padding:5px 0}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user{padding:10px 0}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_admin,.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_patron,.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_moder{top:-2px;position:relative;cursor:help;font-weight:bold;border:1px solid;opacity:1;height:15px;border-radius:3px;text-transform:uppercase;color:inherit;padding:1px 5px 1px 2px;font-size:10px;line-height:8px;margin-right:4px}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_patron{padding:3px 2px 0 2px}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_moder{border-color:#358ad7;background:#358ad7;color:white}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_admin{border-color:#d73535;background:#d73535;color:white}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_patron_lvl1{border-color:#fff1aa;color:#001F28;background:#fff1aa}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_patron_lvl2{border-color:#e8f1ff;color:#001016;background:#e8f1ff}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_patron_lvl3{border-color:#ffe8c6;color:#002F3B;background:#ffe8c6}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_admin:before,.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_moder:before{font-family:\"chatbro\",serif !important;top:2px;position:relative;content:'\\58';font-size:11px;padding:0 3px 0 0}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_moder:after{content:'moder'}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_patron:after{content:'patron'}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_admin:after{content:'admin'}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user .chatbro_dropdown_guest{font-weight:bold;opacity:.8;font-size:11px;display:none}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_avatar_block{display:inline-block;position:relative}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_avatar_block .chatbro_dropdown_menu_user_avatar{height:40px;width:40px;margin:2px 10px 0 0;border-radius:3px;display:inline-block;font-size:14px}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_avatar_block .chatbro_guest_avatar:before{content:attr(data-name);top:12px;text-shadow:0 1px 4px #848484;position:relative}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info{display:inline-block;vertical-align:top;display:-moz-inline-stack}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_dropdown_menu_user_info_gateway{font-family:\"chatbro\",serif !important;top:0;cursor:help;border:1px solid;border-radius:3px;color:inherit;padding:1px 2px;font-size:11px;background:transparent;border-color:inherit;margin-right:4px;opacity:.8}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_guest{top:-5px;position:relative;margin-left:5px}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_fb_ico:before{content:\"\\4d\";font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_tg_ico:before{content:\"\\45\";font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_vk_ico:before{content:\"\\54\";font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_guid_ico{font-family:Tahoma,Helvetica,sans-serif !important;font-size:10px;top:-2px;position:relative}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_guid_ico:before{content:\"CMS\"}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_go_ico:before{content:\"\\4e\";position:relative;top:1px;font-weight:bold;font-family:\"chatbro\",serif !important}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info .chatbro_dropdown_menu_user_info_name{max-width:125px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;font-size:13px}.chatbro_dropdown_menu .chatbro_dropdown_menu_user_wrapper .chatbro_dropdown_menu_user div.chatbro_dropdown_menu_user_info a{padding:0}.chatbro_dropdown_menu .chatbro_dropdown_divider{padding:11px 15px;font-weight:bold}.chatbro_dropdown_menu .chatbro_copyright{font-size:13px;min-width:200px}.chatbro_dropdown_menu .chatbro_copyright a{margin:0 !important;color:inherit;text-align:left;padding:5px 0 6px 0;line-height:12px;opacity:.7;font-size:10px}.chatbro_message_attachment{position:relative;display:block;overflow:hidden;margin:5px 5px 0 0;padding:0;vertical-align:top;word-wrap:break-word;word-break:break-all;word-break:break-word}.chatbro_message_attachment a{float:left}.chatbro_message_attachment a.chatbro_message_attachment_file .chatbro_message_attachment_file_size{opacity:.7;font-size:10px}.chatbro_message_attachment a.chatbro_message_attachment_file .chatbro_message_attachment_file_ico{font-family:\"chatbro\",serif !important;float:left;opacity:.8}.chatbro_message_attachment a.chatbro_message_attachment_file .chatbro_message_attachment_file_ico:before{content:\"\\67\";font-size:17px;margin-right:5px;font-family:\"chatbro\",serif !important}.chatbro_message_video_attachment{position:absolute;top:0;left:0;width:100%;max-width:100%;height:100%;border:0}.chatbro_message_attachment_audio .chatbro_audio_player{display:-ms-flexbox;display:flex;max-width:217px;width:100%;padding:0;height:30px}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_source{display:none}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_play_btn{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:left;justify-content:left;font-size:17px;cursor:pointer;opacity:.8;width:27px;position:absolute;padding:6px 0}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_play_btn_start:before{font-family:\"chatbro\",serif !important;content:\"\\2c\"}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_play_btn_stop:before{font-family:\"chatbro\",serif !important;content:\"\\2d\";font-size:16px}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls_bar{line-height:14px}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls{-ms-flex:3;flex:3;padding:0;padding-left:27px}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_title_wrap{display:-ms-flexbox;display:flex;transition:all 150ms;margin:5px 0;position:relative}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_title_wrap .chatbro_audio_player_controls_title{font-size:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:auto;max-width:160px;transition:all 150ms ease-out;cursor:pointer}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_title_wrap .chatbro_audio_player_controls_title .chatbro_audio_player_controls_title_name{font-weight:500}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar{display:-ms-flexbox;display:flex;margin-top:4px;visibility:hidden}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar progress{width:100%}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar progress[value]{appearance:none;color:#2b6dad;height:3px;cursor:pointer;transition:height 150ms ease-out,visibility 80ms ease-out;box-sizing:border-box;display:block;font-size:12px;font-weight:400;line-height:14px;overflow-wrap:break-word;text-align:left;text-shadow:none;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;vertical-align:baseline;visibility:hidden;white-space:pre-wrap;word-break:break-word;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar progress[value]::-webkit-progress-bar{background-color:#e7e8ec;border-radius:2px !important;color:#2b6dad}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar progress[value]::-webkit-progress-value{background-color:#2b6dad}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']{overflow:hidden;visibility:hidden;width:75px;margin:0;margin-left:10px;height:3px;appearance:none;cursor:pointer;border-radius:2px !important;outline:none;transition:height 80ms ease-out,visibility 80ms ease-out}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']::-moz-range-thumb{width:0;appearance:none;height:0;cursor:ew-resize;box-shadow:-80px 0 0 80px #2b6dad;cursor:pointer}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']::-moz-range-progress{height:5px;background-color:#2b6dad;appearance:none}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']::-moz-range-track{height:3px;appearance:none;color:#13bba4;margin-top:-1px;background-color:#e7e8ec}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']::-ms-fill-lower{background-color:#2b6dad;appearance:none}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']::-ms-fill-upper{background-color:#e7e8ec;appearance:none}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']::-webkit-slider-runnable-track{height:3px;appearance:none;color:#13bba4;margin-top:-1px;background-color:#e7e8ec}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_bar input[type='range']::-webkit-slider-thumb{width:0;appearance:none;height:10px;cursor:ew-resize;box-shadow:-80px 0 0 80px #2b6dad;cursor:pointer}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_time{font-size:10px;text-align:right;opacity:.7;padding-left:0;position:absolute;right:0;top:1px}.chatbro_message_attachment_audio .chatbro_audio_player .chatbro_audio_player_controls .chatbro_audio_player_controls_time .chatbro_audio_player_controls_divider{margin:0 2px;display:none}.chatbro_message_video_attachment_click{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer}.chatbro_message_video_attachment_preview{position:relative;border-radius:3px;max-width:100%;min-height:129px}.chatbro_message_video_attachment_start_play{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;background:white;border-radius:30%;height:40px;width:50px;font-size:25px;color:black;border:1px solid #282828;opacity:.8;cursor:pointer}.chatbro_message_video_attachment_start_play:before{font-family:\"chatbro\",serif !important;content:\"\\2c\";top:10px;position:absolute;left:14px}.chatbro_message_photo_attachment_preview{max-width:100%;max-height:129px;border-radius:3px}.chatbro_participants{padding:5px 8px 5px 12px;border-top:1px solid #D8D8D8;background-color:#FFFFFF;max-height:81px;overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_participants::-webkit-scrollbar{width:4px;height:8px}.chatbro_participants::-webkit-scrollbar *{background:transparent}.chatbro_participants::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_participants a{vertical-align:top}.chatbro_participant{width:29px;height:29px;margin:1px 2px;border-radius:4px;display:inline-block}.chatbro_bottom_border{border-bottom:2px solid}.chatbro_participant_admin{cursor:pointer}.new_messages_count_wrapper{display:inline-block;font-size:9px;margin-right:5px}.new_messages_count_wrapper:before{content:'\\6a';font-size:13px;vertical-align:middle;position:relative;top:1px;font-family:\"chatbro\",serif !important}.new_messages_count_wrapper_max{float:right;padding:3px 7px;font-size:13px;height:100%;display:none;line-height:27px;cursor:pointer}.new_messages_count_wrapper_max .new_messages_ico{margin-right:4px}.new_messages_count_wrapper_max .new_messages_ico:before{content:'\\6a';font-size:15px;vertical-align:middle;position:relative;top:2px;font-family:\"chatbro\",serif !important}.new_messages_count_wrapper_max .new_messages_count{top:-1px;position:relative}.chatbro_participant_count_wrapper{display:inline-block}.new_messages_count{font-size:13px}span.chatbro_chat_name{white-space:nowrap;text-overflow:ellipsis}.chatbro_resizer{height:10px;width:100%;background:transparent;position:absolute;bottom:-10px;left:0}.chatbro_link{font-size:12px;height:18px;line-height:18px}.chatbro_link a{text-decoration:underline;color:inherit;cursor:pointer;float:right;margin-right:19px;opacity:.7}.chatbro_link a:hover{opacity:.9;color:inherit}.chatbro_messages_scroll_to_last{background:#ffffff;border:1px solid #e4e4e4;cursor:pointer;display:none;height:35px;bottom:50px;position:absolute;width:40px;right:13px;content:'';border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.16),0 2px 2px 0 rgba(0,0,0,0.12);font-size:18px;font-weight:normal;padding:7px 10px;line-height:1}.chatbro_messages_scroll_to_last:hover:before{opacity:1}.chatbro_messages_scroll_to_last:before{content:\"\\5e\";opacity:.7;font-family:\"chatbro\",serif !important}.chatbro_chat_info_block{background:white;padding:3px 12px;font-size:12px;border-top:1px solid #e6e6e6;overflow-x:hidden;overflow-y:hidden;white-space:nowrap;-webkit-overflow-scrolling:touch}.chatbro_chat_info_block::-webkit-scrollbar{height:4px}.chatbro_chat_info_block::-webkit-scrollbar *{background:transparent}.chatbro_chat_info_block::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_chat_info_block .chatbro_chat_info_wrapper{display:inline-block;background:#e6e6e6;padding:2px 7px;border-radius:3px;opacity:.9;cursor:pointer}.chatbro_connecting_bottom{display:block;visibility:hidden;opacity:0;position:absolute;height:37px;bottom:0;right:0;border-top:1px solid;width:100%;padding:0 14px 0 7px;line-height:33px;font-size:13px;z-index:12;text-align:center;transition:opacity 200ms;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none}.chatbro_connecting_bottom .chatbro_connecting_bottom_message_connecting_sec,.chatbro_connecting_bottom .chatbro_connecting_bottom_message_connecting,.chatbro_connecting_bottom .chatbro_connecting_bottom_message_noconnection,.chatbro_connecting_bottom .chatbro_connecting_bottom_message_reconnect,.chatbro_connecting_bottom .chatbro_connecting_bottom_button{display:none;height:100%;line-height:18px;margin-left:7px}.chatbro_connecting_bottom .chatbro_connecting_bottom_message_connecting_sec{margin-left:-1px}.chatbro_connecting_bottom .chatbro_connecting_bottom_button{text-decoration:underline;cursor:pointer;color:inherit;text-transform:lowercase}.chatbro_connecting_bottom .chatbro_connecting_bottom_radial{display:none;position:relative;margin-right:5px;top:2px;margin:0 2px 0 5px;text-indent:-9999em;border:1px solid rgba(120,120,120,0.2);border-left-color:#6594C6;transform:translateZ(0);animation:chatbro_loader_radial 1.1s infinite linear}.chatbro_connecting_bottom .chatbro_connecting_bottom_radial,.chatbro_connecting_bottom .chatbro_connecting_bottom_radial:after{border-radius:50%;width:12px;height:12px}.chatbro_send{border-top:none;background-color:#FFFFFF;line-height:22.9286px;position:relative;overflow:hidden}.chatbro_send .chatbro_loader_radial{display:none;position:absolute;top:8px;left:16px;text-indent:-9999em;border:2px solid rgba(120,120,120,0.2);border-left-color:#6594C6;transform:translateZ(0);animation:chatbro_loader_radial 1.1s infinite linear}.chatbro_send .chatbro_loader_radial,.chatbro_send .chatbro_loader_radial:after{border-radius:50%;width:20px;height:20px}@keyframes chatbro_loader_radial{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.chatbro_send .chatbro_send_input_preview{display:none;overflow-x:auto;overflow-y:hidden;height:54px;padding:5px;white-space:nowrap;border-top:1px solid;background-color:#ffffff;text-align:left}.chatbro_send .chatbro_send_input_preview::-webkit-scrollbar{height:4px}.chatbro_send .chatbro_send_input_preview::-webkit-scrollbar *{background:transparent}.chatbro_send .chatbro_send_input_preview::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment{height:100%;position:relative;display:inline-block;margin:0 5px}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment img.chatbro_send_input_preview_attachment_img{height:100%;vertical-align:middle;border-radius:3px}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment .chatbro_send_input_preview_attachment_reply{border-left:3px solid;padding:3px 17px 3px 7px;margin:0 0;vertical-align:middle;display:inline-block;border-radius:3px}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment .chatbro_send_input_preview_attachment_reply .chatbro_send_input_preview_attachment_reply_name{font-weight:bold;max-width:100px;text-overflow:ellipsis;overflow:hidden;display:block;line-height:18px}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment .chatbro_send_input_preview_attachment_reply .chatbro_send_input_preview_attachment_reply_text{text-overflow:ellipsis;max-width:100px;overflow:hidden;line-height:18px}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment div.chatbro_send_input_preview_attachment_close{position:absolute;top:0;right:0;height:14px;width:14px}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment div.chatbro_send_input_preview_attachment_close:before{content:\"\\63\";cursor:pointer;font-weight:normal;font-size:13px;background:#5F5F5F;color:white;position:relative;top:-3px;padding:1px;border-top-right-radius:3px;font-family:\"chatbro\",serif !important}.chatbro_send .chatbro_send_input_preview .chatbro_send_input_preview_attachment div.chatbro_send_input_preview_attachment_progress{text-align:center;background:black;color:white;opacity:.7;font-size:11px;position:absolute;width:100%;font-weight:bold;bottom:0;left:0;white-space:nowrap;overflow:hidden;padding:0 5px;text-overflow:ellipsis;cursor:pointer}.chatbro_send .chatbro_send_input_block{min-height:35px;position:relative;border-top:1px solid}.chatbro_send .chatbro_send_input_block .chatbro_send_input_indicator_wrapped{width:100%;height:0;position:absolute;z-index:4;bottom:0;display:block;transform-origin:top;transition:height 300ms,transform .2s}.chatbro_send .chatbro_send_input_block .chatbro_send_input_indicator_wrapped .chatbro_send_input_indicator{height:100%;width:100%;position:absolute;background:#323030;top:0;left:0;opacity:.3;transition:width 300ms,transform .2s}.chatbro_send .chatbro_send_input_block .chatbro_send_wait{background:url(https://www.chatbro.com/images/chat/chatbro_image_bar.gif) no-repeat left 47% !important;background-size:27px 27px;cursor:default !important}.chatbro_send .chatbro_send_input_block .chatbro_image_question{cursor:help !important}.chatbro_send .chatbro_send_input_block .chatbro_send_button,.chatbro_send .chatbro_send_input_block .chatbro_open_smiles_button{font-family:\"chatbro\",serif !important;position:relative;text-align:center;padding:6px 0;float:right;width:41px;height:35px;cursor:pointer;opacity:.6;border:0;outline:none;box-shadow:none;background-size:auto !important;font-size:20px;transition:.3s ease-out}.chatbro_send .chatbro_send_input_block .chatbro_send_button:hover,.chatbro_send .chatbro_send_input_block .chatbro_open_smiles_button:hover{opacity:.99}.chatbro_send .chatbro_send_input_block .chatbro_open_smiles_button{font-size:22px}.chatbro_send .chatbro_send_input_block .chatbro_open_smiles_button:before{content:\"\\62\";position:relative;top:1px;font-family:\"chatbro\",serif !important}.chatbro_send .chatbro_send_input_block .chatbro_send_button{width:49px}.chatbro_send .chatbro_send_input_block .chatbro_send_button:before{content:\"\\47\";font-family:\"chatbro\",serif !important}.chatbro_send .chatbro_send_input_block label.chatbro_open_upload_button{position:relative;top:-1px;opacity:.6;float:left !important;width:57px !important;height:35px !important;background-size:auto !important;margin:1px 0 0 0 !important;font-size:25px !important;font-weight:normal !important;display:inline-block;cursor:pointer !important;line-height:22.9286px !important;padding:0;transition:.3s ease-out}.chatbro_send .chatbro_send_input_block label.chatbro_open_upload_button input.chatbro_file_select_input{display:none !important}.chatbro_send .chatbro_send_input_block label.chatbro_open_upload_button:hover{opacity:.99}.chatbro_send .chatbro_send_input_block label.chatbro_open_upload_button:before{font-family:\"chatbro\",serif !important;content:\"\\29\";display:inline-block;position:relative;width:100%;background:inherit;text-overflow:ellipsis;text-align:center;vertical-align:middle;line-height:32px !important;top:2px;font-size:20px}.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper{padding-right:90px;padding-left:57px;min-height:36px;position:initial}.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper [contentEditable=true]:empty:not(:focus):before,.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper [contentEditable=false]:empty:not(:focus):before{content:attr(data-ph);color:inherit;opacity:.7;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper .chatbro_send_input{font-size:16px;transform-origin:left;transform:scale(.8125) !important;width:122%;margin:0 !important;padding:9px 10px 8px 0 !important;max-height:88px;text-align:left;line-height:19px;min-height:35px;overflow-y:auto;overflow-y:overlay;scrollbar-width:thin;-ms-overflow-style:none;transform:translateZ(0)}.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper .chatbro_send_input::-webkit-scrollbar{width:4px;height:4px}.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper .chatbro_send_input::-webkit-scrollbar *{background:transparent}.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper .chatbro_send_input::-webkit-scrollbar-thumb{background:#AAAAAA !important;border-radius:4px;-webkit-overflow-scrolling:touch}.chatbro_send .chatbro_send_input_block .chatbro_send_input_wrapper .chatbro_send_input:focus{outline:none;box-shadow:none}.chatbro_frame{position:absolute;z-index:5000}.chatbro_frame_left_top{top:-6px;left:-6px;width:6px;height:6px;cursor:nw-resize}.chatbro_frame_top{top:-6px;width:100%;height:10px;cursor:ns-resize}.chatbro_frame_right_top{top:-6px;right:-6px;width:6px;height:6px;cursor:ne-resize}.chatbro_frame_left{left:-6px;width:10px;height:100%;cursor:w-resize}.chatbro_frame_right{right:-10px;width:10px;height:100%;cursor:e-resize}.chatbro_frame_left_bottom{bottom:-6px;left:-6px;width:6px;height:6px;cursor:sw-resize}.chatbro_frame_right_bottom{right:-6px;bottom:-6px;width:6px;height:6px;cursor:se-resize}.chatbro_frame_bottom{bottom:-6px;width:100%;height:10px;cursor:s-resize}.unselectable{-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none}.unscrollable{overflow:hidden}.chatbro_paginator{width:100%;height:33px;border-top:1px solid #D8D8D8;border:none}.chatbro_paginator button{font-size:16px;font-weight:bold;height:22px;padding:0 21px !important;color:#2A2A2A;border:none;border-radius:3px;outline:none;background:#EDEDED;margin:5px 12px}.chatbro_paginator .chatbro_paginator_prev{float:left}.chatbro_paginator .chatbro_paginator_next{float:right}.chatbro_modal_image_wrapper{position:fixed;top:0;left:0;-webkit-user-select:none;-ms-user-select:none;user-select:none;height:100%;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:distribute;padding-top:60px;padding-bottom:60px;z-index:5001;box-sizing:border-box;min-height:340px;overflow:hidden;cursor:pointer;background-color:rgba(0,0,0,0.8);opacity:1}.chatbro_modal_image_wrapper .chatbro_modal_image_image{margin:0 auto;display:block;max-height:100%;border-radius:0;max-width:100%}.chatbro_modal_image_wrapper .chatbro_modal_image_close{display:block;color:white;font-size:30px;position:absolute;top:10px;right:20px;line-height:21px}.chatbro_modal_image_wrapper .chatbro_modal_image_newtab{display:block;margin:0 auto;text-align:center;opacity:.7;line-height:30px}.chatbro_modal_image_wrapper .chatbro_modal_image_newtab a{color:#fff;font-size:14px}";
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
})();
(function (document) {
    new Chatbro(
        ' <div class="chatbro_chat chatbro_movable_chat">  <div class="chatbro_frame_left_top chatbro_frame"></div><div class="chatbro_frame_top chatbro_frame"></div><div class="chatbro_frame_right_top chatbro_frame"></div><div class="chatbro_frame_right chatbro_frame"></div><div class="chatbro_frame_right_bottom chatbro_frame"></div><div class="chatbro_frame_bottom chatbro_frame"></div><div class="chatbro_frame_left_bottom chatbro_frame"></div><div class="chatbro_frame_left chatbro_frame"></div> <div class="chatbro_out_of_chat_top"></div><div class="chatbro_header chatbro_maximized_header"><table class="chatbro_header_table"><tr><td><div class="chatbro_header_alarm"><span class="chatbro_alarm_ico"></span></div><button class="chatbro_header_button chatbro_invite_button chatbro_maximized_invite_button" title="Menu"></button></td><td class="chatbro_header_caption_td"><div class="chatbro_caption chatbro_maximized_caption"><div class="chatbro_title chatbro_maximized_title"><div class="chatbro_chat_name"> Ruang Ngobrol&nbsp; </div>  <div class="chatbro_participant_wrapper_max"><span class="chatbro_participant_ico"></span><span class="chatbro_participant_count"></span></div> <span class="new_messages_count_wrapper_max"><span class="new_messages_ico"></span><span class="new_messages_count"></span></span> <div class="chatbro_notifications"><span class="chatbro_bell_ico"></span></div></div></div></td><td> <button class="chatbro_header_button chatbro_minimize_button" title="Hide"></button></td></tr></table></div> <div class="chatbro_body"><div class="chatbro_in_chat_top"></div><div class="chatbro_system_messages_block"><div class="chatbro_system_messages_wrapper"><div class="chatbro_system_messages"></div></div></div> <div class="chatbro_modal_block"> <div class="chatbro_fade_block"><div class="chatbro_login_progress_radial"></div></div><div class="chatbro_modal_wrapper"><div class="chatbro_fade_side_block"></div> <div class="chatbro_modal chatbro_modal_wrapper_login"><div class="chatbro_modal_login"> <div><span class="chatbro_modal_close chatbro_modal_login_close"></span></div> <div class="chatbro_modal_login_head_site chatbro_modal_head">Sign in as</div> <div class="chatbro_modal_login_site"><img class="chatbro_modal_login_site_avatar"><span class="chatbro_modal_login_site_name"></span></div> <div class="chatbro_modal_login_head_social chatbro_modal_head">Sign in with</div> <div class="chatbro_modal_login_social"><a class="chatbro_vk_login" target="_blank"><img src="//www.chatbro.com/images/chat_vk_logo.png" alt="vk"></a><a class="chatbro_tg_login" target="_blank"><img src="//www.chatbro.com/images/chat_telegram_logo.png" alt="tg"></a><a class="chatbro_fb_login" target="_blank"><img src="//www.chatbro.com/images/chat_facebook_logo.png" alt="fb"></a><a class="chatbro_go_login" target="_blank"><img src="//www.chatbro.com/images/chat_google_logo.png" alt="go"></a></div> <div class="chatbro_modal_login_head_guest_var1 chatbro_modal_head">or as guest with</div><div class="chatbro_modal_login_head_guest_var2 chatbro_modal_head">Sign in as guest with</div> <div class="chatbro_modal_login_input_block"><button class="chatbro_modal_login_btn">GO</button><div><div class="chatbro_modal_login_input_wrapper"><div class="chatbro_modal_login_input_div"><input class="chatbro_modal_login_input" maxlength="30" type="text" placeholder="temporary name"></div></div></div></div> <div class="chatbro_modal_login_bot">Only letters, digits and spaces 30 symbols maximum</div> <div class="chatbro_modal_head chatbro_custom_login" style="margin-bottom: 0; margin-top: 20px;"><a class="chatbro_custom_login_link">Site log in</a></div></div></div> <div class="chatbro_modal chatbro_modal_wrapper_menu"><div class="chat_modal_menu"><div class="chatbro_modal_menu_head chatbro_modal_head"><span class="chatbro_modal_menu_title">Menu</span><span class="chatbro_modal_close chatbro_modal_menu_close"></span></div><div class="chatbro_modal_menu_body"><div class="chatbro_modal_menu_delete_messages_from_user"><div class="chatbro_modal_menu_delete_messages_from_user_ico"></div><span>Delete last 20 messages</span></div><div class="chatbro_modal_menu_set_moder"><div class="chatbro_modal_menu_set_moder_ico"></div><span>Make moderator</span></div> <div class="chatbro_modal_menu_delete_moder"><div class="chatbro_modal_menu_delete_moder_ico"></div><span>Remove from moderators</span></div></div></div></div> <div class="chatbro_modal chatbro_modal_wrapper_ban"><div class="chat_modal_ban"><div class="chatbro_modal_ban_head chatbro_modal_head">Blocking <span class="chatbro_modal_close chatbro_modal_ban_close"></span></div> <div class="chatbro_modal_ban_input_block"> <input class="chatbro_modal_ban_input" type="range" min="0" max="114" step="6" value="18" dimension="min|h|d|w|mon|y|Permanent"><div class="chatbro_modal_ban_info_duration"><span class="chatbro_modal_ban_info_label"></span></div></div><div class="chatbro_modal_ban_info"><span class="chatbro_modal_ban_info_header chatbro_modal_ban_info_delete_messages">Delete messages</span><span class="chatbro_modal_ban_info_label"><input class="chatbro_modal_delete_all_messages_form_user" type="checkbox"></span></div><div class="chatbro_modal_ban_info"><span class="chatbro_modal_ban_info_header chatbro_modal_ban_info_shadow" title="The message of the user is not visible to anyone except himself">Shadow ban</span><span class="chatbro_modal_ban_info_label"><input class="chatbro_modal_ban_is_shadow" type="checkbox"></span></div><div class="chatbro_modal_ban_info"><div class="chatbro_ban_by_ip"><label for="banByIp">By IP</label><input id="banByIp" class="chatbro_ban_by_ip_radio" type="radio" name="banBy" value="ip" checked></div><div class="chatbro_ban_by_user_id"><label for="banByUserId">By user ID</label><input id="banByUserId" class="chatbro_ban_by_user_id_radio" type="radio" name="banBy" value="id"></div></div><div class="chatbro_modal_ban_info"><input class="chatbro_modal_ban_reason" placeholder="State the reason" type="text" name="reason"></div><button class="chatbro_modal_ban_btn">Ban</button></div></div> <div class="chatbro_modal chatbro_modal_wrapper_patron"><div class="chat_modal_patron"> <div class="chatbro_modal_patron_body"></div></div></div></div></div> <div class="chatbro_messages_plug chatbro_fade_in"></div> <div class="chatbro_messages_preload chatbro_fade_in"><table class="chatbro_fake_messages"></table></div> <div class="chatbro_messages_noconnection chatbro_fade_out"><div class="chatbro_messages_noconnection_wrapper"><img class="chatbro_messages_noconnection_img" src="https://www.chatbro.com/images/no_connection.png" alt="No connection"><span class="chatbro_messages_noconnection_text">Unable to establish a connection to the server. Please try again later.</span></div></div> <div class="chatbro_messages_wrapper"><div class="chatbro_messages_space"></div><div class="chatbro_messages_block"><table class="chatbro_messages" reply="Reply" delete="Delete message" ban="Ban user" banMessage="You are banned until" systemMessage="System message" limitFileSize="Maximum 1Gb file size." limitFileCount="Maximum 10 attachments." newMessage="New message" registeredOnly="Only for registered members " incorrectSignature="Incorrect signature" sendFromTg="Sent from Telegram" sendFromVK="Sent from VK" guest="guest" admin="Administrator" moder="Moderator" moderList="Moderators" banList="Bans" list="show all" patronList="List of patrons" topPatrons="Top Patrons" newTabChat="Open chat in new tab" newWindowChat="Open chat in new window" editChat="Edit chat" editParentChat="Edit parent chat" menu="menu" mismatchDomain="You entered an incorrect siteDomain parameter: &quot;{wrongDomain}&quot;\nCorrect parameter: &quot;{correctDomain}&quot;" moreInfo="How to Fix?" needToUpdateCode="Please upgrade chatbro loader code. New code uses CloudFlare and chat will become faster." whereGetCode="Get new code from chat editor or from" fromDocumentation="documentation" clickToShowAlert="Click to show alert" signout="Sign out" hasBeenBanned="has been banned. This message is visible only to you." cantBanUser="Can&#39;t ban user. This message is visible only to you." cantBanAdmin="You can&#39;t block administrator" cantBanOtherModer="You can&#39;t block other moderators" signIn="Sign in" payDescPremium="Help to support this chat and get all time patron features." payDescBasic="Help to support this chat and get all time patron features." featChatUploading="Uploading files" featChatSync="Telegram synchronization" featChatHistory="\u0421hat history" featChatMark="Nickname mark" youAreLoggedAs="You are logged in as" youAreLoggedOut="You are logged out" chatsPatron="Chat&#39;s patron" loginIsNotAllowed_guest="Login as a guest is not allowed." loginIsNotAllowed_vk="Login by VK is not allowed." loginIsNotAllowed_tg="Login by Telegram is not allowed." loginIsNotAllowed_fb="Login by Facebook is not allowed." loginIsNotAllowed_google="Login by Google is not allowed." loginIsNotAllowed_guid="Login by Guid is not allowed." insufficientFunds="Insufficient funds" unobtrusiveAds="Unobtrusive ads" change="change" noPatrons="The chat has no patrons yet. Be the first." trialPeriod="day(s) free trial left" chatPlan="Chat&#39;s plan" pay="pay" payHere="Pay here." basicPlan="Basic plan" tooOftenSending="You are sending messages too often" acostforprem="Approx costs per month for Premium plan: $" aworkTime="Approx work time: " acost="Approx costs per month: $" perMonth="per month" premiumPlan="Premium plan" minutes="minute(s) left" hours="hour(s) left" days="day(s) left" weeks="week(s) left" months="month(s) left" years="year(s) left" supportThisChat="Support this chat" becomeAPatron="Become a Patron" whyBecomeAPatron="Why become a Patron" changePlan="Change plan" addFunds="Add funds" editThisBlock="Edit this block" frequentlyUsed="Frequently Used" approxCosts="Approximate costs per month" disabledChatHistory="Chat history is limited on the free plan" chatHistoryIsBlocked="Chat history is limited" disabledChatHistoryDesc="Become a patron to unlock the story for everyone and get your personal patron features." disabledUploading="File uploads disabled" disabledSyncs="Synchronization with Telegram and VK is disabled" disabledChatHistoryPremDescAdmin="Insufficient funds on the chat balance." disabledChatHistoryBasicDescAdmin="Upgrade to the Premium plan and unlock chat history." disabledSyncsAlertBasic="The message from %s is hidden on a free chat plan." disabledSyncsAlertInsuf="The message from %s is hidden on a free chat plan." disabledSyncsAlertPayBtn="&lt;a target=&quot;_blank&quot; style=&quot;text-decoration: underline;&quot; href=&quot;https://www.chatbro.com/p/%enc%/&quot;&gt;Become a patron&lt;/a&gt; to unlock synchronization and other all time patron features." disabledUploadingAlertBasic="Attachments are not available on the free chat plan." disabledUploadingAlertInsuf="Attachments are not available on the free chat plan." disabledUploadingAlertPayBtn="&lt;a target=&quot;_blank&quot; style=&quot;text-decoration: underline;&quot; href=&quot;https://www.chatbro.com/p/%enc%/&quot;&gt;Become a patron&lt;/a&gt; to unlock file uploads and other all time patron features." onlyYouSeeThisBlock="Only you can see this block" somethingWentWrong="Oops, something went wrong. Try again later." notEnoughBalanceToUpload="In order to upload attachments on the chatbro.com domain, &lt;a target=&quot;_blank&quot; href=&quot;https://www.chatbro.com/p/%enc%/&quot;&gt;top up your balance&lt;/a&gt; with more than 1 usd please. The attachments will be enabled." optionNotAvailableWithoutAdmin="Option is not available. Chat has no admin." noReferralAlert="Seems like the &#39;Referrer-Policy&#39; of your site is &#39;no-referral&#39;. For correct chat&#39;s work it must be equal &#39;no-referrer-when-downgrade&#39; or any other that suits you. More information about &#39;Referral policy&#39; you can find &lt;a target=&quot;_blank&quot; href=&quot;https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy&quot;&gt;here&lt;/a&gt;." badLogin="Failed authorization attempt. Please try clearing cookies for chatbro.com and log in again."><tbody>  <tr class="chatbro_messages_empty"><td>Be the first to leave a message</td></tr> <tr class="chatbro_messages_error"><td>Oops, something went wrong. Try again later.</td></tr></tbody></table></div></div> <div class="chatbro_messages_scroll_to_last"></div> <div class="chatbro_connecting_bottom"><div class="chatbro_connecting_bottom_radial"></div><div class="chatbro_connecting_bottom_message_connecting">Connecting...</div><div class="chatbro_connecting_bottom_message_noconnection">No connection.</div><div class="chatbro_connecting_bottom_message_reconnect">Reconnect in <div class="chatbro_connecting_bottom_message_connecting_sec">sec.</div></div><div class="chatbro_connecting_bottom_button">connect</div></div> <div class="chatbro_smiles_menu"><div class="chatbro_smiles"></div></div>  <div class="chatbro_send"><div class="chatbro_send_input_preview"></div><div class="chatbro_send_input_block"> <div class="chatbro_send_input_indicator_wrapped"><div class="chatbro_send_input_indicator"></div></div> <div class="chatbro_send_button"><div class="chatbro_loader_radial"></div></div> <div class="chatbro_open_smiles_button"></div> <label class="chatbro_open_upload_button"><input class="chatbro_file_select_input" multiple name="chatbroFile" type="file"></label> <div class="chatbro_send_input_wrapper"><div class="chatbro_send_input" contenteditable="true" role="textbox" aria-multiline="true" writeMessage="Write a message" writeName="Enter your name"></div></div></div></div>  <div class="chatbro_in_chat_bottom"></div></div><div class="chatbro_out_of_chat_bottom"></div></div> <div class="chatbro_minimized_chat chatbro_movable_chat"> <div class="chatbro_out_of_chat_minimized"></div><div class="chatbro_header chatbro_minimized_header"><table><tr><td><button class="chatbro_header_button chatbro_invite_button chatbro_minimized_invite_button" title="Menu"></button></td><td class="chatbro_header_caption_td"> <div class="chatbro_caption chatbro_minimized_caption"><div class="chatbro_header_minimized_movable"><div class="new_messages_count_wrapper" style="display: none;"><span class="new_messages_count"></span></div> <div class="chatbro_movable_minimized_ico_wrapper"><span class="chatbro_movable_minimized_icon_1"></span></div>  <div class="chatbro_movable_minimized_title">Ruang Ngobrol&nbsp;</div>  <div class="chatbro_participant_count_wrapper"><span class="chatbro_participant_ico"></span><span class="chatbro_participant_count" data-tippy-disable></span></div></div></div></td></tr></table></div></div> <div class="chatbro_dropdown_menu chatbro_movable_chat"><div class="chatbro_dropdown_block chatbro_dropdown_menu_load_progress_wrapper" style="display: block;"><div class="chatbro_dropdown_load_progress"><div class="chatbro_dropdown_load_progress_radial"></div></div></div> <div class="chatbro_dropdown_block chatbro_dropdown_menu_user_wrapper"><div class="chatbro_dropdown_menu_user"></div></div> <div class="chatbro_dropdown_block chatbro_dropdown_menu_plan_wrapper"><div class="chatbro_dropdown_menu_plan"></div></div> <div class="chatbro_dropdown_block chatbro_dropdown_menu_patron_wrapper"><div class="chatbro_dropdown_menu_patron"></div></div>   <div class="chatbro_dropdown_block chatbro_dropdown_menu_links_wrapper"><div class="chatbro_dropdown_menu_links">   <a class="chatbro_goto_chat chatbro_dropdown_menu_link chatbro_dropdown_menu_attached_chat" href="https://t.me/+evTf8fbTyPxmMTk1" target="_blank"><img src="//www.chatbro.com/images/telegram_logo.png" alt="link">Ruang Ngobrol Kuramanime</a> <a class="chatbro_goto_chat chatbro_dropdown_menu_link" href="https://linktr.ee/kuramanime" target="_blank"> <span class="chatbro_menu_link_ico"></span>Kumpulan Tautan Kuramanime </a></div></div> <div class="chatbro_dropdown_block chatbro_dropdown_menu_admin_stuff_wrapper"><div class="chatbro_dropdown_menu_admin_stuff"></div></div> <div class="chatbro_dropdown_block chatbro_copyright"><a class="chatbro_copyright_link" href="//www.chatbro.com" target="_blank"><div class="chatbro_copyright_link_domain">ChatBro.com \u00A9 2022</div><div class="chatbro_copyright_link_rev">rev 2022-11-19 3:49:56</div></a></div></div>\n',
        {
            chatbroWwwSubdomain: "www.chatbro.com",
            chatId: 1417601,
            messageFontSise: "13px",
            avatarBorderRadius: "3px",
            containerDivId: "chatbro",
            encodedChatId: "18GQQ",
            chatPivot: "1417601",
            allowMoveChat: true,
            allowSendMessages: true,
            allowSendMessagesForAdminOnly: false,
            allowResizeChat: true,
            autoLoginViaSite: true,
            allowUploadMessages: true,
            allowMinimizeChat: true,
            allowUploadFile: true,
            showTitleNotification: false,
            showChatOuterFrame: true,
            showChatMenu: true,
            showParticipantCount: true,
            showUsersAvatars: true,
            messageBoldFontWeight: false,
            hideMessagesOverflow: true,
            showChatBorder: true,
            restoreChatGeometry: true,
            showChatShadow: true,
            showDateOfMessage: true,
            showBorderBetweenMessages: true,
            highlightReplies: true,
            hidePlanNameForUsers: false,
            hidePlanLeftApproxTimeForUsers: false,
            hidePlanDetailForUsers: false,
            hidePlanNameForAdmin: false,
            hidePlanLeftApproxTimeForAdmin: false,
            hidePlanDetailForAdmin: false,
            hidePayForChatLink: false,
            hidePatronsInChatMenu: false,
            simpleReplies: false,
            allowFullScreenImage: true,
            chatLanguage: "EN",
            chatTitle: "Ruang Ngobrol",
            minimizedChatPosition: "bottom",
            minimizedChatIcon: "icon_1",
            chatTitleTemplate: "#{chatTitle}",
            chatHeaderBackgroundColor: "#e53637",
            chatBodyBackgroundColor: "#FFFFFF",
            chatHeaderTextColor: "#FFFFFF",
            chatBodyTextColor: "#121212",
            chatAdminBodyTextColor: "#121212",
            chatModerBodyTextColor: "#121212",
            chatInputTextColor: "#121212",
            chatInputBackgroundColor: "#FFFFFF",
            chatLinksBackgroundColor: "#FFFFFF",
            chatLinksTextColor: "#2B6DAD",
            chatGreeting: "Chat dengan sopan dan dilarang spoiler! Kumpulan tautan resmi Kuramanime (medsos, donasi, dll): https://linktr.ee/kuramanime",
            chatState: "maximized",
            chatBottom: "2vh",
            chatRight: "2vw",
            chatHeight: "300px",
            chatTopLeftBorderRadius: "0px",
            chatTopRightBorderRadius: "0px",
            chatBottomLeftBorderRadius: "0px",
            chatBottomRightBorderRadius: "0px",
            chatMobileHeightPercent: "100%",
            chatMobileWidthPercent: "100%",
            chatWidth: "350px",
            minimizedChatBottom: "20px",
            minimizedChatBorderRadius: "5px",
            minimizedChatRight: "20px",
            siteDomain: "www.chatbro.com",
            showChatOnChatbro: true,
            allowSSO: true,
            allowedLoginMethods: ["vk", "tg", "google", "fb", "guest"],
            useStandardHistoryWidgetSettings: false,
            userIsAdmin: false,
            userIsModer: false,
            permissions: [],
            messageReceivingChannels: ["ws", "lp"],
            needToLoadSubbatchMessages: true,
            needToUpdateCode: false,
            coloredUserNames: true,
            disableImages: false,
            disablePlanDetailInMenu: true,
            showAd: false,
            insufficientFundsToDisableAd: false,
            allowPayForChat: true,
            chatAlias: "kuramanime",
            chatbroScriptVersion: "76d349b7eafea84736",
            isChildChat: false,
            disableCopyrightBlock: false,
            chatRestrictions: {
                isSlowMode: false,
                slowModeDelayCommon: 3,
                slowModeDelayGuest: 3,
                slowModeDelaySocial: 3,
                slowModeDelaySite: 3,
                slowModeDelayPatron: 3,
                slowModeDelayCustom: 3,
            },
            ulpp: true,
            baseLPPort: 8100,
            bpld: 0,
        }
    );
})(document);
