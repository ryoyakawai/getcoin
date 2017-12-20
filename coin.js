async function playCoinSound(audioCtx) {
    return new Promise( (resolve, reject) => {
        const duration = 1.0;

        const gain = audioCtx.createGain();
        const osc = audioCtx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = 988;
        osc.connect(gain).connect(audioCtx.destination);

        // 再生開始時刻を取得
        let now = audioCtx.currentTime;

        // 音階制御
        osc.frequency.setTargetAtTime(1319, now + 0.1, 0);

        // 音量制御
        gain.gain.value = 1.0;
        gain.gain.setTargetAtTime(0, now + 0.1, 0.6);

        // 再生、停止
        osc.start(now);
        osc.stop(now + duration);

        setTimeout(() => {
            resolve();
        }, 1000*duration);
    });
}
