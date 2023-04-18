export default function Person(props) {
  return (
    <div class="space-y-4">
      <img
        class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
        src={props.image == undefined ? "default_user.png" : props.image}
        alt=""
      />
      <div class="space-y-2">
        <div class="text-xs font-medium lg:text-sm">
          <h3>{props.name}</h3>
          <p class="text-indigo-600">{props.position}</p>
        </div>
      </div>
    </div>
  );
}
