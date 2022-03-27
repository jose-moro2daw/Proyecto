<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class registro extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $subject = "Registro de usuario";
    public $user;
    public function __construct($user)
    {
        $this -> user =$user;
    }




   


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.message');
    }
}
