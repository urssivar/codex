import { reactive, readonly, toRaw, toRefs } from "vue";
import { Howl, Howler } from "howler";

type Track = {
  i: number;
  src: string;
  seek: number;
  error?: boolean;
  howl?: Howl;
};

const state = reactive({
  key: null as null | string,
  timer: 0 as number | NodeJS.Timer,
  current: undefined as undefined | Track,
  queue: [] as Track[],
});

function play(src: string | string[], key?: string) {
  stop();
  if (!Array.isArray(src)) src = [src];
  state.key = key ?? src[0];
  state.timer = setInterval(seek, 50);

  state.queue = src.map((src, i) => {
    const track: Track = {
      i,
      src,
      seek: 0,
    };
    track.howl = new Howl({
      src: [src],
      format: ["m4a"],
      onplay: () => (state.current = track),
      onend: () => next(i),
      onplayerror: () => next(i),
      onloaderror: () => {
        if (!state.current || toRaw(state.current) === track) next(i);
        else track.error = true;
      },
    });
    return track;
  });
  next(-1);
}

function next(i: number) {
  if (state.current) state.current.seek = 0;
  const track = state.queue[i + 1];
  state.current = track;
  if (!track?.howl) stop();
  else if (track.error) next(i + 1);
  else track.howl.play();
}

function seek() {
  if (!state.current?.howl) return;
  const howl = state.current.howl;
  state.current.seek = <number>howl.seek() / howl.duration();
}

function stop() {
  Howler.unload();
  state.key = null;
  clearInterval(state.timer);
  state.current = undefined;
  state.queue.length = 0;
}

function isPlaying(src: string) {
  const c = state.current;
  if (!c) return false;
  return c.src === src && c.seek > 0;
}

export default readonly({ ...toRefs(state), play, stop, isPlaying });
