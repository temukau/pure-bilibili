// 基本信息
export type BiliMyInfo = {
  mid: string
  name: string
  sex: '保密' | '男' | '女'
  face: string
  sign: string
  rank: number
  level: 1 | 2 | 3 | 4 | 5 | 6
  jointime: number
  moral: number
  silence: number
  email_status: 0 | 1
  tel_status: 0 | 1
  identification: number
  vip: {
    type: number
    status: 0 | 1
    due_date: number
    vip_pay_type: number
    theme_type: number
    label: {
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
    avatar_subscript: number
    nickname_color: string
    role: number
    avatar_subscript_url: string
    tv_vip_status: number
    tv_vip_pay_type: number
    tv_due_date: number
  }
  pendant: {
    pid: number
    name: string
    image: string
    expire: number
    image_enhance: string
    image_enhance_frame: string
  }
  nameplate: {
    nid: number
    name: string
    image: string
    image_small: string
    level: string
    condition: string
  }
  official: {
    role: number
    title: string
    desc: string
    type: number
  }
  birthday: number
  is_tourist: number
  is_fake_account: number
  pin_prompting: number
  is_deleted: number
  in_reg_audit: number
  is_rip_user: boolean
  profession: {
    id: number
    name: string
    show_name: string
    is_show: number
    category_one: string
    realname: string
    title: string
    department: string
    certificate_no: string
    certificate_show: boolean
  }
  face_nft: number
  face_nft_new: number
  is_senior_member: number
  honours: {
    mid: number
    colour: {
      dark: string
      normal: string
    }
    tags: any[] | null
  }
  digital_id: string
  digital_type: number
  attestation: {
    type: number
    common_info: {
      title: string
      prefix: string
      prefix_title: string
    }
    splice_info: {
      title: string
    }
    icon: string
    desc: string
  }
  expert_info: {
    title: string
    state: number
    type: number
    desc: string
  }
}

// 等级经验
export interface BiliLevelExp {
  current_level: number
  current_min: number
  current_exp: number
  next_exp: number
  level_up: number
}
