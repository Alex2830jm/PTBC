<?php

namespace App\Events;

use App\Models\Alumno;
use App\Models\Semestre;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class StudentSchoolPeriodProcess
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public Alumno $alumno;
    public Semestre $semestre;

    /**
     * Create a new event instance.
     */
    public function __construct(Alumno $alumno, Semestre $semestre)
    {
        $this->alumno = $alumno;
        $this->semestre = $semestre;
    
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
