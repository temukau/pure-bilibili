import {defineStore} from "pinia";
import {Object} from "@/utils/object";
import {UserApi} from "@/api/modules/user-api";

export const useUserStore = defineStore('user-state', {
    state: () => ({
        isLogin: false,
        profile: {
            "mid": 554384020,
            "name": "a14n",
            "sex": "保密",
            "face": "https://i1.hdslb.com/bfs/face/865070fb9fb2a276b2cb91fd971ced6f968a9573.jpg",
            "sign": "",
            "rank": 10000,
            "level": 5,
            "jointime": 0,
            "moral": 70,
            "silence": 0,
            "email_status": 0,
            "tel_status": 1,
            "identification": 0,
            "vip": {
                "type": 1,
                "status": 0,
                "due_date": 1658937600000,
                "vip_pay_type": 0,
                "theme_type": 0,
                "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png"
                },
                "avatar_subscript": 0,
                "nickname_color": "",
                "role": 0,
                "avatar_subscript_url": "",
                "tv_vip_status": 0,
                "tv_vip_pay_type": 0,
                "tv_due_date": 0
            },
            "pendant": {
                "pid": 0,
                "name": "",
                "image": "",
                "expire": 0,
                "image_enhance": "",
                "image_enhance_frame": ""
            },
            "nameplate": {
                "nid": 0,
                "name": "",
                "image": "",
                "image_small": "",
                "level": "",
                "condition": ""
            },
            "official": {
                "role": 0,
                "title": "",
                "desc": "",
                "type": -1
            },
            "birthday": 1063728000,
            "is_tourist": 0,
            "is_fake_account": 0,
            "pin_prompting": 0,
            "is_deleted": 0,
            "in_reg_audit": 0,
            "is_rip_user": false,
            "profession": {
                "id": 0,
                "name": "",
                "show_name": "",
                "is_show": 0,
                "category_one": "",
                "realname": "",
                "title": "",
                "department": "",
                "certificate_no": "",
                "certificate_show": false
            },
            "face_nft": 0,
            "face_nft_new": 0,
            "is_senior_member": 0,
            "honours": {
                "mid": 554384020,
                "colour": {
                    "dark": "#CE8620",
                    "normal": "#F0900B"
                },
                "tags": null
            },
            "digital_id": "",
            "digital_type": -2,
            "attestation": {
                "type": 0,
                "common_info": {
                    "title": "",
                    "prefix": "",
                    "prefix_title": ""
                },
                "splice_info": {
                    "title": ""
                },
                "icon": "",
                "desc": ""
            },
            "expert_info": {
                "title": "",
                "state": 0,
                "type": 0,
                "desc": ""
            }
        },
        "level_exp": {
            "current_level": 5,
            "current_min": 10800,
            "current_exp": 13525,
            "next_exp": 28800,
            "level_up": 1675722873
        },
        "coins": 734,
        "following": 2,
        "follower": 2
    }),

    actions: {
        clear() {
            Object.resetObject(this.profile)
            this.isLogin = false
        },
        fetchProfile() {
            UserApi.getMyInfo().then(res => {
                if (res.code === 0) {
                    this.profile = res.data.profile
                    this.level_exp = res.data.level_exp
                    this.coins = res.data.coins
                    this.following = res.data.following
                    this.follower = res.data.follower
                    this.isLogin = true
                } else {
                    this.clear()
                }
            })
            console.debug(this.profile)
        }
    }
})