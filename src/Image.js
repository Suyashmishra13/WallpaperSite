import {format} from"date-fns"

export default function Image(props) {
    return (
        <>
        <article className="shadow-md bg-white rounded-3xl p-5">
            <img src={props.urls.full} alt={props.user.name} loading="lazy" className="h-52 w-full object-cover rounded-3xl md:h-80"></img>
            <article className="flex.items-center.justify-between">
            <div className="pt-5 flex items-center justify-start">
                <img src={props.user.profile_image.large} alt ={props.user.name} loading="lazy" className="w-20 rounded-full shadow"></img>
                <ul className="ml-3">
                    <li className="font-bold text-lg text-slate-800 mb-1">{props.user.name}</li>
                    <li className="text-slate-600 text-sm">{format(new Date(props.created_at),"dd MMMM yyyy")}</li>
                </ul>
            </div>
            <div>
                <ul className="text-slate-600 text-sm text-right">
                    <li><a href={`https://instagram.com/${props.user.instagram}`}>Insta</a></li>
                    <li>{props.likes} likes</li>
                </ul>
            </div>
            </article>
        </article>
        </>
    )
}