import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const Math = window.Math;
    const { sin, cos, sqrt, min, PI } = Math;

    const HEX_CRAD = 32;
    const HEX_BG = '#171717';
    const HEX_HL = '#2a2a2a';
    const HEX_HLW = 2;
    const HEX_GAP = 4;
    const NEON_PALETE = [
      '#cb3301', '#ff0066',
      '#ff6666', '#feff99',
      '#ffff67', '#ccff66',
      '#99fe00', '#fe99ff',
      '#ff99cb', '#fe349a',
      '#cc99fe', '#6599ff',
      '#00ccff', '#ffffff'
    ];
    const T_SWITCH = 64;

    const unit_x = 3 * HEX_CRAD + HEX_GAP * sqrt(3);
    const unit_y = HEX_CRAD * sqrt(3) * 0.5 + 0.5 * HEX_GAP;
    const off_x = 1.5 * HEX_CRAD + HEX_GAP * sqrt(3) * 0.5;

    const wp = NEON_PALETE.map(function (c) {
      const num = parseInt(c.replace('#', ''), 16);
      return {
        'r': num >> 16 & 0xFF,
        'g': num >> 8 & 0xFF,
        'b': num & 0xFF
      };
    });
    const nwp = wp.length;
    let csi = 0;

    const f = 1 / T_SWITCH;

    const c = [canvasRef1.current, canvasRef2.current];
    if (!c[0] || !c[1]) return;

    let w: number, h: number, _min: number;
    const ctx: (CanvasRenderingContext2D | null)[] = [];
    let grid: Grid, source: { x: number; y: number } | null = null;
    let t = 0;
    let request_id: number | null = null;

    class GridItem {
      x: number;
      y: number;
      points: { hex: { x: number; y: number }[]; hl: { x: number; y: number }[] };

      constructor(x: number, y: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.points = { 'hex': [], 'hl': [] };
        this.init();
      }

      init() {
        let x, y, a, ba = PI / 3,
          ri = HEX_CRAD - 0.5 * HEX_HLW;

        for (let i = 0; i < 6; i++) {
          a = i * ba;
          x = this.x + HEX_CRAD * cos(a);
          y = this.y + HEX_CRAD * sin(a);

          this.points.hex.push({
            'x': x,
            'y': y
          });

          if (i > 2) {
            x = this.x + ri * cos(a);
            y = this.y + ri * sin(a);

            this.points.hl.push({
              'x': x,
              'y': y
            });
          }
        }
      }

      draw(ct: CanvasRenderingContext2D) {
        for (let i = 0; i < 6; i++) {
          ct[(i === 0 ? 'moveTo' : 'lineTo')](
            this.points.hex[i].x,
            this.points.hex[i].y
          );
        }
      }

      highlight(ct: CanvasRenderingContext2D) {
        for (let i = 0; i < 3; i++) {
          ct[(i === 0 ? 'moveTo' : 'lineTo')](
            this.points.hl[i].x,
            this.points.hl[i].y
          );
        }
      }
    }

    class Grid {
      cols: number;
      rows: number;
      items: GridItem[];
      n: number;

      constructor(rows: number, cols: number) {
        this.cols = cols || 16;
        this.rows = rows || 16;
        this.items = [];
        this.n = this.items.length;
        this.init();
      }

      init() {
        let x, y;

        for (let row = 0; row < this.rows; row++) {
          y = row * unit_y;

          for (let col = 0; col < this.cols; col++) {
            x = ((row % 2 === 0) ? 0 : off_x) + col * unit_x;
            this.items.push(new GridItem(x, y));
          }
        }
        this.n = this.items.length;
      }

      draw(ct: CanvasRenderingContext2D) {
        ct.fillStyle = HEX_BG;
        ct.beginPath();

        for (let i = 0; i < this.n; i++) {
          this.items[i].draw(ct);
        }

        ct.closePath();
        ct.fill();

        ct.strokeStyle = HEX_HL;
        ct.beginPath();

        for (let i = 0; i < this.n; i++) {
          this.items[i].highlight(ct);
        }

        ct.closePath();
        ct.stroke();
      }
    }

    const init = () => {
      if (!c[0] || !c[1]) return;
      const s = getComputedStyle(c[0]);
      w = ~~s.width.split('px')[0];
      h = ~~s.height.split('px')[0];
      _min = 0.75 * min(w, h);

      const rows = ~~(h / unit_y) + 2;
      const cols = ~~(w / unit_x) + 2;

      for (let i = 0; i < c.length; i++) {
        if (c[i]) {
          c[i]!.width = w;
          c[i]!.height = h;
          ctx[i] = c[i]!.getContext('2d');
        }
      }

      if (ctx[1]) {
        grid = new Grid(rows, cols);
        grid.draw(ctx[1]);
      }


      if (!source) {
        source = { 'x': ~~(w / 2), 'y': ~~(h / 2) };
      }

      if (request_id) {
        cancelAnimationFrame(request_id);
      }
      neon();
    };

    const neon = () => {
      if (!ctx[0] || !source) return;

      const k = (t % T_SWITCH) * f;
      const rgb = {
        'r': ~~(wp[csi].r * (1 - k) +
          wp[(csi + 1) % nwp].r * k),
        'g': ~~(wp[csi].g * (1 - k) +
          wp[(csi + 1) % nwp].g * k),
        'b': ~~(wp[csi].b * (1 - k) +
          wp[(csi + 1) % nwp].b * k)
      };
      const rgb_str = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
      const light = ctx[0].createRadialGradient(
        source.x, source.y, 0,
        source.x, source.y, 0.875 * _min
      );

      const stp = 0.5 - 0.5 * sin(7 * t * f) * cos(5 * t * f) * sin(3 * t * f);

      light.addColorStop(0, rgb_str);
      light.addColorStop(stp, 'rgba(0,0,0,.03)');

      fillBackground('rgba(0,0,0,.02)');
      fillBackground(light);

      t++;

      if (t % T_SWITCH === 0) {
        csi++;
        if (csi === nwp) {
          csi = 0;
          t = 0;
        }
      }

      request_id = requestAnimationFrame(neon);
    };

    const fillBackground = (bg_fill: string | CanvasGradient) => {
      if (!ctx[0]) return;
      ctx[0].fillStyle = bg_fill;
      ctx[0].beginPath();
      ctx[0].rect(0, 0, w, h);
      ctx[0].closePath();
      ctx[0].fill();
    };

    init();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      source = { 'x': e.clientX, 'y': e.clientY };
    };

    window.addEventListener('resize', handleResize, false);
    window.addEventListener('mousemove', handleMouseMove, false);

    return () => {
      window.removeEventListener('resize', handleResize, false);
      window.removeEventListener('mousemove', handleMouseMove, false);
      if (request_id) {
        cancelAnimationFrame(request_id);
      }
    };
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    canvas: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
    },
    body: {
      background: '#121212',
      margin: 0,
      height: '100%',
      width: '100%',
    }
  };

  return (
    <div style={styles.body}>
      <canvas ref={canvasRef1} style={styles.canvas}></canvas>
      <canvas ref={canvasRef2} style={styles.canvas}></canvas>
    </div>
  );
};

export default Background;