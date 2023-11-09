export type BiliUserInfo = {
    mid: number
    name: string
    sex: string
    face: string
    face_nft: number
    face_nft_type: number
    sign: string
    rank: number
    level: number
    jointime: number
    moral: number
    silence: number
    coins: number
    fans_badge: boolean
    fans_medal: FansMedal
    official: Official
    vip: Vip
    pendant: Pendant
    nameplate: Nameplate
    user_honour_info: UserHonourInfo
    is_followed: boolean
    top_photo: string
    theme: Theme
    sys_notice: SysNotice
    live_room: LiveRoom
    birthday: string
    school: any
    profession: Profession
    tags: any
    series: Series
    is_senior_member: number
    mcn_info: any
    gaia_res_type: number
    gaia_data: any
    is_risk: boolean
    elec: Elec
    contract: Contract
    certificate_show: boolean
}

interface FansMedal {
    show: boolean
    wear: boolean
    medal: Medal
}

interface Medal {
    uid: number
    target_id: number
    medal_id: number
    level: number
    medal_name: string
    medal_color: number
    intimacy: number
    next_intimacy: number
    day_limit: number
    today_feed: number
    medal_color_start: number
    medal_color_end: number
    medal_color_border: number
    is_lighted: number
    light_status: number
    wearing_status: number
    score: number
}

interface Official {
    role: number
    title: string
    desc: string
    type: number
}

interface Vip {
    type: number
    status: number
    due_date: number
    vip_pay_type: number
    theme_type: number
    label: Label
    avatar_subscript: number
    nickname_color: string
    role: number
    avatar_subscript_url: string
    tv_vip_status: number
    tv_vip_pay_type: number
    tv_due_date: number
}

interface Label {
    path: string
    text: string
    label_theme: string
    text_color: string
    bg_style: number
    bg_color: string
    border_color: string
    use_img_label: boolean
    img_label_uri_hans: string
    img_label_uri_hant: string
    img_label_uri_hans_static: string
    img_label_uri_hant_static: string
}

interface Pendant {
    pid: number
    name: string
    image: string
    expire: number
    image_enhance: string
    image_enhance_frame: string
    n_pid: number
}

interface Nameplate {
    nid: number
    name: string
    image: string
    image_small: string
    level: string
    condition: string
}

interface UserHonourInfo {
    mid: number
    colour: any
    tags: any[]
}

interface Theme {
}

interface SysNotice {
}

interface LiveRoom {
    roomStatus: number
    liveStatus: number
    url: string
    title: string
    cover: string
    roomid: number
    roundStatus: number
    broadcast_type: number
    watched_show: WatchedShow
}

interface WatchedShow {
    switch: boolean
    num: number
    text_small: string
    text_large: string
    icon: string
    icon_location: string
    icon_web: string
}

interface Profession {
    name: string
    department: string
    title: string
    is_show: number
}

interface Series {
    user_upgrade_status: number
    show_upgrade_window: boolean
}

interface Elec {
    show_info: ShowInfo
}

interface ShowInfo {
    show: boolean
    state: number
    title: string
    icon: string
    jump_url: string
}

interface Contract {
    is_display: boolean
    is_follow_display: boolean
}
