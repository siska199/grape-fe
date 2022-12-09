
interface TSocialMedia{
    name : string;
    link : string;
    id : string;
}

interface TPersonalInfo{
    fullname : string;
    aboutMe : string;
    phoneNumber : string;
    email :string;
    socialMedias : TSocialMedia[]
    address : string;
}

interface TEducation{
    institution : string;
    major : string;
    logo : string;
    activities : string[]
}

interface TSkill{
    name : string;
    identity : string;
}

interface TCategoryStack{
    name : string;
    identity : string;
}

interface TStack {
    name : string
    type : TCategoryStack
    image: string
}

interface TProject {
    name           :string
    title          :string
    image          :string
    logo           :string
    stacks         :stack[]
    about          :string
    linkRepository :string
    linkApp        :string
}

interface TExperiance {
    posisi          : string
    logo            : string
    startDate       : Date
    endDate         : Date
    currentPosition : boolean
    institution     : string
    activities      : string[]
}

interface TContactReference {
    name        : string
    institution : string
    phoneNumber : string
    email       : string
}

interface TResume {
    id                : string    
    personlInfo       : TPersonalInfo
    educations        : TEducation[]
    skills            : TSkill[]
    projects          : TProject[]
    experiance        : TExperiance[]
    contactReferences : TContactReference[]
}











